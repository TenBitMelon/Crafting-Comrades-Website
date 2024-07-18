import { redirect } from '@sveltejs/kit';
// since there's no dynamic data here, we can prerender
// it so that it gets served as a static asset in production
export const prerender = true;

/** @type {import('./$types').LayoutServerLoad} */
export function load() {
	throw redirect(307, '/modpacks');
}
