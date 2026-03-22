<script lang="ts">
	import type { Snippet } from "svelte";
	import { cn } from "$lib/utils";

	type ComponentProps = {
		class?: string;
		children?: Snippet;
		[prop: string]: unknown;
	};

	const { children, class: className = "", ...restProps }: ComponentProps = $props();
</script>

<h2
	{...restProps}
	class={cn("font-display mt-4 scroll-m-20 text-2xl font-medium text-foreground", className)}
>
	{@render children?.()}
</h2>
