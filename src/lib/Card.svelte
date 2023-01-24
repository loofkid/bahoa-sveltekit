<script lang="ts">
	import { library, findIconDefinition, type IconName } from "@fortawesome/fontawesome-svg-core";
    import { fas, faTimes } from "@fortawesome/free-solid-svg-icons";
	import { Icon } from "svelte-awesome";
	import { AnimatePresence, AnimateSharedLayout } from "svelte-motion";
	import { Motion } from "svelte-motion";
	import toPX from "to-px";

    library.add(fas);

    export let title: string;
    export let iconName: IconName;
    export let text: string;
    export let open = false;
    let setFixed = false;
    let closeButtonElement: HTMLElement;

    const icon = findIconDefinition({ prefix: "fas", iconName: iconName });

    const openClick = (event: MouseEvent) => {
        if(!open && (<HTMLElement>event.target).closest('button') !== closeButtonElement) 
            open = true
    }
</script>

<Motion let:motion={featureMotion} transition={{easings: ['easeIn'], duration: 0.25}} layout>
    <button type="button" use:featureMotion class="bg-zinc-200 dark:bg-zinc-700 text-zinc-700 dark:text-zinc-50 grid justify-items-center place-content-evenly p-4 gap-4 overflow-hidden rounded shadow-md" 
        class:fixed={open} class:z-50={open} class:inset-0={open} class:m-auto={open}
        class:w-72={!open} class:h-72={!open} class:h-screen={open} class:w-screen={open} class:sm:h-[25rem]={open} class:sm:w-[30rem]={open} 
        class:[grid-template-rows:_2.25rem_4rem_3rem]={!open}
        on:click={openClick}>
        <AnimatePresence show={open}>
            <Motion let:motion={closeButton} initial={{opacity: 0}} animate={{opacity: 1}}>
                <button use:closeButton type="button" class="absolute top-5 right-5 flex justify-center items-center shadow-sm" on:click|stopPropagation={() => {if(open) open = false}} bind:this={closeButtonElement}><Icon data={faTimes} scale={2}/></button>
            </Motion>
        </AnimatePresence>
        <h2 class="font-bold text-3xl">{title}</h2>
        <div>
            <Icon data={icon} scale={4}/>
        </div>
        <div class="overflow-hidden">
            <p class="text-ellipsis overflow-hidden" class:h-12={!open} class:w-64={!open}>{text}</p>
        </div>
    </button>
</Motion>
<AnimatePresence show={open}>
    <Motion let:motion={bgMotion} transition={{easings: ['easeIn', 'easeIn']}} initial={{opacity: 0}} animate={{opacity: 0.5}} exit={{opacity: 0}}>
        <div use:bgMotion class="fixed inset-0 bg-zinc-900 z-40" on:click|self={() => {if(open) open = false}} on:keypress></div>
    </Motion>
</AnimatePresence>