<script lang="ts">
	import { scaleUtc } from "d3-scale";
	import { curveLinear } from "d3-shape";
	import { Area, AreaChart, ChartClipPath } from "layerchart";
	import { cubicInOut } from "svelte/easing";
	import * as Card from "#lib/components/ui/card/index.js";
	import * as Chart from "#lib/components/ui/chart/index.js";
	import * as Select from "#lib/components/ui/select/index.js";
	import Delta from "./delta.svelte";
	import { formatDate } from "./formatter.js";

	type Period = "7" | "30";
	type SalesChartRow = {
		date: Date;
		retail: number;
		online: number;
	};

	const chartData: SalesChartRow[] = [
		{ date: new Date("2026-03-15T12:00:00"), retail: 198, online: 96 },
		{ date: new Date("2026-03-16T12:00:00"), retail: 176, online: 82 },
		{ date: new Date("2026-03-17T12:00:00"), retail: 184, online: 88 },
		{ date: new Date("2026-03-18T12:00:00"), retail: 170, online: 80 },
		{ date: new Date("2026-03-19T12:00:00"), retail: 188, online: 90 },
		{ date: new Date("2026-03-20T12:00:00"), retail: 180, online: 85 },
		{ date: new Date("2026-03-21T12:00:00"), retail: 192, online: 92 },
		{ date: new Date("2026-03-22T12:00:00"), retail: 172, online: 78 },
		{ date: new Date("2026-03-23T12:00:00"), retail: 166, online: 74 },
		{ date: new Date("2026-03-24T12:00:00"), retail: 174, online: 79 },
		{ date: new Date("2026-03-25T12:00:00"), retail: 158, online: 72 },
		{ date: new Date("2026-03-26T12:00:00"), retail: 168, online: 76 },
		{ date: new Date("2026-03-27T12:00:00"), retail: 152, online: 70 },
		{ date: new Date("2026-03-28T12:00:00"), retail: 160, online: 74 },
		{ date: new Date("2026-03-29T12:00:00"), retail: 146, online: 68 },
		{ date: new Date("2026-03-30T12:00:00"), retail: 154, online: 71 },
		{ date: new Date("2026-03-31T12:00:00"), retail: 142, online: 65 },
		{ date: new Date("2026-04-01T12:00:00"), retail: 140, online: 63 },
		{ date: new Date("2026-04-02T12:00:00"), retail: 132, online: 59 },
		{ date: new Date("2026-04-03T12:00:00"), retail: 124, online: 56 },
		{ date: new Date("2026-04-04T12:00:00"), retail: 128, online: 58 },
		{ date: new Date("2026-04-05T12:00:00"), retail: 116, online: 52 },
		{ date: new Date("2026-04-06T12:00:00"), retail: 84, online: 40 },
		{ date: new Date("2026-04-07T12:00:00"), retail: 82, online: 38 },
		{ date: new Date("2026-04-08T12:00:00"), retail: 96, online: 46 },
		{ date: new Date("2026-04-09T12:00:00"), retail: 92, online: 69 },
		{ date: new Date("2026-04-10T12:00:00"), retail: 96, online: 62 },
		{ date: new Date("2026-04-11T12:00:00"), retail: 112, online: 75 },
		{ date: new Date("2026-04-12T12:00:00"), retail: 101, online: 77 },
		{ date: new Date("2026-04-13T12:00:00"), retail: 112, online: 78 }
	];

	const chartConfig = {
		retail: { label: "Retail", color: "var(--chart-3)" },
		online: { label: "Online", color: "var(--chart-2)" }
	} satisfies Chart.ChartConfig;

	const componentId = $props.id();
	const uid = componentId.replace(/:/g, "");
	const onlineGradient = `sales-online-${uid}`;
	const retailGradient = `sales-retail-${uid}`;
	let period = $state<Period>("7");
	const periodDays = $derived(Number(period));

	const chartRows = $derived.by(() => {
		const lastDate = chartData.at(-1)?.date;
		if (!lastDate) return [];

		const startDate = new Date(lastDate);
		startDate.setDate(startDate.getDate() - (periodDays - 1));
		return chartData.filter((item) => item.date >= startDate);
	});

	const growth = $derived.by(() => {
		const first = chartRows[0];
		const last = chartRows.at(-1);
		if (!first || !last) return 0;

		const firstTotal = first.retail + first.online;
		const lastTotal = last.retail + last.online;
		return firstTotal === 0 ? 0 : ((lastTotal - firstTotal) / firstTotal) * 100;
	});
</script>

<Card.Root class="rounded-none shadow-none ring-0 lg:col-span-3">
	<Card.Header>
		<div class="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
			<div class="flex min-w-0 flex-col gap-2">
				<div class="flex flex-wrap items-center gap-2">
					<Card.Title class="text-base">Sales</Card.Title>
					<Delta value={growth} variant="badge" icon="trend" />
				</div>
				<Card.Description>
					Daily sales count by channel, last {periodDays} days.
				</Card.Description>
			</div>
			<Select.Root type="single" bind:value={period}>
				<Select.Trigger
					aria-label="Sales chart time range"
					class="w-full min-w-36 sm:w-fit"
					size="sm"
				>
					<Select.Value placeholder="Range" />
				</Select.Trigger>
				<Select.Content align="end">
					<Select.Group>
						<Select.Item value="7">Last 7 days</Select.Item>
						<Select.Item value="30">Last 30 days</Select.Item>
					</Select.Group>
				</Select.Content>
			</Select.Root>
		</div>
	</Card.Header>
	<Card.Content class="px-3">
		<Chart.Container config={chartConfig} class="aspect-21/9 min-h-48 w-full p-0">
			<AreaChart
				data={chartRows}
				x="date"
				xScale={scaleUtc()}
				yPadding={[0, 16]}
				axis="x"
				series={[
					{ key: "online", label: "Online", color: chartConfig.online.color },
					{ key: "retail", label: "Retail", color: chartConfig.retail.color }
				]}
				seriesLayout="stack"
				props={{
					xAxis: {
						ticks: periodDays === 7 ? 7 : undefined,
						format: (date: Date) => formatDate(date)
					},
					yAxis: { format: () => "" }
				}}
			>
				{#snippet marks({ context })}
					<defs>
						<linearGradient id={onlineGradient} x1="0" y1="0" x2="0" y2="1">
							<stop offset="5%" stop-color="var(--color-online)" stop-opacity={0.4} />
							<stop offset="95%" stop-color="var(--color-online)" stop-opacity={0} />
						</linearGradient>
						<linearGradient id={retailGradient} x1="0" y1="0" x2="0" y2="1">
							<stop offset="5%" stop-color="var(--color-retail)" stop-opacity={0.4} />
							<stop offset="95%" stop-color="var(--color-retail)" stop-opacity={0} />
						</linearGradient>
					</defs>
					<ChartClipPath
						initialWidth={0}
						motion={{ width: { type: "tween", duration: 700, easing: cubicInOut } }}
					>
						{#each context.series.visibleSeries as series (series.key)}
							<Area
								seriesKey={series.key}
								curve={curveLinear}
								fill={series.key === "online"
									? `url(#${onlineGradient})`
									: `url(#${retailGradient})`}
								fillOpacity={0.4}
								line={{ class: "stroke-1" }}
								motion="tween"
								{...series.props}
							/>
						{/each}
					</ChartClipPath>
				{/snippet}
				{#snippet tooltip()}
					<Chart.Tooltip labelFormatter={(date: Date) => formatDate(date, "full")} />
				{/snippet}
			</AreaChart>
		</Chart.Container>
	</Card.Content>
</Card.Root>
