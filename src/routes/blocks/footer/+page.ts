import { footerBlocks } from '$lib/blocks/footer/all_footer';
import type { PageLoad } from './$types';

export const prerender = true;

export const load: PageLoad = () => {
	return {
		blocks: footerBlocks
	};
};
