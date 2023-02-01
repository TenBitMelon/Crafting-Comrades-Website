import type { WorldsResponse } from '$lib/types';
import { pb } from '$lib/utils';

// export const prerender = true;

/** @type {import('./$types').PageLoad} */
export async function load({}) {
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