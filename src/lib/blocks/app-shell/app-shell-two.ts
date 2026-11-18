import type { BlockShowcaseItem } from "#lib/blocks/showcase.js";
import { createBlockCodeTree } from "#lib/blocks/showcase.js";
import AppShellTwoPreview from "#lib/components/efferd/app-shell/app-shell-two/preview.svelte";

import appBreadcrumbSource from "#lib/components/efferd/app-shell/app-shell-two/app-breadcrumb.svelte?raw";
import appHeaderSource from "#lib/components/efferd/app-shell/app-shell-two/app-header.svelte?raw";
import appSharedSource from "#lib/components/efferd/app-shell/app-shell-two/app-shared.ts?raw";
import appShellSource from "#lib/components/efferd/app-shell/app-shell-two/app-shell.svelte?raw";
import appSidebarSource from "#lib/components/efferd/app-shell/app-shell-two/app-sidebar.svelte?raw";
import customSidebarTriggerSource from "#lib/components/efferd/app-shell/app-shell-two/custom-sidebar-trigger.svelte?raw";
import dashboardSkeletonSource from "#lib/components/efferd/app-shell/app-shell-two/dashboard-skeleton.svelte?raw";
import latestChangeSource from "#lib/components/efferd/app-shell/app-shell-two/latest-change.svelte?raw";
import navGroupSource from "#lib/components/efferd/app-shell/app-shell-two/nav-group.svelte?raw";
import navUserSource from "#lib/components/efferd/app-shell/app-shell-two/nav-user.svelte?raw";
import previewSource from "#lib/components/efferd/app-shell/app-shell-two/preview.svelte?raw";
import decorIconSource from "#lib/components/ui/decor-icon/decor-icon.svelte?raw";
import decorIconIndexSource from "#lib/components/ui/decor-icon/index.ts?raw";
import logoSource from "#lib/svgs/logo.svelte?raw";

const uiFiles = [
	{
		id: "shared:avatar",
		path: "ui/avatar",
		externalUrl: "https://shadcn-svelte.com/docs/components/avatar",
		externalLabel: "Shadcn Svelte Avatar"
	},
	{
		id: "shared:breadcrumb",
		path: "ui/breadcrumb",
		externalUrl: "https://shadcn-svelte.com/docs/components/breadcrumb",
		externalLabel: "Shadcn Svelte Breadcrumb"
	},
	{
		id: "shared:button",
		path: "ui/button",
		externalUrl: "https://shadcn-svelte.com/docs/components/button",
		externalLabel: "Shadcn Svelte Button"
	},
	{
		id: "shared:collapsible",
		path: "ui/collapsible",
		externalUrl: "https://shadcn-svelte.com/docs/components/collapsible",
		externalLabel: "Shadcn Svelte Collapsible"
	},
	{
		id: "shared:decor-icon-index",
		path: "ui/decor-icon/index.ts",
		lang: "typescript" as const,
		code: decorIconIndexSource
	},
	{
		id: "shared:decor-icon",
		path: "ui/decor-icon/decor-icon.svelte",
		lang: "svelte" as const,
		code: decorIconSource
	},
	{
		id: "shared:dropdown-menu",
		path: "ui/dropdown-menu",
		externalUrl: "https://shadcn-svelte.com/docs/components/dropdown-menu",
		externalLabel: "Shadcn Svelte Dropdown Menu"
	},
	{
		id: "shared:kbd",
		path: "ui/kbd",
		externalUrl: "https://shadcn-svelte.com/docs/components/kbd",
		externalLabel: "Shadcn Svelte Kbd"
	},
	{
		id: "shared:separator",
		path: "ui/separator",
		externalUrl: "https://shadcn-svelte.com/docs/components/separator",
		externalLabel: "Shadcn Svelte Separator"
	},
	{
		id: "shared:sidebar",
		path: "ui/sidebar",
		externalUrl: "https://shadcn-svelte.com/docs/components/sidebar",
		externalLabel: "Shadcn Svelte Sidebar"
	},
	{
		id: "shared:tooltip",
		path: "ui/tooltip",
		externalUrl: "https://shadcn-svelte.com/docs/components/tooltip",
		externalLabel: "Shadcn Svelte Tooltip"
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
	codeTree: createBlockCodeTree("app-shell-two:app-shell", [
		{
			id: "app-shell-two:preview",
			path: "app-shell/preview.svelte",
			lang: "svelte",
			code: previewSource
		},
		{
			id: "app-shell-two:app-shell",
			path: "app-shell/app-shell.svelte",
			lang: "svelte",
			code: appShellSource
		},
		{
			id: "app-shell-two:app-breadcrumb",
			path: "app-shell/app-breadcrumb.svelte",
			lang: "svelte",
			code: appBreadcrumbSource
		},
		{
			id: "app-shell-two:app-header",
			path: "app-shell/app-header.svelte",
			lang: "svelte",
			code: appHeaderSource
		},
		{
			id: "app-shell-two:app-sidebar",
			path: "app-shell/app-sidebar.svelte",
			lang: "svelte",
			code: appSidebarSource
		},
		{
			id: "app-shell-two:custom-sidebar-trigger",
			path: "app-shell/custom-sidebar-trigger.svelte",
			lang: "svelte",
			code: customSidebarTriggerSource
		},
		{
			id: "app-shell-two:dashboard-skeleton",
			path: "app-shell/dashboard-skeleton.svelte",
			lang: "svelte",
			code: dashboardSkeletonSource
		},
		{
			id: "app-shell-two:latest-change",
			path: "app-shell/latest-change.svelte",
			lang: "svelte",
			code: latestChangeSource
		},
		{
			id: "app-shell-two:nav-group",
			path: "app-shell/nav-group.svelte",
			lang: "svelte",
			code: navGroupSource
		},
		{
			id: "app-shell-two:nav-user",
			path: "app-shell/nav-user.svelte",
			lang: "svelte",
			code: navUserSource
		},
		{
			id: "app-shell-two:app-shared",
			path: "app-shell/app-shared.ts",
			lang: "typescript",
			code: appSharedSource
		},
		{ id: "shared:logo", path: "svgs/logo.svelte", lang: "svelte", code: logoSource },
		...uiFiles
	])
};
