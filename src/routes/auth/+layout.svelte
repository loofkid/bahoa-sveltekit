<script lang="ts">
	import { cubicOut } from 'svelte/easing';
	import { fly } from 'svelte/transition';
    import Logo from "$lib/Logo.svelte";
    import {Icon} from "svelte-awesome";
    import {faUserPlus, faRightToBracket, faBars} from "@fortawesome/free-solid-svg-icons";
    import toPx from 'to-px';
    import type { LayoutData } from './$types';
    import { Motion } from "svelte-motion";
    import type { ComponentProps } from "svelte";
    import type LoggedInMenuItem from "$lib/LoggedInMenuItem.svelte";
	import LoggedInMenu from '$lib/LoggedInMenu.svelte';

    export let data: LayoutData;

    let windowWidth = toPx('100vw');

    const recalcWindow = () => {
        windowWidth = toPx('100vw');
    }

    data.firebaseAuth.onAuthStateChanged(() => {
        data = {...data};
    });

    let showMenu = false;

    $: borderTopRadius = showMenu ? toPx('2rem') : toPx("2rem");
    $: borderBottomRadius = showMenu ? 0 : toPx("2rem");

    $: cellWidth = Math.max(toPx("14rem"), cellWidth, buttonWidth);
    let buttonWidth: number;

    const menuItems: ComponentProps<LoggedInMenuItem>[] = data.menuItems;

    let menuButton: HTMLButtonElement;

    const closeMenu = (event: MouseEvent) => {
        if ((<HTMLElement>event.target).closest('button') !== menuButton) showMenu = false;
    }
</script>

<svelte:window on:resize={() => recalcWindow()} />
<svelte:body on:click={closeMenu} />

<div class="contents" style="--header-height:{toPx('8rem')}px;">
    <div class="grid [grid-template-rows:_var(--header-height)_auto] overflow-x-hidden">
        <div class="h-[var(--header-height)] bg-slate-400 dark:bg-slate-600 grid px-2 [grid-template-columns:_1fr_1fr] [grid-template-rows:_1fr] justify-between items-center">
            <div class="grid items-center justify-start"><a href="/"><Logo></Logo></a></div>
            <div class="grid items-center justify-end overflow-hidden pr-8 sm:pr-12 rounded-b">
                <Motion let:motion 
                    initial={{ borderTopLeftRadius: toPx("4rem"), borderTopRightRadius: toPx("4rem"), borderBottomLeftRadius: toPx("4rem"), borderBottomRightRadius: toPx("4rem") }}
                    animate={{ borderBottomRightRadius: borderBottomRadius, 
                               borderBottomLeftRadius: borderBottomRadius, 
                               borderTopLeftRadius: borderTopRadius, 
                               borderTopRightRadius: borderTopRadius,
                               width: windowWidth > data.tailwindBreakpoints.sm ? Math.max(cellWidth, buttonWidth) : 'auto'}}>
                {#if data.firebaseAuth.currentUser}
                <div class="absolute top-auto right-8 sm:w-[var(--button-width)] overflow-hidden sm:overflow-visible" bind:clientWidth={buttonWidth} style="--button-width:{buttonWidth};--menu-cell-width:{Math.max(toPx("14rem"),cellWidth,buttonWidth)}">
                    <button use:motion type="button" class="grid justify-center items-center
                        [grid-column:1] [grid-row:1] h-16 w-16 
                        sm:w-auto bg-orange-500 sm:px-8 text-white shadow overflow-hidden" on:click|self={() => showMenu = !showMenu} transition:fly={{x: 200}} bind:this={menuButton}>
                        {#if windowWidth > data.tailwindBreakpoints.sm}
                        <div class="flex justify-center items-center overflow-hidden" on:click={() => showMenu = !showMenu}>
                            Hello {data.firebaseAuth.currentUser.displayName ? data.firebaseAuth.currentUser.displayName : data.firebaseAuth.currentUser.email}!
                        </div>
                        {:else}
                        <div class="rounded-full bg-clip-border flex justify-center items-center w-16 h-16" on:click={() => showMenu = !showMenu}>
                            {#if data.firebaseAuth.currentUser.photoURL}
                            <img class="rounded-full" src={data.firebaseAuth.currentUser.photoURL} alt="Profile Picture" />
                            {:else}
                            <Icon data={faBars} scale={1.5} />
                            {/if}
                        </div>
                        {/if}
                    </button>
                    {#if showMenu}
                    <LoggedInMenu bind:cellWidth={cellWidth} setCellWidth={Math.max(toPx("14rem"),cellWidth,buttonWidth)} menuItems={menuItems} breakpoint={Object.keys(data.tailwindBreakpoints).sort((a, b) => data.tailwindBreakpoints[a] - data.tailwindBreakpoints[b]).find(key => windowWidth < data.tailwindBreakpoints[key])} bind:showMenu={showMenu} />
                    {/if}
                </div>
                {:else}
                <div use:motion class="grid justify-center items-center gap-2 sm:gap-8 grid-flow-col [grid-column:1] [grid-row:1]" transition:fly={{x: 200}}>
                    <a class="h-16 rounded-l-full rounded-r-full bg-orange-500 text-white shadow flex justify-center items-center w-16" href="/auth/signup" title="Sign Up"><Icon scale={1.5} data={faUserPlus} /></a>
                    <a class="h-16 border-2 border-orange-500 dark:border font-extrabold shadow bg-slate-300 dark:bg-transparent rounded-l-full rounded-r-full text-orange-500 flex justify-center items-center w-16" href="/auth/login" title="Log In"><Icon scale={1.5} data={faRightToBracket} /></a>
                </div>
                {/if}
                </Motion>
            </div>
        </div>
        <slot />
    </div>
</div>