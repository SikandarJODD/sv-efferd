<script lang="ts">
	import type { Snippet } from "svelte";
	import { cn } from "#lib/utils.js";

	type ComponentProps = {
		class?: string;
		children?: Snippet;
		[prop: string]: unknown;
	};

	const { children, class: className = "", ...restProps }: ComponentProps = $props();
</script>

<h3
	{...restProps}
	class={cn("font-display mt-4 scroll-m-24 text-xl font-medium text-foreground", className)}
>
	{@render children?.()}
</h3>
