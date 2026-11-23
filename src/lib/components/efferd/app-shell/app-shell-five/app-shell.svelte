<script lang="ts">
	import * as Sidebar from "#lib/components/ui/sidebar/index.js";
	import type { Snippet } from "svelte";
	import AppHeader from "./app-header.svelte";
	import AppSidebar from "./app-sidebar.svelte";

	let { children, pathname = "/" }: { children: Snippet; pathname?: string } = $props();
</script>

	<Sidebar.Provider>
	<AppSidebar {pathname} />
	<Sidebar.Inset class="bg-muted px-4 pt-2 pb-4 md:px-6 md:pt-3 md:pb-6 dark:bg-background">
		<AppHeader {pathname} />
		<div
			class="flex w-full flex-1 flex-col p-4 md:p-6"
		>
			{@render children?.()}
		</div>
	</Sidebar.Inset>
</Sidebar.Provider>
