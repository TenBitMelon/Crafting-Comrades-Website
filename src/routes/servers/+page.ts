import type { ModpacksRecord, ModpacksResponse, ServersResponse } from '$lib/types';
import PocketBase from 'pocketbase';

// export const prerender = true;

/** @type {import('./$types').PageLoad} */
export async function load({}) {
	const pb = new PocketBase('http://127.0.0.1:8090');

	const records: ServersResponse[] = await pb.collection('servers').getFullList(200 /* batch size */, {
		sort: '-created'
	});

	let servers: ServersResponse[] = [];
	records.forEach((record) => {
		servers.push(record);
	});
	return {
		servers: servers
	};
}