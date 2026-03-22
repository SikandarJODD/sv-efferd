import type { BlockShowcaseItem } from '$lib/blocks/showcase';
import { createBlockCodeTree } from '$lib/blocks/showcase';
import TestimonialOne from '$lib/components/efferd/testimonial/testimonial-one.svelte';
import TestimonialThree from '$lib/components/efferd/testimonial/testimonial-three.svelte';
import TestimonialTwo from '$lib/components/efferd/testimonial/testimonial-two.svelte';
import TestimonialFive from '$lib/components/efferd/testimonial/testimonial-five/testimonial-five.svelte';
import TestimonialFour from '$lib/components/efferd/testimonial/testimonial-four/testimonial-four.svelte';

import testimonialCardSource from '$lib/components/efferd/testimonial/testimonial-card.svelte?raw';
import testimonialOneSource from '$lib/components/efferd/testimonial/testimonial-one.svelte?raw';
import testimonialThreeSource from '$lib/components/efferd/testimonial/testimonial-three.svelte?raw';
import testimonialTwoSource from '$lib/components/efferd/testimonial/testimonial-two.svelte?raw';
import testimonialFiveCardSource from '$lib/components/efferd/testimonial/testimonial-five/testimonial-card.svelte?raw';
import testimonialFiveSource from '$lib/components/efferd/testimonial/testimonial-five/testimonial-five.svelte?raw';
import testimonialFourCardSource from '$lib/components/efferd/testimonial/testimonial-four/testimonial-card.svelte?raw';
import testimonialFourSource from '$lib/components/efferd/testimonial/testimonial-four/testimonial-four.svelte?raw';
import avatarFallbackSource from '$lib/components/ui/avatar/avatar-fallback.svelte?raw';
import avatarImageSource from '$lib/components/ui/avatar/avatar-image.svelte?raw';
import avatarIndexSource from '$lib/components/ui/avatar/index.ts?raw';
import avatarRootSource from '$lib/components/ui/avatar/avatar.svelte?raw';
import decorIconIndexSource from '$lib/components/ui/decor-icon/index.ts?raw';
import decorIconSource from '$lib/components/ui/decor-icon/decor-icon.svelte?raw';
import dividerIndexSource from '$lib/components/ui/full-width-divider/index.ts?raw';
import dividerSource from '$lib/components/ui/full-width-divider/full-width-divider.svelte?raw';
import gridFillerIndexSource from '$lib/components/ui/grid-filler/index.ts?raw';
import gridFillerSource from '$lib/components/ui/grid-filler/grid-filler.svelte?raw';
import gridPatternIndexSource from '$lib/components/ui/grid-pattern/index.ts?raw';
import gridPatternSource from '$lib/components/ui/grid-pattern/grid-pattern.svelte?raw';
import maskLineIndexSource from '$lib/components/ui/mask-line/index.ts?raw';
import maskLineSource from '$lib/components/ui/mask-line/mask-line.svelte?raw';

const avatarFiles = [
	{
		id: 'shared:avatar-index',
		path: 'components/ui/avatar/index.ts',
		lang: 'typescript' as const,
		code: avatarIndexSource
	},
	{
		id: 'shared:avatar-root',
		path: 'components/ui/avatar/avatar.svelte',
		lang: 'svelte' as const,
		code: avatarRootSource
	},
	{
		id: 'shared:avatar-image',
		path: 'components/ui/avatar/avatar-image.svelte',
		lang: 'svelte' as const,
		code: avatarImageSource
	},
	{
		id: 'shared:avatar-fallback',
		path: 'components/ui/avatar/avatar-fallback.svelte',
		lang: 'svelte' as const,
		code: avatarFallbackSource
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

const gridFillerFiles = [
	{
		id: 'shared:grid-filler-index',
		path: 'components/ui/grid-filler/index.ts',
		lang: 'typescript' as const,
		code: gridFillerIndexSource
	},
	{
		id: 'shared:grid-filler',
		path: 'components/ui/grid-filler/grid-filler.svelte',
		lang: 'svelte' as const,
		code: gridFillerSource
	}
];

const gridPatternFiles = [
	{
		id: 'shared:grid-pattern-index',
		path: 'components/ui/grid-pattern/index.ts',
		lang: 'typescript' as const,
		code: gridPatternIndexSource
	},
	{
		id: 'shared:grid-pattern',
		path: 'components/ui/grid-pattern/grid-pattern.svelte',
		lang: 'svelte' as const,
		code: gridPatternSource
	}
];

const maskLineFiles = [
	{
		id: 'shared:mask-line-index',
		path: 'components/ui/mask-line/index.ts',
		lang: 'typescript' as const,
		code: maskLineIndexSource
	},
	{
		id: 'shared:mask-line',
		path: 'components/ui/mask-line/mask-line.svelte',
		lang: 'svelte' as const,
		code: maskLineSource
	}
];

export const testimonialBlocks: BlockShowcaseItem[] = [
	{
		id: 'testimonial-one',
		title: 'Testimonial One',
		description:
			'A centered single testimonial with brand mark, compact author block, and soft editorial framing.',
		previewComponent: TestimonialOne,
		previewHref: '/preview/testimonials/one',
		previewMode: 'iframe',
		previewHeight: 500,
		installId: 'testimonial-one',
		codeTree: createBlockCodeTree('testimonial-one:component', [
			{
				id: 'testimonial-one:component',
				path: 'components/efferd/testimonial/testimonial-one.svelte',
				lang: 'svelte',
				code: testimonialOneSource
			},
			...avatarFiles
		])
	},
	{
		id: 'testimonial-two',
		title: 'Testimonial Two',
		description:
			'A framed testimonial layout with masked divider rails, asymmetrical composition, and avatar-led emphasis.',
		previewComponent: TestimonialTwo,
		previewHref: '/preview/testimonials/two',
		previewMode: 'iframe',
		previewHeight: 520,
		installId: 'testimonial-two',
		codeTree: createBlockCodeTree('testimonial-two:component', [
			{
				id: 'testimonial-two:component',
				path: 'components/efferd/testimonial/testimonial-two.svelte',
				lang: 'svelte',
				code: testimonialTwoSource
			},
			...avatarFiles,
			...maskLineFiles
		])
	},
	{
		id: 'testimonial-three',
		title: 'Testimonial Three',
		description:
			'A three-card testimonial grid with decorative corners, lifted middle emphasis, and richer profile metadata.',
		previewComponent: TestimonialThree,
		previewHref: '/preview/testimonials/three',
		previewMode: 'iframe',
		previewHeight: 700,
		installId: 'testimonial-three',
		codeTree: createBlockCodeTree('testimonial-three:component', [
			{
				id: 'testimonial-three:component',
				path: 'components/efferd/testimonial/testimonial-three.svelte',
				lang: 'svelte',
				code: testimonialThreeSource
			},
			{
				id: 'testimonial-three:card',
				path: 'components/efferd/testimonial/testimonial-card.svelte',
				lang: 'svelte',
				code: testimonialCardSource
			},
			...avatarFiles,
			...decorIconFiles
		])
	},
	{
		id: 'testimonial-four',
		title: 'Testimonial Four',
		description:
			'A split testimonial layout with divider rails, dense quote cards, and a stronger editorial grid.',
		previewComponent: TestimonialFour,
		previewHref: '/preview/testimonials/four',
		previewMode: 'iframe',
		previewHeight: 980,
		installId: 'testimonial-four',
		codeTree: createBlockCodeTree('testimonial-four:component', [
			{
				id: 'testimonial-four:component',
				path: 'components/efferd/testimonial/testimonial-four/testimonial-four.svelte',
				lang: 'svelte',
				code: testimonialFourSource
			},
			{
				id: 'testimonial-four:card',
				path: 'components/efferd/testimonial/testimonial-four/testimonial-card.svelte',
				lang: 'svelte',
				code: testimonialFourCardSource
			},
			...dividerFiles
		])
	},
	{
		id: 'testimonial-five',
		title: 'Testimonial Five',
		description:
			'A dense social-proof wall with grid fillers, patterned cards, and a long-form testimonial mosaic.',
		previewComponent: TestimonialFive,
		previewHref: '/preview/testimonials/five',
		previewMode: 'iframe',
		previewHeight: 1300,
		installId: 'testimonial-five',
		codeTree: createBlockCodeTree('testimonial-five:component', [
			{
				id: 'testimonial-five:component',
				path: 'components/efferd/testimonial/testimonial-five/testimonial-five.svelte',
				lang: 'svelte',
				code: testimonialFiveSource
			},
			{
				id: 'testimonial-five:card',
				path: 'components/efferd/testimonial/testimonial-five/testimonial-card.svelte',
				lang: 'svelte',
				code: testimonialFiveCardSource
			},
			...avatarFiles,
			...dividerFiles,
			...gridFillerFiles,
			...gridPatternFiles
		])
	}
];

export function getTestimonialBlock(id: string) {
	return testimonialBlocks.find((block) => block.id === id);
}
