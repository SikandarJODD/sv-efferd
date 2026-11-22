<script lang="ts" module>
	export type DocsPaginationItem = {
		title: string;
		href: string;
	};
</script>

<script lang="ts">
	import { Button } from "#lib/components/ui/button/index.js";
	import { cn } from "#lib/utils.js";
	import ArrowLeftIcon from "@lucide/svelte/icons/arrow-left";
	import ArrowRightIcon from "@lucide/svelte/icons/arrow-right";
	import type { HTMLAttributes } from "svelte/elements";

	type Props = HTMLAttributes<HTMLElement> & {
		previous?: DocsPaginationItem;
		next?: DocsPaginationItem;
	};

	let { previous, next, class: className, ...restProps }: Props = $props();
</script>

<nav
	aria-label="Documentation pages"
	class={cn("border-t border-border pt-5", className)}
	{...restProps}
>
	<div class="grid grid-cols-2 gap-2">
		{#if previous}
			<Button
				href={previous.href}
				rel="prev"
				variant="ghost"
				class="h-auto min-w-0 justify-start gap-2 px-2 py-2 text-left whitespace-normal"
			>
				<ArrowLeftIcon class="size-4" aria-hidden="true" />
				<span class="min-w-0">
					<span class="block text-xs font-normal text-muted-foreground">Previous</span>
					<span class="block truncate">{previous.title}</span>
				</span>
			</Button>
		{:else}
			<span aria-hidden="true"></span>
		{/if}

		{#if next}
			<Button
				href={next.href}
				rel="next"
				variant="ghost"
				class="h-auto min-w-0 justify-end gap-2 px-2 py-2 text-right whitespace-normal"
			>
				<span class="min-w-0">
					<span class="block text-xs font-normal text-muted-foreground">Next</span>
					<span class="block truncate">{next.title}</span>
				</span>
				<ArrowRightIcon class="size-4" aria-hidden="true" />
			</Button>
		{/if}
	</div>
</nav>
