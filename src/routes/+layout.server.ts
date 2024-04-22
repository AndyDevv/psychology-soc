import type { LayoutServerLoad } from './$types';
import User from '$db/models/user.model';

export const load = (async (event) => {
    const user = event.locals.user
    const treatment = JSON.stringify(await User.findOne({ email: user.email }, { treatment: 1 }))
    return { treatment };
}) satisfies LayoutServerLoad;