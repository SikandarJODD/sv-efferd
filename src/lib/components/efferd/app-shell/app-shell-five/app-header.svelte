<script lang="ts">
	import * as Breadcrumb from "#lib/components/ui/breadcrumb/index.js";
	import { Button } from "#lib/components/ui/button/index.js";
	import { Separator } from "#lib/components/ui/separator/index.js";
	import { BellIcon, HelpCircleIcon } from "@lucide/svelte";
	import { navLinks } from "./app-shared.js";
	import CustomTrigger from "./custom-trigger.svelte";
	import NavUser from "./nav-user.svelte";

	let { pathname }: { pathname?: string } = $props();
	let activeItem = $derived(navLinks.find((item) => item.path === pathname));
</script>

<header
	class="sticky top-0 z-50 flex h-(--app-header-height) w-full shrink-0 items-center justify-between gap-2 border-b bg-background px-4 md:px-6"
>
	<div class="flex items-center gap-3"><CustomTrigger place="navbar" /></div>
	<Breadcrumb.Root
		><Breadcrumb.List
			><Breadcrumb.Item
				><Breadcrumb.Page>{activeItem?.title}</Breadcrumb.Page></Breadcrumb.Item
			></Breadcrumb.List
		></Breadcrumb.Root
	>
	<div class="flex items-center gap-3">
		<Button aria-label="Help" size="icon-sm" variant="outline"><HelpCircleIcon /></Button>
		<Button aria-label="Notifications" size="icon-sm" variant="outline"><BellIcon /></Button>
		<Separator class="h-4 data-[orientation=vertical]:self-center" orientation="vertical" />
		<NavUser />
	</div>
</header>
