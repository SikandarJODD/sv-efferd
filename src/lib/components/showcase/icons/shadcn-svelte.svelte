<script lang="ts">
	import type { SVGAttributes } from "svelte/elements";

	let { ...props }: SVGAttributes<SVGSVGElement> = $props();
</script>

<svg viewBox="0 0 256 256" aria-hidden="true" {...props}
	><path fill="none" d="M0 0h256v256H0z" /><path
		fill="none"
		stroke="#FF3E00"
		stroke-width="25"
		stroke-linecap="round"
		d="M208 128l-80 80M192 40L40 192"
	/></svg
>
