<script lang="ts">
	import ArrowRightIcon from "@lucide/svelte/icons/arrow-right";
	import LayersIcon from "@lucide/svelte/icons/layers";
	import ShieldCheckIcon from "@lucide/svelte/icons/shield-check";
	import UsersRoundIcon from "@lucide/svelte/icons/users-round";
	import WandIcon from "@lucide/svelte/icons/wand";
	import { Button } from "#lib/components/ui/button/index.js";
	import * as Card from "#lib/components/ui/card/index.js";

	const items = [
		{
			title: "SLA warning cleared for Oak Street Studio",
			time: "12 min ago",
			icon: ShieldCheckIcon
		},
		{ title: "Conversation escalated to Tier 2", time: "28 min ago", icon: LayersIcon },
		{ title: "Macro “Refund approved” updated", time: "1 hr ago", icon: WandIcon },
		{ title: "New customer segment synced from CRM", time: "3 hr ago", icon: UsersRoundIcon }
	] as const;
</script>

<Card.Root class="gap-0 shadow-none dark:ring-0">
	<Card.Header class="border-b">
		<Card.Title>Workspace activity</Card.Title>
		<Card.Description>Operational signals.</Card.Description>
	</Card.Header>
	<Card.Content class="px-0">
		<ul class="flex flex-col divide-y divide-border">
			{#each items as item (item.title)}
				<li class="flex h-18 items-center gap-3 px-3">
					<span class="flex size-10 shrink-0 items-center justify-center"
						><item.icon class="size-4" /></span
					>
					<div class="flex min-w-0 flex-1 flex-col gap-1">
						<p class="line-clamp-2 text-xs leading-snug text-pretty">{item.title}</p>
						<p class="text-xs text-muted-foreground tabular-nums">{item.time}</p>
					</div>
				</li>
			{/each}
		</ul>
	</Card.Content>
	<Card.Footer class="justify-center">
		<Button href="/#" size="sm" variant="ghost"
			>View all <ArrowRightIcon data-icon="inline-end" /></Button
		>
	</Card.Footer>
</Card.Root>
