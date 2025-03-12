<!-- New svelte component that takes in a file url and displays a svg file icon with the file extention as text over top -->
<script lang="ts">
	// import { capitalCase } from "change-case";

	export let file: string; // https://db.craftingcomrades.net/api/files/ip9y62tsxf92g77/9lt2tjloj6b5cy7/curseforge_PYOLtVqQYV.zip
	export let name: string = '';
	let fileName: string =
		name || file.substring(file.lastIndexOf('/') + 1, file.lastIndexOf('.') - 11);
	let extension: string = file.substring(file.lastIndexOf('.') + 1);

	function capitalCase(str: string) {
		let words = str.split('_');
		let capitalizedWords = words.map((word) => {
			return word.charAt(0).toUpperCase() + word.slice(1);
		});
		return capitalizedWords.join(' ');
	}
</script>

<a href={file} download="name.zip" class="file">
	{#if extension == 'png' || extension == 'webp' || extension == 'jpg' || extension == 'jpeg' || extension == 'gif' || extension == 'svg'}
		<img src="/images/FileIcons/Image.svg" class="file-icon" alt="File Download" />
	{:else if extension == 'mp4' || extension == 'webm' || extension == 'mov'}
		<img src="/images/FileIcons/Video.svg" class="file-icon" alt="File Download" />
	{:else if extension == 'mp3' || extension == 'wav' || extension == 'ogg'}
		<img src="/images/FileIcons/Audio.svg" class="file-icon" alt="File Download" />
	{:else if extension == 'zip' || extension == 'rar' || extension == '7z'}
		<img src="/images/FileIcons/Compressed.svg" class="file-icon" alt="File Download" />
	{:else}
		<img src="/images/FileIcons/File.svg" class="file-icon" alt="File Download" />
	{/if}
	<div class="file-extenstion">{extension}</div>
	<div class="file-name">{capitalCase(fileName)}</div>
</a>

<style>
	.file {
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		width: 100%;
		height: 100%;
		padding: 1rem;
		border: 1px solid var(--border-color);
		border-radius: 0.5rem;
		background-color: var(--background-color);
		color: var(--text-color);
		position: relative;
	}
	.file-icon {
		width: 100%;
		max-width: 10rem;
		height: auto;
		filter: drop-shadow(-0.25rem 0.25rem 0.25rem rgba(0, 0, 0, 0.075));
	}
	.file-extenstion {
		position: absolute;
		margin-top: 0.5rem;
		text-transform: uppercase;
		font-size: 1.5rem;
	}
	.file-name {
		font-size: 1rem;
		position: absolute;
		max-width: 100%;
		overflow: hidden;
		text-overflow: ellipsis;
		bottom: 0;
	}
</style>
