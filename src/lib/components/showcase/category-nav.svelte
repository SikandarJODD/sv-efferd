<script lang="ts">
	import { resolve } from "$app/paths";
	import { page } from "$app/state";
	import { blockCategories } from "#lib/blocks/categories.js";
	import ScrollArea from "#lib/components/ui/scroll-area/scroll-area.svelte";
	import { cn } from "#lib/utils.js";
	import { Badge } from "../spell/badge";
	let isActive = (slug: string) => {
		return page.url.pathname === `/blocks/${slug}`;
	};

	const categories = blockCategories;
</script>

<div class="w-full border-b border-dashed">
	<ScrollArea orientation="horizontal" fade={false} class="w-full" scrollbarXClasses="hidden">
		<div class="mx-auto w-fit max-w-7xl">
			<ul
				class="relative flex min-w-max snap-x snap-mandatory items-center gap-0 px-4 py-3 sm:px-6 lg:gap-4"
			>
				{#each categories as category (category.slug)}
					<li class={cn("flex h-full items-center")}>
						<a
							href={resolve(`blocks/${category.slug}`)}
							class={cn(
								"relative flex h-6.5 w-fit items-center gap-2 rounded-full px-3 text-[13px] text-nowrap text-primary transition-all duration-300 hover:bg-muted hover:text-primary! lg:-mx-2 lg:px-3 dark:text-primary/80",
								isActive(category.slug) &&
									"bg-emerald-50 text-emerald-500! hover:bg-emerald-200/40 hover:text-emerald-500! dark:bg-emerald-700/20 dark:text-emerald-400 hover:dark:bg-emerald-900/30"
							)}
							data-s-event={"category:" + category.slug}
						>
							<span class="block w-max text-nowrap capitalize">{category.label}</span>
						</a>
					</li>
				{/each}
			</ul>
		</div>
	</ScrollArea>
</div>
