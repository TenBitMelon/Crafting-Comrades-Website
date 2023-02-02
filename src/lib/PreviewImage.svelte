<script lang="ts">
    export let imageUrl: string;

    let overlayHidden = true;
</script>

<div class="image-container">
    <!-- Image thumbnail -->
    <img class="image" alt={`${imageUrl} Image`} src={imageUrl} on:click={() => overlayHidden = false} on:keyup/>
    
    <!-- Clickable popup that shows larger image -->
    {#if !overlayHidden}
        <img class="image-overlay" alt={`${imageUrl} Image`} src={imageUrl} on:click={() => overlayHidden = true} on:keyup />
    {/if}
</div>

<style>
    .image-container {
        overflow: hidden;
    }
    .image {
        border-radius: 0.5rem;
        object-fit: cover;
        object-position: center;
        aspect-ratio: 1/1;
        height: 100%;
        width: 100%;
        cursor: pointer;
    }
    .image-overlay {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        width: 100vw;
        height: 100vh;
        background-color: rgba(0, 0, 0, 0.5);
        border-radius: 0.5rem;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        z-index: 1;
        object-fit: contain;
    }
</style>