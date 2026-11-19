<script lang="ts">
	import * as Card from "#lib/components/ui/card/index.js";
	import Delta from "./delta.svelte";

	const stats = [
		{ label: "Open queue", value: "38", delta: -12.4, footnote: "vs yesterday" },
		{ label: "Active conversations", value: "126", delta: 5.2, footnote: "vs last week" },
		{ label: "Median first reply", value: "4.1m", delta: -8, footnote: "vs last week" },
		{ label: "CSAT (30d)", value: "94%", delta: 1.1, footnote: "vs prior 30d" }
	] as const;
</script>

{#each stats as stat (stat.label)}
	<Card.Root class="shadow-none dark:ring-0">
		<Card.Header>
			<Card.Title class="text-xs font-normal text-muted-foreground">{stat.label}</Card.Title>
		</Card.Header>
		<Card.Content class="flex flex-col gap-2">
			<p class="text-2xl font-semibold tabular-nums">{stat.value}</p>
			<div class="flex items-center gap-1 text-xs">
				<Delta value={stat.delta} />
				<span class="text-muted-foreground">{stat.footnote}</span>
			</div>
		</Card.Content>
	</Card.Root>
{/each}
