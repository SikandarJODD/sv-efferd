import { logoCloudBlocks } from "#lib/blocks/logo-cloud/all_logo_cloud.js";
import type { PageLoad } from "./$types";

export const prerender = true;

export const load: PageLoad = () => {
	return {
		blocks: logoCloudBlocks
	};
};
