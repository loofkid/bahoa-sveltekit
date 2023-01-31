<script lang="ts">
	import { userAuthStore } from "$lib/userAuthStore";
	import { AnimateSharedLayout, Motion } from "svelte-motion";
    import type { PageData } from "./$types";
    import { breakpoint } from "$lib/breakpointStore";
	import toPX from "to-px";
	import { Icon } from "svelte-awesome";
	import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
	import { profileStore } from "$lib/profileDataStore";


    export let data: PageData;

    let showSummary = $breakpoint.includes('md');

    let summaryHeight: number;

    $: console.log('user data', data.userData);

    $profileStore.emailAddress = $userAuthStore.email;
    $profileStore.name = $userAuthStore.displayName;
    $profileStore.address1 = data.userData.address1;
    $profileStore.address2 = data.userData.address2;
    $profileStore.city = data.userData.city;
    $profileStore.state = data.userData.state;
    $profileStore.zip = data.userData.zip;
    $profileStore.phoneNumber = $userAuthStore.phoneNumber;

    const fieldNameMap = {
        emailAddress: 'email address',
        name: 'name',
        address1: 'address 1',
        address2: 'address 2',
        city: 'city',
        state: 'state',
        zip: 'zip',
        phoneNumber: 'phone number'
    }
</script>

<svelte:head>
    <title>Profile | Bà Hỏa Smart Smokers</title>
    <meta name="description" content="Profile page" />
</svelte:head>

<Motion let:motion={summary} animate={{ "--summary-translate": `${showSummary ? 0 : -summaryHeight - 10}px` }}>
<div use:summary class="w-full lg:w-[60rem] md:h-[50rem] bg-zinc-200 dark:bg-zinc-500 grid justify-items-center place-self-center md:border-2 md:border-orange-500 my-8 rounded shadow-lg overflow-clip">
    <div class="profile-grid">
        <div class="[grid-area:profile] contents md:grid profile-info-grid bg-zinc-200 dark:bg-zinc-500 drop-shadow-lg h-[35rem]">
            <div class="[grid-area:sidebar] md:h-[35rem] grid sidebar-grid drop-shadow-lg bg-zinc-200 dark:bg-zinc-500 rounded-b-lg md:rounded-b-none md:rounded-br-lg translate-y-[var(--summary-translate)] z-50">
                <div class="[grid-area:image] grid items-stretch justify-center p-8 bg-zinc-300 dark:bg-zinc-500 rounded-b-lg md:rounded-b-none md:rounded-br-lg drop-shadow-lg z-50 translate-y-[calc(-1_*_var(--summary-translate))]">
                    <div class="justify-self-center text-lg font-bold text-zinc-900 dark:text-zinc-200">{$userAuthStore.displayName}</div>
                    <button type="button"  class="h-48 w-48 rounded-full overflow-clip group drop-shadow">
                        <!-- svelte-ignore a11y-img-redundant-alt -->
                        <img src={$userAuthStore.photoURL} class="h-48 w-48 relative" alt="user's chosen representation" />
                        <div class="h-6 w-full text-sm -translate-y-6 md:translate-y-0 md:group-hover:-translate-y-6 text-center transform-gpu transition-all md:group-hover:text-black md:text-opacity-0 md:group-hover:text-opacity-100 bg-zinc-800 bg-opacity-40  md:group-hover:bg-zinc-800 md:bg-opacity-0 md:group-hover:bg-opacity-40">edit</div>
                    </button>
                </div>
                <div class="[grid-area:summary] p-4 text-zinc-900 dark:text-zinc-200 grid z-40 drop-shadow-lg md:drop-shadow-none bg-zinc-200 dark:bg-zinc-500 rounded-b-lg md:rounded-b-none md:rounded-br-lg">
                    <div class="grid [grid-template-rows:_repeat(auto-fill,2.5rem)] gap-4" bind:offsetHeight={summaryHeight}>
                        <div>
                            <div class="text-sm">email address</div>
                            <div class="text-lg font-bold">{$userAuthStore.email}</div>
                        </div>
                        {#if $userAuthStore.phoneNumber}
                        <div>
                            <div class="text-sm">phone number</div>
                            <div class="text-lg font-bold">{$userAuthStore.phoneNumber}</div>
                        </div>
                        {/if}
                        <div>
                            <div class="text-sm">signup date</div>
                            <div class="text-lg font-bold">{data.userData.createdAt.toDate().toLocaleDateString(navigator.languages[0], { month: "short", day: "numeric", year: "numeric"})}</div>
                        </div>
                        <div>
                            <div class="text-sm">last login time</div>
                            <div class="text-lg font-bold">{(new Date(data.firebaseAuth.currentUser.metadata.lastSignInTime)).toLocaleDateString(navigator.languages[0], { month: "short", day: "numeric", year: "numeric"})}</div>
                        </div>
                    </div>
                    <div class="grid justify-items-stretch place-content-center">
                        <button type="button" class="flex justify-center items-center mt-2" on:click={() => showSummary = !showSummary}>
                        <Motion let:motion={arrow} animate={{ rotateX: showSummary ? 180 : 0 }}>
                            <div class="w-6 h-6" use:arrow>
                                <Icon data={faChevronDown} class="text-zinc-900 dark:text-zinc-200" />
                            </div>
                        </Motion>
                        </button>
                    </div>
                </div>
            </div>
            <div class="[grid-area:fields] md:h-[31.5rem] pt-4 w-full grid px-8 text-zinc-900 dark:text-zinc-200 [grid-template-rows:_auto_4.5rem] drop-shadow-lg bg-zinc-200 dark:bg-zinc-500 translate-y-[var(--summary-translate)] md:translate-y-0">
                <form class="w-full grid [grid-template-rows:_repeat(auto-fill,3.5rem)] gap-4 items-stretch overflow-auto pr-2" id="profile-form">
                {#each Object.keys($profileStore) as key}
                    <div>
                        <label class="text-sm" for={key}>{fieldNameMap[key]}</label>
                        <input type="text" class="bg-zinc-200 dark:bg-zinc-500 form-input placeholder-shown:dark:!border-zinc-300 placeholder-shown:!border-zinc-900 focus:ring-0 text-zinc-800 focus:!border-orange-500
                        dark:placeholder:text-zinc-200 dark:border-zinc-300 rounded-sm h-11 focus:dark:text-white focus:text-black w-full
                        dark:text-zinc-300 focus:dark:!border-zinc-50 focus:outline-none invalid:border-red-600 invalid:dark:border-red-800" id={key} bind:value={$profileStore[key]} />
                    </div>
                {/each}
                </form>
                <div class="flex justify-end items-center place-self-stretch py-4 border-t border-t-zinc-400 dark:border-t-zinc-600">
                    <button type="submit" class="mt-2 h-12 px-4 bg-orange-500 text-white drop-shadow-md rounded-md" form="profile-form">Submit</button>
                </div>
            </div>
            <div class="[grid-area:title] px-8 pb-2 pt-4 h-full flex justify-center items-center md:justify-start bg-zinc-200 dark:bg-zinc-500 drop-shadow-sm md:z-20 z-[51]">
                <h1 class="text-2xl font-bold text-zinc-900 dark:text-zinc-200">Profile</h1>
            </div>
        </div>
        <div class="[grid-area:smokers] h-[15rem] translate-y-[var(--summary-translate)] md:translate-y-0">
            <div class="flex justify-center items-center h-full">
                <div class="text-lg text-zinc-900 dark:text-zinc-200">smokers</div>
            </div>
        </div>
    </div>
</div>
</Motion>

<style lang="postcss">
    .profile-grid {
        @apply grid w-full h-full;
        grid-template-areas:
            "title"
            "sidebar"
            "sidebar"
             "fields"
             "fields"
             "smokers";
    }
    .sidebar-grid {
        grid-template-areas:
            "image"
            "summary"
            "summary";
    }
    @media screen(md) {
        .profile-grid {
            grid-template-areas: 
                "profile profile profile profile"
                "profile profile profile profile"
                "profile profile profile profile"
                "smokers smokers smokers smokers";
        }
        .profile-info-grid {
            grid-template-areas:
                "sidebar title title title"
                "sidebar fields fields fields"
                "sidebar fields fields fields";
        }
    }
</style>