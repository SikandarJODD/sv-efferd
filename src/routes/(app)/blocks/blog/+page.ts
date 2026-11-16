import { blogBlocks } from "#lib/blocks/all-blog.js";
import type { PageLoad } from "./$types";

export const prerender = true;

export const load: PageLoad = () => {
	return {
		blocks: blogBlocks
	};
};
