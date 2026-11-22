<script lang="ts">
	import { Arc, PieChart, Text } from "layerchart";
	import * as Card from "#lib/components/ui/card/index.js";
	import * as Chart from "#lib/components/ui/chart/index.js";
	import Delta from "./delta.svelte";

	const chartData = [
		{ channel: "direct", share: 44, color: "var(--color-direct)" },
		{ channel: "email", share: 36, color: "var(--color-email)" },
		{ channel: "social", share: 20, color: "var(--color-social)" }
	];
	const chartConfig = {
		share: { label: "Share" },
		direct: { label: "Direct", color: "var(--chart-1)" },
		email: { label: "Email", color: "var(--chart-3)" },
		social: { label: "Social", color: "var(--chart-5)" }
	} satisfies Chart.ChartConfig;
</script>

<Card.Root class="flex flex-col shadow-none dark:ring-0">
	<Card.Header class="items-center gap-1 pb-0 sm:items-start">
		<div class="flex flex-wrap items-center justify-center gap-2 sm:justify-start">
			<Card.Title>Traffic by channel</Card.Title>
			<Delta value={2.4} variant="badge" icon="trend" suffix="pp" />
		</div>
		<Card.Description>Share of new conversations in last 7 days</Card.Description>
	</Card.Header>
	<Card.Content class="my-auto">
		<Chart.Container config={chartConfig} class="mx-auto aspect-square max-h-72 w-full">
			<PieChart
				data={chartData}
				key="channel"
				value="share"
				c="color"
				cRange={chartData.map((item) => item.color)}
				innerRadius={36}
				legend
				props={{ pie: { motion: "tween" } }}
			>
				{#snippet arc({ props, visibleData, index })}
					<Arc {...props} cornerRadius={8} padAngle={0.02}>
						{#snippet children({ centroid })}
							<Text
								value={`${visibleData[index].share}%`}
								x={centroid[0]}
								y={centroid[1]}
								textAnchor="middle"
								verticalAnchor="middle"
								font-size="12"
								class="fill-background font-medium"
							/>
						{/snippet}
					</Arc>
				{/snippet}
			</PieChart>
		</Chart.Container>
	</Card.Content>
</Card.Root>
