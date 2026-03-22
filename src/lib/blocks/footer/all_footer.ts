import type { BlockShowcaseItem } from '$lib/blocks/showcase';
import { createBlockCodeTree } from '$lib/blocks/showcase';
import FooterFive from '$lib/components/efferd/footer/footer-five.svelte';
import FooterFour from '$lib/components/efferd/footer/footer-four.svelte';
import FooterOne from '$lib/components/efferd/footer/footer-one.svelte';
import FooterSix from '$lib/components/efferd/footer/footer-six.svelte';
import FooterThree from '$lib/components/efferd/footer/footer-three.svelte';
import FooterTwo from '$lib/components/efferd/footer/footer-two.svelte';

import animatedContainerSource from '$lib/components/efferd/footer/AnimatedContainer.svelte?raw';
import linkGroupSource from '$lib/components/efferd/footer/LinkGroup.svelte?raw';
import footerFiveSource from '$lib/components/efferd/footer/footer-five.svelte?raw';
import footerFourSource from '$lib/components/efferd/footer/footer-four.svelte?raw';
import footerOneSource from '$lib/components/efferd/footer/footer-one.svelte?raw';
import footerSixSource from '$lib/components/efferd/footer/footer-six.svelte?raw';
import footerThreeSource from '$lib/components/efferd/footer/footer-three.svelte?raw';
import footerTwoSource from '$lib/components/efferd/footer/footer-two.svelte?raw';
import appleSvgSource from '$lib/svgs/apple.svelte?raw';
import githubSvgSource from '$lib/svgs/github.svelte?raw';
import logoSvgSource from '$lib/svgs/logo.svelte?raw';
import playStoreSvgSource from '$lib/svgs/play-store.svelte?raw';
import xSvgSource from '$lib/svgs/x.svelte?raw';

const buttonFiles = [
	{
		id: 'shared:button',
		path: 'components/ui/button/button.svelte',
		externalUrl: 'https://shadcn-svelte.com/docs/components/button',
		externalLabel: 'Shadcn Svelte Button'
	}
];

const animatedContainerFiles = [
	{
		id: 'shared:animated-container',
		path: 'components/efferd/footer/AnimatedContainer.svelte',
		lang: 'svelte' as const,
		code: animatedContainerSource
	}
];

const linkGroupFiles = [
	{
		id: 'shared:link-group',
		path: 'components/efferd/footer/LinkGroup.svelte',
		lang: 'svelte' as const,
		code: linkGroupSource
	}
];

const githubFiles = [
	{
		id: 'shared:github-svg',
		path: 'svgs/github.svelte',
		lang: 'svelte' as const,
		code: githubSvgSource
	}
];

const logoFiles = [
	{
		id: 'shared:logo-svg',
		path: 'svgs/logo.svelte',
		lang: 'svelte' as const,
		code: logoSvgSource
	}
];

const appleFiles = [
	{
		id: 'shared:apple-svg',
		path: 'svgs/apple.svelte',
		lang: 'svelte' as const,
		code: appleSvgSource
	}
];

const playStoreFiles = [
	{
		id: 'shared:play-store-svg',
		path: 'svgs/play-store.svelte',
		lang: 'svelte' as const,
		code: playStoreSvgSource
	}
];

const xFiles = [
	{
		id: 'shared:x-svg',
		path: 'svgs/x.svelte',
		lang: 'svelte' as const,
		code: xSvgSource
	}
];

export const footerBlocks: BlockShowcaseItem[] = [
	{
		id: 'footer-one',
		title: 'Footer One',
		description: 'A compact product footer with inline social links and a simple closing bar.',
		previewComponent: FooterOne,
		previewHref: '/preview/footer/one',
		previewMode: 'iframe',
		previewHeight: 280,
		installId: 'footer-one',
		codeTree: createBlockCodeTree('footer-one:component', [
			{
				id: 'footer-one:component',
				path: 'components/efferd/footer/footer-one.svelte',
				lang: 'svelte',
				code: footerOneSource
			},
			...buttonFiles,
			...githubFiles,
			...logoFiles,
			...xFiles
		])
	},
	{
		id: 'footer-two',
		title: 'Footer Two',
		description: 'A structured multi-column footer with brand intro and outlined social actions.',
		previewComponent: FooterTwo,
		previewHref: '/preview/footer/two',
		previewMode: 'iframe',
		previewHeight: 360,
		installId: 'footer-two',
		codeTree: createBlockCodeTree('footer-two:component', [
			{
				id: 'footer-two:component',
				path: 'components/efferd/footer/footer-two.svelte',
				lang: 'svelte',
				code: footerTwoSource
			},
			...buttonFiles,
			...logoFiles,
			...xFiles
		])
	},
	{
		id: 'footer-three',
		title: 'Footer Three',
		description: 'An animated rounded footer with grouped link columns and softer visual depth.',
		previewComponent: FooterThree,
		previewHref: '/preview/footer/three',
		previewMode: 'iframe',
		previewHeight: 420,
		installId: 'footer-three',
		codeTree: createBlockCodeTree('footer-three:component', [
			{
				id: 'footer-three:component',
				path: 'components/efferd/footer/footer-three.svelte',
				lang: 'svelte',
				code: footerThreeSource
			},
			...animatedContainerFiles,
			...logoFiles
		])
	},
	{
		id: 'footer-four',
		title: 'Footer Four',
		description: 'A directory-style footer with stacked social headers and nested link groups.',
		previewComponent: FooterFour,
		previewHref: '/preview/footer/four',
		previewMode: 'iframe',
		previewHeight: 620,
		installId: 'footer-four',
		codeTree: createBlockCodeTree('footer-four:component', [
			{
				id: 'footer-four:component',
				path: 'components/efferd/footer/footer-four.svelte',
				lang: 'svelte',
				code: footerFourSource
			},
			...linkGroupFiles
		])
	},
	{
		id: 'footer-five',
		title: 'Footer Five',
		description:
			'A marketplace-style footer with store badges, social actions, and dense support links.',
		previewComponent: FooterFive,
		previewHref: '/preview/footer/five',
		previewMode: 'iframe',
		previewHeight: 560,
		installId: 'footer-five',
		codeTree: createBlockCodeTree('footer-five:component', [
			{
				id: 'footer-five:component',
				path: 'components/efferd/footer/footer-five.svelte',
				lang: 'svelte',
				code: footerFiveSource
			},
			...buttonFiles,
			...appleFiles,
			...playStoreFiles,
			...xFiles
		])
	},
	{
		id: 'footer-six',
		title: 'Footer Six',
		description:
			'A cinematic sticky footer with animated columns and a long-form enterprise sitemap.',
		previewComponent: FooterSix,
		previewHref: '/preview/footer/six',
		previewMode: 'iframe',
		previewHeight: 620,
		installId: 'footer-six',
		codeTree: createBlockCodeTree('footer-six:component', [
			{
				id: 'footer-six:component',
				path: 'components/efferd/footer/footer-six.svelte',
				lang: 'svelte',
				code: footerSixSource
			},
			...animatedContainerFiles,
			...buttonFiles,
			...logoFiles
		])
	}
];

export function getFooterBlock(id: string) {
	return footerBlocks.find((block) => block.id === id);
}
