import { ctaBlocks } from "#lib/blocks/all-cta.js";
import type { PageLoad } from "./$types";

export const prerender = true;

export const load: PageLoad = () => {
	return {
		blocks: ctaBlocks
	};
};
