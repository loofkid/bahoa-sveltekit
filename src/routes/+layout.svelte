<script lang="ts">
	import { userAuthStore } from '$lib/userAuthStore';
    import "../tailwind.css";
    import "../app.css";

    import {page} from '$app/stores';
	import PageTransition from "$lib/PageTransition.svelte";

    $: console.log($userAuthStore);
    
</script>

<div class="grid grid-cols-1 grid-rows-1">
    <main class="grid grid-cols-1 grid-rows-1">
        <slot />
    </main>
</div>