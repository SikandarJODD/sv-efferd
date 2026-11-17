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
import logoSource from "#lib/svgs/logo.svelte?raw";

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
	codeTree: createBlockCodeTree("app-shell-one:preview", [
		{ id: "app-shell-one:preview", path: "components/app-shell-one/preview.svelte", lang: "svelte", code: previewSource },
		{ id: "app-shell-one:app-shell", path: "components/app-shell-one/app-shell.svelte", lang: "svelte", code: appShellSource },
		{ id: "app-shell-one:app-breadcrumbs", path: "components/app-shell-one/app-breadcrumbs.svelte", lang: "svelte", code: appBreadcrumbsSource },
		{ id: "app-shell-one:app-header", path: "components/app-shell-one/app-header.svelte", lang: "svelte", code: appHeaderSource },
		{ id: "app-shell-one:app-sidebar", path: "components/app-shell-one/app-sidebar.svelte", lang: "svelte", code: appSidebarSource },
		{ id: "app-shell-one:dashboard-skeleton", path: "components/app-shell-one/dashboard-skeleton.svelte", lang: "svelte", code: dashboardSkeletonSource },
		{ id: "app-shell-one:nav-user", path: "components/app-shell-one/nav-user.svelte", lang: "svelte", code: navUserSource },
		{ id: "app-shell-one:app-shared", path: "components/app-shell-one/app-shared.ts", lang: "typescript", code: appSharedSource },
		{ id: "shared:logo", path: "components/svgs/logo.svelte", lang: "svelte", code: logoSource }
	])
};
