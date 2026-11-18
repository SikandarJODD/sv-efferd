<script lang="ts">
	import type { SVGAttributes } from "svelte/elements";

	let { ...props }: SVGAttributes<SVGSVGElement> = $props();
</script>

<svg viewBox="0 0 256 256" aria-hidden="true" {...props}>
	<path d="M0 0h256v256H0z" fill="#F7DF1E" />
	<path
		d="M67 214l20-12c4 8 8 14 18 14 9 0 15-4 15-19v-101h25v101c0 26-15 38-38 38-20 0-32-11-40-21Zm92-3 20-12c5 9 12 17 25 17 11 0 18-5 18-13 0-9-7-12-19-17l-7-3c-19-8-32-19-32-42 0-21 16-37 41-37 18 0 31 6 40 23l-20 13c-5-8-10-12-20-12-9 0-15 6-15 12 0 8 6 12 18 17l7 3c23 10 35 20 35 43 0 25-19 38-45 38-25 0-41-12-46-28Z"
		fill="#000"
	/>
</svg>
