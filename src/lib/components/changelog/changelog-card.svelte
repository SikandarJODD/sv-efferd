<script lang="ts">
	import { cn } from "$lib/utils";
	import { Check } from "@lucide/svelte";
	import ChangelogChip from "./changelog-chip.svelte";
	import ChangelogDateBadge from "./changelog-date-badge.svelte";
	import type { ChangelogEntry } from "./data";

	type ChangelogCardProps = {
		entry: ChangelogEntry;
		class?: string;
	};

	let { entry, class: className }: ChangelogCardProps = $props();
</script>

<article
	class={cn(
		"relative grid gap-5 px-5 py-8 sm:px-8 sm:py-10 md:grid-cols-[10.5rem_minmax(0,1fr)] md:gap-8 md:px-12 md:py-8",
		className
	)}
>
	<div class="sticky top-6 self-start md:pt-0.5">
		<ChangelogDateBadge date={entry.date} />
	</div>

	<div class="min-w-0">
		<h2 class="text-xl font-semibold tracking-tight text-foreground sm:text-xl">
			{entry.title}
		</h2>

		{#if entry.description}
			<p
				class="mt-1 max-w-2xl text-base leading-7 text-muted-foreground sm:text-base sm:leading-8"
			>
				{entry.description}
			</p>
		{/if}

		{#if entry.bullets?.length}
			<ul class="mt-5 space-y-3">
				{#each entry.bullets as bullet}
					<li
						class="flex items-start gap-3 text-sm leading-7 text-foreground sm:text-base"
					>
						<Check class="mt-1 size-4 shrink-0 text-foreground" />
						<span>{bullet}</span>
					</li>
				{/each}
			</ul>
		{/if}

		{#if entry.chips?.length}
			<div class="mt-5 flex flex-wrap gap-2">
				{#each entry.chips as chip}
					<ChangelogChip {...chip} />
				{/each}
			</div>
		{/if}
	</div>
</article>
