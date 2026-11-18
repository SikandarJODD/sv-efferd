<script lang="ts">
	import { page } from "$app/state";
	import type { BlockCodeTree } from "#lib/blocks/showcase.js";
	import { IsMobile } from "#lib/hooks/is-mobile.svelte.js";
	import { watch } from "runed";
	import type { Component } from "svelte";
	import { MediaQuery } from "svelte/reactivity";
	import CodeViewer from "./code-viewer.svelte";
	import PreviewCanvas from "./preview-canvas.svelte";
	import PreviewHeading from "./preview-heading.svelte";
	import { DEFAULT_PREVIEW_SIZE, MIN_PREVIEW_HEIGHT } from "./preview-sizes.js";
	import PreviewToolbar from "./preview-toolbar.svelte";

	interface BlockPreviewProps {
		id: string;
		title: string;
		description?: string;
		codeTree: BlockCodeTree;
		previewComponent: Component;
		previewHref?: string;
		previewMode: "inline" | "iframe";
		previewHeight?: number;
		installId?: string;
	}

	type ScopedTheme = "veil" | "mist";

	let {
		id,
		title,
		description = "",
		codeTree,
		previewComponent,
		previewHref,
		previewMode,
		previewHeight,
		installId
	}: BlockPreviewProps = $props();

	let mode = $state<"preview" | "code">("preview");
	let width = $state(DEFAULT_PREVIEW_SIZE);
	let responsivePreviewEnabled = $state(false);
	let mobile = new IsMobile();
	let largeViewport = new MediaQuery("min-width: 1024px");

	let startsInIframe = $derived(Boolean(previewHref) && previewMode === "iframe");
	let renderIframe = $derived(
		Boolean(previewHref) && (startsInIframe || responsivePreviewEnabled)
	);
	let canToggleResponsivePreview = $derived(Boolean(previewHref) && previewMode === "inline");
	let showViewportControls = $derived(renderIframe && !mobile.current);
	let heroPreview = $derived(previewHref?.startsWith("/preview/hero/") ?? false);
	let headerPreview = $derived(previewHref?.startsWith("/preview/header/") ?? false);
	let dashboardPreview = $derived(previewHref?.startsWith("/preview/dashboard/") ?? false);
	let activeTheme = $derived(resolveScopedTheme(page.url.pathname));
	let themeSetupHref = $derived(
		activeTheme === "veil"
			? "/v2-docs/veil-theme"
			: activeTheme === "mist"
				? "/v2-docs/mist-theme"
				: null
	);
	let blockUrl = $derived(`${page.url.origin}${page.url.pathname}#${id}`);

	function resolveScopedTheme(pathname: string): ScopedTheme | null {
		const segments = pathname.split("/").filter(Boolean);
		const themeSegment = segments[0] === "preview" ? segments[1] : segments[0];

		return themeSegment === "veil" || themeSegment === "mist" ? themeSegment : null;
	}

	watch(
		() => startsInIframe,
		(shouldStartInIframe) => {
			if (shouldStartInIframe) responsivePreviewEnabled = true;
		}
	);

	watch(
		() => previewHref,
		(href) => {
			if (!href) responsivePreviewEnabled = false;
		}
	);
</script>

<section {id} class="group mb-10 scroll-mt-10">
	<div class="relative">
		<PreviewHeading {title} {description} url={blockUrl} />
		<PreviewToolbar
			bind:mode
			bind:width
			bind:responsivePreviewEnabled
			{showViewportControls}
			{canToggleResponsivePreview}
			{previewHref}
			openPreviewNote={headerPreview || dashboardPreview
				? "Open this preview, then scroll."
				: undefined}
			{installId}
			{themeSetupHref}
			mobile={mobile.current}
		/>
	</div>

	<div class="relative px-2 sm:px-1">
		<div
			class="relative w-full overflow-hidden rounded-2xl border bg-background"
			style={`--preview-min-height: ${MIN_PREVIEW_HEIGHT}px;`}
		>
			<PreviewCanvas
				{width}
				{id}
				{title}
				{previewComponent}
				{previewHref}
				{previewHeight}
				{renderIframe}
				{heroPreview}
				{headerPreview}
				autoSizeIframe={startsInIframe}
				{activeTheme}
				largeViewport={largeViewport.current}
				hidden={mode === "code"}
			/>

			<div
				class="bg-white dark:bg-transparent! [&_[data-slot=code-block-content]]:no-scrollbar"
			>
				{#if mode === "code"}
					<CodeViewer {codeTree} />
				{/if}
			</div>
		</div>
	</div>
</section>
