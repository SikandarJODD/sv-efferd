<script lang="ts">
	import { page } from '$app/state';
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	import { ModeWatcher } from 'mode-watcher';
	import { cn } from '$lib/utils';
	import SiteHeader from '$lib/components/landing/site-header.svelte';

	let { children } = $props();
	let isPreviewRoute = $derived(page.url.pathname.startsWith('/preview/'));
</script>

<ModeWatcher defaultMode="dark" />

<svelte:head><link rel="icon" href={favicon} /></svelte:head>

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
				'relative container grow',
				'before:absolute before:-inset-y-20 before:-left-px before:z-1 before:border-dashed before:border-border xl:before:border-l',
				'after:absolute after:-inset-y-20 after:-right-px after:z-1 after:border-dashed after:border-border xl:after:border-r'
			)}
		>
			{@render children()}
		</main>
		<!-- <SiteFooter /> -->
	</div>
{/if}
