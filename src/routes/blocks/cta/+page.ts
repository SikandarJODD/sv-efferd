import { ctaBlocks } from '$lib/blocks/cta/all_cta';
import type { PageLoad } from './$types';

export const prerender = true;

export const load: PageLoad = () => {
	return {
		blocks: ctaBlocks
	};
};
