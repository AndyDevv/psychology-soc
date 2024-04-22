import type { PageServerLoad } from './$types';

export const load = (async () => {
    const url = `https://api.openai.com/v1/chat/completions`;
    return {};
}) satisfies PageServerLoad;