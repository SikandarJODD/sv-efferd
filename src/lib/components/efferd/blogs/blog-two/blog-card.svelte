<script lang="ts">
	import { cn } from "$lib/utils";
	import type { HTMLAttributes } from "svelte/elements";

	type BlogCard = {
		title: string;
		date: string;
		description: string;
		category: string;
		author: string;
		href: string;
	};

	type Props = BlogCard & HTMLAttributes<HTMLAnchorElement>;

	let {
		title,
		date,
		description,
		category,
		author,
		class: className = "",
		...props
	}: Props = $props();
</script>

<a
	class={cn(
		"group w-full bg-background px-6 py-12 text-muted-foreground hover:cursor-pointer hover:text-foreground active:bg-accent md:px-8 active:dark:bg-accent/50",
		className
	)}
	{...props}
>
	<h3 class="mb-3 line-clamp-2 text-lg font-medium text-foreground md:text-xl">
		{title}
	</h3>
	<div class="mb-3 flex items-center gap-2">
		<span class="text-xs text-muted-foreground group-hover:text-foreground">
			{category}
		</span>
		<div class="inline-flex size-1 rounded-full bg-muted-foreground"></div>
		<span class="text-xs text-muted-foreground group-hover:text-foreground">
			{date}
		</span>
	</div>
	<p
		class="mb-8 line-clamp-3 text-sm tracking-wide text-muted-foreground group-hover:text-foreground"
	>
		{description}
	</p>
	<div class="flex items-center gap-1.5">
		by
		<span
			class="font-mono text-xs font-medium text-foreground/80 group-hover:text-foreground md:text-sm"
		>
			{author}
		</span>
	</div>
</a>
