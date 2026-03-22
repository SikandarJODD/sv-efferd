import { integrationBlocks } from "$lib/blocks/integrations/all_integrations";
import type { PageLoad } from "./$types";

export const prerender = true;

export const load: PageLoad = () => {
	return {
		blocks: integrationBlocks
	};
};
