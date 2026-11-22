<script lang="ts">
	import SiteSidebar from "#lib/components/sidebar/sidebar.svelte";
	import SiteFooter from "#lib/components/site/footer.svelte";
	import SiteToolbar from "#lib/components/site/toolbar.svelte";
	import * as Sidebar from "#lib/components/ui/sidebar/index.js";
	import { fade } from "svelte/transition";

	let { children } = $props();
	let sidebarOpen = $state(true);
</script>

<svelte:head>
	<meta
		name="robots"
		content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
	/>
</svelte:head>

<Sidebar.Provider style="--sidebar-width: 13rem;" bind:open={sidebarOpen}>
	<SiteSidebar />
	<Sidebar.Inset
		class="border shadow-none! supports-[overflow:clip]:overflow-clip dark:border-muted dark:bg-background"
	>
		{#if !sidebarOpen}
			<div
				class="absolute top-1 left-1 z-100 hidden md:block"
				transition:fade={{ duration: 150 }}
			>
				<Sidebar.Trigger size="icon-sm" class="rounded-xl text-muted-foreground" />
			</div>
		{/if}
		<SiteToolbar />
		<div id="main">
			{@render children()}
		</div>
		<SiteFooter />
	</Sidebar.Inset>
</Sidebar.Provider>
