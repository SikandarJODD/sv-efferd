<script lang="ts">
	import * as Card from "#lib/components/ui/card/index.js";
	import Delta from "./delta.svelte";

	const stats = [
		{ label: "Total revenue", value: "$284,920", delta: 8.2, hint: "vs prior 30 days" },
		{ label: "Orders", value: "1,842", delta: 4.1, hint: "vs prior 30 days" },
		{ label: "Average order value", value: "$154.60", delta: -1.3, hint: "vs prior 30 days" },
		{ label: "Store conversion", value: "3.06%", delta: 0.6, hint: "vs prior 30 days" }
	] as const;
</script>

{#each stats as stat (stat.label)}
	<Card.Root class="shadow-none">
		<Card.Header>
			<Card.Title class="text-xs font-normal text-muted-foreground">{stat.label}</Card.Title>
		</Card.Header>
		<Card.Content>
			<p class="text-2xl font-semibold tabular-nums">{stat.value}</p>
		</Card.Content>
		<Card.Footer class="gap-1.5 text-xs">
			<Delta value={stat.delta} />
			<span class="text-pretty text-muted-foreground">{stat.hint}</span>
		</Card.Footer>
	</Card.Root>
{/each}
