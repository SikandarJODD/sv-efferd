import type { BlockShowcaseItem } from "#lib/blocks/showcase.js";
import { createBlockCodeTree } from "#lib/blocks/showcase.js";
import DashboardOnePreview from "#lib/components/efferd/dashboard/dashboard-one/preview.svelte";

import dashboardInvoicesSource from "#lib/components/efferd/dashboard/dashboard-one/dashboard-invoices.svelte?raw";
import dashboardStatsSource from "#lib/components/efferd/dashboard/dashboard-one/dashboard-stats.svelte?raw";
import dashboardSource from "#lib/components/efferd/dashboard/dashboard-one/dashboard.svelte?raw";
import deltaSource from "#lib/components/efferd/dashboard/dashboard-one/delta.svelte?raw";
import formatterSource from "#lib/components/efferd/dashboard/dashboard-one/formatter.ts?raw";
import indexSource from "#lib/components/efferd/dashboard/dashboard-one/index.ts?raw";
import previewSource from "#lib/components/efferd/dashboard/dashboard-one/preview.svelte?raw";
import salesChartSource from "#lib/components/efferd/dashboard/dashboard-one/sales-chart.svelte?raw";

const uiFiles = [
	{
		id: "shared:badge",
		path: "ui/badge",
		externalUrl: "https://shadcn-svelte.com/docs/components/badge",
		externalLabel: "Shadcn Svelte Badge"
	},
	{
		id: "shared:card",
		path: "ui/card",
		externalUrl: "https://shadcn-svelte.com/docs/components/card",
		externalLabel: "Shadcn Svelte Card"
	},
	{
		id: "shared:chart",
		path: "ui/chart",
		externalUrl: "https://shadcn-svelte.com/docs/components/chart",
		externalLabel: "Shadcn Svelte Chart"
	},
	{
		id: "shared:select",
		path: "ui/select",
		externalUrl: "https://shadcn-svelte.com/docs/components/select",
		externalLabel: "Shadcn Svelte Select"
	},
	{
		id: "shared:table",
		path: "ui/table",
		externalUrl: "https://shadcn-svelte.com/docs/components/table",
		externalLabel: "Shadcn Svelte Table"
	}
];

export const dashboardOneBlock: BlockShowcaseItem = {
	id: "dashboard-one",
	title: "Dashboard One",
	description:
		"A responsive analytics dashboard with KPI summaries, an interactive stacked sales chart, and a recent invoices table.",
	previewComponent: DashboardOnePreview,
	previewHref: "/preview/dashboard/one",
	previewMode: "iframe",
	previewHeight: 900,
	installId: "dashboard-one",
	codeTree: createBlockCodeTree("dashboard-one:component", [
		{
			id: "dashboard-one:preview",
			path: "efferd/dashboard/dashboard-one/preview.svelte",
			lang: "svelte",
			code: previewSource
		},
		{
			id: "dashboard-one:index",
			path: "efferd/dashboard/dashboard-one/index.ts",
			lang: "typescript",
			code: indexSource
		},
		{
			id: "dashboard-one:component",
			path: "efferd/dashboard/dashboard-one/dashboard.svelte",
			lang: "svelte",
			code: dashboardSource
		},
		{
			id: "dashboard-one:stats",
			path: "efferd/dashboard/dashboard-one/dashboard-stats.svelte",
			lang: "svelte",
			code: dashboardStatsSource
		},
		{
			id: "dashboard-one:sales-chart",
			path: "efferd/dashboard/dashboard-one/sales-chart.svelte",
			lang: "svelte",
			code: salesChartSource
		},
		{
			id: "dashboard-one:invoices",
			path: "efferd/dashboard/dashboard-one/dashboard-invoices.svelte",
			lang: "svelte",
			code: dashboardInvoicesSource
		},
		{
			id: "dashboard-one:delta",
			path: "efferd/dashboard/dashboard-one/delta.svelte",
			lang: "svelte",
			code: deltaSource
		},
		{
			id: "dashboard-one:formatter",
			path: "efferd/dashboard/dashboard-one/formatter.ts",
			lang: "typescript",
			code: formatterSource
		},
		{
			id: "related:app-shell-two",
			path: "related/app-shell-two",
			externalUrl: "/blocks/app-shell#app-shell-two",
			externalLabel: "View App Shell Two"
		},
		...uiFiles
	])
};
