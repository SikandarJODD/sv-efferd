import type { BlockShowcaseItem } from "#lib/blocks/showcase.js";
import { createBlockCodeTree } from "#lib/blocks/showcase.js";
import AppShellFivePreview from "#lib/components/efferd/app-shell/app-shell-five/preview.svelte";

import appHeaderSource from "#lib/components/efferd/app-shell/app-shell-five/app-header.svelte?raw";
import appSearchSource from "#lib/components/efferd/app-shell/app-shell-five/app-search.svelte?raw";
import appSharedSource from "#lib/components/efferd/app-shell/app-shell-five/app-shared.ts?raw";
import appShellSource from "#lib/components/efferd/app-shell/app-shell-five/app-shell.svelte?raw";
import appSidebarSource from "#lib/components/efferd/app-shell/app-shell-five/app-sidebar.svelte?raw";
import customTriggerSource from "#lib/components/efferd/app-shell/app-shell-five/custom-trigger.svelte?raw";
import latestChangeSource from "#lib/components/efferd/app-shell/app-shell-five/latest-change.svelte?raw";
import navUserSource from "#lib/components/efferd/app-shell/app-shell-five/nav-user.svelte?raw";
import previewSource from "#lib/components/efferd/app-shell/app-shell-five/preview.svelte?raw";
import themeSwitcherSource from "#lib/components/efferd/app-shell/app-shell-five/theme-switcher.svelte?raw";
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
		id: "shared:dropdown-menu",
		path: "ui/dropdown-menu",
		externalUrl: "https://shadcn-svelte.com/docs/components/dropdown-menu",
		externalLabel: "Shadcn Svelte Dropdown Menu"
	},
	{
		id: "shared:input-group",
		path: "ui/input-group",
		externalUrl: "https://shadcn-svelte.com/docs/components/input-group",
		externalLabel: "Shadcn Svelte Input Group"
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
	}
];

export const appShellFiveBlock: BlockShowcaseItem = {
	id: "app-shell-five",
	title: "App Shell Five",
	description:
		"An analytics workspace with searchable navigation, an off-canvas sidebar, responsive controls, and built-in theme switching.",
	previewComponent: AppShellFivePreview,
	previewHref: "/preview/app-shell/five",
	previewMode: "iframe",
	previewHeight: 860,
	installId: "app-shell-five",
	codeTree: createBlockCodeTree("app-shell-five:app-shell", [
		{ id: "app-shell-five:preview", path: "app-shell/preview.svelte", lang: "svelte", code: previewSource },
		{ id: "app-shell-five:app-shell", path: "app-shell/app-shell.svelte", lang: "svelte", code: appShellSource },
		{ id: "app-shell-five:app-header", path: "app-shell/app-header.svelte", lang: "svelte", code: appHeaderSource },
		{ id: "app-shell-five:app-search", path: "app-shell/app-search.svelte", lang: "svelte", code: appSearchSource },
		{ id: "app-shell-five:app-sidebar", path: "app-shell/app-sidebar.svelte", lang: "svelte", code: appSidebarSource },
		{ id: "app-shell-five:custom-trigger", path: "app-shell/custom-trigger.svelte", lang: "svelte", code: customTriggerSource },
		{ id: "app-shell-five:latest-change", path: "app-shell/latest-change.svelte", lang: "svelte", code: latestChangeSource },
		{ id: "app-shell-five:nav-user", path: "app-shell/nav-user.svelte", lang: "svelte", code: navUserSource },
		{ id: "app-shell-five:theme-switcher", path: "app-shell/theme-switcher.svelte", lang: "svelte", code: themeSwitcherSource },
		{ id: "app-shell-five:app-shared", path: "app-shell/app-shared.ts", lang: "typescript", code: appSharedSource },
		{ id: "shared:logo", path: "svgs/logo.svelte", lang: "svelte", code: logoSource },
		...uiFiles
	])
};
