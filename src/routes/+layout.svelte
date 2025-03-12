<script lang="ts">
	import OnlineServer from '$lib/OnlineServer.svelte';
	import Header from './Header.svelte';

	import { getCurrentEvent } from '$lib/events';
	const event = getCurrentEvent();
</script>

<svelte:head>
	<link rel="stylesheet" href="/{event.key}/styles.css" />
</svelte:head>

<div class="background" />
<div class="app">
	<Header />

	<main>
		<OnlineServer />
		<slot />
	</main>

	<footer>
		<p>{event.copyright}</p>
	</footer>
</div>
