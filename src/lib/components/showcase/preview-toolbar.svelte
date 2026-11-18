<script lang="ts">
	import { cn } from "#lib/utils.js";
	import type { PaneAPI } from "paneforge";
	import PreviewActions from "./preview-actions.svelte";
	import PreviewModeControls from "./preview-mode-controls.svelte";
	import PreviewViewportControls from "./preview-viewport-controls.svelte";

	type PreviewMode = "preview" | "code";

	interface PreviewToolbarProps {
		mode?: PreviewMode;
		width: number;
		pane?: PaneAPI;
		showViewportControls: boolean;
		canToggleResponsivePreview: boolean;
		responsivePreviewEnabled?: boolean;
		previewHref?: string;
		installId?: string;
		themeSetupHref?: string | null;
		mobile: boolean;
	}

	let {
		mode = $bindable<PreviewMode>("preview"),
		width,
		pane,
		showViewportControls,
		canToggleResponsivePreview,
		responsivePreviewEnabled = $bindable(false),
		previewHref,
		installId,
		themeSetupHref,
		mobile
	}: PreviewToolbarProps = $props();
</script>

<div
	class={cn(
		"relative z-40 flex flex-col gap-2 bg-background px-4 py-2.5 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:gap-3 lg:px-3",
		mobile && "gap-3 py-3"
	)}
>
	<div class={cn("flex min-w-0 flex-wrap items-center gap-2.5", mobile && "gap-2")}>
		<PreviewModeControls
			bind:mode
			{width}
			{previewHref}
			showViewportLabel={showViewportControls}
		/>
	</div>

	<div class={cn("flex flex-wrap items-center gap-2", mobile && "w-full gap-1.5")}>
		{#if showViewportControls}
			<PreviewViewportControls {pane} {width} />
		{/if}
		<PreviewActions
			bind:responsivePreviewEnabled
			{canToggleResponsivePreview}
			{installId}
			{themeSetupHref}
			{mobile}
		/>
	</div>
</div>
