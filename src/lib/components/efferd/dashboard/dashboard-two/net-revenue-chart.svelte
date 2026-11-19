<script lang="ts">
	import { scaleBand } from "d3-scale";
	import { BarChart } from "layerchart";
	import { cubicInOut } from "svelte/easing";
	import * as Card from "#lib/components/ui/card/index.js";
	import * as Chart from "#lib/components/ui/chart/index.js";
	import DashboardCard from "./dashboard-card.svelte";
	import Delta from "./delta.svelte";

	const chartRows = [
		{ day: "Mon", sales: 3200 },
		{ day: "Tue", sales: 3001 },
		{ day: "Wed", sales: 3780 },
		{ day: "Thu", sales: 4100 },
		{ day: "Fri", sales: 4520 },
		{ day: "Sat", sales: 4004 },
		{ day: "Sun", sales: 5340 }
	];

	const firstDay = chartRows[0].sales;
	const lastDay = chartRows.at(-1)?.sales ?? firstDay;
	const growth = ((lastDay - firstDay) / firstDay) * 100;
	const chartConfig = {
		sales: { label: "Sales", color: "var(--chart-2)" }
	} satisfies Chart.ChartConfig;
</script>

<DashboardCard class="gap-0 md:col-span-2">
	<Card.Header class="gap-2">
		<div class="flex flex-wrap items-center gap-2">
			<Card.Title>Net revenue</Card.Title>
			<Delta value={growth} variant="badge" icon="trend" />
		</div>
		<Card.Description>Daily net sales, last 7 days.</Card.Description>
	</Card.Header>
	<Card.Content>
		<Chart.Container config={chartConfig} class="h-60 w-full p-0 md:h-80">
			<BarChart
				data={chartRows}
				x="day"
				xScale={scaleBand().padding(0.28)}
				axis="x"
				series={[{ key: "sales", label: "Sales", color: chartConfig.sales.color }]}
				props={{
					bars: {
						stroke: "none",
						motion: { type: "tween", duration: 500, easing: cubicInOut }
					},
					highlight: { area: { fill: "none" } },
					xAxis: { format: (day) => String(day) }
				}}
			>
				{#snippet tooltip()}
					<Chart.Tooltip hideLabel />
				{/snippet}
			</BarChart>
		</Chart.Container>
	</Card.Content>
</DashboardCard>
