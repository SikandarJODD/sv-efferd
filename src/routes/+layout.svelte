<script lang="ts">
	import { page } from "$app/state";
	import "./layout.css";
	import favicon from "$lib/assets/favicon.svg";
	import { ModeWatcher } from "mode-watcher";
	import { cn } from "$lib/utils";
	import SiteHeader from "$lib/components/landing/site-header.svelte";
	import { asset } from "$app/paths";

	let { children } = $props();
	let isPreviewRoute = $derived(page.url.pathname.startsWith("/preview/"));
</script>

<ModeWatcher defaultMode="dark" />

<svelte:head>
	<link rel="icon" href={favicon} />
	<title>Svelte Efferd Blocks</title>
	<meta
		name="description"
		content="Save hours of design time with clean, ready-to-use shadcn-svelte blocks that just work, modern, responsive, and built for speed."
	/>
	<!-- New Open Graph Meta Tags -->
	<meta property="og:title" content="Svelte Efferd Blocks" />
	<meta
		property="og:description"
		content="Save hours of design time with clean, ready-to-use shadcn-svelte blocks that just work, modern, responsive, and built for speed."
	/>
	<meta property="og:image" content={asset("/og.png")} />
	<meta property="og:site_name" content="Sample Site" />
	<meta property="og:url" content="https://samplesite.com/page.html" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="Svelte Efferd Blocks" />
	<meta
		name="twitter:description"
		content="Save hours of design time with clean, ready-to-use shadcn-svelte blocks that just work, modern, responsive, and built for speed."
	/>
	<meta name="twitter:image" content={asset("/og.png")} />
	<meta name="twitter:site" content="@Sikandar_Bhide" />
</svelte:head>

{#if isPreviewRoute}
	<div class="min-h-screen bg-background">
		{@render children()}
	</div>
{:else}
	<div
		class="relative flex min-h-screen flex-col overflow-hidden bg-secondary/40 supports-[overflow:clip]:overflow-clip dark:bg-background"
	>
		<div>
			<SiteHeader />
		</div>
		<main
			class={cn(
				"relative container grow",
				"before:absolute before:-inset-y-20 before:-left-px before:z-1 before:border-dashed before:border-primary/20 xl:before:border-l",
				"after:absolute after:-inset-y-20 after:-right-px after:z-1 after:border-dashed after:border-primary/20 xl:after:border-r"
			)}
		>
			{@render children()}
		</main>
		<!-- <SiteFooter /> -->
	</div>
{/if}
