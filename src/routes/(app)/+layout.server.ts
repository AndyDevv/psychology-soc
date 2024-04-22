import type { LayoutServerLoad } from './$types';

export const load = (async (event) => {
    const user = event.locals.user;
    const treatment = JSON.parse((await event.parent()).treatment).treatment;

    return { user, treatment };
}) satisfies LayoutServerLoad;