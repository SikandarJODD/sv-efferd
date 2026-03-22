import type { BlockShowcaseItem } from "$lib/blocks/showcase";
import { createBlockCodeTree } from "$lib/blocks/showcase";
import FeatureFive from "$lib/components/efferd/features/feature-five/feature-five.svelte";
import FeatureFour from "$lib/components/efferd/features/feature-four/feature-four.svelte";
import FeatureOne from "$lib/components/efferd/features/feature-one.svelte";
import FeatureThree from "$lib/components/efferd/features/feature-three.svelte";
import FeatureTwo from "$lib/components/efferd/features/feature-two.svelte";

import featureFiveCardSource from "$lib/components/efferd/features/feature-five/feature-card.svelte?raw";
import featureFiveSource from "$lib/components/efferd/features/feature-five/feature-five.svelte?raw";
import featureFourCardSource from "$lib/components/efferd/features/feature-four/feature-card.svelte?raw";
import featureFourSource from "$lib/components/efferd/features/feature-four/feature-four.svelte?raw";
import featureOneSource from "$lib/components/efferd/features/feature-one.svelte?raw";
import featureThreeSource from "$lib/components/efferd/features/feature-three.svelte?raw";
import featureTwoSource from "$lib/components/efferd/features/feature-two.svelte?raw";
import dashedLineIndexSource from "$lib/components/ui/dashed-line/index.ts?raw";
import dashedLineSource from "$lib/components/ui/dashed-line/dashed-line.svelte?raw";
import decorIconIndexSource from "$lib/components/ui/decor-icon/index.ts?raw";
import decorIconSource from "$lib/components/ui/decor-icon/decor-icon.svelte?raw";
import dividerIndexSource from "$lib/components/ui/full-width-divider/index.ts?raw";
import dividerSource from "$lib/components/ui/full-width-divider/full-width-divider.svelte?raw";
import gridPatternIndexSource from "$lib/components/ui/grid-pattern/index.ts?raw";
import gridPatternSource from "$lib/components/ui/grid-pattern/grid-pattern.svelte?raw";

const dashedLineFiles = [
	{
		id: "shared:dashed-line-index",
		path: "components/ui/dashed-line/index.ts",
		lang: "typescript" as const,
		code: dashedLineIndexSource
	},
	{
		id: "shared:dashed-line",
		path: "components/ui/dashed-line/dashed-line.svelte",
		lang: "svelte" as const,
		code: dashedLineSource
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

const gridPatternFiles = [
	{
		id: "shared:grid-pattern-index",
		path: "components/ui/grid-pattern/index.ts",
		lang: "typescript" as const,
		code: gridPatternIndexSource
	},
	{
		id: "shared:grid-pattern",
		path: "components/ui/grid-pattern/grid-pattern.svelte",
		lang: "svelte" as const,
		code: gridPatternSource
	}
];

export const featureBlocks: BlockShowcaseItem[] = [
	{
		id: "feature-one",
		title: "Feature One",
		description: "A compact four-column feature strip with lightweight icon-led messaging.",
		previewComponent: FeatureOne,
		previewHref: "/preview/features/one",
		previewMode: "inline",
		previewHeight: 260,
		installId: "feature-one",
		codeTree: createBlockCodeTree("feature-one:component", [
			{
				id: "feature-one:component",
				path: "components/efferd/features/feature-one.svelte",
				lang: "svelte",
				code: featureOneSource
			}
		])
	},
	{
		id: "feature-two",
		title: "Feature Two",
		description:
			"An editorial feature frame with dashed rails, corner accents, and three focused highlights.",
		previewComponent: FeatureTwo,
		previewHref: "/preview/features/two",
		previewMode: "inline",
		previewHeight: 420,
		installId: "feature-two",
		codeTree: createBlockCodeTree("feature-two:component", [
			{
				id: "feature-two:component",
				path: "components/efferd/features/feature-two.svelte",
				lang: "svelte",
				code: featureTwoSource
			},
			...dashedLineFiles,
			...decorIconFiles
		])
	},
	{
		id: "feature-three",
		title: "Feature Three",
		description:
			"A bordered feature grid with full-width divider rails and stronger product framing.",
		previewComponent: FeatureThree,
		previewHref: "/preview/features/three",
		previewMode: "iframe",
		previewHeight: 900,
		installId: "feature-three",
		codeTree: createBlockCodeTree("feature-three:component", [
			{
				id: "feature-three:component",
				path: "components/efferd/features/feature-three.svelte",
				lang: "svelte",
				code: featureThreeSource
			},
			...dividerFiles
		])
	},
	{
		id: "feature-four",
		title: "Feature Four",
		description:
			"A product-feature showcase with structured cards and subtle editorial chrome.",
		previewComponent: FeatureFour,
		previewHref: "/preview/features/four",
		previewMode: "iframe",
		previewHeight: 900,
		installId: "feature-four",
		codeTree: createBlockCodeTree("feature-four:component", [
			{
				id: "feature-four:component",
				path: "components/efferd/features/feature-four/feature-four.svelte",
				lang: "svelte",
				code: featureFourSource
			},
			{
				id: "feature-four:card",
				path: "components/efferd/features/feature-four/feature-card.svelte",
				lang: "svelte",
				code: featureFourCardSource
			},
			...decorIconFiles
		])
	},
	{
		id: "feature-five",
		title: "Feature Five",
		description:
			"A dense capability grid with patterned card backgrounds and a stronger product voice.",
		previewComponent: FeatureFive,
		previewHref: "/preview/features/five",
		previewMode: "inline",
		previewHeight: 520,
		installId: "feature-five",
		codeTree: createBlockCodeTree("feature-five:component", [
			{
				id: "feature-five:component",
				path: "components/efferd/features/feature-five/feature-five.svelte",
				lang: "svelte",
				code: featureFiveSource
			},
			{
				id: "feature-five:card",
				path: "components/efferd/features/feature-five/feature-card.svelte",
				lang: "svelte",
				code: featureFiveCardSource
			},
			...gridPatternFiles
		])
	}
];

export function getFeatureBlock(id: string) {
	return featureBlocks.find((block) => block.id === id);
}
