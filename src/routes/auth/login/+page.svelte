<script lang="ts">
	import toPx from 'to-px';
    import { goto } from '$app/navigation';
	import { signInWithEmailAndPassword, browserLocalPersistence, browserSessionPersistence } from 'firebase/auth';
    import Icon from 'svelte-awesome';
    import { faAnglesDown } from '@fortawesome/free-solid-svg-icons';
    import type { PageData } from './$types';
    import { Motion, AnimatePresence } from 'svelte-motion';
	import { FirebaseError } from 'firebase/app';
	import { SvelteComponent } from 'svelte';
    let username: string;
    let password: string;
    let rememberMe: boolean = false;

    let usernameInput: HTMLInputElement;
    let passwordInput: HTMLInputElement;

    let showPasswordRules = false;

    export let data: PageData;
    let error = false;

    const onSubmit = async () => {
        usernameInput.setCustomValidity('');
        passwordInput.setCustomValidity('');
        try {
            if (usernameInput.checkValidity() && passwordInput.checkValidity())
            {
                await signInWithEmailAndPassword(data.firebaseAuth, username, password);
                if (rememberMe) data.firebaseAuth.setPersistence(browserLocalPersistence);
                else data.firebaseAuth.setPersistence(browserSessionPersistence);
                goto('/smokers')
            }
            else {
                if (!usernameInput.checkValidity()) usernameInput.setCustomValidity('Invalid email');
                if (!passwordInput.checkValidity()) passwordInput.setCustomValidity('Invalid password');
                usernameInput.reportValidity();
                passwordInput.reportValidity();
            }
        }
        catch (e) {
            if (e instanceof FirebaseError) {
                if (e.code === 'auth/invalid-email') usernameInput.setCustomValidity('Invalid email');
                else if (e.code === 'auth/user-not-found') usernameInput.setCustomValidity('User not found');
                else if (e.code === 'auth/wrong-password') passwordInput.setCustomValidity('Wrong password');
            }
            console.log(<FirebaseError>e)
            usernameInput.reportValidity();
            passwordInput.reportValidity();
        }
    }
</script>

<svelte:head>
    <title>Log In | Bà Hỏa Smart Smokers</title>
</svelte:head>

<div class="grid grid-cols-1 [grid-template-rows:_3rem_auto] items-start lg:justify-items-center my-4 px-2 lg:p-0">
    <h1 class="text-2xl text-zinc-800 dark:text-zinc-200">Log In</h1>
    <form class="grid grid-cols-1 [grid-template-rows:_3.5rem_auto_3.5rem] lg:[grid-template-rows:_1fr_auto_1fr] 
        lg:border-2 lg:border-orange-500 w-full lg:w-[30rem] 
        rounded-xl lg:p-8 gap-1 lg:gap-4 items-center" on:submit|preventDefault={onSubmit}>
        <input type="email" class="bg-zinc-200 dark:bg-zinc-500 form-input placeholder-shown:dark:!border-zinc-300 placeholder-shown:!border-zinc-900 focus:ring-0 text-zinc-800 focus:!border-orange-500
            dark:placeholder:text-zinc-200 dark:border-zinc-300 rounded-sm h-11 focus:dark:text-white focus:text-black
            dark:text-zinc-300 focus:dark:!border-zinc-50 focus:outline-none invalid:border-red-600 invalid:dark:border-red-800" placeholder="email" on:blur={() => usernameInput.checkValidity()} on:invalid={(event) => console.log(event)} bind:value={username} bind:this={usernameInput} required inputmode="email" autocorrect="off" />
        <div class="grid items-center">
            <input type="password" class="bg-zinc-200 dark:bg-zinc-500 form-input placeholder-shown:dark:!border-zinc-300 placeholder-shown:!border-zinc-900 focus:ring-0 text-zinc-800 focus:!border-orange-500
            dark:placeholder:text-zinc-200 dark:border-zinc-300 rounded-sm h-11 focus:dark:text-white focus:text-black
            dark:text-zinc-300 focus:dark:!border-zinc-50 focus:outline-none invalid:border-red-600 invalid:dark:border-red-800" placeholder="password" on:blur={() => passwordInput.checkValidity()} on:invalid={(event) => console.log(event)} bind:value={password} pattern='^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^a-zA-Z0-9]).*$' required autocorrect="off" bind:this={passwordInput} />
            <Motion let:motion={layout}>
            <div use:layout class="flex justify-between text-sm text-zinc-800 dark:text-zinc-300 ml-1">
                <button on:click={() => showPasswordRules = !showPasswordRules} type="button" class="">
                    <div class="flex justify-between items-center">
                        <span class="w-36 text-left">{showPasswordRules ? "hide": "show"} password rules</span>
                        <Motion let:motion animate={{rotate: showPasswordRules ? 180 : 0}} initial={{rotate: 0}} transition={{easings: ['easeIn']}}>
                        <div use:motion>
                            <Icon data={faAnglesDown} scale={0.75}></Icon>
                        </div>
                        </Motion>
                    </div>
                    <AnimatePresence show={showPasswordRules} exitBeforeEnter={true}>
                        <Motion let:motion animate={{opacity: showPasswordRules ? 1 : 0, translateY: showPasswordRules ? 0 : -25, height: showPasswordRules ? toPx("5rem") : 0}} initial={{opacity: 0, translateY: -25, height: 0}} exit={{opacity: 0, translateY: -25, height: 0}} transition={{easings: ['easeIn', 'easeIn']}}>
                        <div use:motion class="text-xs text-zinc-800 dark:text-zinc-300 w-36 overflow-x-visible text-left whitespace-nowrap">
                            <ul>
                                <li>At least 8 characters</li>
                                <li>At least 1 uppercase letter</li>
                                <li>At least 1 lowercase letter</li>
                                <li>At least 1 number</li>
                                <li>At least 1 special character</li>
                            </ul>
                        </div>
                        </Motion>
                    </AnimatePresence>
                </button>
                <a href="auth/forgot-password">forgot password?</a>
            </div>
            </Motion>
        </div>
        <div class="flex justify-between items-center">
            <label class="flex items-center">
                <input type="checkbox" class="form-checkbox" bind:checked={rememberMe} />
                <span class="ml-2 text-sm text-zinc-800 dark:text-zinc-300">Remember me</span>
            </label>
            <button type="submit" class="h-11 w-28 rounded-sm bg-orange-500 text-white">Submit</button>
        </div>
    </form>
</div>