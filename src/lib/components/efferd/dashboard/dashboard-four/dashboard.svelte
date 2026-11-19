<script lang="ts">
	import CategoryRankChart from "./category-rank-chart.svelte";
	import DashboardStats from "./dashboard-stats.svelte";
	import QuickActions from "./quick-actions.svelte";
	import RefundReturnRateChart from "./refund-return-rate-chart.svelte";
	import RevenueChart from "./revenue-chart.svelte";
</script>

<div class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
	<DashboardStats />
	<RevenueChart />
	<RefundReturnRateChart />
	<CategoryRankChart />
	<QuickActions />
</div>
