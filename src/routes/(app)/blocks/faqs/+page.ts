import { faqBlocks } from "#lib/blocks/all-faqs.js";
import type { PageLoad } from "./$types";

export const prerender = true;

export const load: PageLoad = () => {
	return {
		blocks: faqBlocks
	};
};
