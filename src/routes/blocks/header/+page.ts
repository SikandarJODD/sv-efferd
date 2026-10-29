import { headerBlocks } from "#lib/blocks/header/all_header.js";
import type { PageLoad } from "./$types";

export const prerender = true;

export const load: PageLoad = () => {
	return {
		blocks: headerBlocks
	};
};
