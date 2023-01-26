import { redirect } from '@sveltejs/kit';
import type { LayoutLoad, LayoutLoadEvent } from './$types';
import { userAuthStore } from '$lib/userAuthStore';
import type { User } from 'firebase/auth';
import { get } from 'svelte/store';

export const ssr = false;

export const load: LayoutLoad = (async ({data, parent, url}: LayoutLoadEvent) => {
    const user: User = get(userAuthStore);

    const parentData = await parent();
    if (user && !user?.isAnonymous) {
        console.debug("User is logged in", user, user?.isAnonymous);
        return {...parentData}
    } else {
        console.error("User is not logged in", user, user?.isAnonymous);
        throw redirect(302, `/auth/login?redirect=${url.pathname}`);
    }
}) satisfies LayoutLoad;