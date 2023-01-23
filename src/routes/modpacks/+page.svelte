<script lang="ts">
	import type { PageData } from './$types';
	import Modpack from './Modpack.svelte';

	export let data: PageData;
</script>

<svelte:head>
	<title>Modpacks | Crafting Comrades</title>
</svelte:head>

<div class="modpack-list">
	{#each data.modpacks as modpack}
		<Modpack {modpack} />
	{/each}
	{#if data.modpacks.length === 0}
		<p>Nothing is here yet...</p>
	{/if}
</div>

<style>
	.modpack-list {
		display: flex;
		align-items: center;
		flex-direction: column;
		max-width: 50rem;
        width: 100%;
	}
</style>
