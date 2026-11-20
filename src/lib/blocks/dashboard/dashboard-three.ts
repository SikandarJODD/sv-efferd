import type { BlockShowcaseItem } from "#lib/blocks/showcase.js";
import { createBlockCodeTree } from "#lib/blocks/showcase.js";
import DashboardThreePreview from "#lib/components/efferd/dashboard/dashboard-three/preview.svelte";

import channelBreakdownSource from "#lib/components/efferd/dashboard/dashboard-three/channel-breakdown-chart.svelte?raw";
import conversationVolumeSource from "#lib/components/efferd/dashboard/dashboard-three/conversation-volume-chart.svelte?raw";
import conversationVolumeDataSource from "#lib/components/efferd/dashboard/dashboard-three/conversation-volume-data.ts?raw";
import csatResponsesSource from "#lib/components/efferd/dashboard/dashboard-three/csat-responses-chart.svelte?raw";
import dashboardStatsSource from "#lib/components/efferd/dashboard/dashboard-three/dashboard-stats.svelte?raw";
import dashboardSource from "#lib/components/efferd/dashboard/dashboard-three/dashboard.svelte?raw";
import deltaSource from "#lib/components/efferd/dashboard/dashboard-three/delta.svelte?raw";
import firstReplyTimeSource from "#lib/components/efferd/dashboard/dashboard-three/first-reply-time-chart.svelte?raw";
import formatterSource from "#lib/components/efferd/dashboard/dashboard-three/formatter.ts?raw";
import indexSource from "#lib/components/efferd/dashboard/dashboard-three/index.ts?raw";
import previewSource from "#lib/components/efferd/dashboard/dashboard-three/preview.svelte?raw";
import recentConversationsSource from "#lib/components/efferd/dashboard/dashboard-three/recent-conversations.svelte?raw";
import statusIndicatorSource from "#lib/components/efferd/dashboard/dashboard-three/status-indicator.svelte?raw";
import supportActivitySource from "#lib/components/efferd/dashboard/dashboard-three/support-activity.svelte?raw";
import teamOnDutySource from "#lib/components/efferd/dashboard/dashboard-three/team-on-duty.svelte?raw";

const files = [
	["preview", "preview.svelte", "svelte", previewSource],
	["index", "index.ts", "typescript", indexSource],
	["component", "dashboard.svelte", "svelte", dashboardSource],
	["stats", "dashboard-stats.svelte", "svelte", dashboardStatsSource],
	["volume", "conversation-volume-chart.svelte", "svelte", conversationVolumeSource],
	["volume-data", "conversation-volume-data.ts", "typescript", conversationVolumeDataSource],
	["channels", "channel-breakdown-chart.svelte", "svelte", channelBreakdownSource],
	["csat", "csat-responses-chart.svelte", "svelte", csatResponsesSource],
	["reply-time", "first-reply-time-chart.svelte", "svelte", firstReplyTimeSource],
	["conversations", "recent-conversations.svelte", "svelte", recentConversationsSource],
	["team", "team-on-duty.svelte", "svelte", teamOnDutySource],
	["activity", "support-activity.svelte", "svelte", supportActivitySource],
	["delta", "delta.svelte", "svelte", deltaSource],
	["status", "status-indicator.svelte", "svelte", statusIndicatorSource],
	["formatter", "formatter.ts", "typescript", formatterSource]
] as const;

const uiFiles = [
	"avatar",
	"badge",
	"button",
	"card",
	"chart",
	"dropdown-menu",
	"select",
	"table"
].map((name) => ({
	id: `shared:${name}`,
	path: `ui/${name}`,
	externalUrl: `https://shadcn-svelte.com/docs/components/${name}`,
	externalLabel: `Shadcn Svelte ${name}`
}));

export const dashboardThreeBlock: BlockShowcaseItem = {
	id: "dashboard-three",
	title: "Dashboard Three",
	description:
		"A responsive support dashboard with queue metrics, conversation charts, team availability, inbox activity, and CSAT reporting.",
	previewComponent: DashboardThreePreview,
	previewHref: "/preview/dashboard/three",
	previewMode: "iframe",
	previewHeight: 1400,
	installId: "dashboard-three",
	codeTree: createBlockCodeTree("dashboard-three:component", [
		...files.map(([id, path, lang, code]) => ({
			id: `dashboard-three:${id}`,
			path: `dashboard/${path}`,
			lang,
			code
		})),
		{
			id: "related:app-shell-three",
			path: "related/app-shell-three",
			externalUrl: "/blocks/app-shell#app-shell-three",
			externalLabel: "View App Shell Three"
		},
		...uiFiles
	])
};
