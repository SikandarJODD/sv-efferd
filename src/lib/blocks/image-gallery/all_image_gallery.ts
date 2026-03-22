import type { BlockShowcaseItem } from "$lib/blocks/showcase";
import { createBlockCodeTree } from "$lib/blocks/showcase";
import ImageGallery from "$lib/components/efferd/image-gallery/image-gallery.svelte";

import imageGallerySource from "$lib/components/efferd/image-gallery/image-gallery.svelte?raw";
import lazyImageSource from "$lib/components/efferd/image-gallery/lazy-image.svelte?raw";
import aspectRatioIndexSource from "$lib/components/ui/aspect-ratio/index.ts?raw";
import aspectRatioSource from "$lib/components/ui/aspect-ratio/aspect-ratio.svelte?raw";

const aspectRatioFiles = [
	{
		id: "shared:aspect-ratio-index",
		path: "components/ui/aspect-ratio/index.ts",
		lang: "typescript" as const,
		code: aspectRatioIndexSource
	},
	{
		id: "shared:aspect-ratio",
		path: "components/ui/aspect-ratio/aspect-ratio.svelte",
		lang: "svelte" as const,
		code: aspectRatioSource
	}
];

export const imageGalleryBlocks: BlockShowcaseItem[] = [
	{
		id: "image-gallery-one",
		title: "Image Gallery One",
		description:
			"A responsive editorial gallery with staggered aspect ratios, lazy-loaded media, and a clean masonry-style rhythm.",
		previewComponent: ImageGallery,
		previewHref: "/preview/image-gallery/one",
		previewMode: "iframe",
		previewHeight: 1800,
		installId: "image-gallery-one",
		codeTree: createBlockCodeTree("image-gallery-one:component", [
			{
				id: "image-gallery-one:component",
				path: "components/efferd/image-gallery/image-gallery.svelte",
				lang: "svelte",
				code: imageGallerySource
			},
			{
				id: "image-gallery-one:lazy-image",
				path: "components/efferd/image-gallery/lazy-image.svelte",
				lang: "svelte",
				code: lazyImageSource
			},
			...aspectRatioFiles
		])
	}
];

export function getImageGalleryBlock(id: string) {
	return imageGalleryBlocks.find((block) => block.id === id);
}
