import { Collections, type ServicesResponse } from '$lib/types';
import { pb } from '$lib/utils';

// export const prerender = true;

/** @type {import('./$types').PageLoad} */
export async function load({}) {
	const records: ServicesResponse[] = await pb.collection(Collections.Services).getFullList(200 /* batch size */, {
		sort: '-created'
	});
	return {
		services: records
	};
}
