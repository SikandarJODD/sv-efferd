import { settingsBlocks } from "#lib/blocks/settings/index.js";
import type { PageLoad } from "./$types";

export const prerender = true;

export const load: PageLoad = () => {
	return {
		blocks: settingsBlocks
	};
};
