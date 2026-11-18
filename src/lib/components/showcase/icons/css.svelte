<script lang="ts">
	import type { SVGAttributes } from "svelte/elements";

	let { ...props }: SVGAttributes<SVGSVGElement> = $props();
</script>

<svg viewBox="0 0 256 256" aria-hidden="true" {...props}>
	<path d="M32 0h192l-17 226-79 30-79-30L32 0Z" fill="#1572B6" />
	<path d="m128 238 64-24 15-196h-79v220Z" fill="#33A9DC" />
	<path
		d="M67 48h128l-3 28-78 33h75l-9 91-52 18-52-18-4-46h26l2 25 28 9 29-10 3-42H70l-2-27 78-33H69l-2-28Z"
		fill="#FFF"
	/>
</svg>
