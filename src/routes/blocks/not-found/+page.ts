import { notFoundBlocks } from "$lib/blocks/not-found/all_not_found";
import type { PageLoad } from "./$types";

export const prerender = true;

export const load: PageLoad = () => {
	return {
		blocks: notFoundBlocks
	};
};
