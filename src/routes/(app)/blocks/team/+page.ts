import { teamBlocks } from "#lib/blocks/all-teams.js";
import type { PageLoad } from "./$types";

export const prerender = true;

export const load: PageLoad = () => {
	return {
		blocks: teamBlocks
	};
};
