<script lang="ts">
	import { page } from "$app/state";
	import { Badge } from "#lib/components/spell/badge/index.js";
	import * as Sidebar from "#lib/components/ui/sidebar/index.js";
	import ArrowUpRightIcon from "@lucide/svelte/icons/arrow-up-right";
	import type { SidebarNavItem } from "./sidebar-nav.js";

	let { item }: { item: SidebarNavItem } = $props();

	let isActive = $derived(page.url.pathname === item.href);
</script>

<Sidebar.MenuItem>
	<Sidebar.MenuButton class="text-[13px]!" {isActive}>
		{#snippet child({ props })}
			<a
				href={item.href}
				target={item.external ? "_blank" : undefined}
				rel={item.external ? "noopener noreferrer" : undefined}
				{...props}
			>
				{#if item.icon}
					<item.icon class="size-3.5 text-muted-foreground" />
				{/if}
				{item.title}
				{#if item.badge === "new"}
					<Badge variant="emerald" class="px-1 py-0.5 text-[10px]">New</Badge>
				{/if}
				{#if item.external}
					<ArrowUpRightIcon class="ms-auto size-3.5 text-muted-foreground" aria-hidden="true" />
				{/if}
			</a>
		{/snippet}
	</Sidebar.MenuButton>
</Sidebar.MenuItem>
