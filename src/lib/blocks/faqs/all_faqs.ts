import type { BlockShowcaseItem } from "$lib/blocks/showcase";
import { createBlockCodeTree } from "$lib/blocks/showcase";
import FaqFive from "$lib/components/efferd/faqs/faq-five.svelte";
import FaqFour from "$lib/components/efferd/faqs/faq-four.svelte";
import FaqOne from "$lib/components/efferd/faqs/faq-one.svelte";
import FaqThree from "$lib/components/efferd/faqs/faq-three.svelte";
import FaqTwo from "$lib/components/efferd/faqs/faq-two.svelte";

import faqFiveSource from "$lib/components/efferd/faqs/faq-five.svelte?raw";
import faqFourSource from "$lib/components/efferd/faqs/faq-four.svelte?raw";
import faqOneSource from "$lib/components/efferd/faqs/faq-one.svelte?raw";
import faqThreeSource from "$lib/components/efferd/faqs/faq-three.svelte?raw";
import faqTwoSource from "$lib/components/efferd/faqs/faq-two.svelte?raw";
import accordionContentSource from "$lib/components/ui/accordion/accordion-content.svelte?raw";
import accordionItemSource from "$lib/components/ui/accordion/accordion-item.svelte?raw";
import accordionIndexSource from "$lib/components/ui/accordion/index.ts?raw";
import accordionSource from "$lib/components/ui/accordion/accordion.svelte?raw";
import accordionTriggerSource from "$lib/components/ui/accordion/accordion-trigger.svelte?raw";
import decorIconIndexSource from "$lib/components/ui/decor-icon/index.ts?raw";
import decorIconSource from "$lib/components/ui/decor-icon/decor-icon.svelte?raw";
import emptyContentSource from "$lib/components/ui/empty/empty-content.svelte?raw";
import emptyHeaderSource from "$lib/components/ui/empty/empty-header.svelte?raw";
import emptyIndexSource from "$lib/components/ui/empty/index.ts?raw";
import emptyMediaSource from "$lib/components/ui/empty/empty-media.svelte?raw";
import emptySource from "$lib/components/ui/empty/empty.svelte?raw";
import emptyTitleSource from "$lib/components/ui/empty/empty-title.svelte?raw";
import dividerIndexSource from "$lib/components/ui/full-width-divider/index.ts?raw";
import dividerSource from "$lib/components/ui/full-width-divider/full-width-divider.svelte?raw";
import inputGroupAddonSource from "$lib/components/ui/input-group/input-group-addon.svelte?raw";
import inputGroupIndexSource from "$lib/components/ui/input-group/index.ts?raw";
import inputGroupInputSource from "$lib/components/ui/input-group/input-group-input.svelte?raw";
import inputGroupSource from "$lib/components/ui/input-group/input-group.svelte?raw";

const buttonFiles = [
	{
		id: "shared:button",
		path: "components/ui/button/button.svelte",
		externalUrl: "https://shadcn-svelte.com/docs/components/button",
		externalLabel: "Shadcn Svelte Button"
	}
];

const accordionFiles = [
	{
		id: "shared:accordion-index",
		path: "components/ui/accordion/index.ts",
		lang: "typescript" as const,
		code: accordionIndexSource
	},
	{
		id: "shared:accordion-root",
		path: "components/ui/accordion/accordion.svelte",
		lang: "svelte" as const,
		code: accordionSource
	},
	{
		id: "shared:accordion-item",
		path: "components/ui/accordion/accordion-item.svelte",
		lang: "svelte" as const,
		code: accordionItemSource
	},
	{
		id: "shared:accordion-trigger",
		path: "components/ui/accordion/accordion-trigger.svelte",
		lang: "svelte" as const,
		code: accordionTriggerSource
	},
	{
		id: "shared:accordion-content",
		path: "components/ui/accordion/accordion-content.svelte",
		lang: "svelte" as const,
		code: accordionContentSource
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

const emptyFiles = [
	{
		id: "shared:empty-index",
		path: "components/ui/empty/index.ts",
		lang: "typescript" as const,
		code: emptyIndexSource
	},
	{
		id: "shared:empty-root",
		path: "components/ui/empty/empty.svelte",
		lang: "svelte" as const,
		code: emptySource
	},
	{
		id: "shared:empty-header",
		path: "components/ui/empty/empty-header.svelte",
		lang: "svelte" as const,
		code: emptyHeaderSource
	},
	{
		id: "shared:empty-media",
		path: "components/ui/empty/empty-media.svelte",
		lang: "svelte" as const,
		code: emptyMediaSource
	},
	{
		id: "shared:empty-title",
		path: "components/ui/empty/empty-title.svelte",
		lang: "svelte" as const,
		code: emptyTitleSource
	},
	{
		id: "shared:empty-content",
		path: "components/ui/empty/empty-content.svelte",
		lang: "svelte" as const,
		code: emptyContentSource
	}
];

const inputGroupFiles = [
	{
		id: "shared:input-group-index",
		path: "components/ui/input-group/index.ts",
		lang: "typescript" as const,
		code: inputGroupIndexSource
	},
	{
		id: "shared:input-group",
		path: "components/ui/input-group/input-group.svelte",
		lang: "svelte" as const,
		code: inputGroupSource
	},
	{
		id: "shared:input-group-addon",
		path: "components/ui/input-group/input-group-addon.svelte",
		lang: "svelte" as const,
		code: inputGroupAddonSource
	},
	{
		id: "shared:input-group-input",
		path: "components/ui/input-group/input-group-input.svelte",
		lang: "svelte" as const,
		code: inputGroupInputSource
	}
];

export const faqBlocks: BlockShowcaseItem[] = [
	{
		id: "faq-one",
		title: "FAQ One",
		description:
			"A compact FAQ stack with a centered heading and a classic single-column accordion.",
		previewComponent: FaqOne,
		previewHref: "/preview/faqs/one",
		previewMode: "iframe",
		previewHeight: 520,
		installId: "faq-one",
		codeTree: createBlockCodeTree("faq-one:component", [
			{
				id: "faq-one:component",
				path: "components/efferd/faqs/faq-one.svelte",
				lang: "svelte",
				code: faqOneSource
			},
			...accordionFiles
		])
	},
	{
		id: "faq-two",
		title: "FAQ Two",
		description: "A split FAQ layout with a fixed intro column and full-height answer rail.",
		previewComponent: FaqTwo,
		previewHref: "/preview/faqs/two",
		previewMode: "iframe",
		previewHeight: 900,
		installId: "faq-two",
		codeTree: createBlockCodeTree("faq-two:component", [
			{
				id: "faq-two:component",
				path: "components/efferd/faqs/faq-two.svelte",
				lang: "svelte",
				code: faqTwoSource
			},
			...accordionFiles
		])
	},
	{
		id: "faq-three",
		title: "FAQ Three",
		description: "A guided editorial FAQ with divider rails and decorative timeline markers.",
		previewComponent: FaqThree,
		previewHref: "/preview/faqs/three",
		previewMode: "iframe",
		previewHeight: 900,
		installId: "faq-three",
		codeTree: createBlockCodeTree("faq-three:component", [
			{
				id: "faq-three:component",
				path: "components/efferd/faqs/faq-three.svelte",
				lang: "svelte",
				code: faqThreeSource
			},
			...accordionFiles,
			...decorIconFiles
		])
	},
	{
		id: "faq-four",
		title: "FAQ Four",
		description:
			"A categorized FAQ explorer with topic switching and softly framed accordion rows.",
		previewComponent: FaqFour,
		previewHref: "/preview/faqs/four",
		previewMode: "iframe",
		previewHeight: 900,
		installId: "faq-four",
		codeTree: createBlockCodeTree("faq-four:component", [
			{
				id: "faq-four:component",
				path: "components/efferd/faqs/faq-four.svelte",
				lang: "svelte",
				code: faqFourSource
			},
			...accordionFiles,
			...buttonFiles
		])
	},
	{
		id: "faq-five",
		title: "FAQ Five",
		description:
			"A searchable FAQ page with category filters, empty state handling, and structured dividers.",
		previewComponent: FaqFive,
		previewHref: "/preview/faqs/five",
		previewMode: "iframe",
		previewHeight: 980,
		installId: "faq-five",
		codeTree: createBlockCodeTree("faq-five:component", [
			{
				id: "faq-five:component",
				path: "components/efferd/faqs/faq-five.svelte",
				lang: "svelte",
				code: faqFiveSource
			},
			...accordionFiles,
			...buttonFiles,
			...dividerFiles,
			...emptyFiles,
			...inputGroupFiles
		])
	}
];

export function getFaqBlock(id: string) {
	return faqBlocks.find((block) => block.id === id);
}
