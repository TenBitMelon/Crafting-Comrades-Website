<script lang="ts">
	import OnlineServer from '$lib/OnlineServer.svelte';
	import type { PageData } from './$types';
	import Server from './Server.svelte';

	export let data: PageData;
</script>

<svelte:head>
	<title>Servers | Crafting Comrades</title>
</svelte:head>

<div class="servers-list">
	Currently online:
	<OnlineServer />
	Past servers:
	{#each data.servers as server}
		<Server {server} />
	{/each}
	{#if data.servers.length === 0}
		<p>Nothing is here yet...</p>
	{/if}
</div>

<style>
	.servers-list {
		display: flex;
		align-items: center;
		flex-direction: column;
		max-width: 50rem;
        width: 100%;
	}
</style>
