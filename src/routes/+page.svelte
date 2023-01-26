<script lang="ts">
	import { faAngleDown, faRightToBracket, faUserPlus, faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';
    import type { PageData } from './$types';
	import Logo from "$lib/Logo.svelte";
	import Icon from 'svelte-awesome';
	import { onMount } from 'svelte';
    import { Motion, useViewportScroll, AnimateSharedLayout, useElementScroll } from 'svelte-motion';
    import toPx from "to-px";
    import { fly } from 'svelte/transition';
	import Card from '$lib/Card.svelte';
    
    let windowHeight: number;
    let windowWidth: number;
    let featuresHeight: number;
    let windowScroll: number;

    windowHeight = toPx('100vh');
    windowWidth = toPx('100vw');

    let cardOpen: boolean[] = [];

    const recalcWindow = () => {
        windowHeight = toPx('100vh');
        windowWidth = toPx('100vw');
    }

    const scrollBreakpoint = 0.35

    $: headerBreakpoint = scrollBreakpoint * windowHeight;
    $: buttonsBreakpoint = headerBreakpoint + .25 * windowHeight;


    const {scrollYProgress} = useViewportScroll();

    let previousScrollYLeft: number;
    $: console.log('window scroll Y percent', $scrollYProgress);
    $: scrollYLeft = (1 - ($scrollYProgress ?? 0)) * windowHeight;
    $: console.log('window scroll y left', scrollYLeft);
    $: {
        if ($scrollYProgress > 0.95 && scrollYLeft < previousScrollYLeft) {
            const scrollChange = previousScrollYLeft - scrollYLeft;
            scrollMotionValue.ref.scrollBy(0, scrollChange);
            console.log('scroll change', scrollChange);
        } else if ($scrollYProgress < 0.05 && scrollYLeft > previousScrollYLeft) {
            const scrollChange = previousScrollYLeft - scrollYLeft;
            scrollMotionValue.ref.scrollBy(0, scrollChange);
            console.log('scroll change', scrollChange);
        }
        previousScrollYLeft = scrollYLeft;
    }

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

    let previousFeaturesScrollYLeft: number;
    const scrollMotionValue = useElementScroll(null);
    $: featuresScrollY = scrollMotionValue.scrollYProgress;
    $: console.log('features scroll Y percent', $featuresScrollY);
    $: featuresScrollYLeft = (1 - ($featuresScrollY ?? 0)) * featuresHeight;
    $: console.log('features scroll Y left', featuresScrollYLeft);
    $: {
        if ($featuresScrollY > 0.95 || featuresScrollYLeft < previousFeaturesScrollYLeft ) {
            const scrollChange = previousFeaturesScrollYLeft - featuresScrollYLeft;
            windowScroll += scrollChange;
            console.log('scroll change', scrollChange);
        } else if ($featuresScrollY < 0.05 || featuresScrollYLeft > previousFeaturesScrollYLeft) {
            const scrollChange = previousFeaturesScrollYLeft - featuresScrollYLeft;
            windowScroll -= scrollChange;
            console.log('scroll change', scrollChange);
        }
        previousFeaturesScrollYLeft = featuresScrollYLeft;
    }
</script>

<svelte:head>
    <title>Home | Bà Hỏa Smart Smokers</title>
</svelte:head>

<svelte:window on:resize={() => recalcWindow()} bind:scrollY={windowScroll} />
<svelte:body  />

<div class="contents" style="--header-height:{scrollYLeft !== undefined ? Math.max(scrollYLeft, toPx('8rem')) : toPx('100vh')}px;">
    <AnimateSharedLayout type="crossfade">
        <Motion let:motion={grid} animate={{zIndex: cardOpen.every(v => v === false) ? 10 : 0}} transition={{ delay: cardOpen.every(v => v === false) ? 0.25 : 0, duration: 0, }}>
            <div use:grid class="top-0 left-0 fixed w-screen h-[var(--header-height)] bg-slate-400 dark:bg-slate-600 grid px-8 [grid-template-columns:_var(--grid-template-columns)] [grid-template-rows:_var(--grid-template-rows)]" 
                class:z-10={cardOpen.every(v => v === false)}
                class:justify-center={scrollYLeft > headerBreakpoint}
                class:items-stretch={scrollYLeft > headerBreakpoint}
                class:justify-between={scrollYLeft <= headerBreakpoint}
                class:items-center={scrollYLeft <= headerBreakpoint}
                style={`--grid-template-columns:${gridTemplateColumns};--grid-template-rows:${gridTemplateRows}`}>
                <Motion let:motion={svg} layout transition={{ duration: 0.05, easings: ['easeIn']}}>
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
                    <Motion let:motion={grid2} layout transition={{ duration: 0.05, easings: ['easeIn']}}>
                        <div class="grid items-center [grid-column:1] [grid-row:1]" use:grid2 class:justify-center={scrollYLeft > headerBreakpoint} class:justify-end={scrollYLeft <= headerBreakpoint}>
                            <Motion let:motion={grid3} layout transition={{ duration: 0.1 }}>
                                <div class="grid justify-center items-center gap-8" class:grid-flow-row={scrollYLeft > buttonsBreakpoint} class:grid-flow-col={scrollYLeft <= buttonsBreakpoint || windowWidth <= tailwindBreakpoints.lg} use:grid3>
                                    <Motion let:motion={button1} layout transition={{ duration: 0.05, easings: ['easeIn'] }}>
                                        <a use:button1 class="h-16 rounded-l-full rounded-r-full bg-orange-500 text-white shadow flex justify-center items-center" href="/auth/signup" title="Sign Up" class:w-48={scrollYLeft > headerBreakpoint} class:w-16={scrollYLeft <= headerBreakpoint || windowWidth <= tailwindBreakpoints.lg}>
                                            {#if scrollYLeft > headerBreakpoint && windowWidth > tailwindBreakpoints.lg}
                                                Sign Up!
                                            {:else}
                                                <Icon scale={1.5} data={faUserPlus} />
                                            {/if}
                                        </a>
                                    </Motion>
                                    <Motion let:motion={button2} layout transition={{ duration: 0.05, easings: ['easeIn'] }}>
                                        <a use:button2 class="h-16 border-2 border-orange-500 dark:border font-extrabold shadow bg-slate-300 dark:bg-transparent rounded-l-full rounded-r-full text-orange-500 flex justify-center items-center" href="/auth/login" title="Log In" class:w-48={scrollYLeft > headerBreakpoint} class:w-16={scrollYLeft <= headerBreakpoint || windowWidth <= tailwindBreakpoints.lg}>
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
        <Motion let:motion={layout} layout transition={{ duration: 0.05, easings: ['easeIn'] }}>
            <div class="fixed w-full top-0 left-0 grid [grid-template-rows:_var(--header-height)_calc(100vh_-_10rem)] grid-cols-1 overflow-auto" bind:this={scrollMotionValue.ref} bind:clientHeight={featuresHeight}>
                <div></div>
                <div use:layout class="justify-items-center grid [grid-template-columns:repeat(auto-fit,_minmax(18rem,_1fr))] [grid-template-rows:repeat(auto-fill,_18rem)] gap-3 pt-3 pb-3" >
                    <AnimateSharedLayout type="crossfade">
                    {#each data.features as feature, index}
                        <Card title={feature.title} iconName={feature.icon} text={feature.text} bind:open={cardOpen[index]}></Card>
                    {/each}
                    </AnimateSharedLayout>
                </div>
            </div>
        </Motion>
    </AnimateSharedLayout>
    <div class="h-[200vh]"></div>
</div>