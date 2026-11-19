<script lang="ts">
	import ChevronRightIcon from "@lucide/svelte/icons/chevron-right";
	import DownloadIcon from "@lucide/svelte/icons/download";
	import PackagePlusIcon from "@lucide/svelte/icons/package-plus";
	import SettingsIcon from "@lucide/svelte/icons/settings";
	import TruckIcon from "@lucide/svelte/icons/truck";
	import * as Card from "#lib/components/ui/card/index.js";
	import * as Item from "#lib/components/ui/item/index.js";

	const actions = [
		{
			title: "Add product",
			description: "Create a new SKU.",
			href: "#/products/new",
			icon: PackagePlusIcon
		},
		{
			title: "Review unfulfilled",
			description: "Orders waiting to ship.",
			href: "#/orders?status=unfulfilled",
			icon: TruckIcon
		},
		{
			title: "Store settings",
			description: "Payments, checkout, and taxes.",
			href: "#/settings",
			icon: SettingsIcon
		},
		{
			title: "Export sales",
			description: "Download a CSV for accounting.",
			href: "#/reports/export",
			icon: DownloadIcon
		}
	] as const;
</script>

<Card.Root class="shadow-none">
	<Card.Header>
		<Card.Title>Quick actions</Card.Title>
		<Card.Description>Common store-management shortcuts.</Card.Description>
	</Card.Header>
	<Card.Content>
		<Item.Group class="gap-0">
			{#each actions as action (action.title)}
				<Item.Root size="sm">
					{#snippet child({ props })}
						<a href={action.href} {...props}>
							<Item.Media variant="icon"
								><action.icon aria-hidden="true" /></Item.Media
							>
							<Item.Content>
								<Item.Title>{action.title}</Item.Title>
								<Item.Description class="line-clamp-1"
									>{action.description}</Item.Description
								>
							</Item.Content>
							<Item.Actions><ChevronRightIcon aria-hidden="true" /></Item.Actions>
						</a>
					{/snippet}
				</Item.Root>
			{/each}
		</Item.Group>
	</Card.Content>
</Card.Root>
