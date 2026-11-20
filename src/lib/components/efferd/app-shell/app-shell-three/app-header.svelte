<script lang="ts">
	import { Button } from "#lib/components/ui/button/index.js";
	import { Separator } from "#lib/components/ui/separator/index.js";
	import { BellIcon, SendIcon } from "@lucide/svelte";
	import AppBreadcrumbs from "./app-breadcrumbs.svelte";
	import { navLinks } from "./app-shared.js";
	import CustomSidebarTrigger from "./custom-sidebar-trigger.svelte";
	import NavUser from "./nav-user.svelte";

	let { pathname }: { pathname?: string } = $props();
	let activeItem = $derived(navLinks.find((item) => item.path === pathname));
</script>

<header
	class="sticky top-0 z-50 flex h-14 shrink-0 items-center justify-between gap-2 border-b px-4 md:px-6"
>
	<div class="flex items-center gap-3">
		<CustomSidebarTrigger />
		<Separator
			class="mr-2 h-4 data-[orientation=vertical]:self-center"
			orientation="vertical"
		/>
		<AppBreadcrumbs page={activeItem} />
	</div>
	<div class="flex items-center gap-3">
		<Button aria-label="Send" size="icon-sm" variant="outline"><SendIcon /></Button>
		<Button aria-label="Notifications" size="icon-sm" variant="outline"><BellIcon /></Button>
		<Separator class="h-4 data-[orientation=vertical]:self-center" orientation="vertical" />
		<NavUser />
	</div>
</header>
