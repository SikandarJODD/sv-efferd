<script lang="ts">
	import { cn } from "$lib/utils";
	import type { HTMLAttributes } from "svelte/elements";
	import type { LinkItemType } from "./types";
	import type { Component } from "svelte";
	import type { Icon } from "@lucide/svelte";

	type Props = LinkItemType & HTMLAttributes<HTMLAnchorElement>;
	let { label, description, icon, href, class: className, ...props }: Props = $props();

	// i have added Svelte Component, Lucide Icon so you can have custom-icon.svelte and lucide icon both
	let IconComponent: Component | typeof Icon = $derived(icon);
</script>

<a class={cn("flex items-center gap-x-2", className)} {href} {...props}>
	<div
		class={cn(
			"flex aspect-square size-9 items-center justify-center rounded-md border bg-card text-sm shadow-sm",
			"[&_svg:not([class*='size-'])]:size-4 [&_svg:not([class*='size-'])]:text-foreground"
		)}
	>
		<IconComponent />
	</div>
	<div class="flex flex-col items-start justify-center">
		<span class="font-medium">{label}</span>
		<span class="line-clamp-2 text-xs text-muted-foreground">
			{description}
		</span>
	</div>
</a>
