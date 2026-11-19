<script lang="ts">
	import { scaleBand } from "d3-scale";
	import { BarChart, Highlight } from "layerchart";
	import * as Card from "#lib/components/ui/card/index.js";
	import * as Chart from "#lib/components/ui/chart/index.js";

	const chartData = [
		{ day: "Apr 8", direct: 11, email: 9, social: 4 },
		{ day: "Apr 9", direct: 15, email: 11, social: 5 },
		{ day: "Apr 10", direct: 13, email: 10, social: 5 },
		{ day: "Apr 11", direct: 16, email: 12, social: 5 },
		{ day: "Apr 12", direct: 12, email: 10, social: 5 },
		{ day: "Apr 13", direct: 14, email: 10, social: 6 },
		{ day: "Apr 14", direct: 11, email: 9, social: 5 },
		{ day: "Apr 15", direct: 16, email: 7, social: 4 },
		{ day: "Apr 16", direct: 13, email: 11, social: 5 },
		{ day: "Apr 17", direct: 15, email: 11, social: 6 }
	];
	const chartConfig = {
		direct: { label: "Direct", color: "var(--chart-1)" },
		email: { label: "Email", color: "var(--chart-3)" },
		social: { label: "Social", color: "var(--chart-5)" }
	} satisfies Chart.ChartConfig;
</script>

<Card.Root class="shadow-none md:col-span-2 dark:ring-0">
	<Card.Header>
		<Card.Title>CSAT responses</Card.Title>
		<Card.Description>Post-resolution surveys submitted per day by channel, last 10 days.</Card.Description>
	</Card.Header>
	<Card.Content>
		<Chart.Container config={chartConfig} class="aspect-video w-full">
			<BarChart
				data={chartData}
				x="day"
				xScale={scaleBand().padding(0.7)}
				axis="x"
				rule={false}
				series={[
					{ key: "social", label: "Social", color: chartConfig.social.color, props: { rounded: "bottom" } },
					{ key: "email", label: "Email", color: chartConfig.email.color },
					{ key: "direct", label: "Direct", color: chartConfig.direct.color, props: { rounded: "top" } }
				]}
				seriesLayout="stack"
				props={{ bars: { stroke: "none", motion: "tween" }, highlight: { area: false }, xAxis: { format: (day) => String(day) } }}
			>
				{#snippet belowMarks()}
					<Highlight area={{ class: "fill-muted/50" }} />
				{/snippet}
				{#snippet tooltip()}
					<Chart.Tooltip hideLabel />
				{/snippet}
			</BarChart>
		</Chart.Container>
	</Card.Content>
</Card.Root>
