<script lang="ts">
	import CreditCardIcon from "@lucide/svelte/icons/credit-card";
	import FileTextIcon from "@lucide/svelte/icons/file-text";
	import RocketIcon from "@lucide/svelte/icons/rocket";
	import UserPlusIcon from "@lucide/svelte/icons/user-plus";
	import * as Card from "#lib/components/ui/card/index.js";
	import DashboardCard from "./dashboard-card.svelte";

	const items = [
		{ title: "Invoice #1045 marked paid", time: "About 2 hours ago", icon: CreditCardIcon },
		{ title: "Jordan joined the team", time: "This morning", icon: UserPlusIcon },
		{ title: "Weekly summary exported", time: "Yesterday", icon: FileTextIcon },
		{ title: "Dashboard v2 shipped to prod", time: "2 days ago", icon: RocketIcon }
	] as const;
</script>

<DashboardCard class="gap-0">
	<Card.Header class="border-b">
		<Card.Title>Activity</Card.Title>
		<Card.Description>Latest updates in your workspace.</Card.Description>
	</Card.Header>
	<Card.Content class="px-0">
		<ul class="flex flex-col divide-y divide-border">
			{#each items as item (item.title)}
				{@const Icon = item.icon}
				<li class="flex h-16 items-center gap-3 px-6">
					<span
						aria-hidden="true"
						class="flex size-10 shrink-0 items-center justify-center"
					>
						<Icon class="size-4" />
					</span>
					<div class="flex min-w-0 flex-1 flex-col gap-1">
						<p class="line-clamp-1 text-sm leading-snug text-pretty text-foreground">
							{item.title}
						</p>
						<p class="text-xs text-muted-foreground">{item.time}</p>
					</div>
				</li>
			{/each}
		</ul>
	</Card.Content>
</DashboardCard>
