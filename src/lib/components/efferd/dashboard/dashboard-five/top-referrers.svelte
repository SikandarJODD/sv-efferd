<script lang="ts">
	import ArrowRightIcon from "@lucide/svelte/icons/arrow-right";
	import { Button } from "#lib/components/ui/button/index.js";
	import * as Card from "#lib/components/ui/card/index.js";
	import * as Table from "#lib/components/ui/table/index.js";
	import { formatInteger } from "./formatter.js";

	const rows = [
		{ host: "news.ycombinator.com", sessions: 1420 },
		{ host: "t.co", sessions: 980 },
		{ host: "github.com", sessions: 760 },
		{ host: "producthunt.com", sessions: 540 },
		{ host: "reddit.com", sessions: 410 }
	] as const;
</script>

<Card.Root class="relative shadow-none">
	<Card.Header>
		<Card.Title class="text-balance">Top referrers</Card.Title>
		<Card.Description class="text-pretty">
			External sites sending the most attributed sessions.
		</Card.Description>
	</Card.Header>
	<Card.Content class="mask-b-from-50% mask-b-to-100% px-0 pb-2">
		<Table.Root class="border-t">
			<Table.Caption class="sr-only"
				>Top referrer domains by attributed sessions.</Table.Caption
			>
			<Table.Header>
				<Table.Row>
					<Table.Head class="pl-6" scope="col">Host</Table.Head>
					<Table.Head class="pr-6 text-end tabular-nums" scope="col">Sessions</Table.Head>
				</Table.Row>
			</Table.Header>
			<Table.Body>
				{#each rows as row (row.host)}
					<Table.Row class="hover:bg-transparent">
						<Table.Cell class="max-w-55 truncate pl-6 font-medium">
							<span class="text-xs">{row.host}</span>
						</Table.Cell>
						<Table.Cell
							class="pr-6 text-end text-xs text-muted-foreground tabular-nums"
						>
							{formatInteger(row.sessions)}
						</Table.Cell>
					</Table.Row>
				{/each}
			</Table.Body>
		</Table.Root>
	</Card.Content>
	<div
		class="absolute inset-x-0 bottom-0 flex h-1/5 items-center justify-center bg-background mask-t-from-30%"
	>
		<Button href="#" class="relative" variant="ghost">
			View All
			<ArrowRightIcon data-icon="inline-end" aria-hidden="true" />
		</Button>
	</div>
</Card.Root>
