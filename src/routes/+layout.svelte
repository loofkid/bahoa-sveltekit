<script lang="ts">
    import "../tailwind.css";
    import "../app.css";

    import {page} from '$app/stores';
    
</script>

<div class="grid grid-cols-1 grid-rows-1">
    <main class="grid grid-cols-1 grid-rows-1">
        <slot />
    </main>
</div>