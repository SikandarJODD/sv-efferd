import { blogBlocks } from '$lib/blocks/blog/all_blog';
import type { PageLoad } from './$types';

export const prerender = true;

export const load: PageLoad = () => {
	return {
		blocks: blogBlocks
	};
};
