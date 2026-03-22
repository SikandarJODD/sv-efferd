import { imageGalleryBlocks } from "$lib/blocks/image-gallery/all_image_gallery";
import type { PageLoad } from "./$types";

export const prerender = true;

export const load: PageLoad = () => {
	return {
		blocks: imageGalleryBlocks
	};
};
