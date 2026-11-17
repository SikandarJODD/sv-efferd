<script lang="ts">
	import { FullWidthDivider } from "#lib/components/ui/full-width-divider/index.js";
	import * as Sidebar from "#lib/components/ui/sidebar/index.js";
	import type { Snippet } from "svelte";
	import AppHeader from "./app-header.svelte";
	import AppSidebar from "./app-sidebar.svelte";

	let { children, pathname = "#/overview" }: { children: Snippet; pathname?: string } = $props();
</script>

<div class="overflow-hidden">
	<Sidebar.Provider class="relative mx-auto h-svh w-full max-w-5xl lg:border-x">
		<FullWidthDivider class="top-14 z-60 -translate-y-px" />
		<AppSidebar {pathname} />
		<Sidebar.Inset>
			<AppHeader {pathname} />
			<div class="flex flex-1 flex-col gap-4 overflow-y-auto p-4 md:p-6">
				{@render children()}
			</div>
		</Sidebar.Inset>
	</Sidebar.Provider>
</div>
