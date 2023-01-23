<script lang="ts">
	import FileDownload from '$lib/FileDownload.svelte';
	import type { ServersRecord, ServersResponse } from '$lib/types';
	import { getImageUrl } from '$lib/utils';
	import { tick } from 'svelte';
	import { dataset_dev } from 'svelte/internal';

	export let server: ServersResponse;
	export const link: Boolean = false;
	let hidden = true;
	let toggleHidden = () => {
		hidden = !hidden;
	};
</script>

<div class="listitem">
	<button class="header" on:click={toggleHidden}>
		<img src={getImageUrl(server.collectionId, server.id, server.thumbnail)} class="thumbnail" alt={`${server.title} Icon`} />
		<div class="information">
            <div>
                <div class="title">{server.title}</div>
                <div class="description">{server.description}</div>
            </div>
			<div class="tags">
                {#if server.minecraftVersion}
                    <div class="tag">{server.minecraftVersion}</div>
                {/if}
                {#if server.modLoader}
                    <div class="tag">{server.modLoader}</div>
                {/if}
                
				{#each (server.tags ?? "").split(",") as tag}
					<div class="tag">{tag}</div>
				{/each}
			</div>
		</div>
	</button>
	{#if !hidden}
		<div class="hidden">
			{#if server.images?.length}
				<div class="section">
					<div class="section-title">Images</div>
					<div class="images">
						{#each server.images ?? [] as image}
                            <div>
                                <img class="image" alt={`${server.title} Image`} src={getImageUrl(server.collectionId, server.id, image)} />
                            </div>
						{/each}
					</div>
				</div>
			{/if}
			{#if server.otherDownloads?.length}
				<div class="section">
					<div class="section-title">Other Downloads</div>
					<div class="other-downloads">
						{#each server.otherDownloads ?? [] as download}
                            <FileDownload file={getImageUrl(server.collectionId, server.id, download)} />
						{/each}
					</div>
				</div>
			{/if}
		</div>
	{/if}
</div>