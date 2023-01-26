<script lang="ts">
	import { goto } from '$app/navigation';
    import { faAnglesDown, faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';
	import { FirebaseError } from 'firebase/app';
    import { fetchSignInMethodsForEmail, createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
    import { uploadString, ref, getDownloadURL } from 'firebase/storage';
    import { setDoc, collection, addDoc, doc } from 'firebase/firestore';
    import type { PageData } from './$types';
    import { Motion, MotionConfig, AnimatePresence, type Variants } from 'svelte-motion';
    import { Icon } from 'svelte-awesome';
	import toPX from 'to-px';
	import SignupPage1 from '$lib/signup-pages/SignupPage1.svelte';
	import SignupPage2 from '$lib/signup-pages/SignupPage2.svelte';
    import { signupStore } from '$lib/signupStore';
	import { onMount } from 'svelte';
	import type { SvelteComponent } from 'svelte';
    import { createAvatar } from '@dicebear/core';
    import { loreleiNeutral } from '@dicebear/collection';
    import { createEventDispatcher } from 'svelte';
    

    const dispatch = createEventDispatcher();

    let showPasswordRules = false;
    let usernameInput: HTMLInputElement;
    let passwordInput: HTMLInputElement;

    export let data: PageData;

    let firstLoad = true;

    $: signupPage = data.page;

    const pages: typeof SvelteComponent[] = [
        SignupPage1,
        SignupPage2,
    ]

    onMount(() => {
        if (signupPage === 1 && (!$signupStore.email || !$signupStore.password || $signupStore.email === '' || $signupStore.password === '')) {
            goto('/auth/signup/1');
        }
    });

    const onProceed = async () => {
        usernameInput.setCustomValidity('');
        passwordInput.setCustomValidity('');
        if (usernameInput.checkValidity() && passwordInput.checkValidity())
        {
            const methods = await fetchSignInMethodsForEmail(data.firebaseAuth, $signupStore.email);
            if (methods.length > 0) {
                usernameInput.setCustomValidity('Email already in use');
                usernameInput.reportValidity();
                return;
            }
            page1Direction = false;
            firstLoad = false;
            goto('/auth/signup/2');
        }
        else {
            if (!usernameInput.checkValidity()) usernameInput.setCustomValidity('Invalid email');
            if (!passwordInput.checkValidity()) passwordInput.setCustomValidity('Invalid password');
            usernameInput.reportValidity();
            passwordInput.reportValidity();
        }
    }

    const onBack = () => {
        goto('/auth/signup/1');
        page1Direction = false;
    }

    const onSubmit = async () => {
        try {
            const newUser = await createUserWithEmailAndPassword(data.firebaseAuth, $signupStore.email, $signupStore.password);
            const avatar = createAvatar(loreleiNeutral, {
                seed: $signupStore.name,
            });
            const avatarSvg = await avatar.toDataUri();
            const avatarUrl = await uploadString(ref(data.firebaseStorage, `profilePhotos/${newUser.user.uid}/lorelei-neutral.svg` ), avatarSvg, 'data_url');
            await updateProfile(newUser.user, {displayName: $signupStore.name, photoURL: await getDownloadURL(avatarUrl.ref)});
            delete $signupStore.email;
            delete $signupStore.password;
            const docRef = await addDoc(collection(data.firestoreDatabase, "users"), {
                userId: newUser.user.uid,
                ...$signupStore,
                createdAt: new Date(),
                updatedAt: new Date(),
            });
            $signupStore = null;
            console.log("Document written with ID: ", docRef.id);
            goto('/smokers', {invalidateAll: true,})
        } catch (error) {
            console.error('error on authpages', error);
        }
    }

    let page1Direction = true;
    let page2Direction = true;

    const page1Variants: Variants = {
        enter: (direction: boolean) => {
            return {x: direction ? 1000 : -1000, opacity: 0};
        },
        center: {x: 0, opacity: 1},
        exit: (direction: boolean) => ({x: direction ? -1000 : 1000, opacity: 0})
    }
    const page2Variants: Variants = {
        enter: (direction: boolean) => {
            return {x: direction ? 1000 : -1000, opacity: 0};
        },
        center: {x: 0, opacity: 1},
        exit: (direction: boolean) => ({x: direction ? -1000 : 1000, opacity: 0})
    }

</script>

<svelte:head>
    <title>Sign Up | Bà Hỏa Smart Smokers</title>
</svelte:head>

<div class="grid grid-cols-1 [grid-template-rows:_3rem_auto] items-start lg:justify-items-center my-4 px-2 lg:p-0">
    <h1 class="text-2xl text-zinc-800 dark:text-zinc-200">Sign Up!</h1>
    <div class="grid grid-cols-1 grid-rows-1 relative
        lg:border-2 lg:border-orange-500 w-full lg:w-[30rem] 
        lg:rounded-xl lg:p-8 overflow-clip items-start">
    <AnimatePresence list={[{ key: signupPage, component: pages[signupPage] }]} initial={!firstLoad} let:item >
        <Motion custom={signupPage === 0 ? page1Direction : page2Direction} let:motion variants={signupPage === 0 ? page1Variants : page2Variants} initial="enter" animate="center" exit="exit" transition={{duration: 0.5, easings:['easeIn']}}>
        <svelte:component this={item.component} pageMotion={motion} on:submit={onSubmit} on:proceed={onProceed} on:back={onBack} bind:usernameInput={usernameInput} bind:passwordInput={passwordInput} />
        </Motion>
    </AnimatePresence>
    </div>
</div>