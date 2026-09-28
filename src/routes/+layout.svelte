<script lang="ts">
	import { page } from "$app/state";
	import "./layout.css";
	import SiteFooter from "$lib/components/landing/site-footer.svelte";
	import { ModeWatcher, toggleMode } from "mode-watcher";
	import { cn } from "$lib/utils";
	import SiteHeader from "$lib/components/landing/site-header.svelte";
	import { PressedKeys } from "runed";

	let { children } = $props();
	let isPreviewRoute = $derived(page.url.pathname.startsWith("/preview/"));

	const keys = new PressedKeys();
	keys.onKeys(["d"], () => {
		console.log("open command palette");
		toggleMode();
	});
</script>

<svelte:head>
	<link rel="icon" href="/favicon.svg" type="image/svg+xml" sizes="any" />
	<link rel="manifest" href="/site.webmanifest" />
	<meta name="application-name" content="Svelte Efferd" />
	<meta name="apple-mobile-web-app-title" content="Svelte Efferd" />
	<meta name="theme-color" content="#09090b" />
	<meta
		name="robots"
		content={isPreviewRoute
			? "noindex, nofollow"
			: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"}
	/>
	<title>Svelte Efferd Blocks</title>
</svelte:head>

<ModeWatcher defaultMode="dark" />

{#if isPreviewRoute}
	<div class="min-h-screen bg-background">
		{@render children()}
	</div>
{:else}
	<div class="relative supports-[overflow:clip]:overflow-clip dark:bg-background">
		<div>
			<SiteHeader />
		</div>
		<main
			class={cn(
				"relative container grow mb-20",
				"before:absolute before:-inset-y-20 before:-left-px before:z-1 before:border-dashed before:border-primary/20 xl:before:border-l",
				"after:absolute after:-inset-y-20 after:-right-px after:z-1 after:border-dashed after:border-primary/20 xl:after:border-r"
			)}
		>
			{@render children()}
		</main>
		<SiteFooter />
	</div>
{/if}
