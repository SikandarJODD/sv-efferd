<script lang="ts">
	import BillingHealth from "./billing-health.svelte";
	import ChannelSalesChart from "./channel-sales-chart.svelte";
	import DashboardActivity from "./dashboard-activity.svelte";
	import DashboardInvoices from "./dashboard-invoices.svelte";
	import DashboardStats from "./dashboard-stats.svelte";
	import NetRevenueChart from "./net-revenue-chart.svelte";
</script>

<div class="grid grid-cols-1 gap-px bg-border p-px md:grid-cols-2 lg:grid-cols-4">
	<DashboardStats />
	<NetRevenueChart />
	<ChannelSalesChart />
	<DashboardInvoices />
	<BillingHealth />
	<DashboardActivity />
</div>
