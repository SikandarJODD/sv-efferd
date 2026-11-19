<script lang="ts">
	import { Button } from "#lib/components/ui/button/index.js";
	import { Annotation } from "#lib/components/ui/annotation/index.js";
	import { Separator } from "#lib/components/ui/separator/index.js";
	import CodeXml from "@lucide/svelte/icons/code-xml";
	import Eye from "@lucide/svelte/icons/eye";
	import { DESKTOP_PREVIEW_SIZE, TABLET_PREVIEW_SIZE } from "./preview-sizes.js";
	import Maximize from "@lucide/svelte/icons/maximize";

	type PreviewMode = "preview" | "code";

	interface PreviewModeControlsProps {
		mode?: PreviewMode;
		width: number;
		showViewportLabel: boolean;
		previewHref?: string;
		openPreviewNote?: string;
	}

	let {
		mode = $bindable<PreviewMode>("preview"),
		width,
		showViewportLabel,
		previewHref,
		openPreviewNote
	}: PreviewModeControlsProps = $props();
</script>

{#snippet openPreviewButton()}
	<Button
		variant="secondary"
		size="sm"
		href={previewHref}
		target="_blank"
		rel="noreferrer"
		class="group/open-preview rounded-full px-3 text-xs text-muted-foreground shadow-none transition-[background-color,color] duration-150 hover:bg-ink-dim hover:text-ink dark:hover:bg-primary/10 dark:hover:text-primary"
		aria-label="Open preview in new tab"
	>
		<Maximize
			class="size-3.5 transition-transform duration-150 ease-out group-hover/open-preview:rotate-45 motion-reduce:transform-none motion-reduce:transition-none"
			strokeWidth={1.6}
			aria-hidden="true"
		/>
		<span>Open preview</span>
	</Button>
{/snippet}

<div class="flex w-fit items-center gap-0.5" role="group" aria-label="Preview mode">
	<Button
		variant={mode === "preview" ? "secondary" : "ghost"}
		onclick={() => (mode = "preview")}
		class="cursor-pointer gap-1.5 rounded-full pr-3 pl-2.5 text-xs! shadow-none transition-[background-color,color]"
		size="sm"
		aria-pressed={mode === "preview"}
	>
		<Eye class="size-3.5 opacity-70" strokeWidth={1.75} aria-hidden="true" />
		<span>Preview</span>
	</Button>

	<Button
		variant={mode === "code" ? "secondary" : "ghost"}
		onclick={() => (mode = "code")}
		size="sm"
		aria-pressed={mode === "code"}
		class="cursor-pointer gap-1.5 rounded-full pr-3 pl-2.5 text-xs shadow-none transition-[background-color,color]"
	>
		<CodeXml class="size-3.5 opacity-70" strokeWidth={1.75} aria-hidden="true" />
		<span>Code</span>
	</Button>
</div>

{#if previewHref}
	<Separator orientation="vertical" class="my-auto h-4!" />
	{#if openPreviewNote}
		<Annotation
			note={openPreviewNote}
			direction="w"
			noMark
			labelMaxWidth="9rem"
			class="after:text-sm! max-md:before:hidden max-md:after:hidden"
		>
			{@render openPreviewButton()}
		</Annotation>
	{:else}
		{@render openPreviewButton()}
	{/if}
{/if}
