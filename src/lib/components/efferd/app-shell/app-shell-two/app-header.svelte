<script lang="ts">
	import { Button } from "#lib/components/ui/button/index.js";
	import * as Tooltip from "#lib/components/ui/tooltip/index.js";
	import { BellIcon, SendIcon } from "@lucide/svelte";
	import CustomSidebarTrigger from "./custom-sidebar-trigger.svelte";
	import NavUser from "./nav-user.svelte";
	import { navLinks } from "./app-shared";

	let activeItem = $derived(navLinks.find((link) => link.isActive) ?? navLinks[0]);
</script>

<header
	class="sticky top-0 z-50 flex h-14 shrink-0 items-center justify-between gap-2 border-b bg-background px-4 md:px-6"
>
	<div class="flex items-center gap-3">
		<CustomSidebarTrigger />
		<h1 class="text-sm font-medium">{activeItem.title}</h1>
	</div>
	<div class="flex items-center gap-1.5">
		<Tooltip.Root delayDuration={500}>
			<Tooltip.Trigger>
				{#snippet child({ props })}
					<Button
						aria-label="Send message"
						class="relative before:absolute before:-inset-0.5 [&_svg]:size-4.5"
						size="icon-lg"
						variant="outline"
						{...props}
					>
						<SendIcon />
					</Button>
				{/snippet}
			</Tooltip.Trigger>
			<Tooltip.Content>Send message</Tooltip.Content>
		</Tooltip.Root>
		<Button
			aria-label="Notifications"
			class="relative before:absolute before:-inset-0.5 [&_svg]:size-4.5"
			size="icon-lg"
			variant="outline"
		>
			<BellIcon />
		</Button>
		<NavUser />
	</div>
</header>
