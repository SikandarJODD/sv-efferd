<script lang="ts">
	import * as Sidebar from "#lib/components/ui/sidebar/index.js";
	import type { ComponentProps } from "svelte";
	import SidebarContent from "./sidebar-content.svelte";
	import SidebarFooter from "./sidebar-footer.svelte";
	import SidebarHeader from "./sidebar-header.svelte";

	let { ref = $bindable(null), ...restProps }: ComponentProps<typeof Sidebar.Root> = $props();
</script>

<Sidebar.Root {...restProps} variant="inset" bind:ref>
	<SidebarHeader />
	<SidebarContent />
	<SidebarFooter />
	<!-- <Sidebar.Rail /> -->
</Sidebar.Root>
