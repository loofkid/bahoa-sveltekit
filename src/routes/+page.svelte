<script lang="ts">
	import cssPolyfill from 'css-typed-om';
    import {browser} from "$app/env";
	import { faAngleDown, faRightToBracket, faUserPlus } from '@fortawesome/free-solid-svg-icons';
    import type { PageData } from './$types';
	import Logo from "$lib/Logo.svelte";
	import PopupCard from '$lib/PopupCard.svelte';
	import Icon from 'svelte-awesome';
	import { onMount } from 'svelte';
    import { fade } from 'svelte/transition';

    let windowHeight: number;
    let windowWidth: number;
    let headerHeight: number;
    let featuresHeight: number;
    let maxScrollHeight: number;
    let header: HTMLElement;
    let content: HTMLElement;

    let scrollTracker: HTMLElement;


    let scrollTimeline: ScrollTimeline;

    $: if (browser) maxScrollHeight = Math.max( document.body.scrollHeight, document.body.offsetHeight, 
                   document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight );

    onMount(() => {
    });


    $: console.log(scrollTimeline?.currentTime);
    // const onIntersect = (entries: IntersectionObserverEntry[]) => {
    //     entries.forEach((entry) => {
    //         if (entry.isIntersecting) {
    //             // entry.target.addEventListener('scroll', scrollHandler);
    //         } else {
    //             headerHeight = windowHeight;
    //         }
    //     });
    // }

    const scrollHandler = (event: Event) => {
        // console.log(content.getBoundingClientRect().top);
        // console.log(maxScrollHeight);
        requestAnimationFrame(() => {
            let scroll = content.getBoundingClientRect().top;
            headerHeight = scroll;
        });
    }

    const windowResize = () => {
        windowHeight = window.innerHeight;
        if (window.scrollY === 0) {
            headerHeight = windowHeight;
        }
    }

    export let data: PageData;

    const tailwindBreakpoints = data.tailwindBreakpoints;

    const tailwindSizing = data.tailwindSizing;
</script>

<svelte:head>
    <title>Home | Bà Hỏa Smart Smokers</title>
</svelte:head>

<svelte:window bind:innerHeight={windowHeight} bind:innerWidth={windowWidth} on:resize={windowResize} on:scroll={scrollHandler} />

<div class="fixed inset-y-auto inset-x-0 h-2 bg-slate-700 dark:bg-slate-300 z-[1000] scale-0" bind:this={scrollTracker}></div>
<div >
    <div class="w-full p-4 bg-zinc-500 dark:bg-zinc-700 
        grid mb-8 fixed z-50" 
        class:grid-cols-1={headerHeight > 210}
        class:grid-cols-2={headerHeight <= 210}
        class:[grid-template-rows:_2fr_1fr_2rem]={headerHeight > 210}
        class:grid-rows-1={headerHeight <= 210}
        class:justify-between={headerHeight <= 210}
        class:[height:var(--header-height)]={headerHeight > 210}
        class:h-24={headerHeight <= 210}
        style="--header-height:{headerHeight ?? windowHeight}px" bind:this={header}>
        <!-- tailwind: [grid-template-rows:_2fr_1fr_2rem]-->
        <a class="flex justify-center transition-all" href="/" transition:fade
            class:p-5={headerHeight > 210}>
            <Logo height={headerHeight > 198 ? (headerHeight ?? windowHeight)/3 : 70}></Logo>
            <h1 class="text-3xl text-zinc-800 dark:text-zinc-300 font-bold font-sans sr-only">Bà Hỏa</h1>
        </a>
        <div class="flex items-center transition-all" transition:fade
            class:justify-center={headerHeight > 210}
            class:justify-end={headerHeight <= 210}
            class:flex-col={headerHeight > 265}>
            <a href="/signup" title="sign up" transition:fade><button class="h-16 lg:w-48 bg-orange-500 text-white 
                    text-2xl rounded-full shadow-lg transition-all flex justify-center items-center"
                    class:w-16={headerHeight <= 265}
                    class:w-48={headerHeight > 265}>
                {#if headerHeight <= 265 && browser && tailwindBreakpoints.lg >= windowWidth}
                <Icon data={faUserPlus} scale={1.8} label="sign up button" />
                {:else}
                Sign Up!
                {/if}
            </button></a>
            <a href="/login" class="text-orange-500 drop-shadow-sm text-2xl my-2 mx-8 lg:m-4 transition-all" title="log in" transition:fade>
                {#if headerHeight <= 265 && browser && tailwindBreakpoints.lg >= windowWidth}
                <Icon data={faRightToBracket} scale={1.8} label="log in button" />
                {:else}
                Login
                {/if}
            </a>
        </div>
        {#if (headerHeight > 350 && ((content?.getBoundingClientRect().top === 0 ? undefined : content.getBoundingClientRect().top) ?? maxScrollHeight) >= maxScrollHeight)}
        <button class="grid justify-center items-center 
            text-zinc-800 dark:text-zinc-300 h-8" type="button" transition:fade on:click={() => window.scroll({left: 0, top: content.getBoundingClientRect().top, behavior: 'smooth'})}>
            <Icon data={faAngleDown} scale={2}></Icon>
        </button>
        {/if}
    </div>
    <div class="w-full py-4 grid items-start [margin-top:var(--header-height)] z-0" style="--header-height:{windowHeight}px" on:scroll={scrollHandler} bind:this={content}>
        <div class="grid [grid-template-columns:_repeat(auto-fill,_minmax(20rem,_1fr))] items-start justify-center" bind:clientHeight={featuresHeight}>
        {#each data.features as { title, text, icon }}
            <PopupCard {title} {text} {icon} {tailwindBreakpoints} {tailwindSizing} />
        {/each}
        </div>
    </div>
</div>