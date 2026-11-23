<script lang="ts">
	import type { Props } from ".";
	import { cn } from "#lib/utils.js";

	let { class: className, ...rest }: Props = $props();
</script>

<svg
	class={cn("size-5", className)}
	viewBox="0 0 24 24"
	fill="none"
	xmlns="http://www.w3.org/2000/svg"
	{...rest}
>
	<path
		opacity="0.5"
		d="M3 5.5C3 4.12 4.12 3 5.5 3h4C10.88 3 12 4.12 12 5.5v13c0 1.38-1.12 2.5-2.5 2.5h-4A2.5 2.5 0 0 1 3 18.5v-13Z"
		fill="currentColor"
	/>
	<path
		d="M14 5.5C14 4.12 15.12 3 16.5 3h2A2.5 2.5 0 0 1 21 5.5v3a2.5 2.5 0 0 1-2.5 2.5h-2A2.5 2.5 0 0 1 14 8.5v-3ZM14 15.5c0-1.38 1.12-2.5 2.5-2.5h2a2.5 2.5 0 0 1 2.5 2.5v3a2.5 2.5 0 0 1-2.5 2.5h-2a2.5 2.5 0 0 1-2.5-2.5v-3Z"
		fill="currentColor"
	/>
</svg>
