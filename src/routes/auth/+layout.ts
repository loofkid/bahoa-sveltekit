import type { User } from "firebase/auth";
import type { LayoutLoad } from "./$types";
import { userAuthStore } from "$lib/userAuthStore";
import { redirect } from "@sveltejs/kit";
import { get } from "svelte/store";

export const ssr = false;

export const load: LayoutLoad = (async ({data, parent}) => {
    const user: User = get(userAuthStore);

    const parentData = await parent();
    if (!user || user?.isAnonymous) {
        return {...parentData}
    } else {
        console.error("User is logged in", user, user?.isAnonymous);
        throw redirect(302, '/smokers');
    }
}) satisfies LayoutLoad;