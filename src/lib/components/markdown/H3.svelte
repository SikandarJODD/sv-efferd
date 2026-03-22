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

<h3
	{...restProps}
	class={cn("mt-8 scroll-m-20 text-xl font-medium tracking-tight text-foreground", className)}
>
	{@render children?.()}
</h3>
