<script lang="ts">
	import { cn } from "#lib/utils.js";
	import { Pane, PaneGroup, PaneResizer, type PaneAPI } from "paneforge";
	import type { Component } from "svelte";
	import { scale } from "svelte/transition";
	import {
		DEFAULT_PREVIEW_SIZE,
		MIN_PREVIEW_HEIGHT,
		MOBILE_PREVIEW_SIZE
	} from "./preview-sizes.js";

	type ScopedTheme = "veil" | "mist";

	interface PreviewCanvasProps {
		id: string;
		title: string;
		previewComponent: Component;
		previewHref?: string;
		previewHeight?: number;
		renderIframe: boolean;
		heroPreview: boolean;
		activeTheme: ScopedTheme | null;
		largeViewport: boolean;
		hidden?: boolean;
		width?: number;
		pane?: PaneAPI;
	}

	let {
		id,
		title,
		previewComponent: PreviewComponent,
		previewHref,
		previewHeight,
		renderIframe,
		heroPreview,
		activeTheme,
		largeViewport,
		hidden = false,
		width = $bindable(DEFAULT_PREVIEW_SIZE),
		pane = $bindable<PaneAPI | undefined>()
	}: PreviewCanvasProps = $props();

	let iframe = $state<HTMLIFrameElement | null>(null);
	let iframeHeight = $state(0);
	let loading = $state(false);

	let resolvedIframeHeight = $derived(
		Math.max(previewHeight ?? iframeHeight, MIN_PREVIEW_HEIGHT)
	);

	$effect(() => {
		loading = renderIframe && Boolean(previewHref);
	});

	function hideIframeScrollbar() {
		const iframeDocument = iframe?.contentDocument;
		if (!iframeDocument) return;

		iframeDocument.documentElement.classList.toggle("no-scrollbar", !heroPreview);
		iframeDocument.body.classList.toggle("no-scrollbar", !heroPreview);
	}

	function handleIframeLoad() {
		loading = false;
		hideIframeScrollbar();

		if (previewHeight) {
			iframeHeight = previewHeight;
			return;
		}

		const contentHeight = iframe?.contentWindow?.document.body.scrollHeight;
		if (contentHeight) iframeHeight = contentHeight + 20;
	}
</script>

<div class={cn("z-40 bg-white dark:bg-background", hidden && "hidden")}>
	{#if renderIframe && previewHref}
		<PaneGroup direction="horizontal">
			<Pane
				bind:this={pane}
				id={`preview-${id}`}
				order={1}
				onResize={(size) => (width = Number(size))}
				defaultSize={DEFAULT_PREVIEW_SIZE}
				minSize={MOBILE_PREVIEW_SIZE}
				class={cn("h-fit", largeViewport && "border-r")}
			>
				<iframe
					loading="lazy"
					allowFullScreen
					bind:this={iframe}
					{title}
					height={resolvedIframeHeight}
					class="@starting:opacity-0 @starting:blur-xl no-scrollbar block h-(--iframe-height) min-h-(--preview-min-height) w-full duration-200 will-change-auto"
					src={previewHref}
					id={`block-${id}`}
					style={`--iframe-height: ${resolvedIframeHeight}px;`}
					onload={handleIframeLoad}
				></iframe>

				{#if loading}
					<div
						class="absolute inset-0 right-2 flex items-center justify-center border-x bg-background"
						role="status"
						aria-label="Loading preview"
					>
						<div
							class="size-6 animate-spin rounded-full border border-primary border-t-transparent"
							aria-hidden="true"
						></div>
					</div>
				{/if}
			</Pane>

			{#if largeViewport}
				<PaneResizer
					class="relative w-2 before:absolute before:inset-0 before:m-auto before:h-12 before:w-1 before:rounded-full before:bg-zinc-300 before:transition-[height,background] hover:before:h-16 hover:before:bg-zinc-400 focus:before:bg-zinc-400 dark:before:bg-zinc-600 dark:hover:before:bg-zinc-500 dark:focus:before:bg-zinc-400"
				/>
				<Pane
					id={`preview-resizer-${id}`}
					order={2}
					defaultSize={100 - DEFAULT_PREVIEW_SIZE}
				/>
			{/if}
		</PaneGroup>
	{:else if activeTheme}
		<div data-theme={activeTheme}>
			<div
				in:scale={{ start: 0.85 }}
				class="theme-container min-h-(--preview-min-height) w-full overflow-hidden"
			>
				<PreviewComponent />
			</div>
		</div>
	{:else}
		<div
			in:scale={{ start: 0.85 }}
			class="flex min-h-(--preview-min-height) w-full items-center justify-center overflow-hidden"
		>
			<PreviewComponent />
		</div>
	{/if}
</div>
