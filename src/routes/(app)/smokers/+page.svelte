<script lang="ts">
	import { invalidateAll } from "$app/navigation";
	import type { PageData } from "./$types";


    export let data: PageData

    const signOut = async () => {
        data.firebaseAuth.signOut();
        invalidateAll();
    }
</script>

<div>butt
    <button type="button" on:click={signOut}>Sign Out</button>
</div>