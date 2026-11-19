<script lang="ts">
	import { Button } from "#lib/components/ui/button/index.js";
	import { DecorIcon } from "#lib/components/ui/decor-icon/index.js";
	import { Separator } from "#lib/components/ui/separator/index.js";
	import * as Tooltip from "#lib/components/ui/tooltip/index.js";
	import { cn } from "#lib/utils.js";
	import { BellIcon, SendIcon } from "@lucide/svelte";
	import AppBreadcrumb from "./app-breadcrumb.svelte";
	import CustomSidebarTrigger from "./custom-sidebar-trigger.svelte";
	import NavUser from "./nav-user.svelte";
	import { navLinks } from "./app-shared";

	let activeItem = $derived(navLinks.find((link) => link.isActive) ?? navLinks[0]);
</script>

<header
	class={cn(
		"sticky top-0 z-50 flex h-14 shrink-0 items-center justify-between gap-2 border-b px-4 md:px-6",
		"bg-background/95 backdrop-blur-sm supports-backdrop-filter:bg-background/50"
	)}
>
	<DecorIcon class="hidden md:block" position="bottom-left" />
	<div class="flex items-center gap-3">
		<CustomSidebarTrigger />
		<Separator
			class="mr-2 h-4 data-[orientation=vertical]:self-center"
			orientation="vertical"
		/>
		<AppBreadcrumb page={activeItem} />
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
		<Separator class="h-4 data-[orientation=vertical]:self-center" orientation="vertical" />
		<NavUser />
	</div>
</header>
