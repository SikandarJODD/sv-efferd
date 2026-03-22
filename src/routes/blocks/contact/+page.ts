import { contactBlocks } from "$lib/blocks/contact/all_contact";
import type { PageLoad } from "./$types";

export const prerender = true;

export const load: PageLoad = () => {
	return {
		blocks: contactBlocks
	};
};
