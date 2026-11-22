<script lang="ts">
	import * as Card from "#lib/components/ui/card/index.js";
	import DashboardCard from "./dashboard-card.svelte";
	import Delta from "./delta.svelte";

	const stats = [
		{ label: "Active users", value: "847", delta: 3.1 },
		{ label: "Revenue", value: "$18,290", delta: 12.4 },
		{ label: "Conversion Rate", value: "3.28%", delta: -0.4 },
		{ label: "New signups", value: "142", delta: 8.7 }
	] as const;
</script>

{#each stats as stat (stat.label)}
	<DashboardCard>
		<Card.Header class="flex flex-row items-center justify-between">
			<Card.Title class="text-xs font-normal tracking-wide">{stat.label}</Card.Title>
		</Card.Header>
		<Card.Content class="flex flex-row items-center gap-2">
			<p class="text-2xl font-semibold tabular-nums">{stat.value}</p>
		</Card.Content>
		<Card.Footer class="gap-1 rounded-none bg-background text-xs">
			<Delta value={stat.delta} />
			<span class="text-muted-foreground">vs last week</span>
		</Card.Footer>
	</DashboardCard>
{/each}
