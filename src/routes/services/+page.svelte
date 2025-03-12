<script lang="ts">
	import type { PageData } from './$types';
	import Service from './Service.svelte';

	export let data: PageData;
</script>

<svelte:head>
	<title>Services | Crafting Comrades</title>
</svelte:head>

<div class="service-list">
	{#each data.services as service}
		<Service {service} />
	{/each}
	{#if data.services.length === 0}
		<p>Nothing is here yet...</p>
	{/if}
</div>

<style>
	.service-list {
		display: flex;
		align-items: center;
		flex-direction: column;
        width: 100%;
	}
</style>
