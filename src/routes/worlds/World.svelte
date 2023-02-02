<script lang="ts">
	import FileDownload from '$lib/FileDownload.svelte';
	import PreviewImage from '$lib/PreviewImage.svelte';
	import type { WorldsResponse } from '$lib/types';
	import { pb } from '$lib/utils';

	export let world: WorldsResponse;
	export const link: Boolean = false;
	let hidden = true;
	let toggleHidden = () => {
		hidden = !hidden;
	};
</script>

<div class="listitem">
	<button class="header" on:click={toggleHidden}>
		<img src={pb.getFileUrl(world, world.thumbnail)} class="thumbnail" alt={`${world.title} Icon`} />
		<div class="information">
            <div>
                <div class="title">{world.title}</div>
            </div>
			<div class="tags">
                {#if world.minecraftVersion}
                    <div class="tag">{world.minecraftVersion}</div>
                {/if}
                {#if world.modLoader}
                    <div class="tag">{world.modLoader}</div>
                {/if}
                
				{#each (world.tags ?? "").split(",") as tag}
					<div class="tag">{tag}</div>
				{/each}
			</div>
		</div>
	</button>
	{#if !hidden}
		<div class="hidden">
			{#if world.images?.length}
				<div class="section">
					<div class="section-title">Images</div>
					<div class="images">
						{#each world.images ?? [] as image}
							<PreviewImage imageUrl={pb.getFileUrl(world, image)} />
						{/each}
					</div>
				</div>
			{/if}
			{#if world.otherDownloads?.length}
				<div class="section">
					<div class="section-title">Other Downloads</div>
					<div class="other-downloads">
						{#each world.otherDownloads ?? [] as download}
                            <FileDownload file={pb.getFileUrl(world, download)} />
						{/each}
					</div>
				</div>
			{/if}
		</div>
	{/if}
</div>