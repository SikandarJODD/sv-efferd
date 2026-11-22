<script lang="ts">
	import ArrowRightIcon from "@lucide/svelte/icons/arrow-right";
	import CircleCheckIcon from "@lucide/svelte/icons/circle-check";
	import { Button } from "#lib/components/ui/button/index.js";
	import * as Card from "#lib/components/ui/card/index.js";
	import * as Empty from "#lib/components/ui/empty/index.js";
	import DashboardCard from "./dashboard-card.svelte";
</script>

<DashboardCard class="gap-0">
	<Card.Header class="border-b">
		<Card.Title class="text-base text-balance">Billing health</Card.Title>
		<Card.Description class="text-pretty">Nothing urgent needs your attention.</Card.Description
		>
	</Card.Header>
	<Card.Content class="flex h-full items-center px-0">
		<Empty.Root>
			<Empty.Header>
				<Empty.Media variant="icon"><CircleCheckIcon aria-hidden="true" /></Empty.Media>
				<Empty.Title>You're caught up.</Empty.Title>
				<Empty.Description class="text-xs">
					Balances and payouts look fine. Nothing overdue in this snapshot.
				</Empty.Description>
			</Empty.Header>
			<Empty.Content>
				<Button href="/#" variant="ghost">
					Review open invoices
					<ArrowRightIcon data-icon="inline-end" />
				</Button>
			</Empty.Content>
		</Empty.Root>
	</Card.Content>
</DashboardCard>
