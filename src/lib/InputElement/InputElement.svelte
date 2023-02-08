<script lang="ts">
    /**
     * Don't use select
     */
    export let type: InputType;
    export let label: string;
    export let required = false;
    export let inputmode: InputMode = 'text';
    export let autocomplete: InputAutocomplete = 'off';
    export let autocorrect: InputAutocorrect = 'on';
    export let autocapitalize: InputAutocapitalize = 'off';
    export let name: string;

    export let value: number | string | Date = '';
    export let placeholder = '';
    let inputElement: HTMLInputElement;

    const handleInput = () => {
        if (type === 'number') {
            value = parseInt(inputElement.value);
            return;
        }
        if (type === 'text') {
            value = inputElement.value;
            return;
        }
        if (type === 'date') {
            value = new Date(inputElement.value);
            return;
        }
    };

    $: inputElement && (inputElement.value = value?.toString());
</script>

<div>
    <label class="text-sm" for={name}>{label}</label>
    <input {type} class="bg-zinc-200 dark:bg-zinc-500 form-input placeholder-shown:dark:!border-zinc-300 placeholder-shown:!border-zinc-900 focus:ring-0 text-zinc-800 focus:!border-orange-500
        dark:placeholder:text-zinc-200 dark:border-zinc-300 rounded-sm h-11 focus:dark:text-white focus:text-black w-full
        dark:text-zinc-300 focus:dark:!border-zinc-50 focus:outline-none invalid:border-red-600 invalid:dark:border-red-800" 
        id={name} on:input={handleInput} bind:this={inputElement} 
        {required} {inputmode} {autocomplete} {autocorrect} {autocapitalize} {placeholder} {...$$props} />
</div>