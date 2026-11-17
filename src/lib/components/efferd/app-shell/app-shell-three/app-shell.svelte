<script lang="ts">
	import * as Sidebar from "#lib/components/ui/sidebar/index.js";
	import type { Snippet } from "svelte";
	import AppHeader from "./app-header.svelte";
	import AppSidebar from "./app-sidebar.svelte";

	let { children, pathname = "#/overview" }: { children: Snippet; pathname?: string } = $props();
</script>

<div class="overflow-hidden">
	<Sidebar.Provider class="relative h-svh">
		<AppSidebar {pathname} />
		<Sidebar.Inset class="md:peer-data-[variant=inset]:ml-0">
			<AppHeader {pathname} />
			<div class="flex flex-1 flex-col gap-4 overflow-y-auto p-4 md:p-6">{@render children()}</div>
		</Sidebar.Inset>
	</Sidebar.Provider>
</div>
