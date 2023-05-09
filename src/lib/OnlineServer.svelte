<script lang="ts">
	import { onMount } from 'svelte';
	import type { ServerPingResponse } from './ServerPingResponse';

	let serverData: ServerPingResponse;

	async function fetchServerData() {
		fetch('https://api.mcsrvstat.us/2/craftingcomrades.net')
			.then((res) => res.json() as Promise<ServerPingResponse>)
			.then((data) => {
				serverData = data;
			});
	}

	onMount(fetchServerData);
</script>

{#if serverData && serverData.online}
	<div class="listitem">
		<div class="header" style="cursor: default">
			<img
				src={serverData.icon || 'https://via.placeholder.com/150'}
				class="thumbnail"
				alt="server icon"
			/>
			<div class="information">
				<div>
					<div class="description">
						{@html serverData.motd?.html[0]}<br />{@html serverData.motd?.html[1]}
					</div>
					<div class="description">
						{serverData.players?.online} / {serverData.players?.max}
						{#if serverData.players?.list}
							: {serverData.players?.list}
						{/if}
					</div>
				</div>
				<div class="tags">
					<div class="tag">{serverData.online ? 'Online' : 'Offline'}</div>
					{#if serverData.version}
						<div class="tag">{serverData.version}</div>
					{/if}
					{#if serverData.gamemode}
						<div class="tag">{serverData.gamemode}</div>
					{/if}
					{#if serverData.software}
						<div class="tag">{serverData.software}</div>
					{/if}
					<!-- {#if currentServer}
                        {#if currentServer.modLoader}
                            <div class="tag">{currentServer.modLoader}</div>
                        {/if}
                        {#if currentServer.relatedModpacks}
                            <div class="tag">Modpack</div>
                        {/if}
                    {/if} -->
				</div>
			</div>
		</div>
	</div>
{/if}
