import { appShellBlocks } from "#lib/blocks/all-app-shell.js";
import type { PageLoad } from "./$types";

export const prerender = true;

export const load: PageLoad = () => {
	return {
		blocks: appShellBlocks
	};
};
