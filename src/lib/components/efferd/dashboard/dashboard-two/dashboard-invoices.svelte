<script lang="ts">
	import ArrowRightIcon from "@lucide/svelte/icons/arrow-right";
	import { Button } from "#lib/components/ui/button/index.js";
	import * as Card from "#lib/components/ui/card/index.js";
	import * as Table from "#lib/components/ui/table/index.js";
	import DashboardCard from "./dashboard-card.svelte";

	const invoices = [
		{ id: "1045", customer: "Northwind Labs", amount: "$2,400.00" },
		{ id: "1044", customer: "Blue River Co.", amount: "$890.00" },
		{ id: "1043", customer: "Oak Street Studio", amount: "$5,120.00" },
		{ id: "1042", customer: "Harbor Freight LLC", amount: "$310.50" }
	] as const;
</script>

<DashboardCard class="relative gap-0 md:col-span-2">
	<Card.Header class="border-b">
		<Card.Title class="text-base">Recent invoices</Card.Title>
		<Card.Description>Open amounts and payment status.</Card.Description>
	</Card.Header>
	<Card.Content class="mask-b-from-50% mask-b-to-100% px-0">
		<Table.Root>
			<Table.Caption class="sr-only"
				>Recent invoices with customer, amount, and status.</Table.Caption
			>
			<Table.Header>
				<Table.Row>
					<Table.Head class="ps-6">Customer</Table.Head>
					<Table.Head>Invoice</Table.Head>
					<Table.Head class="pe-6 text-right tabular-nums">Amount</Table.Head>
				</Table.Row>
			</Table.Header>
			<Table.Body>
				{#each invoices as invoice (invoice.id)}
					<Table.Row class="h-12">
						<Table.Cell class="max-w-40 truncate ps-6 font-medium"
							>{invoice.customer}</Table.Cell
						>
						<Table.Cell class="text-muted-foreground tabular-nums"
							>#{invoice.id}</Table.Cell
						>
						<Table.Cell class="pe-6 text-right tabular-nums"
							>{invoice.amount}</Table.Cell
						>
					</Table.Row>
				{/each}
			</Table.Body>
		</Table.Root>
	</Card.Content>
	<div
		class="absolute inset-x-0 bottom-0 flex h-1/5 items-center justify-center bg-background mask-t-from-30%"
	>
		<Button href="/#" class="relative" variant="ghost">
			View All
			<ArrowRightIcon data-icon="inline-end" />
		</Button>
	</div>
</DashboardCard>
