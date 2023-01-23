<script lang="ts">
    import { fly, type TransitionConfig } from "svelte/transition";

    export let url: URL;
    export let duration = 250;
    export let transitionOut = (element: Element) => fly(element, {x: 100, duration: duration});
    let transitionIn = (element: Element) => fly(element, {x: 100, duration: duration, delay: duration + 50});
</script>

{#key url}
<div in:transitionIn out:transitionOut>
    <slot />
</div>
{/key}