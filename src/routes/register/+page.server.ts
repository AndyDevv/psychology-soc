import type { Actions } from './$types';
import { fail, redirect } from '@sveltejs/kit';
import { register, registerSchema } from '$lib/server/services/register';

export const actions = {
	default: async (event) => {
		const data = await event.request.formData();

		const username = (<string>data.get('username')).trim();
		const email = (<string>data.get('email'))?.trim();
		const password = <string>data.get('password');
		const passwordConfirm = <string>data.get('passwordConfirm');

		const { error } = await register(username, email, password, passwordConfirm);
		console.log(`Errors:`, error);

		if (error) {
			return fail(400, error);
		}

		throw redirect(307, '/')
	}
} satisfies Actions;
