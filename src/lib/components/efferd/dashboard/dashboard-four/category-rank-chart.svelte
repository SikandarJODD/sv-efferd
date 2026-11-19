<script lang="ts">
	import { Arc, PieChart, Text } from "layerchart";
	import * as Card from "#lib/components/ui/card/index.js";
	import * as Chart from "#lib/components/ui/chart/index.js";

	type CategoryMixDatum = { category: string; share: number };
	const source: CategoryMixDatum[] = [
		{ category: "Apparel", share: 22 },
		{ category: "Accessories", share: 22 },
		{ category: "Footwear", share: 18 },
		{ category: "Home & living", share: 14 },
		{ category: "Beauty", share: 11 },
		{ category: "Outlet", share: 8 },
		{ category: "Sports", share: 5 }
	];

	const top = [...source].sort((a, b) => b.share - a.share).slice(0, 4);
	const others = source
		.filter((row) => !top.includes(row))
		.reduce((sum, row) => sum + row.share, 0);
	const chartData = [...top, { category: "Others", share: others }].map((row, index) => ({
		...row,
		color: `var(--color-s${index})`
	}));
	const chartConfig = {
		share: { label: "Share" },
		s0: { label: chartData[0].category, color: "var(--chart-1)" },
		s1: { label: chartData[1].category, color: "var(--chart-2)" },
		s2: { label: chartData[2].category, color: "var(--chart-3)" },
		s3: { label: chartData[3].category, color: "var(--chart-4)" },
		s4: { label: chartData[4].category, color: "var(--chart-5)" }
	} satisfies Chart.ChartConfig;
</script>

<Card.Root class="flex flex-col shadow-none">
	<Card.Header>
		<Card.Title>Revenue share by category</Card.Title>
		<Card.Description>Last 7 days</Card.Description>
	</Card.Header>
	<Card.Content class="my-auto">
		<Chart.Container config={chartConfig} class="mx-auto aspect-square max-h-72 w-full">
			<PieChart
				data={chartData}
				key="category"
				value="share"
				c="color"
				cRange={chartData.map((row) => row.color)}
				innerRadius={48}
				legend
				props={{ pie: { motion: "tween" } }}
			>
				{#snippet arc({ props, visibleData, index })}
					<Arc {...props} cornerRadius={5} padAngle={0.02}>
						{#snippet children({ centroid })}
							<Text
								value={`${visibleData[index].share}%`}
								x={centroid[0]}
								y={centroid[1]}
								textAnchor="middle"
								verticalAnchor="middle"
								font-size="11"
								class="fill-background font-medium"
							/>
						{/snippet}
					</Arc>
				{/snippet}
			</PieChart>
		</Chart.Container>
	</Card.Content>
</Card.Root>
