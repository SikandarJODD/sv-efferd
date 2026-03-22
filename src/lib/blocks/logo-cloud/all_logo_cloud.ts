import type { BlockShowcaseItem } from '$lib/blocks/showcase';
import { createBlockCodeTree } from '$lib/blocks/showcase';
import LogoCloudFive from '$lib/components/efferd/logo-cloud/five/logo-cloud-five.svelte';
import LogoCloudFour from '$lib/components/efferd/logo-cloud/four/logo-cloud-four.svelte';
import LogoCloudOne from '$lib/components/efferd/logo-cloud/logo-cloud-one.svelte';
import LogoCloudThree from '$lib/components/efferd/logo-cloud/three/logo-cloud-three.svelte';
import LogoCloudTwo from '$lib/components/efferd/logo-cloud/two/logo-cloud-two.svelte';

import logoCloudFiveSource from '$lib/components/efferd/logo-cloud/five/logo-cloud-five.svelte?raw';
import logoCloudFourSource from '$lib/components/efferd/logo-cloud/four/logo-cloud-four.svelte?raw';
import logoCloudOneSource from '$lib/components/efferd/logo-cloud/logo-cloud-one.svelte?raw';
import logoCloudThreeSource from '$lib/components/efferd/logo-cloud/three/logo-cloud-three.svelte?raw';
import logoCloudTwoSource from '$lib/components/efferd/logo-cloud/two/logo-cloud-two.svelte?raw';
import logoCardSource from '$lib/components/efferd/logo-cloud/two/logo-card.svelte?raw';
import decorIconIndexSource from '$lib/components/ui/decor-icon/index.ts?raw';
import decorIconSource from '$lib/components/ui/decor-icon/decor-icon.svelte?raw';
import marqueeIndexSource from '$lib/components/magic/marquee/index.ts?raw';
import marqueeSource from '$lib/components/magic/marquee/marquee.svelte?raw';
import progressiveBlurIndexSource from '$lib/components/ui/progressive-blur/index.ts?raw';
import progressiveBlurSource from '$lib/components/ui/progressive-blur/progressive-blur.svelte?raw';

const decorIconFiles = [
	{
		id: 'shared:decor-icon-index',
		path: 'components/ui/decor-icon/index.ts',
		lang: 'typescript' as const,
		code: decorIconIndexSource
	},
	{
		id: 'shared:decor-icon',
		path: 'components/ui/decor-icon/decor-icon.svelte',
		lang: 'svelte' as const,
		code: decorIconSource
	}
];

const marqueeFiles = [
	{
		id: 'shared:marquee-index',
		path: 'components/magic/marquee/index.ts',
		lang: 'typescript' as const,
		code: marqueeIndexSource
	},
	{
		id: 'shared:marquee',
		path: 'components/magic/marquee/marquee.svelte',
		lang: 'svelte' as const,
		code: marqueeSource
	}
];

const progressiveBlurFiles = [
	{
		id: 'shared:progressive-blur-index',
		path: 'components/ui/progressive-blur/index.ts',
		lang: 'typescript' as const,
		code: progressiveBlurIndexSource
	},
	{
		id: 'shared:progressive-blur',
		path: 'components/ui/progressive-blur/progressive-blur.svelte',
		lang: 'svelte' as const,
		code: progressiveBlurSource
	}
];

export const logoCloudBlocks: BlockShowcaseItem[] = [
	{
		id: 'logo-cloud-one',
		title: 'Logo Cloud One',
		description: 'A clean partner grid with a framed card surface and balanced spacing.',
		previewComponent: LogoCloudOne,
		previewHref: '/preview/logo-cloud/one',
		previewMode: 'iframe',
		previewHeight: 720,
		installId: 'logo-cloud-one',
		codeTree: createBlockCodeTree('logo-cloud-one:component', [
			{
				id: 'logo-cloud-one:component',
				path: 'components/efferd/logo-cloud/logo-cloud-one.svelte',
				lang: 'svelte',
				code: logoCloudOneSource
			}
		])
	},
	{
		id: 'logo-cloud-two',
		title: 'Logo Cloud Two',
		description: 'A bordered logo grid with alternating panels and decorative corner accents.',
		previewComponent: LogoCloudTwo,
		previewHref: '/preview/logo-cloud/two',
		previewMode: 'iframe',
		previewHeight: 720,
		installId: 'logo-cloud-two',
		codeTree: createBlockCodeTree('logo-cloud-two:component', [
			{
				id: 'logo-cloud-two:component',
				path: 'components/efferd/logo-cloud/two/logo-cloud-two.svelte',
				lang: 'svelte',
				code: logoCloudTwoSource
			},
			{
				id: 'logo-cloud-two:logo-card',
				path: 'components/efferd/logo-cloud/two/logo-card.svelte',
				lang: 'svelte',
				code: logoCardSource
			},
			...decorIconFiles
		])
	},
	{
		id: 'logo-cloud-three',
		title: 'Logo Cloud Three',
		description: 'A scrolling logo marquee with a soft edge mask and editorial rhythm.',
		previewComponent: LogoCloudThree,
		previewHref: '/preview/logo-cloud/three',
		previewMode: 'iframe',
		previewHeight: 720,
		installId: 'logo-cloud-three',
		codeTree: createBlockCodeTree('logo-cloud-three:component', [
			{
				id: 'logo-cloud-three:component',
				path: 'components/efferd/logo-cloud/three/logo-cloud-three.svelte',
				lang: 'svelte',
				code: logoCloudThreeSource
			},
			...marqueeFiles
		])
	},
	{
		id: 'logo-cloud-four',
		title: 'Logo Cloud Four',
		description: 'A marquee logo band with progressive edge blur and a layered track surface.',
		previewComponent: LogoCloudFour,
		previewHref: '/preview/logo-cloud/four',
		previewMode: 'iframe',
		previewHeight: 720,
		installId: 'logo-cloud-four',
		codeTree: createBlockCodeTree('logo-cloud-four:component', [
			{
				id: 'logo-cloud-four:component',
				path: 'components/efferd/logo-cloud/four/logo-cloud-four.svelte',
				lang: 'svelte',
				code: logoCloudFourSource
			},
			...marqueeFiles,
			...progressiveBlurFiles
		])
	},
	{
		id: 'logo-cloud-five',
		title: 'Logo Cloud Five',
		description: 'A flexible wrapped logo cloud designed for broader brand collections.',
		previewComponent: LogoCloudFive,
		previewHref: '/preview/logo-cloud/five',
		previewMode: 'iframe',
		previewHeight: 720,
		installId: 'logo-cloud-five',
		codeTree: createBlockCodeTree('logo-cloud-five:component', [
			{
				id: 'logo-cloud-five:component',
				path: 'components/efferd/logo-cloud/five/logo-cloud-five.svelte',
				lang: 'svelte',
				code: logoCloudFiveSource
			}
		])
	}
];

export function getLogoCloudBlock(id: string) {
	return logoCloudBlocks.find((block) => block.id === id);
}
