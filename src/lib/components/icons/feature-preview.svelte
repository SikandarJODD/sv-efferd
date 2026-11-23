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
		fill-rule="evenodd"
		clip-rule="evenodd"
		d="M12 9c-3.17 0-5.47 1.83-6.62 3.25a1.18 1.18 0 0 0 0 1.5C6.53 15.17 8.83 17 12 17s5.47-1.83 6.62-3.25a1.18 1.18 0 0 0 0-1.5C17.47 10.83 15.17 9 12 9Zm0 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"
		fill="currentColor"
	/>
	<path d="M5.5 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2ZM8.5 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2Z" fill="currentColor" />
</svg>
