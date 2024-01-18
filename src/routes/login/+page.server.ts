import type { PageServerLoad, Actions } from './$types';
import { fail, redirect } from '@sveltejs/kit';
import { login } from '$lib/server/services/login';

export const actions = {
    default: async (event) => {
        const data = await event.request.formData();

        const email = <string>data.get('email');
        const password = <string>data.get('password');

        const { error } = await login(email, password);

        console.log(error);

        if (error.message) {
            return fail(400, error);
        }

        throw redirect(307, '/')

    }
} satisfies Actions;

