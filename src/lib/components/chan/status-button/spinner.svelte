<script lang="ts">
	import { cn } from "#lib/utils.js";
	import type { SVGAttributes } from "svelte/elements";

	let {
		class: className,
		"aria-hidden": ariaHidden = true,
		...restProps
	}: SVGAttributes<SVGSVGElement> = $props();
</script>

<svg
	aria-hidden={ariaHidden}
	viewBox="0 0 16 16"
	fill="currentColor"
	class={cn("size-4 *:animate-spinner-opacity", className)}
	{...restProps}
>
	<rect
		x="11.84"
		y="7.25"
		width="4"
		height="1.5"
		rx="0.75"
		style:animation-delay="-900ms"
	/>
	<rect
		x="11.84"
		y="7.25"
		width="4"
		height="1.5"
		rx="0.75"
		transform="rotate(36 8 8)"
		style:animation-delay="-800ms"
	/>
	<rect
		x="11.84"
		y="7.25"
		width="4"
		height="1.5"
		rx="0.75"
		transform="rotate(72 8 8)"
		style:animation-delay="-700ms"
	/>
	<rect
		x="11.84"
		y="7.25"
		width="4"
		height="1.5"
		rx="0.75"
		transform="rotate(108 8 8)"
		style:animation-delay="-600ms"
	/>
	<rect
		x="11.84"
		y="7.25"
		width="4"
		height="1.5"
		rx="0.75"
		transform="rotate(144 8 8)"
		style:animation-delay="-500ms"
	/>
	<rect
		x="11.84"
		y="7.25"
		width="4"
		height="1.5"
		rx="0.75"
		transform="rotate(180 8 8)"
		style:animation-delay="-400ms"
	/>
	<rect
		x="11.84"
		y="7.25"
		width="4"
		height="1.5"
		rx="0.75"
		transform="rotate(216 8 8)"
		style:animation-delay="-300ms"
	/>
	<rect
		x="11.84"
		y="7.25"
		width="4"
		height="1.5"
		rx="0.75"
		transform="rotate(252 8 8)"
		style:animation-delay="-200ms"
	/>
	<rect
		x="11.84"
		y="7.25"
		width="4"
		height="1.5"
		rx="0.75"
		transform="rotate(288 8 8)"
		style:animation-delay="-100ms"
	/>
	<rect
		x="11.84"
		y="7.25"
		width="4"
		height="1.5"
		rx="0.75"
		transform="rotate(324 8 8)"
	/>
</svg>
