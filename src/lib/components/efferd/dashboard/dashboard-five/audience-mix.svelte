<script lang="ts">
	import * as Card from "#lib/components/ui/card/index.js";
	import ShareBarList from "./share-bar-list.svelte";

	const segments = [
		{ label: "Returning visitors", value: 54 },
		{ label: "New visitors", value: 41 },
		{ label: "Logged-in users", value: 5 }
	] as const;
</script>

<Card.Root class="shadow-none">
	<Card.Header class="border-b">
		<Card.Title class="text-balance">Audience mix</Card.Title>
		<Card.Description class="text-pretty">
			Session split by familiarity in the last 12 months.
		</Card.Description>
	</Card.Header>
	<Card.Content class="px-0 py-1">
		<ShareBarList rows={segments} ariaLabel="Audience segments by share of sessions" />
	</Card.Content>
</Card.Root>
