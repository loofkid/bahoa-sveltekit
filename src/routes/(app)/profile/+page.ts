import type { PageLoad } from "./$types";
import { collection, getDocs, query, where } from "firebase/firestore";
import { userAuthStore } from "$lib/userAuthStore";
import { get } from "svelte/store";

export const load: PageLoad = (async ({ parent, fetch }) => {
    const userAuthData = get(userAuthStore);
    globalThis.fetch = fetch;
    const parentData = await parent();
    const userQuery = query(collection(parentData.firestoreDatabase, "users"), where('userId', '==', userAuthData.uid));
    const results = await getDocs(userQuery);
    const userData: UserData = results.docs[0].data() as UserData;
    return {
        ...parentData,
        userData: userData,
    }
}) satisfies PageLoad;