<script lang="ts">
	import { Badge } from "#lib/components/ui/badge/index.js";
	import * as Card from "#lib/components/ui/card/index.js";
	import * as Table from "#lib/components/ui/table/index.js";

	const invoices = [
		{
			id: "1045",
			customer: "Northwind Labs",
			amount: "$2,400.00",
			status: "Paid",
			variant: "secondary"
		},
		{
			id: "1044",
			customer: "Blue River Co.",
			amount: "$890.00",
			status: "Pending",
			variant: "outline"
		},
		{
			id: "1043",
			customer: "Oak Street Studio",
			amount: "$5,120.00",
			status: "Paid",
			variant: "secondary"
		},
		{
			id: "1042",
			customer: "Harbor Freight LLC",
			amount: "$310.50",
			status: "Overdue",
			variant: "destructive"
		}
	] as const;
</script>

<Card.Root class="rounded-none pb-0 shadow-none ring-0 lg:col-span-3">
	<Card.Header>
		<Card.Title>Recent invoices</Card.Title>
		<Card.Description>Open amounts and payment status.</Card.Description>
	</Card.Header>
	<Card.Content class="px-0">
		<Table.Root>
			<Table.Caption class="sr-only">
				Recent invoices with customer, amount, and status.
			</Table.Caption>
			<Table.Header>
				<Table.Row>
					<Table.Head class="pl-6">Customer</Table.Head>
					<Table.Head>Invoice</Table.Head>
					<Table.Head class="text-right tabular-nums">Amount</Table.Head>
					<Table.Head class="pr-6 text-right">Status</Table.Head>
				</Table.Row>
			</Table.Header>
			<Table.Body>
				{#each invoices as invoice (invoice.id)}
					<Table.Row class="h-14">
						<Table.Cell class="max-w-40 truncate pl-6 font-medium">
							{invoice.customer}
						</Table.Cell>
						<Table.Cell class="text-muted-foreground tabular-nums"
							>#{invoice.id}</Table.Cell
						>
						<Table.Cell class="text-right tabular-nums">{invoice.amount}</Table.Cell>
						<Table.Cell class="pr-6 text-right">
							<Badge variant={invoice.variant}>{invoice.status}</Badge>
						</Table.Cell>
					</Table.Row>
				{/each}
			</Table.Body>
		</Table.Root>
	</Card.Content>
</Card.Root>
