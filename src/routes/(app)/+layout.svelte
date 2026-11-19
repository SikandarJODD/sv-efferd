<script lang="ts">
	import SiteSidebar from "#lib/components/sidebar/sidebar.svelte";
	import SiteFooter from "#lib/components/site/footer.svelte";
	import SiteToolbar from "#lib/components/site/toolbar.svelte";
	import * as Sidebar from "#lib/components/ui/sidebar/index.js";

	let { children } = $props();
</script>

<svelte:head>
	<meta
		name="robots"
		content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
	/>
</svelte:head>

<Sidebar.Provider style="--sidebar-width: 13rem;">
	<SiteSidebar />
	<Sidebar.Inset
		class="border shadow-none! supports-[overflow:clip]:overflow-clip dark:border-muted dark:bg-background"
	>
		<SiteToolbar />
		<div id="main">
			{@render children()}
		</div>
		<SiteFooter />
	</Sidebar.Inset>
</Sidebar.Provider>
