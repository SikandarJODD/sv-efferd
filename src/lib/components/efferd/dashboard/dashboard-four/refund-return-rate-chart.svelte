<script lang="ts">
	import ArrowRightIcon from "@lucide/svelte/icons/arrow-right";
	import { curveNatural } from "d3-shape";
	import { LineChart } from "layerchart";
	import { Button } from "#lib/components/ui/button/index.js";
	import * as Card from "#lib/components/ui/card/index.js";
	import * as Chart from "#lib/components/ui/chart/index.js";
	import Delta from "./delta.svelte";

	const returnDaily7 = [
		{ day: "Mon", returnRate: 2.2 },
		{ day: "Tue", returnRate: 1.5 },
		{ day: "Wed", returnRate: 3.1 },
		{ day: "Thu", returnRate: 4.8 },
		{ day: "Fri", returnRate: 2.4 },
		{ day: "Sat", returnRate: 3.2 },
		{ day: "Sun", returnRate: 3.9 }
	];
	const first = returnDaily7[0].returnRate;
	const last = returnDaily7.at(-1)?.returnRate ?? first;
	const returnTrend = ((last - first) / first) * 100;
	const chartConfig = {
		returnRate: { label: "Return %", color: "var(--chart-1)" }
	} satisfies Chart.ChartConfig;
</script>

<Card.Root class="shadow-none md:col-span-2">
	<Card.Header class="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
		<div class="flex flex-col gap-1">
			<Card.Title>Return rate</Card.Title>
			<Card.Description>Last 7 days</Card.Description>
		</div>
		<div class="flex flex-col gap-1 sm:items-end">
			<p class="text-base font-semibold tabular-nums">2.6%</p>
			<Card.Description>of orders refunded</Card.Description>
		</div>
	</Card.Header>
	<Card.Content class="mt-auto">
		<Chart.Container config={chartConfig} class="aspect-[16/7] w-full">
			<LineChart
				data={returnDaily7}
				x="day"
				axis="x"
				series={[
					{ key: "returnRate", label: "Return %", color: chartConfig.returnRate.color }
				]}
				props={{
					spline: { curve: curveNatural, motion: "tween", strokeWidth: 2.5 },
					xAxis: { format: (day) => String(day) }
				}}
			>
				{#snippet tooltip()}
					<Chart.Tooltip indicator="line" />
				{/snippet}
			</LineChart>
		</Chart.Container>
	</Card.Content>
	<Card.Footer class="flex-wrap justify-between gap-2">
		<div class="flex min-w-0 items-center gap-1 text-xs">
			<Delta value={returnTrend} />
			<span class="text-pretty text-muted-foreground">vs first day</span>
		</div>
		<Button href="/" size="xs" variant="ghost" class="text-muted-foreground">
			Returns desk
			<ArrowRightIcon data-icon="inline-end" aria-hidden="true" />
		</Button>
	</Card.Footer>
</Card.Root>
