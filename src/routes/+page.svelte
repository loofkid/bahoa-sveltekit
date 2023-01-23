<script lang="ts">
	import { faAngleDown, faRightToBracket, faUserPlus, faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';
    import type { PageData } from './$types';
	import Logo from "$lib/Logo.svelte";
	import Icon from 'svelte-awesome';
	import { onMount } from 'svelte';
    import { Motion, useViewportScroll, AnimateSharedLayout } from 'svelte-motion';
    import toPx from "to-px";
    import { fly } from 'svelte/transition';
    
    let windowHeight: number;
    let windowWidth: number;

    windowHeight = toPx('100vh');
    windowWidth = toPx('100vw');

    const recalcWindow = () => {
        windowHeight = toPx('100vh');
        windowWidth = toPx('100vw');
    }

    const scrollBreakpoint = 0.35

    $: headerBreakpoint = scrollBreakpoint * windowHeight;
    $: buttonsBreakpoint = headerBreakpoint + .25 * windowHeight;


    const {scrollYProgress} = useViewportScroll();


    $: scrollYLeft = (1 - ($scrollYProgress ?? 0)) * windowHeight;
    $: console.log(scrollYLeft);

    onMount(() => {
        windowHeight = toPx('100vh');
        windowWidth = toPx('100vw');
    });

    export let data: PageData;

    $: gridTemplateColumns = scrollYLeft > headerBreakpoint ? '1fr' : '1fr 1fr';
    $: gridTemplateRows = scrollYLeft > headerBreakpoint ? '1fr 1fr' : '1fr';

    const tailwindBreakpoints = data.tailwindBreakpoints;

    const tailwindSizing = data.tailwindSizing;

    data.firebaseAuth.onAuthStateChanged(() => {
        data = {...data};
    });
</script>

<svelte:head>
    <title>Home | Bà Hỏa Smart Smokers</title>
</svelte:head>

<svelte:window on:resize={() => recalcWindow()} />
<svelte:body  />

<div class="container" style="--header-height:{scrollYLeft !== undefined ? Math.max(scrollYLeft, toPx('25vh'), 220) : toPx('100vh')}px;">
    <AnimateSharedLayout type="crossfade">
        <Motion let:motion={grid} layout transition={{ duration: 0.1 }}>
            <div use:grid class="inset-0 fixed h-[var(--header-height)] bg-slate-400 dark:bg-slate-600 grid min-h-24 p-8 [grid-template-columns:_var(--grid-template-columns)] [grid-template-rows:_var(--grid-template-rows)]" 
                class:justify-center={scrollYLeft > headerBreakpoint}
                class:items-stretch={scrollYLeft > headerBreakpoint}
                class:justify-between={scrollYLeft <= headerBreakpoint}
                class:items-center={scrollYLeft <= headerBreakpoint}
                style={`--grid-template-columns:${gridTemplateColumns};--grid-template-rows:${gridTemplateRows}`}>
                <Motion let:motion={svg} layout>
                    <div class="grid items-center" 
                        class:justify-center={scrollYLeft > headerBreakpoint} 
                        class:justify-start={scrollYLeft <= headerBreakpoint} use:svg><Logo></Logo></div>
                </Motion>
                <div class="grid grid-cols-1 grid-rows-1">
                    {#if data.firebaseAuth.currentUser}
                    <div class="grid grid-rows-2 justify-center gap-4 [grid-column:1] [grid-row:1]"  transition:fly={{x: 200}}>
                        <a href="/smokers" class="h-16 rounded-full text-white shadow flex justify-between items-center bg-orange-500 px-6 place-self-end"><span>Welcome {data.firebaseAuth.currentUser.displayName ? data.firebaseAuth.currentUser.displayName : data.firebaseAuth.currentUser.email}!</span><Icon data={faChevronRight} scale={2} /></a>
                        <button type="button" class="h-16 border-2 border-orange-500 dark:border font-extrabold shadow bg-slate-300 dark:bg-transparent rounded-l-full rounded-r-full text-orange-500 flex justify-between items-center px-6" on:click={() => data.firebaseAuth.signOut()}><Icon data={faChevronLeft} scale={2} /><span class="ml-2">Sign Out</span></button>
                    </div>
                    {:else}
                    <Motion let:motion={grid2} layout transition={{ duration: 0.1 }}>
                        <div class="grid items-center [grid-column:1] [grid-row:1]" use:grid2 class:justify-center={scrollYLeft > headerBreakpoint} class:justify-end={scrollYLeft <= headerBreakpoint}>
                            <Motion let:motion={grid3} layout transition={{ duration: 0.1 }}>
                                <div class="grid justify-center items-center gap-8" class:grid-flow-row={scrollYLeft > buttonsBreakpoint} class:grid-flow-col={scrollYLeft <= buttonsBreakpoint} use:grid3>
                                    <Motion let:motion={button1} layout transition={{ duration: 0.2 }}>
                                        <a use:button1 class="h-16 rounded-l-full rounded-r-full bg-orange-500 text-white shadow flex justify-center items-center" href="/auth/signup" title="Sign Up" class:w-48={scrollYLeft > headerBreakpoint} class:w-16={scrollYLeft <= headerBreakpoint}>
                                            {#if scrollYLeft > headerBreakpoint && windowWidth > tailwindBreakpoints.lg}
                                                Sign Up!
                                            {:else}
                                                <Icon scale={1.5} data={faUserPlus} />
                                            {/if}
                                        </a>
                                    </Motion>
                                    <Motion let:motion={button2} layout transition={{ duration: 0.2 }}>
                                        <a use:button2 class="h-16 border-2 border-orange-500 dark:border font-extrabold shadow bg-slate-300 dark:bg-transparent rounded-l-full rounded-r-full text-orange-500 flex justify-center items-center" href="/auth/login" title="Log In" class:w-48={scrollYLeft > headerBreakpoint} class:w-16={scrollYLeft <= headerBreakpoint}>
                                            {#if scrollYLeft > headerBreakpoint && windowWidth > tailwindBreakpoints.lg}
                                                Log In
                                            {:else}
                                                <Icon scale={1.5} data={faRightToBracket} />
                                            {/if}
                                        </a>
                                    </Motion>
                                </div>
                            </Motion>
                        </div>
                    </Motion>
                    {/if}
                </div>
            </div>
        </Motion>
    </AnimateSharedLayout>
    <div class="mt-[var(--header-height)] h-[100vh] w-[100vw] bg-slate-300 dark:bg-slate-700">

    </div>
</div>