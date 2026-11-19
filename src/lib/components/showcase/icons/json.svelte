<script lang="ts">
	import type { SVGAttributes } from "svelte/elements";

	let { ...props }: SVGAttributes<SVGSVGElement> = $props();
</script>

<svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
	<path
		d="M9 3H7.5A2.5 2.5 0 0 0 5 5.5V9a2 2 0 0 1-2 2v2a2 2 0 0 1 2 2v3.5A2.5 2.5 0 0 0 7.5 21H9M15 3h1.5A2.5 2.5 0 0 1 19 5.5V9a2 2 0 0 0 2 2v2a2 2 0 0 0-2 2v3.5a2.5 2.5 0 0 1-2.5 2.5H15"
		stroke="currentColor"
		stroke-width="1.75"
		stroke-linecap="round"
		stroke-linejoin="round"
	/>
</svg>
