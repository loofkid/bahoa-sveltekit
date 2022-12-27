<script lang="ts">
	import PublicMenuBar from "$lib/PublicMenuBar.svelte";

    let username: string;
    let password: string;
    let rememberMe: string;

    const onSubmit = () => {
        console.log('submit');
    }
</script>

<svelte:head>
    <title>Log In | Bà Hỏa Smart Smokers</title>
</svelte:head>

<div>
    <PublicMenuBar></PublicMenuBar>
    <div class="w-full h-full grid grid-cols-1 [grid-template-rows:_3rem_auto] justify-items-center">
        <h1 class="text-2xl text-zinc-800 dark:text-zinc-200">Log In</h1>
        <form class="grid grid-cols-1 [grid-template-rows:_1fr_1.2fr_1fr] 
            border-2 border-orange-500 w-full sm:w-[30rem] 
            h-72 rounded-xl sm:p-8 gap-4 items-center" on:submit|preventDefault={onSubmit}>
            <input type="email" class="bg-zinc-200 dark:bg-zinc-500 form-input focus:ring-0
                dark:placeholder:text-zinc-200 dark:border-zinc-300 rounded-sm h-11
                dark:text-zinc-300 focus:dark:border-zinc-50 focus:outline-none" placeholder="email" bind:value={username} />
            <div class="grid items-center">
                <input type="password" class="bg-zinc-200 dark:bg-zinc-500 form-input focus:ring-0
                dark:placeholder:text-zinc-200 dark:border-zinc-300 rounded-sm h-11
                dark:text-zinc-300 focus:dark:border-zinc-50 focus:outline-none" placeholder="password" bind:value={password} />
                <div class="flex justify-end text-sm text-zinc-800 dark:text-zinc-300"><a href="auth/forgot-password">forgot password?</a></div>
            </div>
            <div class="flex justify-end items-center">
                <button type="submit" class="h-11 w-28 rounded-sm bg-orange-500">Submit</button>
            </div>
        </form>
    </div>
</div>