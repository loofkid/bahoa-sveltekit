<script lang="ts">
	import { goto } from "$app/navigation";
	import { redirect } from "@sveltejs/kit";
	import { onMount } from "svelte";
    import type { LayoutData } from "./$types";

    export let data: LayoutData;
</script>

<slot />