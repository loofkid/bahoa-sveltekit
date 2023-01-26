import type { PageLoad } from "./$types";

export const load: PageLoad = (async ({ parent, url }) => {
    const parentData = await parent();
    const redirect = url.searchParams.get("redirect");
    return {
        ...parentData,
        redirect: redirect,
    };
}) satisfies PageLoad;