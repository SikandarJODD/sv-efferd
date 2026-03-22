<script lang="ts">
	import { cn } from "$lib/utils";
	import type { SVGAttributes } from "svelte/elements";

	interface DashedLinesProps extends SVGAttributes<SVGSVGElement> {
		width?: number;
		height?: number;
		x?: number;
		class?: string;
	}

	let {
		width = 20,
		height = 50,
		x = 10,
		class: className,
		...props
	}: DashedLinesProps = $props();

	const id = $props.id();
</script>

<svg
	aria-hidden="true"
	class={cn("pointer-events-none size-full stroke-border", className)}
	{...props}
>
	<defs>
		<pattern {id} {height} patternUnits="userSpaceOnUse" {width} {x}>
			<path d={`M.5 0 V${height}`} fill="none" stroke-dasharray={2.5} />
		</pattern>
	</defs>

	<rect fill={`url(#${id})`} height="100%" stroke-width={0} width="100%" />
</svg>
