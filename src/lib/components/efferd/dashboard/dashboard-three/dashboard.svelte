<script lang="ts">
	import ChannelBreakdownChart from "./channel-breakdown-chart.svelte";
	import ConversationVolumeChart from "./conversation-volume-chart.svelte";
	import CsatResponsesChart from "./csat-responses-chart.svelte";
	import DashboardStats from "./dashboard-stats.svelte";
	import FirstReplyTimeChart from "./first-reply-time-chart.svelte";
	import RecentConversations from "./recent-conversations.svelte";
	import SupportActivity from "./support-activity.svelte";
	import TeamOnDuty from "./team-on-duty.svelte";
</script>

<div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
	<DashboardStats />
	<ConversationVolumeChart />
	<ChannelBreakdownChart />
	<CsatResponsesChart />
	<FirstReplyTimeChart />
	<TeamOnDuty />
	<RecentConversations />
	<SupportActivity />
</div>
