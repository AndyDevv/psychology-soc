import type { Actions } from './$types';
import { fail, redirect } from '@sveltejs/kit';
import { register } from '$lib/server/services/register';
import { createRefreshToken } from '$lib/server/services/token';

export const actions = {
	default: async (event) => {
		const data = await event.request.formData();

		const username = (<string>data.get('username')).trim();
		const email = (<string>data.get('email'))?.trim();
		const password = <string>data.get('password');
		const passwordConfirm = <string>data.get('passwordConfirm');

		const { error, accessToken, user } = await register(username, email, password, passwordConfirm);

		if (error || !accessToken || !user) {
			return fail(400, error);
		}

		event.cookies.set('refreshToken', createRefreshToken(user.id), {
			path: '/',
			httpOnly: true,
			sameSite: process.env.NODE_ENV === 'production' ? 'strict' : 'lax',
			secure: process.env.NODE_ENV === 'production',
			maxAge: 60 * 60 * 24 * 7, // 7 days
		});

		event.locals.accessToken = accessToken;

		throw redirect(307, '/')
	}
} satisfies Actions;
