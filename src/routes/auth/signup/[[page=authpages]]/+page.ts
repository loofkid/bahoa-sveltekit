import type { PageLoad } from './$types'; 

export const load = (async ({params, parent, fetch}) => {
    const parentData = await parent();
    return { ...parentData,
        page: parseInt(params.page ?? "1") - 1,
    }
}) satisfies PageLoad;