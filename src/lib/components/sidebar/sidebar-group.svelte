<script lang="ts">
	import * as Sidebar from "#lib/components/ui/sidebar/index.js";
	import SidebarItem from "./sidebar-item.svelte";
	import type { SidebarNavItem } from "./sidebar-nav.js";

	let {
		label,
		items
	}: {
		label: string;
		items: readonly SidebarNavItem[];
	} = $props();
</script>

<Sidebar.Group>
	<Sidebar.GroupLabel>{label}</Sidebar.GroupLabel>
	<Sidebar.GroupContent>
		<Sidebar.Menu>
			{#each items as item (item.href)}
				<SidebarItem {item} />
			{/each}
		</Sidebar.Menu>
	</Sidebar.GroupContent>
</Sidebar.Group>
