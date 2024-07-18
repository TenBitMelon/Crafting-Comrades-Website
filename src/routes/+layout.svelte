<script lang="ts">
	import OnlineServer from '$lib/OnlineServer.svelte';
	import Header from './Header.svelte';
	import './styles.css';
</script>

<div class="background" />
<div class="app">
	<Header />

	<main>
		<OnlineServer />
		<slot />
	</main>

	<footer>
		<p>© Arr! All rights reserved, ye scurvy dogs!</p>
	</footer>
</div>
