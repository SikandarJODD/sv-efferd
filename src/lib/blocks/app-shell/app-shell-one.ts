import type { BlockShowcaseItem } from "#lib/blocks/showcase.js";
import { createBlockCodeTree } from "#lib/blocks/showcase.js";
import AppShellOnePreview from "#lib/components/efferd/app-shell/app-shell-one/preview.svelte";

import appBreadcrumbsSource from "#lib/components/efferd/app-shell/app-shell-one/app-breadcrumbs.svelte?raw";
import appHeaderSource from "#lib/components/efferd/app-shell/app-shell-one/app-header.svelte?raw";
import appSharedSource from "#lib/components/efferd/app-shell/app-shell-one/app-shared.ts?raw";
import appShellSource from "#lib/components/efferd/app-shell/app-shell-one/app-shell.svelte?raw";
import appSidebarSource from "#lib/components/efferd/app-shell/app-shell-one/app-sidebar.svelte?raw";
import dashboardSkeletonSource from "#lib/components/efferd/app-shell/app-shell-one/dashboard-skeleton.svelte?raw";
import navUserSource from "#lib/components/efferd/app-shell/app-shell-one/nav-user.svelte?raw";
import previewSource from "#lib/components/efferd/app-shell/app-shell-one/preview.svelte?raw";
import dividerIndexSource from "#lib/components/ui/full-width-divider/index.ts?raw";
import dividerSource from "#lib/components/ui/full-width-divider/full-width-divider.svelte?raw";
import logoSource from "#lib/components/svgs/logo.svelte?raw";

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
		id: "shared:dropdown-menu",
		path: "ui/dropdown-menu",
		externalUrl: "https://shadcn-svelte.com/docs/components/dropdown-menu",
		externalLabel: "Shadcn Svelte Dropdown Menu"
	},
	{
		id: "shared:divider-index",
		path: "ui/full-width-divider/index.ts",
		lang: "typescript" as const,
		code: dividerIndexSource
	},
	{
		id: "shared:divider",
		path: "ui/full-width-divider/full-width-divider.svelte",
		lang: "svelte" as const,
		code: dividerSource
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
	}
];

export const appShellOneBlock: BlockShowcaseItem = {
	id: "app-shell-one",
	title: "App Shell One",
	description:
		"A focused dashboard shell with an off-canvas sidebar, compact utility header, and responsive content area.",
	previewComponent: AppShellOnePreview,
	previewHref: "/preview/app-shell/one",
	previewMode: "iframe",
	previewHeight: 860,
	installId: "app-shell-one",
	codeTree: createBlockCodeTree("app-shell-one:app-shell", [
		{
			id: "app-shell-one:preview",
			path: "app-shell/preview.svelte",
			lang: "svelte",
			code: previewSource
		},
		{
			id: "app-shell-one:app-shell",
			path: "app-shell/app-shell.svelte",
			lang: "svelte",
			code: appShellSource
		},
		{
			id: "app-shell-one:app-breadcrumbs",
			path: "app-shell/app-breadcrumbs.svelte",
			lang: "svelte",
			code: appBreadcrumbsSource
		},
		{
			id: "app-shell-one:app-header",
			path: "app-shell/app-header.svelte",
			lang: "svelte",
			code: appHeaderSource
		},
		{
			id: "app-shell-one:app-sidebar",
			path: "app-shell/app-sidebar.svelte",
			lang: "svelte",
			code: appSidebarSource
		},
		{
			id: "app-shell-one:dashboard-skeleton",
			path: "app-shell/dashboard-skeleton.svelte",
			lang: "svelte",
			code: dashboardSkeletonSource
		},
		{
			id: "app-shell-one:nav-user",
			path: "app-shell/nav-user.svelte",
			lang: "svelte",
			code: navUserSource
		},
		{
			id: "app-shell-one:app-shared",
			path: "app-shell/app-shared.ts",
			lang: "typescript",
			code: appSharedSource
		},
		{ id: "shared:logo", path: "svgs/logo.svelte", lang: "svelte", code: logoSource },
		...uiFiles
	])
};
