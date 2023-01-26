<script lang="ts">
    import { signupStore } from "$lib/signupStore";
    import { createEventDispatcher } from "svelte";

    const dispatch = createEventDispatcher();

    $$restProps;

    export let pageMotion: (node: any) => void;

    let nameInput: HTMLInputElement;
    let lastNameInput: HTMLInputElement;
    let address1Input: HTMLInputElement;
    let address2Input: HTMLInputElement;
    let cityInput: HTMLInputElement;
    let stateInput: HTMLSelectElement;
    let zipInput: HTMLInputElement;


    $: {
        if ($signupStore.zip.length > 5)
        {
            $signupStore.zip = `${$signupStore.zip.slice(0, 5)}-${$signupStore.zip.slice(6, 10)}`;
        }
        if ($signupStore.zip.match(/\D.*[^-]/))
        {
            $signupStore.zip = $signupStore.zip.replace(/[^\d-]/g, '');
        }
    }


    const onSubmit = () => {
        nameInput.setCustomValidity('');
        lastNameInput.setCustomValidity('');
        address1Input.setCustomValidity('');
        address2Input.setCustomValidity('');
        cityInput.setCustomValidity('');
        stateInput.setCustomValidity('');
        zipInput.setCustomValidity('');
        if (nameInput.checkValidity() && 
            lastNameInput.checkValidity() && 
            address1Input.checkValidity() && 
            address2Input.checkValidity() && 
            cityInput.checkValidity() && 
            stateInput.checkValidity() && 
            zipInput.checkValidity())
        {
            dispatch("submit");
        }
        else
        {
            if (!nameInput.checkValidity()) nameInput.setCustomValidity('Invalid first name');
            if (!lastNameInput.checkValidity()) lastNameInput.setCustomValidity('Invalid last name');
            if (!address1Input.checkValidity()) address1Input.setCustomValidity('Invalid address');
            if (!address2Input.checkValidity()) address2Input.setCustomValidity('Invalid address');
            if (!cityInput.checkValidity()) cityInput.setCustomValidity('Invalid city');
            if (!stateInput.checkValidity()) stateInput.setCustomValidity('Invalid state');
            if (!zipInput.checkValidity()) zipInput.setCustomValidity('Invalid zip');
            nameInput.reportValidity();
            lastNameInput.reportValidity();
            address1Input.reportValidity();
            address2Input.reportValidity();
            cityInput.reportValidity();
            stateInput.reportValidity();
            zipInput.reportValidity();
        }
    }
</script>


<form use:pageMotion class="grid grid-cols-1 gap-2 lg:gap-4 items-center [grid-column:1] [grid-row:1]" on:submit={onSubmit} enterkeyhint="go">
    <input type="text" class="bg-zinc-200 dark:bg-zinc-500 form-input placeholder-shown:dark:!border-zinc-300 placeholder-shown:!border-zinc-900 focus:ring-0 text-zinc-800 focus:!border-orange-500
        dark:placeholder:text-zinc-200 dark:border-zinc-300 rounded-sm h-11 focus:dark:text-white focus:text-black
        dark:text-zinc-300 focus:dark:!border-zinc-50 focus:outline-none invalid:border-red-600 invalid:dark:border-red-800" placeholder="full name" bind:value={$signupStore.name} required bind:this={nameInput} autocapitalize="words" autocomplete="name" />
    <input type="text" class="bg-zinc-200 dark:bg-zinc-500 form-input placeholder-shown:dark:!border-zinc-300 placeholder-shown:!border-zinc-900 focus:ring-0 text-zinc-800 focus:!border-orange-500
        dark:placeholder:text-zinc-200 dark:border-zinc-300 rounded-sm h-11 focus:dark:text-white focus:text-black
        dark:text-zinc-300 focus:dark:!border-zinc-50 focus:outline-none invalid:border-red-600 invalid:dark:border-red-800" placeholder="address 1" bind:value={$signupStore.address1} required bind:this={address1Input} autocapitalize="words" autocomplete="address-line1" /> 
    <input type="text" class="bg-zinc-200 dark:bg-zinc-500 form-input placeholder-shown:dark:!border-zinc-300 placeholder-shown:!border-zinc-900 focus:ring-0 text-zinc-800 focus:!border-orange-500
        dark:placeholder:text-zinc-200 dark:border-zinc-300 rounded-sm h-11 focus:dark:text-white focus:text-black
        dark:text-zinc-300 focus:dark:!border-zinc-50 focus:outline-none invalid:border-red-600 invalid:dark:border-red-800" placeholder="address 2" bind:value={$signupStore.address2} bind:this={address2Input} autocapitalize="words" autocomplete="address-line2" />
    <input type="text" class="bg-zinc-200 dark:bg-zinc-500 form-input placeholder-shown:dark:!border-zinc-300 placeholder-shown:!border-zinc-900 focus:ring-0 text-zinc-800 focus:!border-orange-500
        dark:placeholder:text-zinc-200 dark:border-zinc-300 rounded-sm h-11 focus:dark:text-white focus:text-black
        dark:text-zinc-300 focus:dark:!border-zinc-50 focus:outline-none invalid:border-red-600 invalid:dark:border-red-800" placeholder="city" bind:value={$signupStore.city} required bind:this={cityInput} autocapitalize="words" autocomplete="address-level2" />
    <select class="bg-zinc-200 dark:bg-zinc-500 form-input placeholder-shown:dark:!border-zinc-300 placeholder-shown:!border-zinc-900 focus:ring-0 text-zinc-800 focus:!border-orange-500
        dark:placeholder:text-zinc-200 dark:border-zinc-300 rounded-sm h-11 focus:dark:text-white focus:text-black
        dark:text-zinc-300 focus:dark:!border-zinc-50 focus:outline-none invalid:border-red-600 invalid:dark:border-red-800" placeholder="state" bind:value={$signupStore.state} required bind:this={stateInput} autocomplete="address-level1">
        <option value="" disabled selected>state</option>
        <option value="AL">Alabama</option>
        <option value="AK">Alaska</option>
        <option value="AZ">Arizona</option>
        <option value="AR">Arkansas</option>
        <option value="CA">California</option>
        <option value="CO">Colorado</option>
        <option value="CT">Connecticut</option>
        <option value="DE">Delaware</option>
        <option value="DC">District Of Columbia</option>
        <option value="FL">Florida</option>
        <option value="GA">Georgia</option>
        <option value="HI">Hawaii</option>
        <option value="ID">Idaho</option>
        <option value="IL">Illinois</option>
        <option value="IN">Indiana</option>
        <option value="IA">Iowa</option>
        <option value="KS">Kansas</option>
        <option value="KY">Kentucky</option>
        <option value="LA">Louisiana</option>
        <option value="ME">Maine</option>
        <option value="MD">Maryland</option>
        <option value="MA">Massachusetts</option>
        <option value="MI">Michigan</option>
        <option value="MN">Minnesota</option>
        <option value="MS">Mississippi</option>
        <option value="MO">Missouri</option>
        <option value="MT">Montana</option>
        <option value="NE">Nebraska</option>
        <option value="NV">Nevada</option>
        <option value="NH">New Hampshire</option>
        <option value="NJ">New Jersey</option>
        <option value="NM">New Mexico</option>
        <option value="NY">New York</option>
        <option value="NC">North Carolina</option>
        <option value="ND">North Dakota</option>
        <option value="OH">Ohio</option>
        <option value="OK">Oklahoma</option>
        <option value="OR">Oregon</option>
        <option value="PA">Pennsylvania</option>
        <option value="RI">Rhode Island</option>
        <option value="SC">South Carolina</option>
        <option value="SD">South Dakota</option>
        <option value="TN">Tennessee</option>
        <option value="TX">Texas</option>
        <option value="UT">Utah</option>
        <option value="VT">Vermont</option>
        <option value="VA">Virginia</option>
        <option value="WA">Washington</option>
        <option value="WV">West Virginia</option>
        <option value="WI">Wisconsin</option>
        <option value="WY">Wyoming</option>
    </select>
    <input type="text" class="bg-zinc-200 dark:bg-zinc-500 form-input placeholder-shown:dark:!border-zinc-300 placeholder-shown:!border-zinc-900 focus:ring-0 text-zinc-800 focus:!border-orange-500
        dark:placeholder:text-zinc-200 dark:border-zinc-300 rounded-sm h-11 focus:dark:text-white focus:text-black
        dark:text-zinc-300 focus:dark:!border-zinc-50 focus:outline-none invalid:border-red-600 invalid:dark:border-red-800" placeholder="zip code" bind:value={$signupStore.zip} pattern="^\d&#123;5}(?:-\d&#123;4})?$" maxlength="10" required bind:this={zipInput} inputmode="numeric" autocomplete="postal-code" />
    <div class="flex justify-between items-center">
        <button type="button" class="h-11 w-28 rounded-sm bg-orange-500 text-white text-center" on:click={() => dispatch('back')}>Back</button>
        <button type="submit" class="h-11 w-28 rounded-sm bg-orange-500 text-white text-center">Submit</button>
    </div>
</form>