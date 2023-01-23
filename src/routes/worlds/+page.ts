import type { ModpacksRecord, ModpacksResponse, ServersResponse, WorldsResponse } from '$lib/types';
import PocketBase from 'pocketbase';

// export const prerender = true;

/** @type {import('./$types').PageLoad} */
export async function load({}) {
	const pb = new PocketBase('http://127.0.0.1:8090');

	const records: WorldsResponse[] = await pb.collection('worlds').getFullList(200 /* batch size */, {
		sort: '-created'
	});

	let worlds: WorldsResponse[] = [];
	records.forEach((record) => {
		worlds.push(record);
	});
	return {
		worlds: worlds
	};
}