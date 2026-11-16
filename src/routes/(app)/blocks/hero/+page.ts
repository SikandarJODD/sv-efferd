import { heroBlocks } from "#lib/blocks/all-hero.js";
import type { PageLoad } from "./$types";

export const prerender = true;

export const load: PageLoad = () => {
	return {
		blocks: heroBlocks
	};
};
