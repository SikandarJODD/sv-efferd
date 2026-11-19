<script lang="ts">
	import ArrowRightIcon from "@lucide/svelte/icons/arrow-right";
	import { scaleUtc } from "d3-scale";
	import { curveNatural } from "d3-shape";
	import { Area, AreaChart, LinearGradient } from "layerchart";
	import { Button } from "#lib/components/ui/button/index.js";
	import * as Card from "#lib/components/ui/card/index.js";
	import * as Chart from "#lib/components/ui/chart/index.js";
	import * as Select from "#lib/components/ui/select/index.js";
	import Delta from "./delta.svelte";
	import {
		formatChartAxisTick,
		formatChartTooltipDate,
		parseIsoCalendarDate
	} from "./formatter.js";
	import { revenueChartDemo } from "./revenue-chart-data.js";

	type Period = "7" | "14" | "30" | "60" | "90";
	let period = $state<Period>("60");

	const chartRows = $derived(
		revenueChartDemo.slice(-Number(period)).map((row) => ({
			...row,
			x: parseIsoCalendarDate(row.date)
		}))
	);
	const growth = $derived.by(() => {
		const first = chartRows[0]?.revenue ?? 0;
		const last = chartRows.at(-1)?.revenue ?? first;
		return first ? ((last - first) / first) * 100 : 0;
	});
	const chartConfig = {
		revenue: { label: "Revenue", color: "var(--chart-1)" }
	} satisfies Chart.ChartConfig;
</script>

<Card.Root class="shadow-none md:col-span-2 lg:col-span-4">
	<Card.Header class="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
		<Card.Title>Revenue</Card.Title>
		<Select.Root type="single" bind:value={period}>
			<Select.Trigger
				class="w-full min-w-36 sm:w-fit"
				size="sm"
				aria-label="Revenue time range"
			>
				Last {period} days
			</Select.Trigger>
			<Select.Content align="end">
				<Select.Group>
					<Select.Item value="7">Last 7 days</Select.Item>
					<Select.Item value="14">Last 14 days</Select.Item>
					<Select.Item value="30">Last 30 days</Select.Item>
					<Select.Item value="60">Last 60 days</Select.Item>
					<Select.Item value="90">Last 90 days</Select.Item>
				</Select.Group>
			</Select.Content>
		</Select.Root>
	</Card.Header>
	<Card.Content>
		<Chart.Container config={chartConfig} class="aspect-[22/7] w-full">
			<AreaChart
				data={chartRows}
				x="x"
				xScale={scaleUtc()}
				axis="x"
				series={[{ key: "revenue", label: "Revenue", color: chartConfig.revenue.color }]}
				props={{
					xAxis: {
						ticks: period === "7" ? 7 : undefined,
						format: (date: Date) =>
							formatChartAxisTick(date.toISOString().slice(0, 10), Number(period))
					}
				}}
			>
				{#snippet marks({ context })}
					{#each context.series.visibleSeries as series (series.key)}
						<LinearGradient
							stops={[
								series.color ?? "",
								`color-mix(in lch, ${series.color} 8%, transparent)`
							]}
							vertical
						>
							{#snippet children({ gradient })}
								<Area
									{...series.props}
									seriesKey={series.key}
									curve={curveNatural}
									fill={gradient}
									fillOpacity={0.45}
									line={{ class: "stroke-2" }}
									motion="tween"
								/>
							{/snippet}
						</LinearGradient>
					{/each}
				{/snippet}
				{#snippet tooltip()}
					<Chart.Tooltip
						indicator="line"
						labelFormatter={(date: Date) =>
							formatChartTooltipDate(date.toISOString().slice(0, 10))}
					/>
				{/snippet}
			</AreaChart>
		</Chart.Container>
	</Card.Content>
	<Card.Footer class="flex-wrap justify-between gap-2">
		<div class="flex min-w-0 items-center gap-1 text-xs">
			<Delta value={growth} />
			<span class="text-pretty text-muted-foreground">vs first day in this range</span>
		</div>
		<Button href="#/reports" size="xs" variant="ghost" class="text-muted-foreground">
			View report
			<ArrowRightIcon data-icon="inline-end" aria-hidden="true" />
		</Button>
	</Card.Footer>
</Card.Root>
