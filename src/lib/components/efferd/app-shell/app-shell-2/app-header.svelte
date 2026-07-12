<script lang="ts">
	import { Button } from "$lib/components/ui/button";
	import { DecorIcon } from "$lib/components/ui/decor-icon";
	import { Separator } from "$lib/components/ui/separator";
	import { cn } from "$lib/utils";
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
	<div class="flex items-center gap-3">
		<Button size="icon-xs" variant="outline">
			<SendIcon />
		</Button>
		<Button aria-label="Notifications" size="icon-xs" variant="outline">
			<BellIcon />
		</Button>
		<Separator class="h-4 data-[orientation=vertical]:self-center" orientation="vertical" />
		<NavUser />
	</div>
</header>
