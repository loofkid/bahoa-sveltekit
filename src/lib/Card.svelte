<script lang="ts">
    import Icon from "svelte-awesome";
    import { library, findIconDefinition, type IconName } from "@fortawesome/fontawesome-svg-core";
    import { fas } from "@fortawesome/free-solid-svg-icons";

    library.add(fas);

    export let title: string;
    export let text: string;
    export let icon: IconName;

    export let height = 0;
    export let width = 0;

    const iconDefinition = findIconDefinition({ prefix: "fas", iconName: icon });
</script>


<div class="grid [grid-template-rows:_2fr_1fr_2fr] h-72 w-80 
    justify-center items-center p-4 
    border border-zinc-700 bg-zinc-300 text-zinc-700 dark:text-zinc-300
    dark:border-zinc-600 dark:bg-zinc-500 m-2 rounded-md drop-shadow-md hover:drop-shadow-2xl shadow-zinc-800 dark:shadow-zinc-900">
    <div class="flex justify-center items-center gap-8" >
        <Icon data={iconDefinition} scale={5} class="drop-shadow-lg" />
    </div>
    <div class="text-3xl font-bold flex justify-center items-center m-4">
        {title}
    </div>
    <div class="text-ellipsis text-xl max-h-24 overflow-hidden text-center">
        {text}
    </div>
</div>