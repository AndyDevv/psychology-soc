import type { PageServerLoad, Actions } from './$types';
import { NHS_UK_API_KEY } from '$env/static/private';

export const load = (async () => {
    // const url = `https://api.nhs.uk/conditions/anxiety`;
    // const response = await fetch(url, {
    //     headers: {
    //         'subscription-key': `9ab4eb607ea04b839244cbc91df477bd`
    //     }
    // });

    // console.log(await response.json());

    return {};
}) satisfies PageServerLoad;

export const actions = {
    default: async (event) => {
        const data = await event.request.formData();
        const search = data.get('search');

        if (!search) {
            return { status: 400, body: { error: 'Search term is required' } };
        }

        const url = `https://api.nhs.uk/conditions/${search}`;
        console.log(url);

        const response = await fetch(url, {
            headers: {
                'subscription-key': NHS_UK_API_KEY
            }
        });

        if (!response.ok) {
            return { status: 400, body: null, error: 'Search term not found' };
        }

        // console.log(response.ok);
        const respData = await response.json();
        console.log(respData);

        return { body: respData, error: null };
    }
} satisfies Actions;
