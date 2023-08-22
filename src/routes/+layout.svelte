<script lang="ts">
	import OnlineServer from '$lib/OnlineServer.svelte';
	import Header from './Header.svelte';
	import './styles.css';
</script>

<div class="app">
	<Header />

	<main>
		<OnlineServer />
		<slot />
	</main>

	<footer>
		<p>© copyright lololol</p>
	</footer>
</div>
