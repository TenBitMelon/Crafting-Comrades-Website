<script lang="ts">
	import { onMount } from 'svelte';
	import { text } from 'svelte/internal';

	let about = '';
	let textarea: HTMLTextAreaElement | null = null;

	onMount(() => {
		about = localStorage.getItem('about') || '';
	});
</script>

<p>
	Hello, We are Crafting Comrades! A group of friends playing Minecraft together. This website is
	both the server and the community hub for our group where we can share our creations and
	adventures. All of our Minecraft Modpacks and Worlds are available for download here, along with
	all of our Terraria worlds.
</p>
<textarea
	bind:this={textarea}
	bind:value={about}
	on:input={(event) => {
		localStorage.setItem('about', about);
		event.currentTarget.style.height = 'auto';
		event.currentTarget.style.height = event.currentTarget.scrollHeight + 'px';
	}}
	name="about"
	id="about"
	placeholder="Add your own about section :D"
	aria-roledescription="He He, this data will be collected in the future >:) and eventually turn into a better about page!!! And everyone will be none the wiser!"
/>

<style>
	textarea {
		width: 100%;
		height: 100%;
		border: none;
		background: none;
		font-weight: 400;
		line-height: 1.5;
		font-size: 1rem;
	}
</style>
