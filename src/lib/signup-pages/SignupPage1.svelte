<script lang="ts">
	import { faAnglesDown, faCheck, faTimes } from "@fortawesome/free-solid-svg-icons";
	import { Icon } from "svelte-awesome";
	import { Motion, AnimatePresence, MotionConfig } from "svelte-motion";
	import toPX from "to-px";
    import { createEventDispatcher } from "svelte";
    import { signupStore } from "$lib/signupStore";

    $$restProps;

    const dispatch = createEventDispatcher();

    export let pageMotion: (node: any) => void;

    export let usernameInput: HTMLInputElement;
    export let passwordInput: HTMLInputElement;

    let showPasswordRules = false;
    
    $: ruleLength = $signupStore.password?.length >= 8;
    $: ruleLowercase = /[a-z]/.test($signupStore.password);
    $: ruleUppercase = /[A-Z]/.test($signupStore.password);
    $: ruleNumber = /[0-9]/.test($signupStore.password);
    $: ruleSpecial = /[^a-zA-Z0-9]/.test($signupStore.password);
</script>

<form use:pageMotion class="grid grid-cols-1 [grid-template-rows:_3.5rem_auto_3.5rem] lg:[grid-template-rows:_1fr_auto_1fr] gap-1 lg:gap-4 items-center [grid-column:1] [grid-row:1]" on:submit|preventDefault|stopPropagation={() => dispatch("proceed")} enterkeyhint="next">
    <input type="email" class="bg-zinc-200 dark:bg-zinc-500 form-input placeholder-shown:dark:!border-zinc-300 placeholder-shown:!border-zinc-900 focus:ring-0 text-zinc-800 focus:!border-orange-500
        dark:placeholder:text-zinc-200 dark:border-zinc-300 rounded-sm h-11 focus:dark:text-white focus:text-black
        dark:text-zinc-300 focus:dark:!border-zinc-50 focus:outline-none invalid:border-red-600 invalid:dark:border-red-800" placeholder="email" on:blur={() => usernameInput.checkValidity()} bind:value={$signupStore.email} bind:this={usernameInput} required inputmode="email" autocorrect="off" autocomplete="email" />
    <div class="grid items-center">
        <input type="password" class="bg-zinc-200 dark:bg-zinc-500 form-input placeholder-shown:dark:!border-zinc-300 placeholder-shown:!border-zinc-900 focus:ring-0 text-zinc-800 focus:!border-orange-500
        dark:placeholder:text-zinc-200 dark:border-zinc-300 rounded-sm h-11 focus:dark:text-white focus:text-black
        dark:text-zinc-300 focus:dark:!border-zinc-50 focus:outline-none invalid:border-red-600 invalid:dark:border-red-800" placeholder="password" on:focus={() => showPasswordRules = true} on:blur={() => passwordInput.checkValidity()} bind:value={$signupStore.password} pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^a-zA-Z0-9]).*$" required autocorrect="off" bind:this={passwordInput} autocomplete="new-password" />
        <Motion let:motion={layout}>
        <div use:layout class="flex justify-between text-sm text-zinc-800 dark:text-zinc-300 ml-1">
            <button on:click={() => showPasswordRules = !showPasswordRules} type="button" class="">
                <div class="flex justify-start items-center w-48">
                    <span class="text-left mr-1">{showPasswordRules ? "hide": "show"} password rules</span>
                    <Motion let:motion animate={{rotate: showPasswordRules ? 180 : 0}} transition={{easings: ['easeIn', 'easeIn']}}>
                    <div use:motion>
                        <Icon data={faAnglesDown} scale={0.75}></Icon>
                    </div>
                    </Motion>
                </div>
                <AnimatePresence show={showPasswordRules}>
                    <Motion let:motion animate={{opacity: showPasswordRules ? 1 : 0, translateY: showPasswordRules ? 0 : -25, height: showPasswordRules ? toPX("5rem") : 0}} initial={{opacity: 0, translateY: -25, height: 0}} transition={{easings: ['easeIn', 'easeIn']}}>
                    <div use:motion class="text-xs text-zinc-800 dark:text-zinc-300 w-36 overflow-x-visible text-left whitespace-nowrap">
                        <ul class="w-48">
                            <MotionConfig transition={{duration: 0.2, easings:['easeIn', 'easeIn']}}>
                            <li class='whitespace-nowrap flex'>
                                    {#if ruleLength}
                                    <Motion let:motion={lengthMotion}  initial={{ opacity: 0, scale: 0, rotate: 0 }} animate={{ opacity: 1, scale: 1, rotate: -360 }} exit={{ opacity: 0, scale: 0, rotate: 360 }}>
                                    <div use:lengthMotion class="text-green-700 dark:text-green-400 w-4 flex justify-center items-center">
                                        <Icon data={faCheck} scale={0.75} />
                                    </div>
                                    </Motion>
                                    {:else}
                                    <Motion let:motion={lengthMotion}  initial={{ opacity: 0, scale: 0, rotate: 0 }} animate={{ opacity: 1, scale: 1, rotate: -360 }} exit={{ opacity: 0, scale: 0, rotate: 360 }}>
                                    <div use:lengthMotion class="text-red-700 dark:text-red-400 w-4 flex justify-center items-center">
                                        <Icon data={faTimes} scale={0.75} />
                                    </div>
                                    </Motion>
                                    {/if}
                                At least 8 characters
                            </li>
                            <li class='whitespace-nowrap flex'>
                                    {#if ruleUppercase}
                                    <Motion let:motion={uppercaseMotion} initial={{ opacity: 0, scale: 0, rotate: 0 }} animate={{ opacity: 1, scale: 1, rotate: -360 }} exit={{ opacity: 0, scale: 0, rotate: 360 }}>
                                    <div use:uppercaseMotion class="text-green-700 dark:text-green-400 w-4 flex justify-center items-center">
                                        <Icon data={faCheck} scale={0.75} />
                                    </div>
                                    </Motion>
                                    {:else}
                                    <Motion let:motion={uppercaseMotion} initial={{ opacity: 0, scale: 0, rotate: 0 }} animate={{ opacity: 1, scale: 1, rotate: -360 }} exit={{ opacity: 0, scale: 0, rotate: 360 }}>
                                    <div use:uppercaseMotion class="text-red-700 dark:text-red-400 w-4 flex justify-center items-center">
                                        <Icon data={faTimes} scale={0.75} />
                                    </div>
                                    </Motion>
                                    {/if}
                                At least 1 uppercase letter
                            </li>
                            <li class='whitespace-nowrap flex'>
                                    {#if ruleLowercase}
                                    <Motion let:motion={lowercaseMotion} initial={{ opacity: 0, scale: 0, rotate: 0 }} animate={{ opacity: 1, scale: 1, rotate: -360 }} exit={{ opacity: 0, scale: 0, rotate: 360 }}>
                                    <div use:lowercaseMotion class="text-green-700 dark:text-green-400 w-4">
                                        <Icon data={faCheck} scale={0.75} />
                                    </div>
                                    </Motion>
                                    {:else}
                                    <Motion let:motion={lowercaseMotion} initial={{ opacity: 0, scale: 0, rotate: 0 }} animate={{ opacity: 1, scale: 1, rotate: -360 }} exit={{ opacity: 0, scale: 0, rotate: 360 }}>
                                    <div use:lowercaseMotion class="text-red-700 dark:text-red-400 w-4 flex justify-center items-center">
                                        <Icon data={faTimes} scale={0.75} />
                                    </div>
                                    </Motion>
                                    {/if}
                                At least 1 lowercase letter
                            </li>
                            <li class='whitespace-nowrap flex'>
                                    {#if ruleNumber}
                                    <Motion let:motion={numberMotion} initial={{ opacity: 0, scale: 0, rotate: 0 }} animate={{ opacity: 1, scale: 1, rotate: -360 }} exit={{ opacity: 0, scale: 0, rotate: 360 }}>
                                    <div use:numberMotion class="text-green-700 dark:text-green-400 w-4 flex justify-center items-center">
                                        <Icon data={faCheck} scale={0.75} />
                                    </div>
                                    </Motion>
                                    {:else}
                                    <Motion let:motion={numberMotion} initial={{ opacity: 0, scale: 0, rotate: 0 }} animate={{ opacity: 1, scale: 1, rotate: -360 }} exit={{ opacity: 0, scale: 0, rotate: 360 }}>
                                    <div use:numberMotion class="text-red-700 dark:text-red-400 w-4 flex justify-center items-center">
                                        <Icon data={faTimes} scale={0.75} />
                                    </div>
                                    </Motion>
                                    {/if}
                                At least 1 number
                            </li>
                            <li class='whitespace-nowrap flex'>
                                    {#if ruleSpecial}
                                    <Motion let:motion={specialMotion} initial={{ opacity: 0, scale: 0, rotate: 0 }} animate={{ opacity: 1, scale: 1, rotate: -360 }} exit={{ opacity: 0, scale: 0, rotate: 360 }}>
                                    <div use:specialMotion class="text-green-700 dark:text-green-400 w-4 flex justify-center items-center">
                                        <Icon data={faCheck} scale={0.75} />
                                    </div>
                                    </Motion>
                                    {:else}
                                    <Motion let:motion={specialMotion} initial={{ opacity: 0, scale: 0, rotate: 0 }} animate={{ opacity: 1, scale: 1, rotate: -360 }} exit={{ opacity: 0, scale: 0, rotate: 360 }}>
                                    <div use:specialMotion class="text-red-700 dark:text-red-400 w-4 flex justify-center items-center">
                                        <Icon data={faTimes} scale={0.75} />
                                    </div>
                                    </Motion>
                                    {/if}
                                At least 1 special character
                            </li>
                            </MotionConfig>
                        </ul>
                    </div>
                    </Motion>
                </AnimatePresence>
            </button>
        </div>
        </Motion>
    </div>
    <div class="flex justify-end items-center">
        <button type="submit" class="h-11 w-28 rounded-sm bg-orange-500 text-white text-center">Next</button>
    </div>
</form>