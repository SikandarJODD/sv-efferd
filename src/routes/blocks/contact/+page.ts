import { contactBlocks } from "#lib/blocks/all-contact.js";
import type { PageLoad } from "./$types";

export const prerender = true;

export const load: PageLoad = () => {
	return {
		blocks: contactBlocks
	};
};
