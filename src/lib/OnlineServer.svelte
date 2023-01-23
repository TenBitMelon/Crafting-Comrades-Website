<script lang="ts">
    import { onMount } from 'svelte';
	import type { ServerPingResponse } from './ServerPingResponse';
    import type { ServersResponse } from '$lib/types';
    import PocketBase from 'pocketbase';

    let serverData: ServerPingResponse;
    let currentServer: ServersResponse;

    async function fetchServerData() {
        const pb = new PocketBase('http://127.0.0.1:8090');

        pb.collection('servers').getFirstListItem('serverCurrentlyHosted=true').then((res) => {
            currentServer = res as unknown as ServersResponse;
        }).then(() => {
            fetch("https://api.mcsrvstat.us/2/" + currentServer.serverAddress).then(res => res.json() as Promise<ServerPingResponse>).then(data => {
                serverData = data;
            })
        });
    }

    onMount(fetchServerData);
</script>

{#if serverData}
    <div class="server">
        <div class="header">
            <img src={serverData.icon || "https://via.placeholder.com/150"} class="thumbnail" alt="server icon" />
            <div class="information">
                <div>
                    {#if currentServer}
                        <div class="title">{currentServer.title}</div>
                    {/if}
                    <div class="description">{@html serverData.motd?.html[0]}<br>{@html serverData.motd?.html[1]}</div>
                    <div class="description">{serverData.players?.online} / {serverData.players?.max}
                        {#if serverData.players?.list}
                            : {serverData.players?.list}
                        {/if}
                    </div>
                </div>
                <div class="tags">
                    <div class="tag">{serverData.online ? "Online" : "Offline"}</div>
                    {#if serverData.version}
                        <div class="tag">{serverData.version}</div>
                    {/if}
                    {#if serverData.gamemode}
                        <div class="tag">{serverData.gamemode}</div>
                    {/if}
                    {#if serverData.software}
                        <div class="tag">{serverData.software}</div>
                    {/if}
                    {#if currentServer}
                        {#if currentServer.modLoader}
                            <div class="tag">{currentServer.modLoader}</div>
                        {/if}
                        {#if currentServer.relatedModpacks}
                            <div class="tag">Modpack</div>
                        {/if}
                    {/if}
                    
                </div>
            </div>
        </div>
    </div>
{/if}
<style>
    .server {
        margin: 1rem 0;
        width: 100%;
        padding: 1rem;
        border-radius: 1rem;
        outline: 0.1rem solid white;
        transition: outline 0.2s;
    }
    .server:has(.hidden):hover {
        outline: 0.1rem solid white;
    }
    .server:hover {
        outline: 0.1rem solid var(--color-theme-1);
    }
    .header {
        display: flex;
        align-items: center;
        width: 100%;
        height: 10rem;
        padding: 1rem;
        outline: none;
        background: none;
        border: none;
        font: inherit;
        color: inherit;
        border-radius: 0.5rem;
    }
    /* add styles to .header if .servers contains a div with .hidden */
    .server:has(.hidden) .header {
        outline: 0.1rem solid white;
    }

    .server:has(.hidden) .header:hover {
        outline: 0.1rem solid var(--color-theme-1);
    }
    

    .thumbnail {
        border-radius: 0.5rem;
        margin-right: 2rem;
        /* square, fit to height, image clip */
        object-fit: cover;
        object-position: center;
        aspect-ratio: 1/1;
        height: 100%;
    }
    .information {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 100%;
        border-radius: 0.5rem;
        width: 100%;
    }
    .title {
        font-size: 1.2rem;
        font-weight: bold;
    }
    .description {
        font-size: 1rem;
        margin-bottom: 1rem;
    }
    .tags {
        display: flex;
        flex-wrap: wrap;
        gap: 0.5rem;
    }
    .tag {
        font-size: 1rem;
        padding: 0.5rem;
        border-radius: 0.5rem;
        background-color: #fff;
		box-shadow: -0.25rem 0.25rem 0.25rem rgba(0, 0, 0, 0.075);
    }
</style>