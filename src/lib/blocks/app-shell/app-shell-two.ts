import type { BlockShowcaseItem } from "#lib/blocks/showcase.js";
import { createBlockCodeTree } from "#lib/blocks/showcase.js";
import AppShellTwoPreview from "#lib/components/efferd/app-shell/app-shell-two/preview.svelte";

import appBreadcrumbSource from "#lib/components/efferd/app-shell/app-shell-two/app-breadcrumb.svelte?raw";
import appSharedSource from "#lib/components/efferd/app-shell/app-shell-two/app-shared.ts?raw";
import appShellSource from "#lib/components/efferd/app-shell/app-shell-two/app-shell.svelte?raw";
import appSidebarSource from "#lib/components/efferd/app-shell/app-shell-two/app-sidebar.svelte?raw";
import customSidebarTriggerSource from "#lib/components/efferd/app-shell/app-shell-two/custom-sidebar-trigger.svelte?raw";
import dashboardSkeletonSource from "#lib/components/efferd/app-shell/app-shell-two/dashboard-skeleton.svelte?raw";
import latestChangeSource from "#lib/components/efferd/app-shell/app-shell-two/latest-change.svelte?raw";
import navGroupSource from "#lib/components/efferd/app-shell/app-shell-two/nav-group.svelte?raw";
import navUserSource from "#lib/components/efferd/app-shell/app-shell-two/nav-user.svelte?raw";
import previewSource from "#lib/components/efferd/app-shell/app-shell-two/preview.svelte?raw";
import logoSource from "#lib/svgs/logo.svelte?raw";

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

export const appShellTwoBlock: BlockShowcaseItem = {
	id: "app-shell-two",
	title: "App Shell Two",
	description:
		"A compact dashboard shell with a collapsible sidebar, sticky header, and structured content skeleton.",
	previewComponent: AppShellTwoPreview,
	previewHref: "/preview/app-shell/two",
	previewMode: "iframe",
	previewHeight: 860,
	installId: "app-shell-two",
	codeTree: createBlockCodeTree("app-shell-two:preview", [
		{
			id: "app-shell-two:preview",
			path: "components/app-shell-two/preview.svelte",
			lang: "svelte",
			code: previewSource
		},
		{
			id: "app-shell-two:app-shell",
			path: "components/app-shell-two/app-shell.svelte",
			lang: "svelte",
			code: appShellSource
		},
		{
			id: "app-shell-two:app-breadcrumb",
			path: "components/app-shell-two/app-breadcrumb.svelte",
			lang: "svelte",
			code: appBreadcrumbSource
		},
		{
			id: "app-shell-two:app-sidebar",
			path: "components/app-shell-two/app-sidebar.svelte",
			lang: "svelte",
			code: appSidebarSource
		},
		{
			id: "app-shell-two:custom-sidebar-trigger",
			path: "components/app-shell-two/custom-sidebar-trigger.svelte",
			lang: "svelte",
			code: customSidebarTriggerSource
		},
		{
			id: "app-shell-two:dashboard-skeleton",
			path: "components/app-shell-two/dashboard-skeleton.svelte",
			lang: "svelte",
			code: dashboardSkeletonSource
		},
		{
			id: "app-shell-two:latest-change",
			path: "components/app-shell-two/latest-change.svelte",
			lang: "svelte",
			code: latestChangeSource
		},
		{
			id: "app-shell-two:nav-group",
			path: "components/app-shell-two/nav-group.svelte",
			lang: "svelte",
			code: navGroupSource
		},
		{
			id: "app-shell-two:nav-user",
			path: "components/app-shell-two/nav-user.svelte",
			lang: "svelte",
			code: navUserSource
		},
		{
			id: "app-shell-two:app-shared",
			path: "components/app-shell-two/app-shared.ts",
			lang: "typescript",
			code: appSharedSource
		},
		...logoFiles,
		...sharedFiles
	])
};
