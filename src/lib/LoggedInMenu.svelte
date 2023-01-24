<script lang="ts">
    import type { ComponentProps } from "svelte";
    import LoggedInMenuItem from "$lib/LoggedInMenuItem.svelte";
    import toPx from 'to-px';
	import { Icon } from "svelte-awesome";
    import { faClose } from "@fortawesome/free-solid-svg-icons";
    import { Motion } from "svelte-motion";

    export let menuItems: ComponentProps<LoggedInMenuItem>[];
    export let showMenu: boolean;
    export let breakpoint: string;

    let cellHeight = "4rem";
    export let cellWidth = toPx("14rem");
    export let setCellWidth = cellWidth;

    const keypress = (event: KeyboardEvent) => {
        if (event.key === "Escape") {
            showMenu = false;
        }
    }
</script>

<Motion let:motion initial={{ opacity: 0, translateY: -200 }} animate={{opacity: 1, translateY: 0}}>
<div use:motion class="w-[100vw] h-[100vh] sm:w-[var(--menu-cell-width)] sm:h-auto sm:max-h-screen grid fixed left-0 top-0 sm:top-16 sm:absolute" on:keypress={keypress} style="--menu-cell-height:{cellHeight};--menu-cell-width:{setCellWidth}px" bind:clientWidth={cellWidth}>
    <div class="grid [grid-template-rows:_repeat(auto-fill,_var(--menu-cell-height))] bg-zinc-300 dark:bg-zinc-700 text-zinc-800 dark:text-zinc-100 gap-0.5 sm:rounded-b-[2rem]">
        {#if breakpoint == 'sm'}
        <a href={"#"} on:click={() => showMenu = false} class="overflow-x-hidden text-ellipsis w-full h-[var(--menu-cell-height)] flex justify-end items-center bg-zinc-800 px-4" style="--cell-height:{toPx(cellHeight)}">
            <Icon data={faClose} scale={2}></Icon>
        </a>
        {/if}
        {#each menuItems as item}
        <LoggedInMenuItem height={cellHeight} {...item} />
        {/each}
    </div>
</div>
</Motion>