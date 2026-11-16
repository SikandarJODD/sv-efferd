<script lang="ts">
	import { blockCategories } from "#lib/blocks/categories.js";
	import * as Sidebar from "#lib/components/ui/sidebar/index.js";
	import SidebarGroup from "./sidebar-group.svelte";
	import { getStartedItems, type SidebarNavItem } from "./sidebar-nav.js";

	const componentItems = blockCategories.map(
		(category): SidebarNavItem => ({
			title: category.label,
			href: `/blocks/${category.slug}`
		})
	);
</script>

<Sidebar.Content>
	<SidebarGroup label="Get Started" items={getStartedItems} />
	<SidebarGroup label="Components" items={componentItems} />
</Sidebar.Content>
