<script lang="ts">
	import { Card } from "#lib/components/ui/card/index.js";
	import { cn } from "#lib/utils.js";
	import type { Snippet } from "svelte";

	type Props = {
		variant: "group" | "group-title" | "panel" | "panel-title";
		class?: string;
		children: Snippet;
	};

	let { variant, class: className, children }: Props = $props();
</script>

{#if variant === "group"}
	<section class={cn("flex flex-col gap-3", className)}>
		{@render children()}
	</section>
{:else if variant === "group-title"}
	<h2
		class={cn(
			"font-heading flex items-center gap-2 text-sm font-medium text-muted-foreground",
			"[&_svg]:size-4 [&_svg]:shrink-0 [&_svg]:text-foreground",
			className
		)}
	>
		{@render children()}
	</h2>
{:else if variant === "panel"}
	<Card
		class={cn(
			"px-(--card-spacing) pb-[calc(var(--card-spacing)*1.5)] dark:bg-transparent",
			className
		)}
	>
		{@render children()}
	</Card>
{:else}
	<h3 class={cn("font-heading text-sm font-medium [&_svg]:size-4 [&_svg]:shrink-0", className)}>
		{@render children()}
	</h3>
{/if}
