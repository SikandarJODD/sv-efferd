<script lang="ts">
	import ArrowRightIcon from "@lucide/svelte/icons/arrow-right";
	import { Button } from "#lib/components/ui/button/index.js";
	import * as Card from "#lib/components/ui/card/index.js";
	import * as Table from "#lib/components/ui/table/index.js";
	import { formatInteger } from "./formatter.js";

	const rows = [
		{ path: "/", visits: 18_420, delta: 4.1 },
		{ path: "/pricing", visits: 6280, delta: 12.4 },
		{ path: "/blog/product-updates", visits: 4110, delta: -2 },
		{ path: "/docs/getting-started", visits: 3920, delta: 6.8 },
		{ path: "/changelog", visits: 2150, delta: 0.4 }
	] as const;
</script>

<Card.Root class="relative shadow-none md:col-span-2">
	<Card.Header>
		<Card.Title class="text-balance">Top pages</Card.Title>
		<Card.Description class="text-pretty">
			First page in session, ranked by visits.
		</Card.Description>
	</Card.Header>
	<Card.Content class="mask-b-from-50% mask-b-to-100% px-0 pb-2">
		<Table.Root class="border-t">
			<Table.Caption class="sr-only">
				Top landing pages by visits with year-over-year change.
			</Table.Caption>
			<Table.Header>
				<Table.Row>
					<Table.Head class="pl-6" scope="col">Path</Table.Head>
					<Table.Head class="text-end tabular-nums" scope="col">Visits</Table.Head>
					<Table.Head class="pr-6 text-end" scope="col">Change</Table.Head>
				</Table.Row>
			</Table.Header>
			<Table.Body>
				{#each rows as row (row.path)}
					<Table.Row class="hover:bg-transparent">
						<Table.Cell class="max-w-50 truncate pl-6 font-medium">
							<span
								class="w-max rounded border border-border bg-muted/50 px-1 py-px text-xs"
							>
								{row.path}
							</span>
						</Table.Cell>
						<Table.Cell class="text-end text-xs text-muted-foreground tabular-nums">
							{formatInteger(row.visits)}
						</Table.Cell>
						<Table.Cell
							class="pr-6 text-end text-xs text-muted-foreground tabular-nums"
						>
							{row.delta > 0 ? "+" : ""}{row.delta}%
						</Table.Cell>
					</Table.Row>
				{/each}
			</Table.Body>
		</Table.Root>
	</Card.Content>
	<div
		class="absolute inset-x-0 bottom-0 flex h-1/5 items-center justify-center bg-background mask-t-from-30%"
	>
		<Button href="/" class="relative" variant="ghost">
			View All
			<ArrowRightIcon data-icon="inline-end" aria-hidden="true" />
		</Button>
	</div>
</Card.Root>
