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
import logoIconSource from "#lib/svgs/logo-icon.svelte?raw";

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
	codeTree: createBlockCodeTree("app-shell-four:preview", [
		{ id: "app-shell-four:preview", path: "components/app-shell-four/preview.svelte", lang: "svelte", code: previewSource },
		{ id: "app-shell-four:app-shell", path: "components/app-shell-four/app-shell.svelte", lang: "svelte", code: appShellSource },
		{ id: "app-shell-four:app-breadcrumbs", path: "components/app-shell-four/app-breadcrumbs.svelte", lang: "svelte", code: appBreadcrumbsSource },
		{ id: "app-shell-four:app-header", path: "components/app-shell-four/app-header.svelte", lang: "svelte", code: appHeaderSource },
		{ id: "app-shell-four:app-sidebar", path: "components/app-shell-four/app-sidebar.svelte", lang: "svelte", code: appSidebarSource },
		{ id: "app-shell-four:custom-sidebar-trigger", path: "components/app-shell-four/custom-sidebar-trigger.svelte", lang: "svelte", code: customSidebarTriggerSource },
		{ id: "app-shell-four:dashboard-skeleton", path: "components/app-shell-four/dashboard-skeleton.svelte", lang: "svelte", code: dashboardSkeletonSource },
		{ id: "app-shell-four:latest-change", path: "components/app-shell-four/latest-change.svelte", lang: "svelte", code: latestChangeSource },
		{ id: "app-shell-four:nav-group", path: "components/app-shell-four/nav-group.svelte", lang: "svelte", code: navGroupSource },
		{ id: "app-shell-four:nav-user", path: "components/app-shell-four/nav-user.svelte", lang: "svelte", code: navUserSource },
		{ id: "app-shell-four:app-shared", path: "components/app-shell-four/app-shared.ts", lang: "typescript", code: appSharedSource },
		{ id: "shared:logo-icon", path: "components/svgs/logo-icon.svelte", lang: "svelte", code: logoIconSource }
	])
};
