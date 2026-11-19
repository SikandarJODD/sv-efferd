<script lang="ts">
	import { curveNatural } from "d3-shape";
	import { LineChart } from "layerchart";
	import * as Card from "#lib/components/ui/card/index.js";
	import * as Chart from "#lib/components/ui/chart/index.js";
	import Delta from "./delta.svelte";

	const chartRows = [
		{ day: "Mon", minutes: 5.4 },
		{ day: "Tue", minutes: 4.9 },
		{ day: "Wed", minutes: 5.2 },
		{ day: "Thu", minutes: 4.7 },
		{ day: "Fri", minutes: 4.5 },
		{ day: "Sat", minutes: 5 },
		{ day: "Sun", minutes: 4.1 }
	];
	const first = chartRows[0]?.minutes ?? 0;
	const last = chartRows.at(-1)?.minutes ?? first;
	const improvement = first ? ((first - last) / first) * 100 : 0;
	const chartConfig = {
		minutes: { label: "Minutes", color: "var(--chart-2)" }
	} satisfies Chart.ChartConfig;
</script>

<Card.Root class="shadow-none md:col-span-2 dark:ring-0">
	<Card.Header class="gap-1">
		<div class="flex flex-wrap items-center gap-2">
			<Card.Title>Median first reply</Card.Title>
			<Delta value={improvement} variant="badge" icon="trend" />
		</div>
		<Card.Description>Minutes to first agent message, last 7 days.</Card.Description>
	</Card.Header>
	<Card.Content>
		<Chart.Container config={chartConfig} class="aspect-video w-full">
			<LineChart
				data={chartRows}
				x="day"
				axis="x"
				points={{ r: 4 }}
				labels={{ offset: 12 }}
				series={[{ key: "minutes", label: "Minutes", color: chartConfig.minutes.color }]}
				props={{
					spline: { curve: curveNatural, motion: "tween", strokeWidth: 2 },
					highlight: { points: { motion: "none", r: 6 } },
					xAxis: { format: (day) => String(day).slice(0, 3) }
				}}
			>
				{#snippet tooltip()}
					<Chart.Tooltip indicator="line" />
				{/snippet}
			</LineChart>
		</Chart.Container>
	</Card.Content>
</Card.Root>
