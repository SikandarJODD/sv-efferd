<script lang="ts">
	import { Button } from "#lib/components/ui/button/index.js";
	import { Separator } from "#lib/components/ui/separator/index.js";
	import * as Sidebar from "#lib/components/ui/sidebar/index.js";
	import BellIcon from "@lucide/svelte/icons/bell";
	import HeadsetIcon from "@lucide/svelte/icons/headset";
	import SearchIcon from "@lucide/svelte/icons/search";
	import AppBreadcrumbs from "./app-breadcrumbs.svelte";
	import { navLinks } from "./app-shared.js";

	let { pathname }: { pathname?: string } = $props();
	let activeItem = $derived(navLinks.find((item) => item.url === pathname));
</script>

<header
	class="sticky top-0 z-50 flex h-14 shrink-0 items-center justify-between gap-2 bg-background px-4 md:px-6"
>
	<div class="flex items-center gap-2">
		<Sidebar.Trigger class="md:hidden" />
		<Separator class="mr-2 data-[orientation=vertical]:h-4 md:hidden" orientation="vertical" />
		<AppBreadcrumbs page={activeItem} />
	</div>
	<div class="flex items-center gap-2">
		<Button aria-label="Search" size="icon" variant="ghost"><SearchIcon /></Button>
		<Button aria-label="Notifications" size="icon" variant="ghost"><BellIcon /></Button>
		<Button aria-label="Support" size="icon" variant="ghost"><HeadsetIcon /></Button>
	</div>
</header>
