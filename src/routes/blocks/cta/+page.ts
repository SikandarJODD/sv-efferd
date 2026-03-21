import { ctaBlocks } from '$lib/blocks/cta/all_cta';
import type { PageLoad } from './$types';

const featuredCtaIds = ['cta-one', 'cta-two'] as const;

export const prerender = true;

export const load: PageLoad = () => {
	const blocks = featuredCtaIds
		.map((blockId) => ctaBlocks.find((block) => block.id === blockId))
		.filter((block): block is (typeof ctaBlocks)[number] => block !== undefined);

	return {
		blocks
	};
};
