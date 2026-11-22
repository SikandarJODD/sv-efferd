<script lang="ts">
	import * as Sidebar from "#lib/components/ui/sidebar/index.js";
	import { cn } from "#lib/utils.js";

	type Place = "sidebar" | "navbar";
	let { place }: { place: Place } = $props();
	const sidebar = Sidebar.useSidebar();
	let sidebarOpen = $derived(sidebar.isMobile ? sidebar.openMobile : sidebar.open);
</script>

<Sidebar.Trigger
	class={cn(
		"transition-opacity duration-0 ease-out motion-reduce:transition-none",
		!sidebarOpen && place === "navbar" && "delay-100 duration-300",
		sidebarOpen && place === "navbar" && "pointer-events-none opacity-0",
		!sidebarOpen && place === "sidebar" && "pointer-events-none opacity-0"
	)}
/>
