import { notFoundBlocks } from "#lib/blocks/all-not-found.js";
import type { PageLoad } from "./$types";

export const prerender = true;

export const load: PageLoad = () => {
	return {
		blocks: notFoundBlocks
	};
};
