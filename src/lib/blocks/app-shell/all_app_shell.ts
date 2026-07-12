import type { BlockShowcaseItem } from "$lib/blocks/showcase";
import { createBlockCodeTree } from "$lib/blocks/showcase";
import AppShellTwoPreview from "$lib/components/efferd/app-shell/app-shell-2/preview.svelte";

import appBreadcrumbSource from "$lib/components/efferd/app-shell/app-shell-2/app-breadcrumb.svelte?raw";
import appHeaderSource from "$lib/components/efferd/app-shell/app-shell-2/app-header.svelte?raw";
import appSharedSource from "$lib/components/efferd/app-shell/app-shell-2/app-shared.ts?raw";
import appShellSource from "$lib/components/efferd/app-shell/app-shell-2/app-shell.svelte?raw";
import appSidebarSource from "$lib/components/efferd/app-shell/app-shell-2/app-sidebar.svelte?raw";
import customSidebarTriggerSource from "$lib/components/efferd/app-shell/app-shell-2/custom-sidebar-trigger.svelte?raw";
import dashboardSkeletonSource from "$lib/components/efferd/app-shell/app-shell-2/dashboard-skeleton.svelte?raw";
import latestChangeSource from "$lib/components/efferd/app-shell/app-shell-2/latest-change.svelte?raw";
import navGroupSource from "$lib/components/efferd/app-shell/app-shell-2/nav-group.svelte?raw";
import navUserSource from "$lib/components/efferd/app-shell/app-shell-2/nav-user.svelte?raw";
import previewSource from "$lib/components/efferd/app-shell/app-shell-2/preview.svelte?raw";
import logoSource from "$lib/svgs/logo.svelte?raw";

const sharedFiles = [
	{
		id: "shared:button",
		path: "components/ui/button/button.svelte",
		externalUrl: "https://shadcn-svelte.com/docs/components/button",
		externalLabel: "Shadcn Svelte Button"
	},
	{
		id: "shared:breadcrumb",
		path: "components/ui/breadcrumb/index.ts",
		externalUrl: "https://shadcn-svelte.com/docs/components/breadcrumb",
		externalLabel: "Shadcn Svelte Breadcrumb"
	},
	{
		id: "shared:sidebar",
		path: "components/ui/sidebar/index.ts",
		externalUrl: "https://shadcn-svelte.com/docs/components/sidebar",
		externalLabel: "Shadcn Svelte Sidebar"
	}
];

const logoFiles = [
	{
		id: "shared:logo",
		path: "components/svgs/logo.svelte",
		lang: "svelte" as const,
		code: logoSource
	}
];

export const appShellBlocks: BlockShowcaseItem[] = [
	{
		id: "app-shell-2",
		title: "App Shell 2",
		description:
			"A compact dashboard shell with a collapsible sidebar, sticky header, and structured content skeleton.",
		previewComponent: AppShellTwoPreview,
		previewHref: "/preview/app-shell/2",
		previewMode: "iframe",
		previewHeight: 860,
		installId: "app-shell-2",
		codeTree: createBlockCodeTree("app-shell-2:preview", [
			{
				id: "app-shell-2:preview",
				path: "components/app-shell-2/preview.svelte",
				lang: "svelte",
				code: previewSource
			},
			{
				id: "app-shell-2:app-shell",
				path: "components/app-shell-2/app-shell.svelte",
				lang: "svelte",
				code: appShellSource
			},
			{
				id: "app-shell-2:app-breadcrumb",
				path: "components/app-shell-2/app-breadcrumb.svelte",
				lang: "svelte",
				code: appBreadcrumbSource
			},
			{
				id: "app-shell-2:app-sidebar",
				path: "components/app-shell-2/app-sidebar.svelte",
				lang: "svelte",
				code: appSidebarSource
			},
			{
				id: "app-shell-2:custom-sidebar-trigger",
				path: "components/app-shell-2/custom-sidebar-trigger.svelte",
				lang: "svelte",
				code: customSidebarTriggerSource
			},
			{
				id: "app-shell-2:dashboard-skeleton",
				path: "components/app-shell-2/dashboard-skeleton.svelte",
				lang: "svelte",
				code: dashboardSkeletonSource
			},
			{
				id: "app-shell-2:latest-change",
				path: "components/app-shell-2/latest-change.svelte",
				lang: "svelte",
				code: latestChangeSource
			},
			{
				id: "app-shell-2:nav-group",
				path: "components/app-shell-2/nav-group.svelte",
				lang: "svelte",
				code: navGroupSource
			},
			{
				id: "app-shell-2:nav-user",
				path: "components/app-shell-2/nav-user.svelte",
				lang: "svelte",
				code: navUserSource
			},
			{
				id: "app-shell-2:app-shared",
				path: "components/app-shell-2/app-shared.ts",
				lang: "typescript",
				code: appSharedSource
			},
			...logoFiles,
			...sharedFiles
		])
	}
];

export function getAppShellBlock(id: string) {
	return appShellBlocks.find((block) => block.id === id);
}
