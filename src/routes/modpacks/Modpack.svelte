<script lang="ts">
	import FileDownload from '$lib/FileDownload.svelte';
	import type { ModpacksRecord, ModpacksResponse } from '$lib/types';
	import { pb } from '$lib/utils';
	import { tick } from 'svelte';
	import { dataset_dev } from 'svelte/internal';

	export let modpack: ModpacksResponse;
	export const link: Boolean = false;
	let hidden = true;
	let toggleHidden = () => {
		hidden = !hidden;
	};
</script>

<div class="listitem">
	<button class="header" on:click={toggleHidden}>
		<img src={pb.getFileUrl(modpack, modpack.thumbnail)} class="thumbnail" alt={`${modpack.title} Icon`} />
		<div class="information">
            <div>
                <div class="title">{modpack.title}</div>
                <div class="description">{modpack.description}</div>
            </div>
			<div class="tags">
                {#if modpack.minecraftVersion}
                    <div class="tag">{modpack.minecraftVersion}</div>
                {/if}
                {#if modpack.modLoader}
                    <div class="tag">{modpack.modLoader}</div>
                {/if}
                {#if modpack.modpackVersion}
                    <div class="tag">{modpack.modpackVersion}</div>
                {/if}
                
				{#each (modpack.tags ?? "").split(",") as tag}
					<div class="tag">{tag}</div>
				{/each}
			</div>
		</div>
	</button>
	{#if !hidden}
		<div class="hidden">
			{#if modpack.longDescription}
				<div class="section">
					<div class="section-title">Long Description</div>
					<div class="long-description">{modpack.longDescription}</div>
				</div>
			{/if}
			{#if modpack.images?.length}
				<div class="section">
					<div class="section-title">Images</div>
					<div class="images">
						{#each modpack.images ?? [] as image}
                            <div>
                                <img class="image" alt={`${modpack.title} Image`} src={pb.getFileUrl(modpack, image)} />
                            </div>
						{/each}
					</div>
				</div>
			{/if}
			{#if modpack.otherDownloads?.length}
				<div class="section">
					<div class="section-title">Other Downloads</div>
					<div class="other-downloads">
						{#each modpack.otherDownloads ?? [] as download}
                            <FileDownload file={pb.getFileUrl(modpack, download)} />
						{/each}
					</div>
				</div>
			{/if}
			{#if modpack.downloads?.length}
				<div class="section">
					<div class="section-title">Downloads</div>
					<div class="downloads">
						{#each modpack.downloads ?? [] as download}
                            <FileDownload file={pb.getFileUrl(modpack, download)} />
						{/each}
					</div>
				</div>
			{/if}
		</div>
	{/if}
</div>