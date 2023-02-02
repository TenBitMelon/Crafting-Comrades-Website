import { Collections, type ModpacksResponse } from '$lib/types';
import { pb } from '$lib/utils';

// export const prerender = true;

/** @type {import('./$types').PageLoad} */
export async function load({}) {
	const records: ModpacksResponse[] = await pb.collection(Collections.Modpacks).getFullList(200 /* batch size */, {
		sort: '-created'
	});
	return {
		modpacks: records
	};
}