import type { BlockShowcaseItem } from "#lib/blocks/showcase.js";
import { createBlockCodeTree } from "#lib/blocks/showcase.js";
import DashboardFivePreview from "#lib/components/efferd/dashboard/dashboard-five/preview.svelte";

import audienceMixSource from "#lib/components/efferd/dashboard/dashboard-five/audience-mix.svelte?raw";
import browserShareSource from "#lib/components/efferd/dashboard/dashboard-five/browser-share.svelte?raw";
import dashboardSource from "#lib/components/efferd/dashboard/dashboard-five/dashboard.svelte?raw";
import deltaSource from "#lib/components/efferd/dashboard/dashboard-five/delta.svelte?raw";
import formatterSource from "#lib/components/efferd/dashboard/dashboard-five/formatter.ts?raw";
import indexSource from "#lib/components/efferd/dashboard/dashboard-five/index.ts?raw";
import onlineNowSource from "#lib/components/efferd/dashboard/dashboard-five/online-now.svelte?raw";
import previewSource from "#lib/components/efferd/dashboard/dashboard-five/preview.svelte?raw";
import shareBarListSource from "#lib/components/efferd/dashboard/dashboard-five/share-bar-list.svelte?raw";
import statusIndicatorSource from "#lib/components/efferd/dashboard/dashboard-five/status-indicator.svelte?raw";
import topCountriesSource from "#lib/components/efferd/dashboard/dashboard-five/top-countries.svelte?raw";
import topPagesSource from "#lib/components/efferd/dashboard/dashboard-five/top-pages.svelte?raw";
import topReferrersSource from "#lib/components/efferd/dashboard/dashboard-five/top-referrers.svelte?raw";
import trafficSourcesSource from "#lib/components/efferd/dashboard/dashboard-five/traffic-sources-chart.svelte?raw";
import visitorsChartSource from "#lib/components/efferd/dashboard/dashboard-five/visitors-chart.svelte?raw";
import webVitalsSource from "#lib/components/efferd/dashboard/dashboard-five/web-vitals.svelte?raw";

const files = [
	["preview", "preview.svelte", "svelte", previewSource],
	["index", "index.ts", "typescript", indexSource],
	["component", "dashboard.svelte", "svelte", dashboardSource],
	["visitors", "visitors-chart.svelte", "svelte", visitorsChartSource],
	["online", "online-now.svelte", "svelte", onlineNowSource],
	["pages", "top-pages.svelte", "svelte", topPagesSource],
	["countries", "top-countries.svelte", "svelte", topCountriesSource],
	["traffic", "traffic-sources-chart.svelte", "svelte", trafficSourcesSource],
	["audience", "audience-mix.svelte", "svelte", audienceMixSource],
	["browsers", "browser-share.svelte", "svelte", browserShareSource],
	["referrers", "top-referrers.svelte", "svelte", topReferrersSource],
	["vitals", "web-vitals.svelte", "svelte", webVitalsSource],
	["share-bars", "share-bar-list.svelte", "svelte", shareBarListSource],
	["delta", "delta.svelte", "svelte", deltaSource],
	["status", "status-indicator.svelte", "svelte", statusIndicatorSource],
	["formatter", "formatter.ts", "typescript", formatterSource]
] as const;

const uiFiles = ["badge", "button", "card", "chart", "table", "tooltip"].map((name) => ({
	id: `shared:${name}`,
	path: `ui/${name}`,
	externalUrl: `https://shadcn-svelte.com/docs/components/${name}`,
	externalLabel: `Shadcn Svelte ${name}`
}));

export const dashboardFiveBlock: BlockShowcaseItem = {
	id: "dashboard-five",
	title: "Dashboard Five",
	description:
		"A responsive web analytics dashboard with visitor trends, audience insights, acquisition data, top content, and Core Web Vitals.",
	previewComponent: DashboardFivePreview,
	previewHref: "/preview/dashboard/five",
	previewMode: "iframe",
	previewHeight: 1400,
	installId: "dashboard-five",
	codeTree: createBlockCodeTree("dashboard-five:component", [
		...files.map(([id, path, lang, code]) => ({
			id: `dashboard-five:${id}`,
			path: `dashboard/${path}`,
			lang,
			code
		})),
		{
			id: "related:app-shell-one",
			path: "related/app-shell-one",
			externalUrl: "/blocks/app-shell#app-shell-one",
			externalLabel: "View App Shell One"
		},
		...uiFiles
	])
};
