<script lang="ts">
	import { scaleUtc } from "d3-scale";
	import { curveStep } from "d3-shape";
	import { LineChart } from "layerchart";
	import * as Card from "#lib/components/ui/card/index.js";
	import * as Chart from "#lib/components/ui/chart/index.js";
	import DashboardCard from "./dashboard-card.svelte";
	import Delta from "./delta.svelte";
	import { formatDate, parseIsoCalendarDate } from "./formatter.js";

	const visibleDays = 7;
	const chartData = [
		["2026-03-15", 198, 96],
		["2026-03-16", 176, 82],
		["2026-03-17", 184, 88],
		["2026-03-18", 170, 80],
		["2026-03-19", 188, 90],
		["2026-03-20", 180, 85],
		["2026-03-21", 192, 92],
		["2026-03-22", 172, 78],
		["2026-03-23", 166, 74],
		["2026-03-24", 174, 79],
		["2026-03-25", 158, 72],
		["2026-03-26", 168, 76],
		["2026-03-27", 152, 70],
		["2026-03-28", 160, 74],
		["2026-03-29", 146, 68],
		["2026-03-30", 154, 71],
		["2026-03-31", 142, 65],
		["2026-04-01", 140, 63],
		["2026-04-02", 132, 59],
		["2026-04-03", 124, 56],
		["2026-04-04", 128, 58],
		["2026-04-05", 116, 52],
		["2026-04-06", 84, 40],
		["2026-04-07", 82, 38],
		["2026-04-08", 96, 46],
		["2026-04-09", 92, 69],
		["2026-04-10", 96, 62],
		["2026-04-11", 112, 75],
		["2026-04-12", 101, 77],
		["2026-04-13", 112, 78]
	].map(([date, retail, online]) => ({
		date: parseIsoCalendarDate(String(date)),
		retail: Number(retail),
		online: Number(online)
	}));

	const chartRows = chartData.slice(-visibleDays);
	const first = chartRows[0];
	const last = chartRows.at(-1) ?? first;
	const firstTotal = first.retail + first.online;
	const growth = ((last.retail + last.online - firstTotal) / firstTotal) * 100;
	const chartConfig = {
		retail: { label: "Retail", color: "var(--chart-2)" },
		online: { label: "Online", color: "var(--chart-1)" }
	} satisfies Chart.ChartConfig;
</script>

<DashboardCard class="gap-0 md:col-span-2">
	<Card.Header>
		<div class="flex min-w-0 flex-col gap-2">
			<div class="flex flex-wrap items-center gap-2">
				<Card.Title>Channel sales</Card.Title>
				<Delta value={growth} variant="badge" icon="trend" />
			</div>
			<Card.Description
				>Daily sales count by channel, last {visibleDays} days.</Card.Description
			>
		</div>
	</Card.Header>
	<Card.Content>
		<Chart.Container config={chartConfig} class="h-60 w-full p-0 md:h-80">
			<LineChart
				data={chartRows}
				x="date"
				xScale={scaleUtc()}
				axis="x"
				series={[
					{ key: "online", label: "Online", color: chartConfig.online.color },
					{ key: "retail", label: "Retail", color: chartConfig.retail.color }
				]}
				props={{
					spline: { curve: curveStep, motion: "tween", strokeWidth: 2 },
					xAxis: { format: (date: Date) => formatDate(date.toISOString().slice(0, 10)) },
					highlight: { points: { r: 4 } }
				}}
			>
				{#snippet tooltip()}
					<Chart.Tooltip hideLabel />
				{/snippet}
			</LineChart>
		</Chart.Container>
	</Card.Content>
</DashboardCard>
