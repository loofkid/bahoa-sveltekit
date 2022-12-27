<script lang="ts">
	import { faRightToBracket, faUserPlus } from '@fortawesome/free-solid-svg-icons';
	import Logo from "$lib/Logo.svelte";
	import Icon from "svelte-awesome";
	import { browser } from '$app/environment';

    let windowWidth: number;

    export let tailwindBreakpoints = {
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
</script>

<svelte:window bind:innerWidth={windowWidth} />


<div class="w-full p-4 bg-zinc-500 dark:bg-zinc-700 
    grid mb-8 z-50 grid-cols-2 grid-rows-1 justify-between items-center h-24">
    <a class="flex justify-start transition-all" href="/">
        <Logo height={70}></Logo>
        <h1 class="text-3xl text-zinc-800 dark:text-zinc-300 font-bold font-sans sr-only">Bà Hỏa</h1>
    </a>
    <div class="flex items-center justify-end">
        <a href="/signup" title="sign up">
            <button class="h-16 lg:w-48 bg-orange-500 text-white 
            text-2xl rounded-full shadow-lg w-16 flex justify-center items-center">
                {#if browser && tailwindBreakpoints.lg >= windowWidth}
                <Icon data={faUserPlus} scale={1.8} label="sign up button" />
                {:else}
                Sign Up!
                {/if}
            </button>
        </a>
        <a href="/login" class="text-orange-500 drop-shadow-sm text-2xl m-2 mx-4 lg:m-4 transition-all" title="log in">
            {#if browser && tailwindBreakpoints.lg >= windowWidth}
            <Icon data={faRightToBracket} scale={1.8}></Icon>
            {:else}
            Login
            {/if}
        </a>
    </div>
</div>