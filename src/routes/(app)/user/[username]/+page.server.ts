import type { PageServerLoad, Actions } from './$types';
import User from '$db/models/user.model'

export const load = (async () => {
    return {};
}) satisfies PageServerLoad;

export const actions = {
    default: async (event) => {
        const data = await event.request.formData();
        const pill = data.get('pill');

        if (!pill) {
            return { status: 400, body: { error: 'Pill name is required' } };
        }

        // update user treatment
        const user = event.locals.user;
        await User.updateOne({ email: user.email }, { $push: { treatment: { name: pill } } });

    }
} satisfies Actions;
