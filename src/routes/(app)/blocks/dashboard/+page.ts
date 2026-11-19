import { dashboardBlocks } from "#lib/blocks/dashboard/index.js";
import type { PageLoad } from "./$types";

export const prerender = true;

export const load: PageLoad = () => {
	return {
		blocks: dashboardBlocks
	};
};
