import { imageGalleryBlocks } from "#lib/blocks/all-image-gallery.js";
import type { PageLoad } from "./$types";

export const prerender = true;

export const load: PageLoad = () => {
	return {
		blocks: imageGalleryBlocks
	};
};
