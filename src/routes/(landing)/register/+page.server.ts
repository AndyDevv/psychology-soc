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

		const { error, accessToken, refreshToken } = await register(username, email, password, passwordConfirm);

		if (error || !accessToken) {
			return fail(400, error);
		}

		event.cookies.set('refreshToken', refreshToken, {
			path: '/',
			httpOnly: true,
			sameSite: process.env.NODE_ENV === 'production' ? 'strict' : 'lax',
			secure: process.env.NODE_ENV === 'production',
			maxAge: 60 * 60 * 24 * 7, // 7 days
		});

		event.cookies.set('accessToken', accessToken, {
			path: '/',
			httpOnly: true,
			sameSite: process.env.NODE_ENV === 'production' ? 'strict' : 'lax',
			secure: process.env.NODE_ENV === 'production',
			maxAge: 60 * 15, // 15 minutes
		});

		throw redirect(307, '/')
	}
} satisfies Actions;
