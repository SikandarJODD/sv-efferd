import type { BlockShowcaseItem } from "#lib/blocks/showcase.js";
import { createBlockCodeTree } from "#lib/blocks/showcase.js";
import DashboardTwoPreview from "#lib/components/efferd/dashboard/dashboard-two/preview.svelte";

import billingHealthSource from "#lib/components/efferd/dashboard/dashboard-two/billing-health.svelte?raw";
import channelSalesChartSource from "#lib/components/efferd/dashboard/dashboard-two/channel-sales-chart.svelte?raw";
import dashboardActivitySource from "#lib/components/efferd/dashboard/dashboard-two/dashboard-activity.svelte?raw";
import dashboardCardSource from "#lib/components/efferd/dashboard/dashboard-two/dashboard-card.svelte?raw";
import dashboardInvoicesSource from "#lib/components/efferd/dashboard/dashboard-two/dashboard-invoices.svelte?raw";
import dashboardStatsSource from "#lib/components/efferd/dashboard/dashboard-two/dashboard-stats.svelte?raw";
import dashboardSource from "#lib/components/efferd/dashboard/dashboard-two/dashboard.svelte?raw";
import deltaSource from "#lib/components/efferd/dashboard/dashboard-two/delta.svelte?raw";
import formatterSource from "#lib/components/efferd/dashboard/dashboard-two/formatter.ts?raw";
import indexSource from "#lib/components/efferd/dashboard/dashboard-two/index.ts?raw";
import netRevenueChartSource from "#lib/components/efferd/dashboard/dashboard-two/net-revenue-chart.svelte?raw";
import previewSource from "#lib/components/efferd/dashboard/dashboard-two/preview.svelte?raw";

const uiFiles = [
	["badge", "Badge"],
	["button", "Button"],
	["card", "Card"],
	["chart", "Chart"],
	["empty", "Empty"],
	["table", "Table"]
].map(([name, label]) => ({
	id: `shared:${name}`,
	path: `ui/${name}`,
	externalUrl: `https://shadcn-svelte.com/docs/components/${name}`,
	externalLabel: `Shadcn Svelte ${label}`
}));

export const dashboardTwoBlock: BlockShowcaseItem = {
	id: "dashboard-two",
	title: "Dashboard Two",
	description:
		"A responsive business dashboard with KPI summaries, revenue and channel charts, invoices, billing health, and recent activity.",
	previewComponent: DashboardTwoPreview,
	previewHref: "/preview/dashboard/two",
	previewMode: "iframe",
	previewHeight: 1100,
	installId: "dashboard-two",
	codeTree: createBlockCodeTree("dashboard-two:component", [
		{
			id: "dashboard-two:preview",
			path: "dashboard/preview.svelte",
			lang: "svelte",
			code: previewSource
		},
		{
			id: "dashboard-two:index",
			path: "dashboard/index.ts",
			lang: "typescript",
			code: indexSource
		},
		{
			id: "dashboard-two:component",
			path: "dashboard/dashboard.svelte",
			lang: "svelte",
			code: dashboardSource
		},
		{
			id: "dashboard-two:card",
			path: "dashboard/dashboard-card.svelte",
			lang: "svelte",
			code: dashboardCardSource
		},
		{
			id: "dashboard-two:stats",
			path: "dashboard/dashboard-stats.svelte",
			lang: "svelte",
			code: dashboardStatsSource
		},
		{
			id: "dashboard-two:revenue",
			path: "dashboard/net-revenue-chart.svelte",
			lang: "svelte",
			code: netRevenueChartSource
		},
		{
			id: "dashboard-two:channels",
			path: "dashboard/channel-sales-chart.svelte",
			lang: "svelte",
			code: channelSalesChartSource
		},
		{
			id: "dashboard-two:invoices",
			path: "dashboard/dashboard-invoices.svelte",
			lang: "svelte",
			code: dashboardInvoicesSource
		},
		{
			id: "dashboard-two:billing",
			path: "dashboard/billing-health.svelte",
			lang: "svelte",
			code: billingHealthSource
		},
		{
			id: "dashboard-two:activity",
			path: "dashboard/dashboard-activity.svelte",
			lang: "svelte",
			code: dashboardActivitySource
		},
		{
			id: "dashboard-two:delta",
			path: "dashboard/delta.svelte",
			lang: "svelte",
			code: deltaSource
		},
		{
			id: "dashboard-two:formatter",
			path: "dashboard/formatter.ts",
			lang: "typescript",
			code: formatterSource
		},
		{
			id: "related:app-shell-one",
			path: "related/app-shell-one",
			externalUrl: "/blocks/app-shell#app-shell-one",
			externalLabel: "View App Shell One"
		},
		...uiFiles
	])
};
