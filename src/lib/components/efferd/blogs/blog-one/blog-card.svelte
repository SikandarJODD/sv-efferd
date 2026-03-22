<script lang="ts">
	import { cn } from "$lib/utils";
	import type { HTMLAttributes } from "svelte/elements";
	type BlogCard = {
		title: string;
		date: string;
		description: string;
	};

	type Props = BlogCard & HTMLAttributes<HTMLAnchorElement>;

	let { title, date, description, ...props }: Props = $props();
</script>

<a
	class={cn(
		"group flex h-24 w-full flex-col justify-center gap-y-1 p-4 hover:cursor-pointer hover:bg-accent/30 active:bg-accent dark:active:bg-accent/50"
	)}
	{...props}
>
	<div class="relative flex items-end justify-center gap-2">
		<h3 class="text-lg font-medium whitespace-nowrap text-foreground md:text-xl">
			{title}
		</h3>
		<span class="mb-1.5 w-full border-b-2 border-dashed"></span>
		<span
			class="font-mono text-xs whitespace-nowrap text-muted-foreground uppercase group-hover:text-foreground md:text-sm"
		>
			{date}
		</span>
	</div>
	<div
		class="max-w-sm text-sm text-muted-foreground group-hover:text-foreground md:max-w-full md:text-base"
	>
		{description}
	</div>
</a>
