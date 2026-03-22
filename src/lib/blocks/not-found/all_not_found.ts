import type { BlockShowcaseItem } from '$lib/blocks/showcase';
import { createBlockCodeTree } from '$lib/blocks/showcase';
import NotFoundOne from '$lib/components/efferd/not-found/not-found-one.svelte';
import NotFoundTwo from '$lib/components/efferd/not-found/not-found-two.svelte';

import notFoundOneSource from '$lib/components/efferd/not-found/not-found-one.svelte?raw';
import notFoundTwoSource from '$lib/components/efferd/not-found/not-found-two.svelte?raw';
import dividerIndexSource from '$lib/components/ui/full-width-divider/index.ts?raw';
import dividerSource from '$lib/components/ui/full-width-divider/full-width-divider.svelte?raw';
import emptyContentSource from '$lib/components/ui/empty/empty-content.svelte?raw';
import emptyDescriptionSource from '$lib/components/ui/empty/empty-description.svelte?raw';
import emptyHeaderSource from '$lib/components/ui/empty/empty-header.svelte?raw';
import emptyIndexSource from '$lib/components/ui/empty/index.ts?raw';
import emptyMediaSource from '$lib/components/ui/empty/empty-media.svelte?raw';
import emptyRootSource from '$lib/components/ui/empty/empty.svelte?raw';
import emptyTitleSource from '$lib/components/ui/empty/empty-title.svelte?raw';

const buttonFiles = [
	{
		id: 'shared:button',
		path: 'components/ui/button/button.svelte',
		externalUrl: 'https://shadcn-svelte.com/docs/components/button',
		externalLabel: 'Shadcn Svelte Button'
	}
];

const dividerFiles = [
	{
		id: 'shared:divider-index',
		path: 'components/ui/full-width-divider/index.ts',
		lang: 'typescript' as const,
		code: dividerIndexSource
	},
	{
		id: 'shared:divider',
		path: 'components/ui/full-width-divider/full-width-divider.svelte',
		lang: 'svelte' as const,
		code: dividerSource
	}
];

const emptyFiles = [
	{
		id: 'shared:empty-index',
		path: 'components/ui/empty/index.ts',
		lang: 'typescript' as const,
		code: emptyIndexSource
	},
	{
		id: 'shared:empty-root',
		path: 'components/ui/empty/empty.svelte',
		lang: 'svelte' as const,
		code: emptyRootSource
	},
	{
		id: 'shared:empty-header',
		path: 'components/ui/empty/empty-header.svelte',
		lang: 'svelte' as const,
		code: emptyHeaderSource
	},
	{
		id: 'shared:empty-media',
		path: 'components/ui/empty/empty-media.svelte',
		lang: 'svelte' as const,
		code: emptyMediaSource
	},
	{
		id: 'shared:empty-title',
		path: 'components/ui/empty/empty-title.svelte',
		lang: 'svelte' as const,
		code: emptyTitleSource
	},
	{
		id: 'shared:empty-description',
		path: 'components/ui/empty/empty-description.svelte',
		lang: 'svelte' as const,
		code: emptyDescriptionSource
	},
	{
		id: 'shared:empty-content',
		path: 'components/ui/empty/empty-content.svelte',
		lang: 'svelte' as const,
		code: emptyContentSource
	}
];

export const notFoundBlocks: BlockShowcaseItem[] = [
	{
		id: 'not-found-one',
		title: 'Not Found One',
		description: 'A framed 404 layout with full-width dividers and balanced recovery actions.',
		previewComponent: NotFoundOne,
		previewHref: '/preview/not-found/one',
		previewMode: 'iframe',
		previewHeight: 720,
		installId: 'not-found-one',
		codeTree: createBlockCodeTree('not-found-one:component', [
			{
				id: 'not-found-one:component',
				path: 'components/efferd/not-found/not-found-one.svelte',
				lang: 'svelte',
				code: notFoundOneSource
			},
			...buttonFiles,
			...dividerFiles,
			...emptyFiles
		])
	},
	{
		id: 'not-found-two',
		title: 'Not Found Two',
		description: 'A minimal full-screen 404 with oversized typography and direct recovery actions.',
		previewComponent: NotFoundTwo,
		previewHref: '/preview/not-found/two',
		previewMode: 'iframe',
		previewHeight: 720,
		installId: 'not-found-two',
		codeTree: createBlockCodeTree('not-found-two:component', [
			{
				id: 'not-found-two:component',
				path: 'components/efferd/not-found/not-found-two.svelte',
				lang: 'svelte',
				code: notFoundTwoSource
			},
			...buttonFiles,
			...emptyFiles
		])
	}
];

export function getNotFoundBlock(id: string) {
	return notFoundBlocks.find((block) => block.id === id);
}
