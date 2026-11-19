<script lang="ts">
	import { blockCategories } from "#lib/blocks/categories.js";
	import * as Sidebar from "#lib/components/ui/sidebar/index.js";
	import SidebarGroup from "./sidebar-group.svelte";
	import { getStartedItems, type SidebarNavItem } from "./sidebar-nav.js";

	const componentItems = blockCategories.map((category): SidebarNavItem => ({
		title: category.label,
		href: `/blocks/${category.slug}`,
		badge: "badge" in category && category.badge === "new" ? "new" : undefined
	}));
</script>

<Sidebar.Content class="scroll-fade">
	<SidebarGroup label="Get Started" items={getStartedItems} />
	<SidebarGroup label="Components" items={componentItems} />
</Sidebar.Content>
