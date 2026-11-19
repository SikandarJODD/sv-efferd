import type { BlockShowcaseItem } from "#lib/blocks/showcase.js";
import { createBlockCodeTree } from "#lib/blocks/showcase.js";
import DashboardFourPreview from "#lib/components/efferd/dashboard/dashboard-four/preview.svelte";

import categoryRankSource from "#lib/components/efferd/dashboard/dashboard-four/category-rank-chart.svelte?raw";
import dashboardStatsSource from "#lib/components/efferd/dashboard/dashboard-four/dashboard-stats.svelte?raw";
import dashboardSource from "#lib/components/efferd/dashboard/dashboard-four/dashboard.svelte?raw";
import deltaSource from "#lib/components/efferd/dashboard/dashboard-four/delta.svelte?raw";
import formatterSource from "#lib/components/efferd/dashboard/dashboard-four/formatter.ts?raw";
import indexSource from "#lib/components/efferd/dashboard/dashboard-four/index.ts?raw";
import previewSource from "#lib/components/efferd/dashboard/dashboard-four/preview.svelte?raw";
import quickActionsSource from "#lib/components/efferd/dashboard/dashboard-four/quick-actions.svelte?raw";
import refundReturnRateSource from "#lib/components/efferd/dashboard/dashboard-four/refund-return-rate-chart.svelte?raw";
import revenueChartDataSource from "#lib/components/efferd/dashboard/dashboard-four/revenue-chart-data.ts?raw";
import revenueChartSource from "#lib/components/efferd/dashboard/dashboard-four/revenue-chart.svelte?raw";

const files = [
	["preview", "preview.svelte", "svelte", previewSource],
	["index", "index.ts", "typescript", indexSource],
	["component", "dashboard.svelte", "svelte", dashboardSource],
	["stats", "dashboard-stats.svelte", "svelte", dashboardStatsSource],
	["revenue", "revenue-chart.svelte", "svelte", revenueChartSource],
	["revenue-data", "revenue-chart-data.ts", "typescript", revenueChartDataSource],
	["returns", "refund-return-rate-chart.svelte", "svelte", refundReturnRateSource],
	["categories", "category-rank-chart.svelte", "svelte", categoryRankSource],
	["actions", "quick-actions.svelte", "svelte", quickActionsSource],
	["delta", "delta.svelte", "svelte", deltaSource],
	["formatter", "formatter.ts", "typescript", formatterSource]
] as const;

const uiFiles = ["button", "card", "chart", "item", "select"].map((name) => ({
	id: `shared:${name}`,
	path: `ui/${name}`,
	externalUrl: `https://shadcn-svelte.com/docs/components/${name}`,
	externalLabel: `Shadcn Svelte ${name}`
}));

export const dashboardFourBlock: BlockShowcaseItem = {
	id: "dashboard-four",
	title: "Dashboard Four",
	description:
		"A responsive commerce dashboard with revenue metrics, sales trends, return rates, category performance, and store-management shortcuts.",
	previewComponent: DashboardFourPreview,
	previewHref: "/preview/dashboard/four",
	previewMode: "iframe",
	previewHeight: 1100,
	installId: "dashboard-four",
	codeTree: createBlockCodeTree("dashboard-four:component", [
		...files.map(([id, path, lang, code]) => ({
			id: `dashboard-four:${id}`,
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
