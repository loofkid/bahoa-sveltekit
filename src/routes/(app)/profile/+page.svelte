<script lang="ts">
	import { userAuthStore } from "$lib/userAuthStore";
	import { Motion } from "svelte-motion";
    import type { PageData } from "./$types";
    import { breakpoint } from "$lib/breakpointStore";
	import { Icon } from "svelte-awesome";
	import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
	import { profileStore } from "$lib/profileDataStore";
    import { InputElement, HTMLInputElementProps } from "$lib/InputElement";
	import SelectElement from "$lib/InputElement/SelectElement.svelte";


    export let data: PageData;

    let showSummary = $breakpoint.includes('md');

    let summaryHeight: number;

    $: console.log('user data', data.userData);

    $profileStore.emailAddress = $userAuthStore.email ?? '';
    $profileStore.name = $userAuthStore.displayName ?? '';
    $profileStore.address1 = data.userData.address1 ?? '';
    $profileStore.address2 = data.userData.address2 ?? '';
    $profileStore.city = data.userData.city ?? '';
    $profileStore.state = data.userData.state ?? '';
    $profileStore.zip = data.userData.zip ?? '';
    $profileStore.phoneNumber = $userAuthStore.phoneNumber ?? '';

    const fieldMap: HTMLInputElementProps[] = [
        {
            name: 'emailAddress',
            label: 'email address',
            type: 'email',
            required: true,
            inputmode: 'email',
            autocomplete: 'email',
            autocorrect: 'off',
            autocapitalize: 'off',
        },
        {
            name: 'name',
            label: 'name',
            type: 'text',
            required: true,
            inputmode: 'text',
            autocomplete: 'name',
            autocorrect: 'off',
            autocapitalize: 'words',
        },
        {
            name: 'address1',
            label: 'address 1',
            type: 'text',
            required: true,
            inputmode: 'text',
            autocomplete: 'address-line1',
            autocorrect: 'off',
            autocapitalize: 'words',
        },
        {
            name: 'address2',
            label: 'address 2',
            type: 'text',
            required: false,
            inputmode: 'text',
            autocomplete: 'address-line2',
            autocorrect: 'off',
            autocapitalize: 'words',
        },
        {
            name: 'city',
            label: 'city',
            type: 'text',
            required: true,
            inputmode: 'text',
            autocomplete: 'address-level2',
            autocorrect: 'off',
            autocapitalize: 'words',
        },
        {
            name: 'state',
            label: 'state',
            type: 'select',
            required: true,
            autocomplete: 'address-level1',
            values: [
                { text: 'Alabama', value: 'AL' },
                { text: 'Alaska', value: 'AK' },
                { text: 'Arizona', value: 'AZ' },
                { text: 'Arkansas', value: 'AR' },
                { text: 'California', value: 'CA' },
                { text: 'Colorado', value: 'CO' },
                { text: 'Connecticut', value: 'CT' },
                { text: 'Delaware', value: 'DE' },
                { text: 'District Of Columbia', value: 'DC' },
                { text: 'Florida', value: 'FL' },
                { text: 'Georgia', value: 'GA' },
                { text: 'Hawaii', value: 'HI' },
                { text: 'Idaho', value: 'ID' },
                { text: 'Illinois', value: 'IL' },
                { text: 'Indiana', value: 'IN' },
                { text: 'Iowa', value: 'IA' },
                { text: 'Kansas', value: 'KS' },
                { text: 'Kentucky', value: 'KY' },
                { text: 'Louisiana', value: 'LA' },
                { text: 'Maine', value: 'ME' },
                { text: 'Maryland', value: 'MD' },
                { text: 'Massachusetts', value: 'MA' },
                { text: 'Michigan', value: 'MI' },
                { text: 'Minnesota', value: 'MN' },
                { text: 'Mississippi', value: 'MS' },
                { text: 'Missouri', value: 'MO' },
                { text: 'Montana', value: 'MT' },
                { text: 'Nebraska', value: 'NE' },
                { text: 'Nevada', value: 'NV' },
                { text: 'New Hampshire', value: 'NH' },
                { text: 'New Jersey', value: 'NJ' },
                { text: 'New Mexico', value: 'NM' },
                { text: 'New York', value: 'NY' },
                { text: 'North Carolina', value: 'NC' },
                { text: 'North Dakota', value: 'ND' },
                { text: 'Ohio', value: 'OH' },
                { text: 'Oklahoma', value: 'OK' },
                { text: 'Oregon', value: 'OR' },
                { text: 'Pennsylvania', value: 'PA' },
                { text: 'Rhode Island', value: 'RI' },
                { text: 'South Carolina', value: 'SC' },
                { text: 'South Dakota', value: 'SD' },
                { text: 'Tennessee', value: 'TN' },
                { text: 'Texas', value: 'TX' },
                { text: 'Utah', value: 'UT' },
                { text: 'Vermont', value: 'VT' },
                { text: 'Virginia', value: 'VA' },
                { text: 'Washington', value: 'WA' },
                { text: 'West Virginia', value: 'WV' },
                { text: 'Wisconsin', value: 'WI' },
                { text: 'Wyoming', value: 'WY' },
            ]
        },
        {
            name: 'zip',
            label: 'zip',
            type: 'text',
            required: true,
            inputmode: 'numeric',
            autocomplete: 'postal-code',
            autocorrect: 'off',
            autocapitalize: 'off',
        },
        {
            name: 'phoneNumber',
            label: 'phone number',
            type: 'tel',
            required: false,
            inputmode: 'tel',
            autocomplete: 'tel',
            autocorrect: 'off',
            autocapitalize: 'off',
        }
    ];
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
            <div class="[grid-area:fields] md:h-[31.5rem] pt-4 w-full grid px-8 text-zinc-900 dark:text-zinc-200 [grid-template-rows:_auto_4.5rem] bg-zinc-200 dark:bg-zinc-500 translate-y-[var(--summary-translate)] md:translate-y-0">
                <form class="w-full grid [grid-template-rows:_repeat(auto-fill,3.5rem)] gap-4 items-stretch overflow-auto pr-2" id="profile-form" on:submit|preventDefault|stopPropagation>
                {#each fieldMap as field}
                    {#if field.type !== 'select'}
                    <InputElement bind:value={$profileStore[field.name]} {...field} />
                    {:else}
                    <SelectElement bind:value={$profileStore[field.name]} {...field} />
                    {/if}
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
            <div class="grid [grid-template-rows:_repeat(auto-fill,2rem)] gap-1">
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