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
	import { scale } from "svelte/transition";
	import {
		DEFAULT_PREVIEW_SIZE,
		MOBILE_PREVIEW_SIZE,
		TABLET_PREVIEW_SIZE
	} from "./preview-sizes.js";

	interface PreviewViewportControlsProps {
		pane?: PaneAPI;
	}

	let { pane }: PreviewViewportControlsProps = $props();
</script>

<div transition:scale={{ start: 0.8 }} class="flex items-center gap-2">
	<TooltipProvider>
		<Tooltip>
			<TooltipTrigger>
				{#snippet child({ props })}
					<Button
						{...props}
						onclick={() => pane?.resize(DEFAULT_PREVIEW_SIZE)}
						size="icon"
						class="relative h-8 w-8 cursor-pointer shadow-none"
						variant="outline"
						aria-label="Set to Desktop View"
					>
						<Laptop
							class="size-7 text-primary opacity-80"
							strokeWidth={1.5}
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
						class="relative h-8 w-8 cursor-pointer shadow-none"
						variant="outline"
						aria-label="Set to Tablet View"
					>
						<Tablet
							class="size-7 text-primary opacity-80"
							strokeWidth={1.5}
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
						class="relative h-8 w-8 cursor-pointer shadow-none"
						variant="outline"
						aria-label="Set to Mobile View"
					>
						<Smartphone
							class="size-7 text-primary opacity-80"
							strokeWidth={1.5}
							aria-hidden="true"
						/>
					</Button>
				{/snippet}
			</TooltipTrigger>
			<TooltipContent align="center" class="px-2 py-1 text-[10px]">Mobile</TooltipContent>
		</Tooltip>
	</TooltipProvider>
</div>
