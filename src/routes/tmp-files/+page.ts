import { Collections, type TemporaryFilesResponse } from '$lib/types';
import { pb } from '$lib/utils';
const maxFileTime = 1000 * 60 * 60 * 24 * 7; // 7 days

/** @type {import('./$types').PageServerLoad} */
export async function load() {
	// Get all the old files
	const allFiles: TemporaryFilesResponse[] = await pb
		.collection(Collections.TemporaryFiles)
		.getFullList();

	// Delete the old files
	const now = new Date();
	const oldFiles = allFiles.filter((file) => {
		const created = new Date(file.created);
		return now.getTime() - created.getTime() > maxFileTime;
	});
	await Promise.allSettled(
		oldFiles.map((file) => pb.collection(Collections.TemporaryFiles).delete(file.id))
	);

	return {
		files: allFiles.filter((file) => !oldFiles.includes(file))
	};
}
