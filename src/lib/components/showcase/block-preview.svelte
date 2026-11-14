<script lang="ts">
	import { page } from "$app/state";
	import type { BlockCodeTree } from "#lib/blocks/showcase.js";
	import { IsMobile } from "#lib/hooks/is-mobile.svelte.js";
	import type { PaneAPI } from "paneforge";
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
	let pane = $state<PaneAPI>();
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

<section {id} class="group scroll-mt-10">
	<div class="relative">
		<div class="relative mx-auto max-w-7xl">
			<PreviewHeading {title} {description} url={blockUrl} />
			<PreviewToolbar
				bind:mode
				bind:responsivePreviewEnabled
				{width}
				{pane}
				{showViewportControls}
				{canToggleResponsivePreview}
				{previewHref}
				{installId}
				{themeSetupHref}
				mobile={mobile.current}
			/>
		</div>
	</div>

	<div class="relative">
		<div
			class="relative mx-auto max-w-7xl border-b px-4 lg:px-0"
			style={`--preview-min-height: ${MIN_PREVIEW_HEIGHT}px;`}
		>
			<PreviewCanvas
				bind:width
				bind:pane
				{id}
				{title}
				{previewComponent}
				{previewHref}
				{previewHeight}
				{renderIframe}
				{heroPreview}
				{activeTheme}
				largeViewport={largeViewport.current}
				hidden={mode === "code"}
			/>

			<div class="bg-white dark:bg-transparent!">
				{#if mode === "code"}
					<CodeViewer {codeTree} />
				{/if}
			</div>
		</div>
	</div>
</section>
