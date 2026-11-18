<script lang="ts">
	import { cn } from "#lib/utils.js";
	import { onDestroy, type Component } from "svelte";
	import { scale } from "svelte/transition";
	import { DEFAULT_PREVIEW_SIZE, MIN_PREVIEW_HEIGHT } from "./preview-sizes.js";

	type ScopedTheme = "veil" | "mist";

	interface PreviewCanvasProps {
		id: string;
		title: string;
		previewComponent: Component;
		previewHref?: string;
		previewHeight?: number;
		renderIframe: boolean;
		heroPreview: boolean;
		headerPreview: boolean;
		autoSizeIframe: boolean;
		activeTheme: ScopedTheme | null;
		largeViewport: boolean;
		hidden?: boolean;
		width?: number;
	}

	let {
		id,
		title,
		previewComponent: PreviewComponent,
		previewHref,
		previewHeight,
		renderIframe,
		heroPreview,
		headerPreview,
		autoSizeIframe,
		activeTheme,
		largeViewport,
		hidden = false,
		width = DEFAULT_PREVIEW_SIZE
	}: PreviewCanvasProps = $props();

	let iframe = $state<HTMLIFrameElement | null>(null);
	let iframeHeight = $state(0);
	let loading = $state(false);
	let iframeResizeObserver: ResizeObserver | undefined;
	let removeIframeWheelListener: (() => void) | undefined;

	let resolvedIframeHeight = $derived(
		Math.max(previewHeight ?? 0, iframeHeight, MIN_PREVIEW_HEIGHT)
	);

	$effect(() => {
		loading = renderIframe && Boolean(previewHref);
		if (!renderIframe) cleanupIframe();
	});

	function hideIframeScrollbar() {
		const iframeDocument = iframe?.contentDocument;
		if (!iframeDocument) return;

		const hideScrollbar = !heroPreview && autoSizeIframe;
		iframeDocument.documentElement.classList.toggle("no-scrollbar", hideScrollbar);
		iframeDocument.body.classList.toggle("no-scrollbar", hideScrollbar);
	}

	function cleanupIframe() {
		iframeResizeObserver?.disconnect();
		iframeResizeObserver = undefined;
		cleanupIframeWheelForwarding();
	}

	function cleanupIframeWheelForwarding() {
		removeIframeWheelListener?.();
		removeIframeWheelListener = undefined;
	}

	function setupIframeWheelForwarding() {
		const iframeDocument = iframe?.contentDocument;
		const iframeWindow = iframe?.contentWindow;
		if (!iframeDocument || !iframeWindow) return;

		cleanupIframeWheelForwarding();
		if (!autoSizeIframe) {
			iframeDocument.documentElement.style.overflow = "auto";
			iframeDocument.body.style.overflow = "auto";
			return;
		}

		iframeDocument.documentElement.style.overflow = "hidden";
		iframeDocument.body.style.overflow = "hidden";

		const forwardWheelToPage = (event: WheelEvent) => {
			if (event.ctrlKey) return;

			const multiplier =
				event.deltaMode === WheelEvent.DOM_DELTA_LINE
					? 16
					: event.deltaMode === WheelEvent.DOM_DELTA_PAGE
						? window.innerHeight
						: 1;

			event.preventDefault();
			window.scrollBy(event.deltaX * multiplier, event.deltaY * multiplier);
		};

		iframeWindow.addEventListener("wheel", forwardWheelToPage, { passive: false });
		removeIframeWheelListener = () =>
			iframeWindow.removeEventListener("wheel", forwardWheelToPage);
	}

	function setupIframeAutoHeight() {
		const iframeDocument = iframe?.contentDocument;
		if (!iframeDocument || !autoSizeIframe) return;

		iframeResizeObserver?.disconnect();

		const syncHeight = () => {
			const contentHeight = Math.max(
				iframeDocument.documentElement.scrollHeight,
				iframeDocument.body.scrollHeight
			);

			if (contentHeight > 0) iframeHeight = contentHeight;
		};

		iframeResizeObserver = new ResizeObserver(syncHeight);
		iframeResizeObserver.observe(iframeDocument.documentElement);
		iframeResizeObserver.observe(iframeDocument.body);
		syncHeight();
	}

	function handleIframeLoad() {
		loading = false;
		hideIframeScrollbar();
		setupIframeWheelForwarding();
		setupIframeAutoHeight();
	}

	onDestroy(cleanupIframe);
</script>

<div class={cn("z-40 bg-white dark:bg-background", hidden && "hidden")}>
	{#if renderIframe && previewHref}
		<div
			class={cn(
				"relative h-fit",
				largeViewport && width < DEFAULT_PREVIEW_SIZE && "border-r"
			)}
			style:width={largeViewport ? `${width}%` : "100%"}
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
		</div>
	{:else if activeTheme}
		<div data-theme={activeTheme}>
			<div
				in:scale={{ start: 0.85 }}
				class={cn(
					"theme-container min-h-(--preview-min-height) w-full overflow-hidden",
					headerPreview && "relative"
				)}
			>
				<PreviewComponent />
				{#if headerPreview}
					<p
						class="pointer-events-none absolute inset-x-6 top-1/2 -translate-y-1/2 text-center font-cursive text-base text-muted-foreground"
					>
						Open the full preview and scroll to see the header change.
					</p>
				{/if}
			</div>
		</div>
	{:else}
		<div
			in:scale={{ start: 0.85 }}
			class={cn(
				"relative flex min-h-(--preview-min-height) w-full items-center justify-center overflow-hidden",
				headerPreview && "items-start justify-start"
			)}
		>
			<PreviewComponent />
			{#if headerPreview}
				<p
					class="pointer-events-none absolute inset-x-6 top-1/2 -translate-y-1/2 text-center font-cursive text-base text-muted-foreground"
				>
					Open the full preview and scroll to see the header change.
				</p>
			{/if}
		</div>
	{/if}
</div>
