<script lang="ts">
	import ArrowRightIcon from "@lucide/svelte/icons/arrow-right";
	import { Button } from "#lib/components/ui/button/index.js";
	import * as Card from "#lib/components/ui/card/index.js";
	import * as Table from "#lib/components/ui/table/index.js";
	import { formatInteger } from "./formatter.js";

	const FLAGPACK_BASE = "https://flag.vercel.app";
	const rows = [
		{ code: "US", visits: 6120, delta: 5.2 },
		{ code: "DE", visits: 2840, delta: 8.1 },
		{ code: "GB", visits: 1960, delta: -1.4 },
		{ code: "FR", visits: 1420, delta: 3.6 },
		{ code: "CA", visits: 1180, delta: 0.9 },
		{ code: "NL", visits: 890, delta: 12.2 }
	] as const;
	const regionNames = new Intl.DisplayNames(["en"], { type: "region" });

	function flagUrl(countryCode: string) {
		return `${FLAGPACK_BASE}/s/${countryCode.toUpperCase()}.svg`;
	}
</script>

<Card.Root class="relative shadow-none md:col-span-2">
	<Card.Header>
		<Card.Title class="text-balance">Top countries</Card.Title>
		<Card.Description class="text-pretty">
			Top countries in the last 12 months.
		</Card.Description>
	</Card.Header>
	<Card.Content class="mask-b-from-50% mask-b-to-100% px-0 pb-2">
		<Table.Root class="border-t">
			<Table.Caption class="sr-only">
				Top countries by visits with year-over-year change.
			</Table.Caption>
			<Table.Header>
				<Table.Row>
					<Table.Head class="pl-6" scope="col">Country</Table.Head>
					<Table.Head class="text-end tabular-nums" scope="col">Visits</Table.Head>
					<Table.Head class="pr-6 text-end" scope="col">Change</Table.Head>
				</Table.Row>
			</Table.Header>
			<Table.Body>
				{#each rows as row (row.code)}
					<Table.Row class="hover:bg-transparent">
						<Table.Cell class="max-w-55 truncate pl-6 font-medium">
							<span class="inline-flex max-w-full items-center gap-2">
								<img
									alt={`Flag of ${regionNames.of(row.code) ?? row.code}`}
									class="h-3.5 w-5 shrink-0 rounded object-cover"
									height="14"
									src={flagUrl(row.code)}
									width="20"
								/>
								<span class="min-w-0 truncate text-xs">
									{regionNames.of(row.code) ?? row.code}
								</span>
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
