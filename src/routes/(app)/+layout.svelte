<script lang="ts">
	import SiteSidebar from "#lib/components/sidebar/sidebar.svelte";
	import SiteFooter from "#lib/components/site/footer.svelte";
	import SiteHeader from "#lib/components/site/header.svelte";
	import * as Sidebar from "#lib/components/ui/sidebar/index.js";
	import { cn } from "#lib/utils.js";

	let { children } = $props();
</script>

<svelte:head>
	<meta
		name="robots"
		content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
	/>
</svelte:head>

<Sidebar.Provider>
	<SiteSidebar />
	<Sidebar.Inset class="supports-[overflow:clip]:overflow-clip dark:bg-background">
		<SiteHeader />
		<div
			id="main"
			class={cn(
				"relative container mb-20 grow",
				"before:absolute before:-inset-y-20 before:-left-px before:z-1 before:border-dashed before:border-primary/20 xl:before:border-l",
				"after:absolute after:-inset-y-20 after:-right-px after:z-1 after:border-dashed after:border-primary/20 xl:after:border-r"
			)}
		>
			{@render children()}
		</div>
		<SiteFooter />
	</Sidebar.Inset>
</Sidebar.Provider>
