import { redirect } from '@sveltejs/kit';
import type { LayoutLoad, LayoutLoadEvent } from './$types';
import { userAuthStore } from '$lib/userAuthStore';
import type { User } from 'firebase/auth';

export const ssr = false;

export const load: LayoutLoad = (async ({data, parent}: LayoutLoadEvent) => {
    let user: User = null;
    userAuthStore.subscribe((userStore) => {
        console.debug(userStore);
        user = userStore;
    });

    const parentData = await parent();
    if (user && !user?.isAnonymous) {
        console.debug("User is logged in", user, user?.isAnonymous);
        return {...parentData}
    } else {
        console.error("User is not logged in", user, user?.isAnonymous);
        throw redirect(302, '/auth/login');
    }
}) satisfies LayoutLoad;