<script lang="ts">
	import { goto } from "$app/navigation";
	import { redirect } from "@sveltejs/kit";
	import { onMount } from "svelte";
    import type { LayoutData } from "./$types";

    export let data: LayoutData;

    // export const ssr = false;

    // console.log(data);
    // onMount(() => {
    //     console.log(data);
    //     if (!data.firebaseAuth.currentUser || data.firebaseAuth.currentUser.isAnonymous) {
    //         // debugger;
    //         goto('/auth/login');
    //     }
    // });
</script>

<slot />