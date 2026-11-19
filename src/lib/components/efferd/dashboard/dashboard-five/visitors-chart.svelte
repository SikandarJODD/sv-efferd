<script lang="ts">
	import { curveLinear } from "d3-shape";
	import { Area, AreaChart } from "layerchart";
	import * as Card from "#lib/components/ui/card/index.js";
	import * as Chart from "#lib/components/ui/chart/index.js";
	import Delta from "./delta.svelte";
	import { formatInteger } from "./formatter.js";

	const chartData = [
		{ month: "January", visitors: 555 },
		{ month: "February", visitors: 904 },
		{ month: "March", visitors: 727 },
		{ month: "April", visitors: 801 },
		{ month: "May", visitors: 942 },
		{ month: "June", visitors: 1048 },
		{ month: "July", visitors: 702 },
		{ month: "August", visitors: 1103 },
		{ month: "September", visitors: 879 },
		{ month: "October", visitors: 1046 },
		{ month: "November", visitors: 1407 },
		{ month: "December", visitors: 548 }
	];
	const totalVisitors = chartData.reduce((sum, row) => sum + row.visitors, 0);
	const chartConfig = {
		visitors: { label: "Visitors", color: "var(--chart-2)" }
	} satisfies Chart.ChartConfig;
	const componentId = $props.id();
	const gradientId = `visitors-area-${componentId.replace(/:/g, "")}`;
</script>

<Card.Root class="shadow-none md:col-span-2 lg:col-span-3">
	<Card.Header class="flex flex-row items-start justify-between gap-3">
		<div class="flex flex-col gap-1.5">
			<Card.Title class="font-mono text-2xl tabular-nums">
				{formatInteger(totalVisitors)}
			</Card.Title>
			<Card.Description class="text-pretty">
				Total visitors in the last 12 months.
			</Card.Description>
		</div>
		<Delta value={7.2} variant="badge" icon="trend">
			<span>vs prior 12 months</span>
		</Delta>
	</Card.Header>
	<Card.Content>
		<Chart.Container config={chartConfig} class="h-60 w-full">
			<AreaChart
				data={chartData}
				x="month"
				axis="x"
				padding={{ left: 12, right: 12 }}
				series={[{ key: "visitors", label: "Visitors", color: chartConfig.visitors.color }]}
				props={{
					xAxis: { format: (month: string) => month.slice(0, 3) },
					yAxis: { format: () => "" }
				}}
			>
				{#snippet marks({ context })}
					<defs>
						<linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
							<stop
								offset="0%"
								stop-color="var(--color-visitors)"
								stop-opacity={0.35}
							/>
							<stop
								offset="100%"
								stop-color="var(--color-visitors)"
								stop-opacity={0}
							/>
						</linearGradient>
					</defs>
					{#each context.series.visibleSeries as series (series.key)}
						<Area
							seriesKey={series.key}
							curve={curveLinear}
							fill={`url(#${gradientId})`}
							fillOpacity={1}
							line={{ class: "stroke-2" }}
							{...series.props}
						/>
					{/each}
				{/snippet}
				{#snippet tooltip()}
					<Chart.Tooltip indicator="dashed" />
				{/snippet}
			</AreaChart>
		</Chart.Container>
	</Card.Content>
</Card.Root>
