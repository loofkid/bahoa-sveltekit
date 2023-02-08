<script lang="ts">
    export let value: string;
    export let values: string[] | {text: string, value: string}[] = [];
    export let label: string;
    export let name: string;
</script>

<div>
    <label class="text-sm" for={name}>{label}</label>
    <select class="bg-zinc-200 dark:bg-zinc-500 form-input placeholder-shown:dark:!border-zinc-300 placeholder-shown:!border-zinc-900 focus:ring-0 text-zinc-800 focus:!border-orange-500
        dark:placeholder:text-zinc-200 dark:border-zinc-300 rounded-sm h-11 focus:dark:text-white focus:text-black w-full
        dark:text-zinc-300 focus:dark:!border-zinc-50 focus:outline-none invalid:border-red-600 invalid:dark:border-red-800"
        bind:value {...$$props} on:select>
        {#each values as v}
            <option value={typeof v === 'string' ? v : v.value}>{typeof v === 'string' ? v : v.text}</option>
        {:else}
            <slot />
        {/each}
    </select>
</div>