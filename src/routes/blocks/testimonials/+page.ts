import { testimonialBlocks } from '$lib/blocks/testimonials/all_testimonials';
import type { PageLoad } from './$types';

export const prerender = true;

export const load: PageLoad = () => {
	return {
		blocks: testimonialBlocks
	};
};
