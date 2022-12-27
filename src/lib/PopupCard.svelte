<script lang="ts">
	import { fade, fly, slide } from 'svelte/transition';
	import { convertRemToPixels } from '$lib/convertRemToPixels';
    import { library, findIconDefinition, type IconName } from "@fortawesome/fontawesome-svg-core";
    import { fas } from "@fortawesome/free-solid-svg-icons";
    import {tweened, type Tweened} from 'svelte/motion';
    import {cubicOut, cubicIn} from 'svelte/easing';
    import Card from '$lib/Card.svelte';
	import Icon from 'svelte-awesome';

    library.add(fas);

    export let title: string;
    export let text: string;
    export let icon: IconName;
    export let tailwindBreakpoints: {[key: string]: number} = {
        sm: 640,
        md: 768,
        lg: 1024,
        xl: 1280,
        '2xl': 1536,
    };
    export let tailwindSizing: {[key: number|string]: `${number}rem`} = {
        // px: '1px',
        // 0: '0px',
        0.5: '0.125rem',
        1: '0.25rem',
        1.5: '0.375rem',
        2: '0.5rem',
        2.5: '0.625rem',
        3: '0.75rem',
        3.5: '0.875rem',
        4: '1rem',
        5: '1.25rem',
        6: '1.5rem',
        7: '1.75rem',
        8: '2rem',
        9: '2.25rem',
        10: '2.5rem',
        11: '2.75rem',
        12: '3rem',
        14: '3.5rem',
        16: '4rem',
        20: '5rem',
        24: '6rem',
        28: '7rem',
        32: '8rem',
        36: '9rem',
        40: '10rem',
        44: '11rem',
        48: '12rem',
        52: '13rem',
        56: '14rem',
        60: '15rem',
        64: '16rem',
        72: '18rem',
        80: '20rem',
        96: '24rem',
    };

    const getExpandedSize = () => {
        const width = window.innerWidth;

        if (width >= tailwindBreakpoints['lg']) {
            return {
                size: {
                    width: tailwindBreakpoints['sm'],
                    height: window.innerHeight * 0.9,
                },
                position: {
                    left: (window.innerWidth - tailwindBreakpoints['sm']) / 2,
                    top: (window.innerHeight - window.innerHeight * 0.9) / 2,
                }
            };
         } else {
            return {
                size: {
                    width: width,
                    height: window.innerHeight,
                },
                position: {
                    left: 0,
                    top: 0,
                }
            };
        }
    };

    let open = false;
    let opening = false;
    let closing = false;
    
    let cardHeight: number;
    let cardWidth: number;

    let card: HTMLElement;
    let detailsCard: HTMLElement;

    let coords: Tweened<{left: number, top: number}>;
    let size: Tweened<{width: number, height: number}>;
    let scale: Tweened<number>;

    const iconDefinition = findIconDefinition({ prefix: "fas", iconName: icon });   

    const onClick = async () => {
        coords = tweened({left: card.getBoundingClientRect().left - convertRemToPixels(tailwindSizing[2]), top: card.getBoundingClientRect().top - convertRemToPixels(tailwindSizing[2])}, {duration: 200, easing: cubicOut});
        size = tweened({width: card.getBoundingClientRect().width - convertRemToPixels(tailwindSizing[4]), height: card.getBoundingClientRect().height - convertRemToPixels(tailwindSizing[4])}, {duration: 200, easing: cubicOut});
        scale = tweened(5, {duration: 200, easing: cubicOut});
        open = true;
        opening = true;
        await Promise.allSettled(
            [
                coords.set(getExpandedSize().position),
                size.set(getExpandedSize().size),
                scale.set(8),
            ]
        );
        opening = false;
    }

    const onClose = async () => {
        closing = true;
        await Promise.allSettled(
            [
                coords.set({left: card.getBoundingClientRect().left + convertRemToPixels(tailwindSizing[2]), top: card.getBoundingClientRect().top - convertRemToPixels(tailwindSizing[2])}, {duration: 200, easing: cubicIn}),
                size.set({width: card.getBoundingClientRect().width  - convertRemToPixels(tailwindSizing[4]), height: card.getBoundingClientRect().height - convertRemToPixels(tailwindSizing[4])}, {duration: 200, easing: cubicIn}),
                scale.set(5, {duration: 200, easing: cubicIn}),
            ]
        );
        closing = false;
        open = false;
    }

    const onCloseEsc = async (event: KeyboardEvent) => {
        if (event.key === 'Escape') {
            await onClose();
        }
    }

    const preventScrollIfOpen = (event: Event) => {
        if (open || opening) {
            event.preventDefault();
            event.stopPropagation();
        }
    }
</script>

<svelte:window on:scroll={preventScrollIfOpen}/>

<button class="grid grid-cols-1 grid-rows-1 justify-center items-center" type="button" on:click={onClick}>
    <div class="[grid-column:1/1] [grid-row:1/1] flex justify-center items-center" bind:this={card}>
        <Card title={title} text={text} icon={icon} />
    </div>
</button>
{#if opening || open}
<div class="fixed top-0 left-0 w-full h-full bg-zinc-900 opacity-50 blur-2xl z-[999]" on:keypress={onCloseEsc} on:click={onClose} transition:fade></div>
<div class="fixed z-[1000] grid items-stretch bg-transparent left-[var(--card-left)] top-[var(--card-top)] " 
    style="--card-left:{$coords.left}px;--card-top:{$coords.top}px;--card-height:{$size.height}px;--card-width:{$size.width}px">
    <div class="grid p-4 lg:p-2 overflow-hidden h-[var(--card-height)] w-[var(--card-width)]
    border border-zinc-700 bg-zinc-300 text-zinc-700 dark:text-zinc-300
    dark:border-zinc-600 dark:bg-zinc-500 rounded-md [transition:_grid-template-rows_200ms]
    shadow-md hover:shadow-2xl shadow-zinc-800 dark:shadow-zinc-900" class:m-2={closing || !open} class:[grid-template-rows:_0px_2fr_1fr_2fr]={closing || !open} class:[grid-template-rows:_2rem_2fr_1fr_2fr]={opening || open}>
        <div class="place-self-end [transition:_height_200ms] overflow-hidden" class:h-0={closing || !open} class:h-8={opening || open}>
        {#if opening || open && !closing}
            <button type="button" on:click={onClose} transition:fade={{duration: 200}}><Icon data={findIconDefinition({prefix: 'fas', iconName: 'circle-xmark'})} scale={2}></Icon></button>
        {/if}
        </div>
        <div class="flex justify-center items-center gap-8">
            <Icon data={iconDefinition} scale={$scale} class="drop-shadow-lg" />
        </div>
        <div class="text-3xl font-bold flex justify-center items-center m-4">
            {title}
        </div>
        <div class="text-ellipsis text-xl text-center max-w-[calc(var(--card-width)_-_2rem)] [transition:_margin_50ms]" class:m-8={open && !closing} class:overflow-hidden={closing || !open}>
            {text}
        </div>
    </div>
</div>
{/if}