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
import logoIconSource from "#lib/svgs/logo-icon.svelte?raw";

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
	codeTree: createBlockCodeTree("app-shell-five:preview", [
		{ id: "app-shell-five:preview", path: "components/app-shell-five/preview.svelte", lang: "svelte", code: previewSource },
		{ id: "app-shell-five:app-shell", path: "components/app-shell-five/app-shell.svelte", lang: "svelte", code: appShellSource },
		{ id: "app-shell-five:app-header", path: "components/app-shell-five/app-header.svelte", lang: "svelte", code: appHeaderSource },
		{ id: "app-shell-five:app-search", path: "components/app-shell-five/app-search.svelte", lang: "svelte", code: appSearchSource },
		{ id: "app-shell-five:app-sidebar", path: "components/app-shell-five/app-sidebar.svelte", lang: "svelte", code: appSidebarSource },
		{ id: "app-shell-five:custom-trigger", path: "components/app-shell-five/custom-trigger.svelte", lang: "svelte", code: customTriggerSource },
		{ id: "app-shell-five:latest-change", path: "components/app-shell-five/latest-change.svelte", lang: "svelte", code: latestChangeSource },
		{ id: "app-shell-five:nav-user", path: "components/app-shell-five/nav-user.svelte", lang: "svelte", code: navUserSource },
		{ id: "app-shell-five:theme-switcher", path: "components/app-shell-five/theme-switcher.svelte", lang: "svelte", code: themeSwitcherSource },
		{ id: "app-shell-five:app-shared", path: "components/app-shell-five/app-shared.ts", lang: "typescript", code: appSharedSource },
		{ id: "shared:logo-icon", path: "components/svgs/logo-icon.svelte", lang: "svelte", code: logoIconSource }
	])
};
