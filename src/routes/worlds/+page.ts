import { Collections, type WorldsResponse } from '$lib/types';
import { pb } from '$lib/utils';

// export const prerender = true;

/** @type {import('./$types').PageLoad} */
export async function load({}) {
	const records: WorldsResponse[] = await pb.collection(Collections.Worlds).getFullList(200 /* batch size */, {
		sort: '-created'
	});
	return {
		worlds: records
	};
}