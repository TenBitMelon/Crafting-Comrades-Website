import type { ModpacksResponse } from '$lib/types';
import { pb } from '$lib/utils';

// export const prerender = true;

/** @type {import('./$types').PageLoad} */
export async function load({}) {
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