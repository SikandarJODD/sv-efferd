import type { BlockShowcaseItem } from "$lib/blocks/showcase";
import { createBlockCodeTree } from "$lib/blocks/showcase";
import IntegrationFive from "$lib/components/efferd/integrations/integration-five.svelte";
import IntegrationFour from "$lib/components/efferd/integrations/integration-four.svelte";
import IntegrationOne from "$lib/components/efferd/integrations/integration-one.svelte";
import IntegrationThree from "$lib/components/efferd/integrations/integration-three.svelte";
import IntegrationTwo from "$lib/components/efferd/integrations/integration-two.svelte";

import integrationCardFourSource from "$lib/components/efferd/integrations/integration-card-four.svelte?raw";
import integrationCardThreeSource from "$lib/components/efferd/integrations/integration-card-three.svelte?raw";
import integrationCardTwoSource from "$lib/components/efferd/integrations/integration-card-two.svelte?raw";
import integrationFiveSource from "$lib/components/efferd/integrations/integration-five.svelte?raw";
import integrationFourSource from "$lib/components/efferd/integrations/integration-four.svelte?raw";
import integrationOneSource from "$lib/components/efferd/integrations/integration-one.svelte?raw";
import integrationThreeSource from "$lib/components/efferd/integrations/integration-three.svelte?raw";
import integrationTwoSource from "$lib/components/efferd/integrations/integration-two.svelte?raw";
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

export const integrationBlocks: BlockShowcaseItem[] = [
	{
		id: "integration-one",
		title: "Integration One",
		description:
			"A compact integration strip with lightweight cards and a simple link-out action.",
		previewComponent: IntegrationOne,
		previewHref: "/preview/integrations/one",
		previewMode: "inline",
		previewHeight: 360,
		installId: "integration-one",
		codeTree: createBlockCodeTree("integration-one:component", [
			{
				id: "integration-one:component",
				path: "components/efferd/integrations/integration-one.svelte",
				lang: "svelte",
				code: integrationOneSource
			},
			...buttonFiles
		])
	},
	{
		id: "integration-two",
		title: "Integration Two",
		description:
			"A structured integration grid with framed cards and decorative corner accents.",
		previewComponent: IntegrationTwo,
		previewHref: "/preview/integrations/two",
		previewMode: "inline",
		previewHeight: 520,
		installId: "integration-two",
		codeTree: createBlockCodeTree("integration-two:component", [
			{
				id: "integration-two:component",
				path: "components/efferd/integrations/integration-two.svelte",
				lang: "svelte",
				code: integrationTwoSource
			},
			{
				id: "integration-two:card",
				path: "components/efferd/integrations/integration-card-two.svelte",
				lang: "svelte",
				code: integrationCardTwoSource
			},
			...decorIconFiles
		])
	},
	{
		id: "integration-three",
		title: "Integration Three",
		description: "A split integration hero with grid-positioned logos and divider rails.",
		previewComponent: IntegrationThree,
		previewHref: "/preview/integrations/three",
		previewMode: "inline",
		previewHeight: 560,
		installId: "integration-three",
		codeTree: createBlockCodeTree("integration-three:component", [
			{
				id: "integration-three:component",
				path: "components/efferd/integrations/integration-three.svelte",
				lang: "svelte",
				code: integrationThreeSource
			},
			{
				id: "integration-three:card",
				path: "components/efferd/integrations/integration-card-three.svelte",
				lang: "svelte",
				code: integrationCardThreeSource
			},
			...buttonFiles,
			...dividerFiles
		])
	},
	{
		id: "integration-four",
		title: "Integration Four",
		description:
			"A bolder integration grid pairing a large product statement with floating logo tiles.",
		previewComponent: IntegrationFour,
		previewHref: "/preview/integrations/four",
		previewMode: "inline",
		previewHeight: 560,
		installId: "integration-four",
		codeTree: createBlockCodeTree("integration-four:component", [
			{
				id: "integration-four:component",
				path: "components/efferd/integrations/integration-four.svelte",
				lang: "svelte",
				code: integrationFourSource
			},
			{
				id: "integration-four:card",
				path: "components/efferd/integrations/integration-card-four.svelte",
				lang: "svelte",
				code: integrationCardFourSource
			}
		])
	},
	{
		id: "integration-five",
		title: "Integration Five",
		description:
			"A centered integration cluster with overlapping logo pills and a stronger primary CTA.",
		previewComponent: IntegrationFive,
		previewHref: "/preview/integrations/five",
		previewMode: "inline",
		previewHeight: 520,
		installId: "integration-five",
		codeTree: createBlockCodeTree("integration-five:component", [
			{
				id: "integration-five:component",
				path: "components/efferd/integrations/integration-five.svelte",
				lang: "svelte",
				code: integrationFiveSource
			},
			...buttonFiles
		])
	}
];

export function getIntegrationBlock(id: string) {
	return integrationBlocks.find((block) => block.id === id);
}
