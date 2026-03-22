<script lang="ts">
	import { cn } from "$lib/utils";

	type ChangelogDateBadgeProps = {
		date: string;
		class?: string;
	};

	let { date, class: className }: ChangelogDateBadgeProps = $props();
</script>

<div
	class={cn(
		"inline-flex w-fit items-center rounded-none border border-border/80 bg-secondary px-3 py-1.5 text-sm font-medium text-foreground shadow-none dark:bg-secondary/30",
		className
	)}
>
	{date}
</div>
