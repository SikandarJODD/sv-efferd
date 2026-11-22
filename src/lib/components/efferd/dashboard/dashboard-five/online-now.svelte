<script lang="ts">
	import { Button } from "#lib/components/ui/button/index.js";
	import * as Card from "#lib/components/ui/card/index.js";
	import * as Tooltip from "#lib/components/ui/tooltip/index.js";
	import Delta from "./delta.svelte";
	import ShareBarList from "./share-bar-list.svelte";
	import StatusIndicator from "./status-indicator.svelte";

	const devices = [
		{ label: "Mobile", value: 65 },
		{ label: "Desktop", value: 33 },
		{ label: "Tablet", value: 2 }
	] as const;
</script>

<Card.Root class="gap-0 pb-0 shadow-none md:col-span-2 lg:col-span-1">
	<Card.Header class="flex flex-row items-start justify-between gap-3 border-b">
		<div class="flex min-w-0 flex-col">
			<Card.Title class="font-mono text-2xl tabular-nums">94</Card.Title>
			<Card.Description>
				<Tooltip.Root>
					<Tooltip.Trigger>
						{#snippet child({ props })}
							<Button
								{...props}
								class="cursor-help px-1 py-px font-normal text-muted-foreground"
								variant="link"
							>
								<StatusIndicator />
								<span>visitors online</span>
							</Button>
						{/snippet}
					</Tooltip.Trigger>
					<Tooltip.Content side="bottom">In the last 5 minutes.</Tooltip.Content>
				</Tooltip.Root>
			</Card.Description>
		</div>
		<Delta value={14.8} variant="badge" icon="trend" />
	</Card.Header>
	<Card.Content class="relative flex h-full items-center px-0 py-2">
		<ShareBarList rows={devices} ariaLabel="Visitors online by device" />
	</Card.Content>
</Card.Root>
