import type { BlockShowcaseItem } from "$lib/blocks/showcase";
import { createBlockCodeTree } from "$lib/blocks/showcase";
import HeaderFive from "$lib/components/efferd/header/header-five/header-five.svelte";
import HeaderFour from "$lib/components/efferd/header/header-four/header-four.svelte";
import HeaderOne from "$lib/components/efferd/header/header-one/header-one.svelte";
import HeaderThree from "$lib/components/efferd/header/header-three/header-three.svelte";
import HeaderTwo from "$lib/components/efferd/header/header-two/header-two.svelte";

import headerFiveDesktopNavSource from "$lib/components/efferd/header/header-five/desktop-nav.svelte?raw";
import headerFiveSource from "$lib/components/efferd/header/header-five/header-five.svelte?raw";
import headerFiveLinkItemSource from "$lib/components/efferd/header/header-five/link-item.svelte?raw";
import headerFiveMobileNavSource from "$lib/components/efferd/header/header-five/mobile-nav.svelte?raw";
import headerFiveNavLinksSource from "$lib/components/efferd/header/header-five/nav-links.ts?raw";
import headerFiveTypesSource from "$lib/components/efferd/header/header-five/types.ts?raw";
import headerFourSource from "$lib/components/efferd/header/header-four/header-four.svelte?raw";
import headerFourMobileNavSource from "$lib/components/efferd/header/header-four/mobile-nav.svelte?raw";
import headerFourNavLinksSource from "$lib/components/efferd/header/header-four/nav-links.ts?raw";
import headerOneSource from "$lib/components/efferd/header/header-one/header-one.svelte?raw";
import headerOneMobileNavSource from "$lib/components/efferd/header/header-one/mobile-nav.svelte?raw";
import headerOneNavLinksSource from "$lib/components/efferd/header/header-one/nav-links.ts?raw";
import headerThreeDesktopNavSource from "$lib/components/efferd/header/header-three/desktop-nav.svelte?raw";
import headerThreeSource from "$lib/components/efferd/header/header-three/header-three.svelte?raw";
import headerThreeLinkItemSource from "$lib/components/efferd/header/header-three/link-item.svelte?raw";
import headerThreeMobileNavSource from "$lib/components/efferd/header/header-three/mobile-nav.svelte?raw";
import headerThreeNavLinksSource from "$lib/components/efferd/header/header-three/nav-links.ts?raw";
import headerThreeTypesSource from "$lib/components/efferd/header/header-three/types.ts?raw";
import headerTwoSource from "$lib/components/efferd/header/header-two/header-two.svelte?raw";
import headerTwoMobileNavSource from "$lib/components/efferd/header/header-two/mobile-nav.svelte?raw";
import headerTwoNavLinksSource from "$lib/components/efferd/header/header-two/nav-links.ts?raw";
import navigationMenuContentSource from "$lib/components/ui/navigation-menu/navigation-menu-content.svelte?raw";
import navigationMenuIndexSource from "$lib/components/ui/navigation-menu/index.ts?raw";
import navigationMenuIndicatorSource from "$lib/components/ui/navigation-menu/navigation-menu-indicator.svelte?raw";
import navigationMenuItemSource from "$lib/components/ui/navigation-menu/navigation-menu-item.svelte?raw";
import navigationMenuLinkSource from "$lib/components/ui/navigation-menu/navigation-menu-link.svelte?raw";
import navigationMenuListSource from "$lib/components/ui/navigation-menu/navigation-menu-list.svelte?raw";
import navigationMenuRootSource from "$lib/components/ui/navigation-menu/navigation-menu.svelte?raw";
import navigationMenuTriggerSource from "$lib/components/ui/navigation-menu/navigation-menu-trigger.svelte?raw";
import navigationMenuViewportSource from "$lib/components/ui/navigation-menu/navigation-menu-viewport.svelte?raw";
import portalBackdropSource from "$lib/components/ui/portal/portal-backdrop.svelte?raw";
import portalIndexSource from "$lib/components/ui/portal/index.ts?raw";
import portalSource from "$lib/components/ui/portal/portal.svelte?raw";
import useScrollHookSource from "$lib/hooks/use-scroll.svelte.ts?raw";
import logoSvgSource from "$lib/svgs/logo.svelte?raw";

const buttonFiles = [
	{
		id: "shared:button",
		path: "components/ui/button/button.svelte",
		externalUrl: "https://shadcn-svelte.com/docs/components/button",
		externalLabel: "Shadcn Svelte Button"
	}
];

const logoFiles = [
	{
		id: "shared:logo-svg",
		path: "svgs/logo.svelte",
		lang: "svelte" as const,
		code: logoSvgSource
	}
];

const navigationMenuFiles = [
	{
		id: "shared:navigation-menu-index",
		path: "components/ui/navigation-menu/index.ts",
		lang: "typescript" as const,
		code: navigationMenuIndexSource
	},
	{
		id: "shared:navigation-menu-root",
		path: "components/ui/navigation-menu/navigation-menu.svelte",
		lang: "svelte" as const,
		code: navigationMenuRootSource
	},
	{
		id: "shared:navigation-menu-content",
		path: "components/ui/navigation-menu/navigation-menu-content.svelte",
		lang: "svelte" as const,
		code: navigationMenuContentSource
	},
	{
		id: "shared:navigation-menu-indicator",
		path: "components/ui/navigation-menu/navigation-menu-indicator.svelte",
		lang: "svelte" as const,
		code: navigationMenuIndicatorSource
	},
	{
		id: "shared:navigation-menu-item",
		path: "components/ui/navigation-menu/navigation-menu-item.svelte",
		lang: "svelte" as const,
		code: navigationMenuItemSource
	},
	{
		id: "shared:navigation-menu-link",
		path: "components/ui/navigation-menu/navigation-menu-link.svelte",
		lang: "svelte" as const,
		code: navigationMenuLinkSource
	},
	{
		id: "shared:navigation-menu-list",
		path: "components/ui/navigation-menu/navigation-menu-list.svelte",
		lang: "svelte" as const,
		code: navigationMenuListSource
	},
	{
		id: "shared:navigation-menu-trigger",
		path: "components/ui/navigation-menu/navigation-menu-trigger.svelte",
		lang: "svelte" as const,
		code: navigationMenuTriggerSource
	},
	{
		id: "shared:navigation-menu-viewport",
		path: "components/ui/navigation-menu/navigation-menu-viewport.svelte",
		lang: "svelte" as const,
		code: navigationMenuViewportSource
	}
];

const portalFiles = [
	{
		id: "shared:portal-index",
		path: "components/ui/portal/index.ts",
		lang: "typescript" as const,
		code: portalIndexSource
	},
	{
		id: "shared:portal",
		path: "components/ui/portal/portal.svelte",
		lang: "svelte" as const,
		code: portalSource
	},
	{
		id: "shared:portal-backdrop",
		path: "components/ui/portal/portal-backdrop.svelte",
		lang: "svelte" as const,
		code: portalBackdropSource
	}
];

const scrollHookFiles = [
	{
		id: "shared:use-scroll",
		path: "hooks/use-scroll.svelte.ts",
		lang: "typescript" as const,
		code: useScrollHookSource
	}
];

export const headerBlocks: BlockShowcaseItem[] = [
	{
		id: "header-one",
		title: "Header One",
		description: "A clean sticky header with simple nav links and a compact mobile sheet.",
		previewComponent: HeaderOne,
		previewHref: "/preview/header/one",
		previewMode: "iframe",
		previewHeight: 860,
		installId: "header-one",
		codeTree: createBlockCodeTree("header-one:component", [
			{
				id: "header-one:component",
				path: "components/efferd/header/header-one/header-one.svelte",
				lang: "svelte",
				code: headerOneSource
			},
			{
				id: "header-one:mobile-nav",
				path: "components/efferd/header/header-one/mobile-nav.svelte",
				lang: "svelte",
				code: headerOneMobileNavSource
			},
			{
				id: "header-one:nav-links",
				path: "components/efferd/header/header-one/nav-links.ts",
				lang: "typescript",
				code: headerOneNavLinksSource
			},
			...buttonFiles,
			...logoFiles,
			...portalFiles,
			...scrollHookFiles
		])
	},
	{
		id: "header-two",
		title: "Header Two",
		description: "A framed sticky header with tighter proportions and a softer product shell.",
		previewComponent: HeaderTwo,
		previewHref: "/preview/header/two",
		previewMode: "iframe",
		previewHeight: 860,
		installId: "header-two",
		codeTree: createBlockCodeTree("header-two:component", [
			{
				id: "header-two:component",
				path: "components/efferd/header/header-two/header-two.svelte",
				lang: "svelte",
				code: headerTwoSource
			},
			{
				id: "header-two:mobile-nav",
				path: "components/efferd/header/header-two/mobile-nav.svelte",
				lang: "svelte",
				code: headerTwoMobileNavSource
			},
			{
				id: "header-two:nav-links",
				path: "components/efferd/header/header-two/nav-links.ts",
				lang: "typescript",
				code: headerTwoNavLinksSource
			},
			...buttonFiles,
			...logoFiles,
			...portalFiles,
			...scrollHookFiles
		])
	},
	{
		id: "header-three",
		title: "Header Three",
		description: "A richer sticky header with mega-menu navigation and a full mobile fallback.",
		previewComponent: HeaderThree,
		previewHref: "/preview/header/three",
		previewMode: "iframe",
		previewHeight: 980,
		installId: "header-three",
		codeTree: createBlockCodeTree("header-three:component", [
			{
				id: "header-three:component",
				path: "components/efferd/header/header-three/header-three.svelte",
				lang: "svelte",
				code: headerThreeSource
			},
			{
				id: "header-three:desktop-nav",
				path: "components/efferd/header/header-three/desktop-nav.svelte",
				lang: "svelte",
				code: headerThreeDesktopNavSource
			},
			{
				id: "header-three:mobile-nav",
				path: "components/efferd/header/header-three/mobile-nav.svelte",
				lang: "svelte",
				code: headerThreeMobileNavSource
			},
			{
				id: "header-three:link-item",
				path: "components/efferd/header/header-three/link-item.svelte",
				lang: "svelte",
				code: headerThreeLinkItemSource
			},
			{
				id: "header-three:nav-links",
				path: "components/efferd/header/header-three/nav-links.ts",
				lang: "typescript",
				code: headerThreeNavLinksSource
			},
			{
				id: "header-three:types",
				path: "components/efferd/header/header-three/types.ts",
				lang: "typescript",
				code: headerThreeTypesSource
			},
			...buttonFiles,
			...logoFiles,
			...navigationMenuFiles,
			...portalFiles,
			...scrollHookFiles
		])
	},
	{
		id: "header-four",
		title: "Header Four",
		description:
			"A floating rounded header with stronger auth actions and a simplified mobile drawer.",
		previewComponent: HeaderFour,
		previewHref: "/preview/header/four",
		previewMode: "iframe",
		previewHeight: 860,
		installId: "header-four",
		codeTree: createBlockCodeTree("header-four:component", [
			{
				id: "header-four:component",
				path: "components/efferd/header/header-four/header-four.svelte",
				lang: "svelte",
				code: headerFourSource
			},
			{
				id: "header-four:mobile-nav",
				path: "components/efferd/header/header-four/mobile-nav.svelte",
				lang: "svelte",
				code: headerFourMobileNavSource
			},
			{
				id: "header-four:nav-links",
				path: "components/efferd/header/header-four/nav-links.ts",
				lang: "typescript",
				code: headerFourNavLinksSource
			},
			...buttonFiles,
			...logoFiles,
			...portalFiles,
			...scrollHookFiles
		])
	},
	{
		id: "header-five",
		title: "Header Five",
		description:
			"A polished rounded header with compact mega-menu panels and stronger pill-shaped actions.",
		previewComponent: HeaderFive,
		previewHref: "/preview/header/five",
		previewMode: "iframe",
		previewHeight: 980,
		installId: "header-five",
		codeTree: createBlockCodeTree("header-five:component", [
			{
				id: "header-five:component",
				path: "components/efferd/header/header-five/header-five.svelte",
				lang: "svelte",
				code: headerFiveSource
			},
			{
				id: "header-five:desktop-nav",
				path: "components/efferd/header/header-five/desktop-nav.svelte",
				lang: "svelte",
				code: headerFiveDesktopNavSource
			},
			{
				id: "header-five:mobile-nav",
				path: "components/efferd/header/header-five/mobile-nav.svelte",
				lang: "svelte",
				code: headerFiveMobileNavSource
			},
			{
				id: "header-five:link-item",
				path: "components/efferd/header/header-five/link-item.svelte",
				lang: "svelte",
				code: headerFiveLinkItemSource
			},
			{
				id: "header-five:nav-links",
				path: "components/efferd/header/header-five/nav-links.ts",
				lang: "typescript",
				code: headerFiveNavLinksSource
			},
			{
				id: "header-five:types",
				path: "components/efferd/header/header-five/types.ts",
				lang: "typescript",
				code: headerFiveTypesSource
			},
			...buttonFiles,
			...logoFiles,
			...navigationMenuFiles,
			...portalFiles,
			...scrollHookFiles
		])
	}
];

export function getHeaderBlock(id: string) {
	return headerBlocks.find((block) => block.id === id);
}
