<script lang="ts">
	import { scaleUtc } from "d3-scale";
	import { curveNatural } from "d3-shape";
	import { Area, AreaChart, LinearGradient } from "layerchart";
	import * as Card from "#lib/components/ui/card/index.js";
	import * as Chart from "#lib/components/ui/chart/index.js";
	import * as Select from "#lib/components/ui/select/index.js";
	import { conversationVolumeData } from "./conversation-volume-data.js";
	import Delta from "./delta.svelte";

	type Period = "7" | "30" | "60";
	let period = $state<Period>("30");

	const chartRows = $derived.by(() => {
		const reference = conversationVolumeData.at(-1)?.date ?? new Date();
		const start = new Date(reference);
		start.setDate(start.getDate() - Number(period));
		return conversationVolumeData.filter((row) => row.date >= start);
	});
	const growth = $derived.by(() => {
		const first = chartRows[0]?.conversations ?? 0;
		const last = chartRows.at(-1)?.conversations ?? first;
		return first ? ((last - first) / first) * 100 : 0;
	});
	const selectedLabel = $derived(`Last ${period} days`);
	const chartConfig = {
		conversations: { label: "New threads", color: "var(--chart-2)" }
	} satisfies Chart.ChartConfig;
</script>

<Card.Root class="shadow-none md:col-span-2 lg:col-span-3 dark:ring-0">
	<Card.Header class="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
		<div class="flex min-w-0 flex-col gap-2">
			<div class="flex flex-wrap items-center gap-2">
				<Card.Title>Conversation volume</Card.Title>
				<Delta value={growth} variant="badge" icon="trend" />
			</div>
			<Card.Description>New threads per day for the selected window.</Card.Description>
		</div>
		<Select.Root type="single" bind:value={period}>
			<Select.Trigger
				class="w-full min-w-36 sm:w-fit"
				size="sm"
				aria-label="Conversation volume time range"
			>
				{selectedLabel}
			</Select.Trigger>
			<Select.Content align="end">
				<Select.Group>
					<Select.Item value="7">Last 7 days</Select.Item>
					<Select.Item value="30">Last 30 days</Select.Item>
					<Select.Item value="60">Last 60 days</Select.Item>
				</Select.Group>
			</Select.Content>
		</Select.Root>
	</Card.Header>
	<Card.Content>
		<Chart.Container config={chartConfig} class="aspect-[22/8] w-full">
			<AreaChart
				data={chartRows}
				x="date"
				xScale={scaleUtc()}
				axis={true}
				series={[
					{
						key: "conversations",
						label: "New threads",
						color: chartConfig.conversations.color
					}
				]}
				props={{
					xAxis: {
						ticks: period === "7" ? 7 : undefined,
						format: (date: Date) =>
							date.toLocaleDateString(
								"en-US",
								period === "7"
									? { weekday: "short" }
									: { day: "numeric", month: "short" }
							)
					},
					yAxis: { ticks: 4 }
				}}
			>
				{#snippet marks({ context })}
					{#each context.series.visibleSeries as series (series.key)}
						<LinearGradient
							stops={[
								series.color ?? "",
								`color-mix(in lch, ${series.color} 10%, transparent)`
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
							date.toLocaleDateString("en-US", {
								weekday: "long",
								day: "numeric",
								month: "short"
							})}
					/>
				{/snippet}
			</AreaChart>
		</Chart.Container>
	</Card.Content>
</Card.Root>
