<script lang="ts">
	import FileDownload from '$lib/FileDownload.svelte';
	import type { PageData } from './$types';
	import { pb } from '$lib/utils';
	import { Collections } from '$lib/types';

	export let data: PageData;

	let files: FileList;
	let button: HTMLButtonElement;

	$: {
		if (button) button.disabled = !files?.length;
	}

	function click() {
		const formData = new FormData();
		formData.append('file', files[0]);
		formData.append('downloads', '0');

		pb.collection(Collections.TemporaryFiles).create(formData);
		location.reload();
	}
</script>

<p>⚠️ All files here will be removed after 7 days. ⚠️</p>

<div class="upload">
	<input class="input" bind:files type="file" />
	<button class="upload" bind:this={button} on:click={click}>Upload</button>
</div>

<div class="downloads" style="grid-template-columns: repeat(5, 1fr);">
	{#each data.files as file}
		<div class="file">
			<FileDownload file={pb.getFileUrl(file, file.file)} />
			<button
				class="delete"
				on:click={() => {
					pb.collection(Collections.TemporaryFiles).delete(file.id);
					location.reload();
				}}>Delete</button
			>
		</div>
	{/each}
</div>

<style>
	p {
		font-size: 20px;
		text-align: center;
		margin: 20px 0;
	}

	.upload {
		display: flex;
		flex-direction: row;
		align-items: center;
		gap: 10px;
	}

	.upload input[type='file'] {
		padding: 10px;
		border: none;
		border: #ffffff 1px solid;
		border-radius: 10px;
	}

	.upload input[type='file']::file-selector-button {
		background: white;
		border: none;
		padding: 10px;
		margin-right: 10px;
		border-radius: 5px;
		color: var(--color-theme-1);
		box-sizing: border-box;
	}

	.upload input[type='file']::file-selector-button:hover {
		border: red 1px solid;
	}

	.upload button {
		margin: 0px;
		padding: 10px;
		border: #4caf50 2px solid;
		color: #4caf50;
		border-radius: 5px;
		cursor: pointer;
		transition: 0.2s;
	}

	.upload button:hover:enabled {
		background-color: #4caf50;
		color: white;
	}

	.upload button:disabled {
		border: #ffffff 1px solid;
		color: white;
		cursor: not-allowed;
	}

	.downloads {
		display: grid;
		grid-template-columns: repeat(5, 1fr);
		grid-gap: 20px;
	}

	.file {
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: 10px;
	}

	.delete {
		margin-top: 10px;
		padding: 5px 10px;
		border: #ff0000 2px solid;
		color: #ff0000;
		border-radius: 5px;
		cursor: pointer;
		transition: 0.2s;
	}

	.delete:hover {
		background-color: #ff0000;
		color: #fff;
	}
</style>
