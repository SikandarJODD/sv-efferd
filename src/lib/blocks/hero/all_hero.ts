import type { BlockShowcaseItem } from '$lib/blocks/showcase';
import { createBlockCodeTree } from '$lib/blocks/showcase';
import HeroOnePreview from '$lib/components/efferd/hero/hero-one/preview.svelte';
import HeroThreePreview from '$lib/components/efferd/hero/hero-three/preview.svelte';
import HeroTwoPreview from '$lib/components/efferd/hero/hero-two/preview.svelte';

import headerOneSource from '$lib/components/efferd/header/header-one/header-one.svelte?raw';
import headerOneMobileNavSource from '$lib/components/efferd/header/header-one/mobile-nav.svelte?raw';
import headerOneNavLinksSource from '$lib/components/efferd/header/header-one/nav-links.ts?raw';
import headerThreeDesktopNavSource from '$lib/components/efferd/header/header-three/desktop-nav.svelte?raw';
import headerThreeSource from '$lib/components/efferd/header/header-three/header-three.svelte?raw';
import headerThreeLinkItemSource from '$lib/components/efferd/header/header-three/link-item.svelte?raw';
import headerThreeMobileNavSource from '$lib/components/efferd/header/header-three/mobile-nav.svelte?raw';
import headerThreeNavLinksSource from '$lib/components/efferd/header/header-three/nav-links.ts?raw';
import headerThreeTypesSource from '$lib/components/efferd/header/header-three/types.ts?raw';
import headerTwoSource from '$lib/components/efferd/header/header-two/header-two.svelte?raw';
import headerTwoMobileNavSource from '$lib/components/efferd/header/header-two/mobile-nav.svelte?raw';
import headerTwoNavLinksSource from '$lib/components/efferd/header/header-two/nav-links.ts?raw';
import heroOneSource from '$lib/components/efferd/hero/hero-one/hero.svelte?raw';
import heroOneLogoSectionSource from '$lib/components/efferd/hero/hero-one/logo-section.svelte?raw';
import heroOnePreviewSource from '$lib/components/efferd/hero/hero-one/preview.svelte?raw';
import heroThreeSource from '$lib/components/efferd/hero/hero-three/hero.svelte?raw';
import heroThreeLogoSectionSource from '$lib/components/efferd/hero/hero-three/logo-section.svelte?raw';
import heroThreePreviewSource from '$lib/components/efferd/hero/hero-three/preview.svelte?raw';
import heroTwoSource from '$lib/components/efferd/hero/hero-two/hero.svelte?raw';
import heroTwoLogoSectionSource from '$lib/components/efferd/hero/hero-two/logo-section.svelte?raw';
import heroTwoPreviewSource from '$lib/components/efferd/hero/hero-two/preview.svelte?raw';
import logoCloudFiveSource from '$lib/components/efferd/logo-cloud/five/logo-cloud-five.svelte?raw';
import logoCloudThreeSource from '$lib/components/efferd/logo-cloud/three/logo-cloud-three.svelte?raw';
import logoCloudTwoLogoCardSource from '$lib/components/efferd/logo-cloud/two/logo-card.svelte?raw';
import logoCloudTwoSource from '$lib/components/efferd/logo-cloud/two/logo-cloud-two.svelte?raw';
import marqueeIndexSource from '$lib/components/magic/marquee/index.ts?raw';
import marqueeSource from '$lib/components/magic/marquee/marquee.svelte?raw';
import navigationMenuContentSource from '$lib/components/ui/navigation-menu/navigation-menu-content.svelte?raw';
import navigationMenuIndexSource from '$lib/components/ui/navigation-menu/index.ts?raw';
import navigationMenuIndicatorSource from '$lib/components/ui/navigation-menu/navigation-menu-indicator.svelte?raw';
import navigationMenuItemSource from '$lib/components/ui/navigation-menu/navigation-menu-item.svelte?raw';
import navigationMenuLinkSource from '$lib/components/ui/navigation-menu/navigation-menu-link.svelte?raw';
import navigationMenuListSource from '$lib/components/ui/navigation-menu/navigation-menu-list.svelte?raw';
import navigationMenuRootSource from '$lib/components/ui/navigation-menu/navigation-menu.svelte?raw';
import navigationMenuTriggerSource from '$lib/components/ui/navigation-menu/navigation-menu-trigger.svelte?raw';
import navigationMenuViewportSource from '$lib/components/ui/navigation-menu/navigation-menu-viewport.svelte?raw';
import portalBackdropSource from '$lib/components/ui/portal/portal-backdrop.svelte?raw';
import portalIndexSource from '$lib/components/ui/portal/index.ts?raw';
import portalSource from '$lib/components/ui/portal/portal.svelte?raw';
import decorIconIndexSource from '$lib/components/ui/decor-icon/index.ts?raw';
import decorIconSource from '$lib/components/ui/decor-icon/decor-icon.svelte?raw';
import dividerIndexSource from '$lib/components/ui/full-width-divider/index.ts?raw';
import dividerSource from '$lib/components/ui/full-width-divider/full-width-divider.svelte?raw';
import useScrollHookSource from '$lib/hooks/use-scroll.svelte.ts?raw';
import logoSvgSource from '$lib/svgs/logo.svelte?raw';

const buttonFiles = [
	{
		id: 'shared:button',
		path: 'components/ui/button/button.svelte',
		externalUrl: 'https://shadcn-svelte.com/docs/components/button',
		externalLabel: 'Shadcn Svelte Button'
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

const logoFiles = [
	{
		id: 'shared:logo-svg',
		path: 'svgs/logo.svelte',
		lang: 'svelte' as const,
		code: logoSvgSource
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

const navigationMenuFiles = [
	{
		id: 'shared:navigation-menu-index',
		path: 'components/ui/navigation-menu/index.ts',
		lang: 'typescript' as const,
		code: navigationMenuIndexSource
	},
	{
		id: 'shared:navigation-menu-root',
		path: 'components/ui/navigation-menu/navigation-menu.svelte',
		lang: 'svelte' as const,
		code: navigationMenuRootSource
	},
	{
		id: 'shared:navigation-menu-content',
		path: 'components/ui/navigation-menu/navigation-menu-content.svelte',
		lang: 'svelte' as const,
		code: navigationMenuContentSource
	},
	{
		id: 'shared:navigation-menu-indicator',
		path: 'components/ui/navigation-menu/navigation-menu-indicator.svelte',
		lang: 'svelte' as const,
		code: navigationMenuIndicatorSource
	},
	{
		id: 'shared:navigation-menu-item',
		path: 'components/ui/navigation-menu/navigation-menu-item.svelte',
		lang: 'svelte' as const,
		code: navigationMenuItemSource
	},
	{
		id: 'shared:navigation-menu-link',
		path: 'components/ui/navigation-menu/navigation-menu-link.svelte',
		lang: 'svelte' as const,
		code: navigationMenuLinkSource
	},
	{
		id: 'shared:navigation-menu-list',
		path: 'components/ui/navigation-menu/navigation-menu-list.svelte',
		lang: 'svelte' as const,
		code: navigationMenuListSource
	},
	{
		id: 'shared:navigation-menu-trigger',
		path: 'components/ui/navigation-menu/navigation-menu-trigger.svelte',
		lang: 'svelte' as const,
		code: navigationMenuTriggerSource
	},
	{
		id: 'shared:navigation-menu-viewport',
		path: 'components/ui/navigation-menu/navigation-menu-viewport.svelte',
		lang: 'svelte' as const,
		code: navigationMenuViewportSource
	}
];

const portalFiles = [
	{
		id: 'shared:portal-index',
		path: 'components/ui/portal/index.ts',
		lang: 'typescript' as const,
		code: portalIndexSource
	},
	{
		id: 'shared:portal',
		path: 'components/ui/portal/portal.svelte',
		lang: 'svelte' as const,
		code: portalSource
	},
	{
		id: 'shared:portal-backdrop',
		path: 'components/ui/portal/portal-backdrop.svelte',
		lang: 'svelte' as const,
		code: portalBackdropSource
	}
];

const scrollHookFiles = [
	{
		id: 'shared:use-scroll',
		path: 'hooks/use-scroll.svelte.ts',
		lang: 'typescript' as const,
		code: useScrollHookSource
	}
];

const headerOneFiles = [
	{
		id: 'hero-one:header',
		path: 'components/efferd/header/header-one/header-one.svelte',
		lang: 'svelte' as const,
		code: headerOneSource
	},
	{
		id: 'hero-one:header-mobile-nav',
		path: 'components/efferd/header/header-one/mobile-nav.svelte',
		lang: 'svelte' as const,
		code: headerOneMobileNavSource
	},
	{
		id: 'hero-one:header-nav-links',
		path: 'components/efferd/header/header-one/nav-links.ts',
		lang: 'typescript' as const,
		code: headerOneNavLinksSource
	}
];

const headerTwoFiles = [
	{
		id: 'hero-two:header',
		path: 'components/efferd/header/header-two/header-two.svelte',
		lang: 'svelte' as const,
		code: headerTwoSource
	},
	{
		id: 'hero-two:header-mobile-nav',
		path: 'components/efferd/header/header-two/mobile-nav.svelte',
		lang: 'svelte' as const,
		code: headerTwoMobileNavSource
	},
	{
		id: 'hero-two:header-nav-links',
		path: 'components/efferd/header/header-two/nav-links.ts',
		lang: 'typescript' as const,
		code: headerTwoNavLinksSource
	}
];

const headerThreeFiles = [
	{
		id: 'hero-three:header',
		path: 'components/efferd/header/header-three/header-three.svelte',
		lang: 'svelte' as const,
		code: headerThreeSource
	},
	{
		id: 'hero-three:header-desktop-nav',
		path: 'components/efferd/header/header-three/desktop-nav.svelte',
		lang: 'svelte' as const,
		code: headerThreeDesktopNavSource
	},
	{
		id: 'hero-three:header-mobile-nav',
		path: 'components/efferd/header/header-three/mobile-nav.svelte',
		lang: 'svelte' as const,
		code: headerThreeMobileNavSource
	},
	{
		id: 'hero-three:header-link-item',
		path: 'components/efferd/header/header-three/link-item.svelte',
		lang: 'svelte' as const,
		code: headerThreeLinkItemSource
	},
	{
		id: 'hero-three:header-nav-links',
		path: 'components/efferd/header/header-three/nav-links.ts',
		lang: 'typescript' as const,
		code: headerThreeNavLinksSource
	},
	{
		id: 'hero-three:header-types',
		path: 'components/efferd/header/header-three/types.ts',
		lang: 'typescript' as const,
		code: headerThreeTypesSource
	}
];

const logoCloudTwoFiles = [
	{
		id: 'hero-two:logo-cloud',
		path: 'components/efferd/logo-cloud/two/logo-cloud-two.svelte',
		lang: 'svelte' as const,
		code: logoCloudTwoSource
	},
	{
		id: 'hero-two:logo-card',
		path: 'components/efferd/logo-cloud/two/logo-card.svelte',
		lang: 'svelte' as const,
		code: logoCloudTwoLogoCardSource
	}
];

const logoCloudThreeFiles = [
	{
		id: 'hero-one:logo-cloud',
		path: 'components/efferd/logo-cloud/three/logo-cloud-three.svelte',
		lang: 'svelte' as const,
		code: logoCloudThreeSource
	},
	...marqueeFiles
];

const logoCloudFiveFiles = [
	{
		id: 'hero-three:logo-cloud',
		path: 'components/efferd/logo-cloud/five/logo-cloud-five.svelte',
		lang: 'svelte' as const,
		code: logoCloudFiveSource
	}
];

export const heroBlocks: BlockShowcaseItem[] = [
	{
		id: 'hero-one',
		title: 'Hero One',
		description:
			'A full hero composition with sticky header, editorial spotlight, and a marquee trust band.',
		previewComponent: HeroOnePreview,
		previewHref: '/preview/hero/one',
		previewMode: 'iframe',
		previewHeight: 1180,
		installId: 'hero-one',
		codeTree: createBlockCodeTree('hero-one:preview', [
			{
				id: 'hero-one:preview',
				path: 'components/efferd/hero/hero-one/preview.svelte',
				lang: 'svelte',
				code: heroOnePreviewSource
			},
			{
				id: 'hero-one:hero',
				path: 'components/efferd/hero/hero-one/hero.svelte',
				lang: 'svelte',
				code: heroOneSource
			},
			{
				id: 'hero-one:logo-section',
				path: 'components/efferd/hero/hero-one/logo-section.svelte',
				lang: 'svelte',
				code: heroOneLogoSectionSource
			},
			...headerOneFiles,
			...logoCloudThreeFiles,
			...buttonFiles,
			...logoFiles,
			...portalFiles,
			...scrollHookFiles
		])
	},
	{
		id: 'hero-two',
		title: 'Hero Two',
		description:
			'A framed product hero with a floating screen, structured header, and bordered logo section.',
		previewComponent: HeroTwoPreview,
		previewHref: '/preview/hero/two',
		previewMode: 'iframe',
		previewHeight: 1280,
		installId: 'hero-two',
		codeTree: createBlockCodeTree('hero-two:preview', [
			{
				id: 'hero-two:preview',
				path: 'components/efferd/hero/hero-two/preview.svelte',
				lang: 'svelte',
				code: heroTwoPreviewSource
			},
			{
				id: 'hero-two:hero',
				path: 'components/efferd/hero/hero-two/hero.svelte',
				lang: 'svelte',
				code: heroTwoSource
			},
			{
				id: 'hero-two:logo-section',
				path: 'components/efferd/hero/hero-two/logo-section.svelte',
				lang: 'svelte',
				code: heroTwoLogoSectionSource
			},
			...headerTwoFiles,
			...logoCloudTwoFiles,
			...buttonFiles,
			...decorIconFiles,
			...dividerFiles,
			...logoFiles,
			...portalFiles,
			...scrollHookFiles
		])
	},
	{
		id: 'hero-three',
		title: 'Hero Three',
		description:
			'A modern hero layout with mega-nav header, device mockup spotlight, and compact logo grid.',
		previewComponent: HeroThreePreview,
		previewHref: '/preview/hero/three',
		previewMode: 'iframe',
		previewHeight: 1220,
		installId: 'hero-three',
		codeTree: createBlockCodeTree('hero-three:preview', [
			{
				id: 'hero-three:preview',
				path: 'components/efferd/hero/hero-three/preview.svelte',
				lang: 'svelte',
				code: heroThreePreviewSource
			},
			{
				id: 'hero-three:hero',
				path: 'components/efferd/hero/hero-three/hero.svelte',
				lang: 'svelte',
				code: heroThreeSource
			},
			{
				id: 'hero-three:logo-section',
				path: 'components/efferd/hero/hero-three/logo-section.svelte',
				lang: 'svelte',
				code: heroThreeLogoSectionSource
			},
			...headerThreeFiles,
			...logoCloudFiveFiles,
			...buttonFiles,
			...logoFiles,
			...navigationMenuFiles,
			...portalFiles,
			...scrollHookFiles
		])
	}
];

export function getHeroBlock(id: string) {
	return heroBlocks.find((block) => block.id === id);
}
