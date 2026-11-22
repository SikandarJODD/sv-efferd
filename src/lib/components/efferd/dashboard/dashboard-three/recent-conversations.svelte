<script lang="ts">
	import ArrowRightIcon from "@lucide/svelte/icons/arrow-right";
	import MailIcon from "@lucide/svelte/icons/mail";
	import MessageCircleIcon from "@lucide/svelte/icons/message-circle";
	import { Badge, type BadgeVariant } from "#lib/components/ui/badge/index.js";
	import { Button } from "#lib/components/ui/button/index.js";
	import * as Card from "#lib/components/ui/card/index.js";
	import * as Table from "#lib/components/ui/table/index.js";

	type State = "waiting" | "open" | "snoozed";
	const rows = [
		{
			customer: "Northwind Labs",
			subject: "Billing portal access",
			channel: "email",
			waitMinutes: 6,
			state: "waiting"
		},
		{
			customer: "Blue River Co.",
			subject: "Shipment ETA",
			channel: "chat",
			waitMinutes: 1,
			state: "open"
		},
		{
			customer: "Oak Street Studio",
			subject: "API rate limits",
			channel: "email",
			waitMinutes: 58,
			state: "snoozed"
		},
		{
			customer: "Harbor Freight LLC",
			subject: "Workspace SSO",
			channel: "chat",
			waitMinutes: 3,
			state: "open"
		}
	] as const;

	function waitLabel(minutes: number) {
		if (minutes === 1) return "1 minute";
		if (minutes < 55) return `${minutes} minutes`;
		if (minutes < 60) return "Almost an hour";
		return "About an hour";
	}
	function status(state: State): { label: string; variant: BadgeVariant } {
		if (state === "waiting") return { label: "In queue", variant: "destructive" };
		if (state === "snoozed") return { label: "Snoozed", variant: "outline" };
		return { label: "Active", variant: "secondary" };
	}
</script>

<Card.Root class="gap-0 shadow-none md:col-span-2 dark:ring-0">
	<Card.Header class="border-b">
		<Card.Title>Recent conversations</Card.Title>
		<Card.Description>Latest 4 threads from your inbox</Card.Description>
	</Card.Header>
	<Card.Content class="p-0">
		<Table.Root>
			<Table.Header>
				<Table.Row class="hover:bg-transparent">
					<Table.Head class="pl-6">Customer</Table.Head>
					<Table.Head class="hidden sm:table-cell">Topic</Table.Head>
					<Table.Head>Channel</Table.Head>
					<Table.Head class="text-right">Wait</Table.Head>
					<Table.Head class="pr-6 text-right">Status</Table.Head>
				</Table.Row>
			</Table.Header>
			<Table.Body>
				{#each rows as row (`${row.customer}-${row.subject}`)}
					<Table.Row class="h-14 hover:bg-transparent">
						<Table.Cell class="max-w-36 truncate pl-6 font-medium"
							>{row.customer}</Table.Cell
						>
						<Table.Cell class="hidden max-w-32 sm:table-cell"
							><span class="line-clamp-1 text-sm text-muted-foreground"
								>{row.subject}</span
							></Table.Cell
						>
						<Table.Cell>
							<span
								class="inline-flex items-center gap-2 text-sm font-medium capitalize"
							>
								{#if row.channel === "email"}<MailIcon
										class="size-3.5"
									/>{:else}<MessageCircleIcon class="size-3.5" />{/if}
								{row.channel}
							</span>
						</Table.Cell>
						<Table.Cell class="text-right text-sm text-muted-foreground"
							>{waitLabel(row.waitMinutes)}</Table.Cell
						>
						<Table.Cell class="pr-6 text-right"
							><Badge variant={status(row.state).variant}
								>{status(row.state).label}</Badge
							></Table.Cell
						>
					</Table.Row>
				{/each}
			</Table.Body>
		</Table.Root>
		<div class="flex justify-center border-t py-3">
			<Button href="/" size="sm" variant="ghost"
				>View all conversations <ArrowRightIcon data-icon="inline-end" /></Button
			>
		</div>
	</Card.Content>
</Card.Root>
