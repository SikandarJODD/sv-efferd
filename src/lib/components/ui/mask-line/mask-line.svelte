<script lang="ts">
	import { cn } from "$lib/utils";
	import type { HTMLAttributes } from "svelte/elements";

	type MaskLineProps = HTMLAttributes<HTMLDivElement> & {
		orientation?: "vertical" | "horizontal";
		class?: string;
	};
	let { orientation = "vertical", class: className = "", ...props }: MaskLineProps = $props();
</script>

<div
	aria-hidden="true"
	class={cn(
		"absolute bg-foreground/20",
		orientation === "vertical" && "-inset-y-1/2 w-px mask-t-from-80% mask-b-from-80%",
		orientation === "horizontal" && "-inset-x-1/2 h-px mask-r-from-80% mask-l-from-80%",
		className
	)}
	{...props}
></div>
