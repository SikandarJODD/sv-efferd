<script lang="ts">
	import DashboardInvoices from "./dashboard-invoices.svelte";
	import DashboardStats from "./dashboard-stats.svelte";
	import SalesChart from "./sales-chart.svelte";
</script>

<div class="flex flex-1 flex-col gap-6">
	<div class="flex flex-col gap-1">
		<h1 class="text-xl leading-tight font-semibold">Welcome back, Shaban!</h1>
		<p class="text-base text-muted-foreground">Let's get things done.</p>
	</div>
	<div class="overflow-hidden rounded-lg border">
		<div class="grid grid-cols-1 gap-px bg-border lg:grid-cols-3">
			<DashboardStats />
			<SalesChart />
			<DashboardInvoices />
		</div>
	</div>
</div>
