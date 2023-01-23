import type { ModpacksRecord, ModpacksResponse } from '$lib/types';
import PocketBase from 'pocketbase';

// export const prerender = true;

/** @type {import('./$types').PageLoad} */
export async function load({}) {
	const pb = new PocketBase('http://127.0.0.1:8090');

	const records: ModpacksResponse[] = await pb.collection('modpacks').getFullList(200 /* batch size */, {
		sort: '-created'
	});

	let modpacks: ModpacksResponse[] = [];
	records.forEach((record) => {
		modpacks.push(record);
	});
	return {
		modpacks: modpacks
	};
}