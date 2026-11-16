<script lang="ts">
	import { page } from "$app/state";
	import { Badge } from "#lib/components/spell/badge/index.js";
	import * as Sidebar from "#lib/components/ui/sidebar/index.js";
	import type { SidebarNavItem } from "./sidebar-nav.js";

	let { item }: { item: SidebarNavItem } = $props();

	let isActive = $derived(page.url.pathname === item.href);
</script>

<Sidebar.MenuItem>
	<Sidebar.MenuButton {isActive}>
		{#snippet child({ props })}
			<a href={item.href} {...props}>{item.title}</a>
		{/snippet}
	</Sidebar.MenuButton>
	{#if item.badge === "new"}
		<Sidebar.MenuBadge>
			<Badge variant="emerald" class="px-1 py-0.5 text-[10px]">New</Badge>
		</Sidebar.MenuBadge>
	{/if}
</Sidebar.MenuItem>
