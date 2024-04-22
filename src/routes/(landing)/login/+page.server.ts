import type { PageServerLoad, Actions } from './$types';
import { fail, redirect } from '@sveltejs/kit';
import { login } from '$lib/server/services/login';

export const actions = {
    default: async (event) => {
        const data = await event.request.formData();

        const email = <string>data.get('email');
        const password = <string>data.get('password');

        const { error, accessToken, refreshToken } = await login(email, password);

        if (error) {
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

