import { pricingBlocks } from "#lib/blocks/all-pricing.js";
import type { PageLoad } from "./$types";

export const prerender = true;

export const load: PageLoad = () => {
	return {
		blocks: pricingBlocks
	};
};
