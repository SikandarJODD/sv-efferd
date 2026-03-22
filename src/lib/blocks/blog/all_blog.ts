import type { BlockShowcaseItem } from "$lib/blocks/showcase";
import { createBlockCodeTree } from "$lib/blocks/showcase";
import BlogOne from "$lib/components/efferd/blogs/blog-one/blog-one.svelte";
import BlogThree from "$lib/components/efferd/blogs/blog-three/blog-three.svelte";
import BlogTwo from "$lib/components/efferd/blogs/blog-two/blog-two.svelte";

import blogOneCardSource from "$lib/components/efferd/blogs/blog-one/blog-card.svelte?raw";
import blogOneSource from "$lib/components/efferd/blogs/blog-one/blog-one.svelte?raw";
import blogThreeCardSource from "$lib/components/efferd/blogs/blog-three/blog-card.svelte?raw";
import blogThreeSource from "$lib/components/efferd/blogs/blog-three/blog-three.svelte?raw";
import blogTwoCardSource from "$lib/components/efferd/blogs/blog-two/blog-card.svelte?raw";
import blogTwoSource from "$lib/components/efferd/blogs/blog-two/blog-two.svelte?raw";
import aspectRatioIndexSource from "$lib/components/ui/aspect-ratio/index.ts?raw";
import aspectRatioSource from "$lib/components/ui/aspect-ratio/aspect-ratio.svelte?raw";
import dividerIndexSource from "$lib/components/ui/full-width-divider/index.ts?raw";
import dividerSource from "$lib/components/ui/full-width-divider/full-width-divider.svelte?raw";
import gridFillerIndexSource from "$lib/components/ui/grid-filler/index.ts?raw";
import gridFillerSource from "$lib/components/ui/grid-filler/grid-filler.svelte?raw";

const dividerFiles = [
	{
		id: "shared:divider-index",
		path: "components/ui/full-width-divider/index.ts",
		lang: "typescript" as const,
		code: dividerIndexSource
	},
	{
		id: "shared:divider",
		path: "components/ui/full-width-divider/full-width-divider.svelte",
		lang: "svelte" as const,
		code: dividerSource
	}
];

const gridFillerFiles = [
	{
		id: "shared:grid-filler-index",
		path: "components/ui/grid-filler/index.ts",
		lang: "typescript" as const,
		code: gridFillerIndexSource
	},
	{
		id: "shared:grid-filler",
		path: "components/ui/grid-filler/grid-filler.svelte",
		lang: "svelte" as const,
		code: gridFillerSource
	}
];

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

export const blogBlocks: BlockShowcaseItem[] = [
	{
		id: "blog-one",
		title: "Blog One",
		description: "A vertical editorial list with full-width dividers and compact summaries.",
		previewComponent: BlogOne,
		previewHref: "/preview/blog/one",
		previewMode: "iframe",
		previewHeight: 900,
		installId: "blog-one",
		codeTree: createBlockCodeTree("blog-one:component", [
			{
				id: "blog-one:component",
				path: "components/efferd/blogs/blog-one/blog-one.svelte",
				lang: "svelte",
				code: blogOneSource
			},
			{
				id: "blog-one:card",
				path: "components/efferd/blogs/blog-one/blog-card.svelte",
				lang: "svelte",
				code: blogOneCardSource
			},
			...dividerFiles
		])
	},
	{
		id: "blog-two",
		title: "Blog Two",
		description: "A structured blog grid with metadata rows and filler cells for balance.",
		previewComponent: BlogTwo,
		previewHref: "/preview/blog/two",
		previewMode: "inline",
		installId: "blog-two",
		codeTree: createBlockCodeTree("blog-two:component", [
			{
				id: "blog-two:component",
				path: "components/efferd/blogs/blog-two/blog-two.svelte",
				lang: "svelte",
				code: blogTwoSource
			},
			{
				id: "blog-two:card",
				path: "components/efferd/blogs/blog-two/blog-card.svelte",
				lang: "svelte",
				code: blogTwoCardSource
			},
			...dividerFiles,
			...gridFillerFiles
		])
	},
	{
		id: "blog-three",
		title: "Blog Three",
		description: "A card-based blog grid with media thumbnails and richer reading metadata.",
		previewComponent: BlogThree,
		previewHref: "/preview/blog/three",
		previewMode: "inline",
		installId: "blog-three",
		codeTree: createBlockCodeTree("blog-three:component", [
			{
				id: "blog-three:component",
				path: "components/efferd/blogs/blog-three/blog-three.svelte",
				lang: "svelte",
				code: blogThreeSource
			},
			{
				id: "blog-three:card",
				path: "components/efferd/blogs/blog-three/blog-card.svelte",
				lang: "svelte",
				code: blogThreeCardSource
			},
			...dividerFiles,
			...aspectRatioFiles
		])
	}
];

export function getBlogBlock(id: string) {
	return blogBlocks.find((block) => block.id === id);
}
