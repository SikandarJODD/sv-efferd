<script lang="ts">
	import * as Card from "#lib/components/ui/card/index.js";
	import Delta from "./delta.svelte";

	const stats = [
		{ label: "Active users", value: "847", delta: 3.1 },
		{ label: "Revenue", value: "$18,290", delta: 12.4 },
		{ label: "Conversion Rate", value: "3.28%", delta: -0.4 }
	] as const;
</script>

{#each stats as stat (stat.label)}
	<Card.Root class="gap-2 rounded-none shadow-none ring-0">
		<Card.Header class="flex flex-row items-center justify-between">
			<Card.Title class="text-xs font-normal tracking-wide text-muted-foreground">
				{stat.label}
			</Card.Title>
			<Card.Description>
				<Delta value={stat.delta} />
			</Card.Description>
		</Card.Header>
		<Card.Content class="flex-row items-center gap-2">
			<p class="text-xl font-medium tabular-nums">{stat.value}</p>
		</Card.Content>
	</Card.Root>
{/each}
