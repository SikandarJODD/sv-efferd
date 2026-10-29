import { featureBlocks } from "#lib/blocks/features/all_features.js";
import type { PageLoad } from "./$types";

export const prerender = true;

export const load: PageLoad = () => {
	return {
		blocks: featureBlocks
	};
};
