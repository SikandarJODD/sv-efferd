import type { BlockShowcaseItem } from "#lib/blocks/showcase.js";
import { createBlockCodeTree } from "#lib/blocks/showcase.js";
import TeamOne from "#lib/components/efferd/team/team-one.svelte";
import TeamThree from "#lib/components/efferd/team/team-three.svelte";
import TeamTwo from "#lib/components/efferd/team/team-two.svelte";

import teamOneSource from "#lib/components/efferd/team/team-one.svelte?raw";
import teamThreeSource from "#lib/components/efferd/team/team-three.svelte?raw";
import teamTwoSource from "#lib/components/efferd/team/team-two.svelte?raw";
import dividerIndexSource from "#lib/components/ui/full-width-divider/index.ts?raw";
import dividerSource from "#lib/components/ui/full-width-divider/full-width-divider.svelte?raw";
import githubSvgSource from "#lib/components/svgs/github.svelte?raw";
import linkedinSvgSource from "#lib/components/svgs/linkedin.svelte?raw";
import xSvgSource from "#lib/components/svgs/x.svelte?raw";

const avatarFiles = [
	{
		id: "shared:avatar",
		path: "components/ui/avatar/avatar.svelte",
		externalUrl: "https://shadcn-svelte.com/docs/components/avatar",
		externalLabel: "Shadcn Svelte Avatar"
	}
];

const buttonFiles = [
	{
		id: "shared:button",
		path: "components/ui/button/button.svelte",
		externalUrl: "https://shadcn-svelte.com/docs/components/button",
		externalLabel: "Shadcn Svelte Button"
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

const socialIconFiles = [
	{
		id: "shared:github-svg",
		path: "svgs/github.svelte",
		lang: "svelte" as const,
		code: githubSvgSource
	},
	{
		id: "shared:linkedin-svg",
		path: "svgs/linkedin.svelte",
		lang: "svelte" as const,
		code: linkedinSvgSource
	},
	{
		id: "shared:x-svg",
		path: "svgs/x.svelte",
		lang: "svelte" as const,
		code: xSvgSource
	}
];

export const teamBlocks: BlockShowcaseItem[] = [
	{
		id: "team-one",
		title: "Team One",
		description: "A compact team grid with grayscale portraits and a hiring call to action.",
		previewComponent: TeamOne,
		previewHref: "/preview/team/one",
		previewMode: "inline",
		previewHeight: 760,
		installId: "team-one",
		codeTree: createBlockCodeTree("team-one:component", [
			{
				id: "team-one:component",
				path: "components/efferd/team/team-one.svelte",
				lang: "svelte",
				code: teamOneSource
			},
			...avatarFiles,
			...buttonFiles
		])
	},
	{
		id: "team-two",
		title: "Team Two",
		description: "A bordered team directory with compact profiles and social links.",
		previewComponent: TeamTwo,
		previewHref: "/preview/team/two",
		previewMode: "iframe",
		previewHeight: 900,
		installId: "team-two",
		codeTree: createBlockCodeTree("team-two:component", [
			{
				id: "team-two:component",
				path: "components/efferd/team/team-two.svelte",
				lang: "svelte",
				code: teamTwoSource
			},
			...avatarFiles,
			...buttonFiles,
			...dividerFiles,
			...socialIconFiles
		])
	},
	{
		id: "team-three",
		title: "Team Three",
		description:
			"A portrait-led team grid with roles, social links, and a hiring call to action.",
		previewComponent: TeamThree,
		previewHref: "/preview/team/three",
		previewMode: "iframe",
		previewHeight: 880,
		installId: "team-three",
		codeTree: createBlockCodeTree("team-three:component", [
			{
				id: "team-three:component",
				path: "components/efferd/team/team-three.svelte",
				lang: "svelte",
				code: teamThreeSource
			},
			...avatarFiles,
			...buttonFiles,
			...dividerFiles,
			...socialIconFiles
		])
	}
];

export function getTeamBlock(id: string) {
	return teamBlocks.find((block) => block.id === id);
}
