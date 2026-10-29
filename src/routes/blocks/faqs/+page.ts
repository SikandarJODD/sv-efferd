import { faqBlocks } from "#lib/blocks/faqs/all_faqs.js";
import type { PageLoad } from "./$types";

export const prerender = true;

export const load: PageLoad = () => {
	return {
		blocks: faqBlocks
	};
};
