<script lang="ts">
	import { page } from "$app/state";
	import {
		blockCategories,
		type BlockCategory,
		type BlockCategoryBadge
	} from "$lib/blocks/categories";
	import ScrollArea from "$lib/components/ui/scroll-area/scroll-area.svelte";
	import { cn } from "$lib/utils";
	import { Badge } from "../spell/badge";
	let isActive = (slug: string) => {
		return page.url.pathname === `/blocks/${slug}`;
	};

	const categories: readonly BlockCategory[] = blockCategories;
</script>

<div class="w-full border-b border-dashed">
	<ScrollArea orientation="horizontal" fade={false} class="w-full" scrollbarXClasses="hidden">
		<div class="mx-auto w-fit max-w-7xl">
			<ul
				class="relative flex h-12 min-w-max snap-x snap-mandatory items-center gap-6 px-4 sm:px-6 lg:gap-4"
			>
				{#each categories as category (category.slug)}
					<li
						class={cn(
							"flex h-full snap-start items-center border-b border-transparent transition-all duration-300",
							isActive(category.slug) &&
								"border-b border-emerald-500 dark:border-emerald-400"
						)}
					>
						<a
							href="/blocks/{category.slug}"
							class={cn(
								"relative flex h-7 w-fit items-center gap-2 rounded-sm px-1 text-[13px] text-nowrap text-muted-foreground transition-all duration-300 hover:bg-muted hover:text-foreground lg:-mx-2 lg:px-3 dark:text-muted-foreground",
								isActive(category.slug) && "text-emerald-500! dark:text-emerald-400 hover:dark:bg-emerald-900/30 hover:bg-emerald-200/40"
							)}
						>
							<span class="block w-max text-nowrap capitalize">{category.label}</span>
							{#if category.badge === "new"}
								<span
									aria-hidden="true"
									class="absolute -inset-e-0.5 -top-0.5 size-2 rounded-full bg-emerald-500 outline-2 outline-background"
								></span>
							{/if}
						</a>
					</li>
				{/each}
			</ul>
		</div>
	</ScrollArea>
</div>
