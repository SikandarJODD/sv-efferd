<script lang="ts">
	import { Button } from "#lib/components/ui/button/index.js";
	import { Separator } from "#lib/components/ui/separator/index.js";
	import { BellIcon } from "@lucide/svelte";
	import AppBreadcrumbs from "./app-breadcrumbs.svelte";
	import { navLinks } from "./app-shared.js";
	import CustomSidebarTrigger from "./custom-sidebar-trigger.svelte";
	import NavUser from "./nav-user.svelte";

	let { pathname }: { pathname?: string } = $props();
	let activeItem = $derived(navLinks.find((item) => item.path === pathname));
</script>

<header class="mb-3 flex h-9 items-center justify-between gap-2">
	<div class="flex items-center gap-2">
		<CustomSidebarTrigger />
		<Separator class="h-4 data-[orientation=vertical]:self-center" orientation="vertical" />
		<AppBreadcrumbs page={activeItem} />
	</div>
	<div class="flex items-center gap-2">
		<Button aria-label="Notifications" size="icon" variant="ghost"><BellIcon /></Button>
		<Separator class="h-4 data-[orientation=vertical]:self-center" orientation="vertical" />
		<NavUser />
	</div>
</header>
