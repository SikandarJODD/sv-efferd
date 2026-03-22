import { heroBlocks } from "$lib/blocks/hero/all_hero";
import type { PageLoad } from "./$types";

export const prerender = true;

export const load: PageLoad = () => {
	return {
		blocks: heroBlocks
	};
};
