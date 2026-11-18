<script lang="ts">
	import { Button } from "#lib/components/ui/button/index.js";
	import {
		Tooltip,
		TooltipContent,
		TooltipProvider,
		TooltipTrigger
	} from "#lib/components/ui/tooltip/index.js";
	import Laptop from "@lucide/svelte/icons/laptop";
	import Smartphone from "@lucide/svelte/icons/smartphone";
	import Tablet from "@lucide/svelte/icons/tablet";
	import type { PaneAPI } from "paneforge";
	import {
		DESKTOP_PREVIEW_SIZE,
		DEFAULT_PREVIEW_SIZE,
		MOBILE_PREVIEW_SIZE,
		TABLET_PREVIEW_SIZE
	} from "./preview-sizes.js";

	interface PreviewViewportControlsProps {
		pane?: PaneAPI;
		width: number;
	}

	let { pane, width }: PreviewViewportControlsProps = $props();

	let activeViewport = $derived(
		width < TABLET_PREVIEW_SIZE ? "mobile" : width < DESKTOP_PREVIEW_SIZE ? "tablet" : "desktop"
	);
</script>

<div class="flex h-8 items-center gap-0.5 rounded-md border bg-background p-0.5">
	<TooltipProvider>
		<Tooltip>
			<TooltipTrigger>
				{#snippet child({ props })}
					<Button
						{...props}
						onclick={() => pane?.resize(DEFAULT_PREVIEW_SIZE)}
						size="icon"
						class="relative h-7 w-7 cursor-pointer rounded-[calc(var(--radius-md)-2px)] shadow-none"
						variant={activeViewport === "desktop" ? "secondary" : "ghost"}
						aria-label="Set to Desktop View"
						aria-pressed={activeViewport === "desktop"}
					>
						<Laptop
							class="size-3.5 text-foreground opacity-75"
							strokeWidth={1.75}
							aria-hidden="true"
						/>
					</Button>
				{/snippet}
			</TooltipTrigger>
			<TooltipContent align="center" class="px-2 py-1 text-[10px]">Laptop</TooltipContent>
		</Tooltip>
	</TooltipProvider>

	<TooltipProvider>
		<Tooltip>
			<TooltipTrigger>
				{#snippet child({ props })}
					<Button
						{...props}
						onclick={() => pane?.resize(TABLET_PREVIEW_SIZE)}
						size="icon"
						class="relative h-7 w-7 cursor-pointer rounded-[calc(var(--radius-md)-2px)] shadow-none"
						variant={activeViewport === "tablet" ? "secondary" : "ghost"}
						aria-label="Set to Tablet View"
						aria-pressed={activeViewport === "tablet"}
					>
						<Tablet
							class="size-3.5 text-foreground opacity-75"
							strokeWidth={1.75}
							aria-hidden="true"
						/>
					</Button>
				{/snippet}
			</TooltipTrigger>
			<TooltipContent align="center" class="px-2 py-1 text-[10px]">Tablet</TooltipContent>
		</Tooltip>
	</TooltipProvider>

	<TooltipProvider>
		<Tooltip>
			<TooltipTrigger>
				{#snippet child({ props })}
					<Button
						{...props}
						onclick={() => pane?.resize(MOBILE_PREVIEW_SIZE)}
						size="icon"
						class="relative h-7 w-7 cursor-pointer rounded-[calc(var(--radius-md)-2px)] shadow-none"
						variant={activeViewport === "mobile" ? "secondary" : "ghost"}
						aria-label="Set to Mobile View"
						aria-pressed={activeViewport === "mobile"}
					>
						<Smartphone
							class="size-3.5 text-foreground opacity-75"
							strokeWidth={1.75}
							aria-hidden="true"
						/>
					</Button>
				{/snippet}
			</TooltipTrigger>
			<TooltipContent align="center" class="px-2 py-1 text-[10px]">Mobile</TooltipContent>
		</Tooltip>
	</TooltipProvider>
</div>
