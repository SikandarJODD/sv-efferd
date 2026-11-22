import { integrationBlocks } from "#lib/blocks/all-integrations.js";
import type { PageLoad } from "./$types";

export const prerender = true;

export const load: PageLoad = () => {
	return {
		blocks: integrationBlocks
	};
};
