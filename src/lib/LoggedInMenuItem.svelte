<script lang="ts">
	import toPx from 'to-px';
	import { Icon } from 'svelte-awesome';
	import { library, findIconDefinition, type IconName } from "@fortawesome/fontawesome-svg-core";
    import { fas } from "@fortawesome/free-solid-svg-icons";

    library.add(fas);


    export let name: string;
    export let icon: IconName;
    export let link: string = '#';
    export let action: () => void = () => {};

    export let height = "4rem";


    const iconDefinition = findIconDefinition({ prefix: "fas", iconName: icon });   
</script>

<a href={link} on:click={action} class="overflow-x-hidden text-ellipsis w-full h-[var(--menu-cell-height)] grid [grid-template-columns:_4rem_auto] grid-rows-1 bg-zinc-100 dark:bg-zinc-800 px-4 hover:bg-zinc-200 hover:dark:bg-zinc-700 sm:last-of-type:rounded-b-[2rem]" style="--cell-height:{toPx(height)}">
    <div class="flex items-center justify-center">
        <Icon scale={2} data={iconDefinition}></Icon>
    </div>
    <div class="flex items-center justify-start ml-2">
        {name}
    </div>
</a>