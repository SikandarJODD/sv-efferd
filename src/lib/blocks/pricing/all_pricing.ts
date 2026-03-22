import type { BlockShowcaseItem } from "$lib/blocks/showcase";
import { createBlockCodeTree } from "$lib/blocks/showcase";
import PricingFour from "$lib/components/efferd/pricing/pricing-four.svelte";
import PricingOne from "$lib/components/efferd/pricing/pricing-one.svelte";
import PricingThree from "$lib/components/efferd/pricing/pricing-three.svelte";
import PricingTwo from "$lib/components/efferd/pricing/pricing-two.svelte";

import frequencyToggleSource from "$lib/components/efferd/pricing/frequency-toggle.svelte?raw";
import pricingCardSource from "$lib/components/efferd/pricing/pricing-card.svelte?raw";
import pricingFourSource from "$lib/components/efferd/pricing/pricing-four.svelte?raw";
import pricingOneSource from "$lib/components/efferd/pricing/pricing-one.svelte?raw";
import pricingThreeSource from "$lib/components/efferd/pricing/pricing-three.svelte?raw";
import pricingTwoSource from "$lib/components/efferd/pricing/pricing-two.svelte?raw";
import decorIconIndexSource from "$lib/components/ui/decor-icon/index.ts?raw";
import decorIconSource from "$lib/components/ui/decor-icon/decor-icon.svelte?raw";
import dividerIndexSource from "$lib/components/ui/full-width-divider/index.ts?raw";
import dividerSource from "$lib/components/ui/full-width-divider/full-width-divider.svelte?raw";

const buttonFiles = [
	{
		id: "shared:button",
		path: "components/ui/button/button.svelte",
		externalUrl: "https://shadcn-svelte.com/docs/components/button",
		externalLabel: "Shadcn Svelte Button"
	}
];

const decorIconFiles = [
	{
		id: "shared:decor-icon-index",
		path: "components/ui/decor-icon/index.ts",
		lang: "typescript" as const,
		code: decorIconIndexSource
	},
	{
		id: "shared:decor-icon",
		path: "components/ui/decor-icon/decor-icon.svelte",
		lang: "svelte" as const,
		code: decorIconSource
	}
];

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

export const pricingBlocks: BlockShowcaseItem[] = [
	{
		id: "pricing-one",
		title: "Pricing One",
		description:
			"A two-plan comparison with corner accents, compact savings callouts, and a stronger featured tier.",
		previewComponent: PricingOne,
		previewHref: "/preview/pricing/one",
		previewMode: "iframe",
		previewHeight: 700,
		installId: "pricing-one",
		codeTree: createBlockCodeTree("pricing-one:component", [
			{
				id: "pricing-one:component",
				path: "components/efferd/pricing/pricing-one.svelte",
				lang: "svelte",
				code: pricingOneSource
			},
			...buttonFiles,
			...decorIconFiles
		])
	},
	{
		id: "pricing-two",
		title: "Pricing Two",
		description:
			"A bordered editorial pricing grid with divider rails, concise plan summaries, and feature checklists.",
		previewComponent: PricingTwo,
		previewHref: "/preview/pricing/two",
		previewMode: "iframe",
		previewHeight: 920,
		installId: "pricing-two",
		codeTree: createBlockCodeTree("pricing-two:component", [
			{
				id: "pricing-two:component",
				path: "components/efferd/pricing/pricing-two.svelte",
				lang: "svelte",
				code: pricingTwoSource
			},
			...buttonFiles,
			...dividerFiles
		])
	},
	{
		id: "pricing-three",
		title: "Pricing Three",
		description:
			"A reusable three-tier pricing layout with icon-led cards and a highlighted middle plan.",
		previewComponent: PricingThree,
		previewHref: "/preview/pricing/three",
		previewMode: "iframe",
		previewHeight: 900,
		installId: "pricing-three",
		codeTree: createBlockCodeTree("pricing-three:component", [
			{
				id: "pricing-three:component",
				path: "components/efferd/pricing/pricing-three.svelte",
				lang: "svelte",
				code: pricingThreeSource
			},
			{
				id: "pricing-three:card",
				path: "components/efferd/pricing/pricing-card.svelte",
				lang: "svelte",
				code: pricingCardSource
			},
			...buttonFiles
		])
	},
	{
		id: "pricing-four",
		title: "Pricing Four",
		description:
			"An animated pricing table with monthly-yearly toggles, live number transitions, and motion badges.",
		previewComponent: PricingFour,
		previewHref: "/preview/pricing/four",
		previewMode: "iframe",
		previewHeight: 980,
		installId: "pricing-four",
		codeTree: createBlockCodeTree("pricing-four:component", [
			{
				id: "pricing-four:component",
				path: "components/efferd/pricing/pricing-four.svelte",
				lang: "svelte",
				code: pricingFourSource
			},
			{
				id: "pricing-four:frequency-toggle",
				path: "components/efferd/pricing/frequency-toggle.svelte",
				lang: "svelte",
				code: frequencyToggleSource
			},
			...buttonFiles
		])
	}
];

export function getPricingBlock(id: string) {
	return pricingBlocks.find((block) => block.id === id);
}
