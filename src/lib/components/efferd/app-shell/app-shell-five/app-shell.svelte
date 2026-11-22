<script lang="ts">
	import * as Sidebar from "#lib/components/ui/sidebar/index.js";
	import { cn } from "#lib/utils.js";
	import type { Snippet } from "svelte";
	import AppHeader from "./app-header.svelte";
	import AppSidebar from "./app-sidebar.svelte";

	let { children, pathname = "/" }: { children: Snippet; pathname?: string } = $props();
</script>

<Sidebar.Provider class={cn("[--app-wrapper-max-width:80rem]", "[--app-header-height:3rem]")}>
	<AppSidebar {pathname} />
	<Sidebar.Inset class="bg-muted dark:bg-background">
		<AppHeader {pathname} />
		<div
			class={cn(
				"flex flex-1 flex-col p-4 md:p-6",
				"mx-auto w-full max-w-(--app-wrapper-max-width)"
			)}
		>
			{@render children?.()}
		</div>
	</Sidebar.Inset>
</Sidebar.Provider>
