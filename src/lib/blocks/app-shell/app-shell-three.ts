import type { BlockShowcaseItem } from "#lib/blocks/showcase.js";
import { createBlockCodeTree } from "#lib/blocks/showcase.js";
import AppShellThreePreview from "#lib/components/efferd/app-shell/app-shell-three/preview.svelte";

import appBreadcrumbsSource from "#lib/components/efferd/app-shell/app-shell-three/app-breadcrumbs.svelte?raw";
import appHeaderSource from "#lib/components/efferd/app-shell/app-shell-three/app-header.svelte?raw";
import appSharedSource from "#lib/components/efferd/app-shell/app-shell-three/app-shared.ts?raw";
import appShellSource from "#lib/components/efferd/app-shell/app-shell-three/app-shell.svelte?raw";
import appSidebarSource from "#lib/components/efferd/app-shell/app-shell-three/app-sidebar.svelte?raw";
import customSidebarTriggerSource from "#lib/components/efferd/app-shell/app-shell-three/custom-sidebar-trigger.svelte?raw";
import dashboardSkeletonSource from "#lib/components/efferd/app-shell/app-shell-three/dashboard-skeleton.svelte?raw";
import latestChangeSource from "#lib/components/efferd/app-shell/app-shell-three/latest-change.svelte?raw";
import navGroupSource from "#lib/components/efferd/app-shell/app-shell-three/nav-group.svelte?raw";
import navUserSource from "#lib/components/efferd/app-shell/app-shell-three/nav-user.svelte?raw";
import previewSource from "#lib/components/efferd/app-shell/app-shell-three/preview.svelte?raw";
import logoIconSource from "#lib/svgs/logo-icon.svelte?raw";

export const appShellThreeBlock: BlockShowcaseItem = {
	id: "app-shell-three",
	title: "App Shell Three",
	description:
		"A customer-support workspace with nested navigation, quick actions, account controls, and an inset content area.",
	previewComponent: AppShellThreePreview,
	previewHref: "/preview/app-shell/three",
	previewMode: "iframe",
	previewHeight: 860,
	installId: "app-shell-three",
	codeTree: createBlockCodeTree("app-shell-three:preview", [
		{ id: "app-shell-three:preview", path: "components/app-shell-three/preview.svelte", lang: "svelte", code: previewSource },
		{ id: "app-shell-three:app-shell", path: "components/app-shell-three/app-shell.svelte", lang: "svelte", code: appShellSource },
		{ id: "app-shell-three:app-breadcrumbs", path: "components/app-shell-three/app-breadcrumbs.svelte", lang: "svelte", code: appBreadcrumbsSource },
		{ id: "app-shell-three:app-header", path: "components/app-shell-three/app-header.svelte", lang: "svelte", code: appHeaderSource },
		{ id: "app-shell-three:app-sidebar", path: "components/app-shell-three/app-sidebar.svelte", lang: "svelte", code: appSidebarSource },
		{ id: "app-shell-three:custom-sidebar-trigger", path: "components/app-shell-three/custom-sidebar-trigger.svelte", lang: "svelte", code: customSidebarTriggerSource },
		{ id: "app-shell-three:dashboard-skeleton", path: "components/app-shell-three/dashboard-skeleton.svelte", lang: "svelte", code: dashboardSkeletonSource },
		{ id: "app-shell-three:latest-change", path: "components/app-shell-three/latest-change.svelte", lang: "svelte", code: latestChangeSource },
		{ id: "app-shell-three:nav-group", path: "components/app-shell-three/nav-group.svelte", lang: "svelte", code: navGroupSource },
		{ id: "app-shell-three:nav-user", path: "components/app-shell-three/nav-user.svelte", lang: "svelte", code: navUserSource },
		{ id: "app-shell-three:app-shared", path: "components/app-shell-three/app-shared.ts", lang: "typescript", code: appSharedSource },
		{ id: "shared:logo-icon", path: "components/svgs/logo-icon.svelte", lang: "svelte", code: logoIconSource }
	])
};
