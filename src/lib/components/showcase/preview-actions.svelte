<script lang="ts">
	import { Button } from "#lib/components/ui/button/index.js";
	import {
		Tooltip,
		TooltipContent,
		TooltipProvider,
		TooltipTrigger
	} from "#lib/components/ui/tooltip/index.js";
	import { cn } from "#lib/utils.js";
	import Palette from "@lucide/svelte/icons/palette";
	import ResponsivePreviewIcon from "./icons/responsive-preview-icon.svelte";
	import InstallButton from "./install-button.svelte";

	interface PreviewActionsProps {
		canToggleResponsivePreview: boolean;
		responsivePreviewEnabled?: boolean;
		installId?: string;
		themeSetupHref?: string | null;
		mobile: boolean;
	}

	let {
		canToggleResponsivePreview,
		responsivePreviewEnabled = $bindable(false),
		installId,
		themeSetupHref,
		mobile
	}: PreviewActionsProps = $props();
</script>

{#if canToggleResponsivePreview}
	<TooltipProvider>
		<Tooltip>
			<TooltipTrigger>
				{#snippet child({ props })}
					<Button
						{...props}
						size="icon"
						onclick={() => (responsivePreviewEnabled = !responsivePreviewEnabled)}
						class="relative h-8 w-8 cursor-pointer shadow-none"
						variant="outline"
						aria-label="Toggle Responsive UI"
						aria-pressed={responsivePreviewEnabled}
					>
						<ResponsivePreviewIcon enabled={responsivePreviewEnabled} />
					</Button>
				{/snippet}
			</TooltipTrigger>
			<TooltipContent align="center" class="px-2 py-1 text-[10px]">
				Responsive UI
			</TooltipContent>
		</Tooltip>
	</TooltipProvider>
{/if}

{#if installId}
	<InstallButton id={installId} class={cn(mobile && "flex-1")} />
{/if}

{#if themeSetupHref}
	<Button
		variant="outline"
		size="sm"
		class="h-8 gap-1.5 px-3 text-xs shadow-none"
		href={themeSetupHref}
	>
		<Palette class="size-3.5" />
		<span>Theme Setup</span>
	</Button>
{/if}
