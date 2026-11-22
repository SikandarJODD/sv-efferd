<script lang="ts">
	import * as Card from "#lib/components/ui/card/index.js";
	import ShareBarList from "./share-bar-list.svelte";

	const browsers = [
		{ label: "Chrome", value: 58 },
		{ label: "Safari", value: 22 },
		{ label: "Edge", value: 9 },
		{ label: "Firefox", value: 7 },
		{ label: "Other", value: 4 }
	] as const;
</script>

<Card.Root class="shadow-none">
	<Card.Header class="border-b">
		<Card.Title class="text-balance">Browsers</Card.Title>
		<Card.Description class="text-pretty">
			Share of sessions by primary browser family.
		</Card.Description>
	</Card.Header>
	<Card.Content class="px-0 py-1">
		<ShareBarList rows={browsers} ariaLabel="Sessions by browser" />
	</Card.Content>
</Card.Root>
