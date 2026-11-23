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
		d="M2 5.5A3.5 3.5 0 0 1 5.5 2h10A3.5 3.5 0 0 1 19 5.5v8a3.5 3.5 0 0 1-3.5 3.5h-10A3.5 3.5 0 0 1 2 13.5v-8ZM7 20.25c0-.41.34-.75.75-.75h5.5a.75.75 0 0 1 0 1.5h-5.5a.75.75 0 0 1-.75-.75Z"
		fill="currentColor"
	/>
	<path
		d="M14 9.5A2.5 2.5 0 0 1 16.5 7h3A2.5 2.5 0 0 1 22 9.5v10a2.5 2.5 0 0 1-2.5 2.5h-3a2.5 2.5 0 0 1-2.5-2.5v-10Zm2 0v10c0 .28.22.5.5.5h3a.5.5 0 0 0 .5-.5v-10a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5Z"
		fill="currentColor"
	/>
</svg>
