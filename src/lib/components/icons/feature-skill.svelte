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
		d="M2 6.5A3.5 3.5 0 0 1 5.5 3h5A3.5 3.5 0 0 1 14 6.5v11a3.5 3.5 0 0 1-3.5 3.5h-5A3.5 3.5 0 0 1 2 17.5v-11Z"
		fill="currentColor"
	/>
	<path
		d="M18 2a2 2 0 1 1 0 4 2 2 0 0 1 0-4ZM18 9a2 2 0 1 1 0 4 2 2 0 0 1 0-4ZM18 16a2 2 0 1 1 0 4 2 2 0 0 1 0-4ZM13 4.25c0-.41.34-.75.75-.75H16a.75.75 0 0 1 0 1.5h-2.25a.75.75 0 0 1-.75-.75ZM13 11.25c0-.41.34-.75.75-.75H16a.75.75 0 0 1 0 1.5h-2.25a.75.75 0 0 1-.75-.75ZM13 18.25c0-.41.34-.75.75-.75H16a.75.75 0 0 1 0 1.5h-2.25a.75.75 0 0 1-.75-.75Z"
		fill="currentColor"
	/>
</svg>
