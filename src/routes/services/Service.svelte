<script lang="ts">
	import FileDownload from '$lib/FileDownload.svelte';
	import PreviewImage from '$lib/PreviewImage.svelte';
	import type { ServicesRecord, ServicesResponse } from '$lib/types';
	import { pb } from '$lib/utils';

	export let service: ServicesRecord;
	export const link: Boolean = false;
	let hidden = true;
	let toggleHidden = () => {
		hidden = !hidden;
	};
</script>

<div class="listitem">
	<button class="header" on:click={toggleHidden}>
		<img src={pb.getFileUrl(service, service.thumbnail)} class="thumbnail" alt={`${service.title} Icon`} />
		<div class="information">
            <div>
                <div class="title">{service.title}</div>
            </div>
			<div class="tags">
				{#if service.tags?.length}
				{#each (service.tags ?? "").split(",") as tag}
					<div class="tag">{tag}</div>
				{/each}
				{/if}
			</div>
		</div>
	</button>
	{#if !hidden}
		<div class="hidden">
			{#if service.longDescription}
				<div class="section">
					<div class="section-title">Long Description</div>
					<div class="long-description">{service.longDescription}</div>
				</div>
			{/if}
			{#if service.images?.length}
				<div class="section">
					<div class="section-title">Images</div>
					<div class="images">
						{#each service.images ?? [] as image}
							<PreviewImage imageUrl={pb.getFileUrl(service, image)} />
						{/each}
					</div>
				</div>
			{/if}
			{#if service.link}
				<div class="link"><a target="_blank" class="linkButton" href={service.link}>
					{#if service.linkButton}
						{service.linkButton}
					{:else}
						Go!
					{/if}
				</a></div>
			{/if}
			{#if service.otherDownloads?.length}
				<div class="section">
					<div class="section-title">Other Downloads</div>
					<div class="other-downloads">
						{#each service.otherDownloads ?? [] as download}
                            <FileDownload file={pb.getFileUrl(service, download)} />
						{/each}
					</div>
				</div>
			{/if}
			{#if service.downloads?.length}
				<div class="section">
					<div class="section-title">Downloads</div>
					<div class="downloadslink">
						{#each service.downloads ?? [] as download}
                            <FileDownload file={pb.getFileUrl(service, download)} />
						{/each}
					</div>
				</div>
			{/if}
		</div>
	{/if}
</div>
