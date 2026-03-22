import type { BlockShowcaseItem } from "$lib/blocks/showcase";
import { createBlockCodeTree } from "$lib/blocks/showcase";
import AuthFive from "$lib/components/efferd/auth/auth-five.svelte";
import AuthFour from "$lib/components/efferd/auth/auth-four.svelte";
import AuthOne from "$lib/components/efferd/auth/auth-one.svelte";
import AuthThree from "$lib/components/efferd/auth/auth-three.svelte";
import AuthTwo from "$lib/components/efferd/auth/auth-two.svelte";

import authFiveSource from "$lib/components/efferd/auth/auth-five.svelte?raw";
import authFourSource from "$lib/components/efferd/auth/auth-four.svelte?raw";
import authOneSource from "$lib/components/efferd/auth/auth-one.svelte?raw";
import authThreeSource from "$lib/components/efferd/auth/auth-three.svelte?raw";
import authTwoSource from "$lib/components/efferd/auth/auth-two.svelte?raw";
import particlesIndexSource from "$lib/components/magic/particles/index.ts?raw";
import particlesSource from "$lib/components/magic/particles/particles.svelte?raw";
import authDividerIndexSource from "$lib/components/ui/auth-divider/index.ts?raw";
import authDividerSource from "$lib/components/ui/auth-divider/auth-divider.svelte?raw";
import decorIconIndexSource from "$lib/components/ui/decor-icon/index.ts?raw";
import decorIconSource from "$lib/components/ui/decor-icon/decor-icon.svelte?raw";
import floatingPathsIndexSource from "$lib/components/ui/floating-paths/index.ts?raw";
import floatingPathsSource from "$lib/components/ui/floating-paths/floating-paths.svelte?raw";
import dividerIndexSource from "$lib/components/ui/full-width-divider/index.ts?raw";
import dividerSource from "$lib/components/ui/full-width-divider/full-width-divider.svelte?raw";
import inputGroupAddonSource from "$lib/components/ui/input-group/input-group-addon.svelte?raw";
import inputGroupIndexSource from "$lib/components/ui/input-group/index.ts?raw";
import inputGroupInputSource from "$lib/components/ui/input-group/input-group-input.svelte?raw";
import inputGroupSource from "$lib/components/ui/input-group/input-group.svelte?raw";
import appleSvgSource from "$lib/svgs/apple.svelte?raw";
import githubSvgSource from "$lib/svgs/github.svelte?raw";
import googleSvgSource from "$lib/svgs/google.svelte?raw";
import logoSvgSource from "$lib/svgs/logo.svelte?raw";

const buttonFiles = [
	{
		id: "shared:button",
		path: "components/ui/button/button.svelte",
		externalUrl: "https://shadcn-svelte.com/docs/components/button",
		externalLabel: "Shadcn Svelte Button"
	}
];

const authDividerFiles = [
	{
		id: "shared:auth-divider-index",
		path: "components/ui/auth-divider/index.ts",
		lang: "typescript" as const,
		code: authDividerIndexSource
	},
	{
		id: "shared:auth-divider",
		path: "components/ui/auth-divider/auth-divider.svelte",
		lang: "svelte" as const,
		code: authDividerSource
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

const particlesFiles = [
	{
		id: "shared:particles-index",
		path: "components/magic/particles/index.ts",
		lang: "typescript" as const,
		code: particlesIndexSource
	},
	{
		id: "shared:particles",
		path: "components/magic/particles/particles.svelte",
		lang: "svelte" as const,
		code: particlesSource
	}
];

const floatingPathsFiles = [
	{
		id: "shared:floating-paths-index",
		path: "components/ui/floating-paths/index.ts",
		lang: "typescript" as const,
		code: floatingPathsIndexSource
	},
	{
		id: "shared:floating-paths",
		path: "components/ui/floating-paths/floating-paths.svelte",
		lang: "svelte" as const,
		code: floatingPathsSource
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

const googleFiles = [
	{
		id: "shared:google-svg",
		path: "svgs/google.svelte",
		lang: "svelte" as const,
		code: googleSvgSource
	}
];

const githubFiles = [
	{
		id: "shared:github-svg",
		path: "svgs/github.svelte",
		lang: "svelte" as const,
		code: githubSvgSource
	}
];

const appleFiles = [
	{
		id: "shared:apple-svg",
		path: "svgs/apple.svelte",
		lang: "svelte" as const,
		code: appleSvgSource
	}
];

export const authBlocks: BlockShowcaseItem[] = [
	{
		id: "auth-one",
		title: "Auth One",
		description:
			"A centered auth entry screen with ambient particles and social sign-in actions.",
		previewComponent: AuthOne,
		previewHref: "/preview/auth/one",
		previewMode: "iframe",
		previewHeight: 900,
		installId: "auth-one",
		codeTree: createBlockCodeTree("auth-one:component", [
			{
				id: "auth-one:component",
				path: "components/efferd/auth/auth-one.svelte",
				lang: "svelte",
				code: authOneSource
			},
			...particlesFiles,
			...buttonFiles,
			...logoFiles,
			...googleFiles,
			...githubFiles
		])
	},
	{
		id: "auth-two",
		title: "Auth Two",
		description:
			"A framed auth panel that combines email capture with side-by-side social login.",
		previewComponent: AuthTwo,
		previewHref: "/preview/auth/two",
		previewMode: "iframe",
		previewHeight: 900,
		installId: "auth-two",
		codeTree: createBlockCodeTree("auth-two:component", [
			{
				id: "auth-two:component",
				path: "components/efferd/auth/auth-two.svelte",
				lang: "svelte",
				code: authTwoSource
			},
			...buttonFiles,
			...authDividerFiles,
			...decorIconFiles,
			...inputGroupFiles,
			...googleFiles,
			...githubFiles
		])
	},
	{
		id: "auth-three",
		title: "Auth Three",
		description:
			"A minimal single-column auth flow with brand header and stacked sign-in options.",
		previewComponent: AuthThree,
		previewHref: "/preview/auth/three",
		previewMode: "iframe",
		previewHeight: 900,
		installId: "auth-three",
		codeTree: createBlockCodeTree("auth-three:component", [
			{
				id: "auth-three:component",
				path: "components/efferd/auth/auth-three.svelte",
				lang: "svelte",
				code: authThreeSource
			},
			...buttonFiles,
			...authDividerFiles,
			...inputGroupFiles,
			...logoFiles,
			...googleFiles,
			...githubFiles
		])
	},
	{
		id: "auth-four",
		title: "Auth Four",
		description:
			"A bordered auth layout with divider rails and a gentle email-first continuation flow.",
		previewComponent: AuthFour,
		previewHref: "/preview/auth/four",
		previewMode: "iframe",
		previewHeight: 900,
		installId: "auth-four",
		codeTree: createBlockCodeTree("auth-four:component", [
			{
				id: "auth-four:component",
				path: "components/efferd/auth/auth-four.svelte",
				lang: "svelte",
				code: authFourSource
			},
			...buttonFiles,
			...authDividerFiles,
			...dividerFiles,
			...inputGroupFiles,
			...logoFiles,
			...googleFiles
		])
	},
	{
		id: "auth-five",
		title: "Auth Five",
		description:
			"A split-screen auth experience with animated background paths and broader provider options.",
		previewComponent: AuthFive,
		previewHref: "/preview/auth/five",
		previewMode: "iframe",
		previewHeight: 900,
		installId: "auth-five",
		codeTree: createBlockCodeTree("auth-five:component", [
			{
				id: "auth-five:component",
				path: "components/efferd/auth/auth-five.svelte",
				lang: "svelte",
				code: authFiveSource
			},
			...buttonFiles,
			...authDividerFiles,
			...floatingPathsFiles,
			...inputGroupFiles,
			...logoFiles,
			...googleFiles,
			...githubFiles,
			...appleFiles
		])
	}
];

export function getAuthBlock(id: string) {
	return authBlocks.find((block) => block.id === id);
}
