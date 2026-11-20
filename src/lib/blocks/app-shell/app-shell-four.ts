import type { BlockShowcaseItem } from "#lib/blocks/showcase.js";
import { createBlockCodeTree } from "#lib/blocks/showcase.js";
import AppShellFourPreview from "#lib/components/efferd/app-shell/app-shell-four/preview.svelte";

import appBreadcrumbsSource from "#lib/components/efferd/app-shell/app-shell-four/app-breadcrumbs.svelte?raw";
import appHeaderSource from "#lib/components/efferd/app-shell/app-shell-four/app-header.svelte?raw";
import appSharedSource from "#lib/components/efferd/app-shell/app-shell-four/app-shared.ts?raw";
import appShellSource from "#lib/components/efferd/app-shell/app-shell-four/app-shell.svelte?raw";
import appSidebarSource from "#lib/components/efferd/app-shell/app-shell-four/app-sidebar.svelte?raw";
import customSidebarTriggerSource from "#lib/components/efferd/app-shell/app-shell-four/custom-sidebar-trigger.svelte?raw";
import dashboardSkeletonSource from "#lib/components/efferd/app-shell/app-shell-four/dashboard-skeleton.svelte?raw";
import latestChangeSource from "#lib/components/efferd/app-shell/app-shell-four/latest-change.svelte?raw";
import navGroupSource from "#lib/components/efferd/app-shell/app-shell-four/nav-group.svelte?raw";
import navUserSource from "#lib/components/efferd/app-shell/app-shell-four/nav-user.svelte?raw";
import previewSource from "#lib/components/efferd/app-shell/app-shell-four/preview.svelte?raw";
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

export const appShellFourBlock: BlockShowcaseItem = {
	id: "app-shell-four",
	title: "App Shell Four",
	description:
		"An ecommerce dashboard shell with grouped navigation, nested store links, account controls, and a floating collapsible sidebar.",
	previewComponent: AppShellFourPreview,
	previewHref: "/preview/app-shell/four",
	previewMode: "iframe",
	previewHeight: 860,
	installId: "app-shell-four",
	codeTree: createBlockCodeTree("app-shell-four:app-shell", [
		{
			id: "app-shell-four:preview",
			path: "app-shell/preview.svelte",
			lang: "svelte",
			code: previewSource
		},
		{
			id: "app-shell-four:app-shell",
			path: "app-shell/app-shell.svelte",
			lang: "svelte",
			code: appShellSource
		},
		{
			id: "app-shell-four:app-breadcrumbs",
			path: "app-shell/app-breadcrumbs.svelte",
			lang: "svelte",
			code: appBreadcrumbsSource
		},
		{
			id: "app-shell-four:app-header",
			path: "app-shell/app-header.svelte",
			lang: "svelte",
			code: appHeaderSource
		},
		{
			id: "app-shell-four:app-sidebar",
			path: "app-shell/app-sidebar.svelte",
			lang: "svelte",
			code: appSidebarSource
		},
		{
			id: "app-shell-four:custom-sidebar-trigger",
			path: "app-shell/custom-sidebar-trigger.svelte",
			lang: "svelte",
			code: customSidebarTriggerSource
		},
		{
			id: "app-shell-four:dashboard-skeleton",
			path: "app-shell/dashboard-skeleton.svelte",
			lang: "svelte",
			code: dashboardSkeletonSource
		},
		{
			id: "app-shell-four:latest-change",
			path: "app-shell/latest-change.svelte",
			lang: "svelte",
			code: latestChangeSource
		},
		{
			id: "app-shell-four:nav-group",
			path: "app-shell/nav-group.svelte",
			lang: "svelte",
			code: navGroupSource
		},
		{
			id: "app-shell-four:nav-user",
			path: "app-shell/nav-user.svelte",
			lang: "svelte",
			code: navUserSource
		},
		{
			id: "app-shell-four:app-shared",
			path: "app-shell/app-shared.ts",
			lang: "typescript",
			code: appSharedSource
		},
		{ id: "shared:logo", path: "svgs/logo.svelte", lang: "svelte", code: logoSource },
		...uiFiles
	])
};
