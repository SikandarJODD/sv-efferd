import { appShellBlocks } from "#lib/blocks/app-shell/all_app_shell.js";
import type { PageLoad } from "./$types";

export const prerender = true;

export const load: PageLoad = () => {
	return {
		blocks: appShellBlocks
	};
};
