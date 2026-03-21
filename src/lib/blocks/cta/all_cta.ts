import type { BlockShowcaseItem } from '$lib/blocks/showcase';
import { createBlockCodeTree } from '$lib/blocks/showcase';
import CtaFive from '$lib/components/efferd/cta/cta-five.svelte';
import CtaFour from '$lib/components/efferd/cta/cta-four.svelte';
import CtaOne from '$lib/components/efferd/cta/cta-one.svelte';
import CtaThree from '$lib/components/efferd/cta/cta-three.svelte';
import CtaTwo from '$lib/components/efferd/cta/cta-two.svelte';

import ctaFiveSource from '$lib/components/efferd/cta/cta-five.svelte?raw';
import ctaFourSource from '$lib/components/efferd/cta/cta-four.svelte?raw';
import ctaOneSource from '$lib/components/efferd/cta/cta-one.svelte?raw';
import ctaThreeSource from '$lib/components/efferd/cta/cta-three.svelte?raw';
import ctaTwoSource from '$lib/components/efferd/cta/cta-two.svelte?raw';
import decorIconIndexSource from '$lib/components/ui/decor-icon/index.ts?raw';
import decorIconSource from '$lib/components/ui/decor-icon/decor-icon.svelte?raw';
import dividerIndexSource from '$lib/components/ui/full-width-divider/index.ts?raw';
import dividerSource from '$lib/components/ui/full-width-divider/full-width-divider.svelte?raw';
import inputGroupAddonSource from '$lib/components/ui/input-group/input-group-addon.svelte?raw';
import inputGroupIndexSource from '$lib/components/ui/input-group/index.ts?raw';
import inputGroupInputSource from '$lib/components/ui/input-group/input-group-input.svelte?raw';
import inputGroupSource from '$lib/components/ui/input-group/input-group.svelte?raw';

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

const inputGroupFiles = [
	{
		id: 'shared:input-group-index',
		path: 'components/ui/input-group/index.ts',
		lang: 'typescript' as const,
		code: inputGroupIndexSource
	},
	{
		id: 'shared:input-group',
		path: 'components/ui/input-group/input-group.svelte',
		lang: 'svelte' as const,
		code: inputGroupSource
	},
	{
		id: 'shared:input-group-addon',
		path: 'components/ui/input-group/input-group-addon.svelte',
		lang: 'svelte' as const,
		code: inputGroupAddonSource
	},
	{
		id: 'shared:input-group-input',
		path: 'components/ui/input-group/input-group-input.svelte',
		lang: 'svelte' as const,
		code: inputGroupInputSource
	}
];

export const ctaBlocks = [
	{
		id: 'cta-one',
		title: 'CTA One',
		description: 'A split CTA with quiet structure, balanced actions, and full-width dividers.',
		previewComponent: CtaOne,
		previewHref: '/preview/cta/one',
		installId: 'cta-one',
		codeTree: createBlockCodeTree('cta-one:component', [
			{
				id: 'cta-one:component',
				path: 'components/efferd/cta/cta-one.svelte',
				lang: 'svelte',
				code: ctaOneSource
			},
			...buttonFiles,
			...dividerFiles
		])
	},
	{
		id: 'cta-two',
		title: 'CTA Two',
		description: 'A centered CTA with a softer secondary band and directional primary action.',
		previewComponent: CtaTwo,
		previewHref: '/preview/cta/two',
		installId: 'cta-two',
		codeTree: createBlockCodeTree('cta-two:component', [
			{
				id: 'cta-two:component',
				path: 'components/efferd/cta/cta-two.svelte',
				lang: 'svelte',
				code: ctaTwoSource
			},
			...buttonFiles,
			...dividerFiles
		])
	},
	{
		id: 'cta-three',
		title: 'CTA Three',
		description: 'A more decorative CTA with corner accents and a stronger editorial feel.',
		previewComponent: CtaThree,
		previewHref: '/preview/cta/three',
		installId: 'cta-three',
		codeTree: createBlockCodeTree('cta-three:component', [
			{
				id: 'cta-three:component',
				path: 'components/efferd/cta/cta-three.svelte',
				lang: 'svelte',
				code: ctaThreeSource
			},
			...buttonFiles,
			...decorIconFiles
		])
	},
	{
		id: 'cta-four',
		title: 'CTA Four',
		description: 'A compact card CTA with credit-card reassurance and elevated actions.',
		previewComponent: CtaFour,
		previewHref: '/preview/cta/four',
		installId: 'cta-four',
		codeTree: createBlockCodeTree('cta-four:component', [
			{
				id: 'cta-four:component',
				path: 'components/efferd/cta/cta-four.svelte',
				lang: 'svelte',
				code: ctaFourSource
			},
			...buttonFiles
		])
	},
	{
		id: 'cta-five',
		title: 'CTA Five',
		description: 'A newsletter CTA that blends subscription form controls with social proof.',
		previewComponent: CtaFive,
		previewHref: '/preview/cta/five',
		installId: 'cta-five',
		codeTree: createBlockCodeTree('cta-five:component', [
			{
				id: 'cta-five:component',
				path: 'components/efferd/cta/cta-five.svelte',
				lang: 'svelte',
				code: ctaFiveSource
			},
			...buttonFiles,
			...dividerFiles,
			...inputGroupFiles
		])
	}
] satisfies BlockShowcaseItem[];

export function getCtaBlock(id: string) {
	return ctaBlocks.find((block) => block.id === id);
}
