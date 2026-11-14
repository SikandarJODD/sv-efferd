<script lang="ts">
	import { Button } from "#lib/components/ui/button/index.js";
	import { Separator } from "#lib/components/ui/separator/index.js";
	import CodeXml from "@lucide/svelte/icons/code-xml";
	import Eye from "@lucide/svelte/icons/eye";
	import { DESKTOP_PREVIEW_SIZE, TABLET_PREVIEW_SIZE } from "./preview-sizes.js";

	type PreviewMode = "preview" | "code";

	interface PreviewModeControlsProps {
		mode?: PreviewMode;
		width: number;
		showViewportLabel: boolean;
	}

	let {
		mode = $bindable<PreviewMode>("preview"),
		width,
		showViewportLabel
	}: PreviewModeControlsProps = $props();

	const tabClass =
		"rounded-full duration-200 flex items-center justify-center h-8 px-2.5 gap-2 transition-[color] data-[state=checked]:bg-muted";

	let viewportLabel = $derived(
		width < TABLET_PREVIEW_SIZE ? "Mobile" : width < DESKTOP_PREVIEW_SIZE ? "Tablet" : "Desktop"
	);
</script>

<div class="flex w-fit items-center gap-0.5 md:-ml-3" role="group" aria-label="Preview mode">
	<Button
		variant={mode === "preview" ? "secondary" : "ghost"}
		onclick={() => (mode = "preview")}
		class={tabClass}
		size="sm"
		aria-pressed={mode === "preview"}
	>
		<Eye class="size-6 sm:opacity-80" strokeWidth={1.5} aria-hidden="true" />
		<span class="text-[13px]">Preview</span>
	</Button>

	<Button
		variant={mode === "code" ? "secondary" : "ghost"}
		onclick={() => (mode = "code")}
		size="sm"
		class={tabClass}
		aria-pressed={mode === "code"}
	>
		<CodeXml class="size-6 sm:opacity-70" strokeWidth={1.4} aria-hidden="true" />
		<span class="text-[13px]">Code</span>
	</Button>
</div>

{#if showViewportLabel}
	<Separator orientation="vertical" class="my-auto hidden h-4! lg:block" />
	<span class="hidden text-sm text-muted-foreground lg:block">{viewportLabel}</span>
{/if}
