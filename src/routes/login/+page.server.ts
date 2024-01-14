import type { PageServerLoad, Actions } from './$types';

export const actions = {
    default: async (event) => {
        const data = await event.request.formData();

        const email = <string>data.get('email');
        const password = <string>data.get('password');


    }
} satisfies Actions;

