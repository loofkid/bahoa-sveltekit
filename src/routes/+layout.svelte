<script lang="ts">
    import "../tailwind.css";
    import "../app.css";

    import {page} from '$app/stores';
	import PageTransition from "$lib/PageTransition.svelte";
	import { onMount } from "svelte";
	import { breakpoint } from "$lib/breakpointStore";

    import type { PageData } from "./$types";

    export let data: PageData;

    let pageWidth: number;

    $: {
        const orderedBreakpoints = Object.keys(data.tailwindBreakpoints).sort((a, b) => data.tailwindBreakpoints[a] - data.tailwindBreakpoints[b]).reverse();
        const currentBreakpointIndex = orderedBreakpoints.findIndex(breakpoint => pageWidth <= data.tailwindBreakpoints[breakpoint]);
        $breakpoint = orderedBreakpoints.slice(0, currentBreakpointIndex).length > 0 ? orderedBreakpoints.slice(0, currentBreakpointIndex) : ['sm'];
    }

    $: console.log('breakpoint:', $breakpoint);
    
</script>

<svelte:window bind:innerWidth={pageWidth} />

<div class="grid grid-cols-1 grid-rows-1">
    <main class="grid grid-cols-1 grid-rows-1">
        <slot />
    </main>
</div>