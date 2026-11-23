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
		d="M2 6.5A3.5 3.5 0 0 1 5.5 3h13A3.5 3.5 0 0 1 22 6.5v11a3.5 3.5 0 0 1-3.5 3.5h-13A3.5 3.5 0 0 1 2 17.5v-11Z"
		fill="currentColor"
	/>
	<path
		d="M7.53 8.47a.75.75 0 0 0-1.06 1.06L8.94 12l-2.47 2.47a.75.75 0 1 0 1.06 1.06l3-3a.75.75 0 0 0 0-1.06l-3-3ZM12.5 15.25a.75.75 0 0 1 .75-.75H17a.75.75 0 0 1 0 1.5h-3.75a.75.75 0 0 1-.75-.75Z"
		fill="currentColor"
	/>
</svg>
