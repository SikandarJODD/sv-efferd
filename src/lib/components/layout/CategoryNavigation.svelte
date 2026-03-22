<script lang="ts">
	import { page } from "$app/state";
	import { blockCategories } from "$lib/blocks/categories";
	import ScrollArea from "$lib/components/ui/scroll-area/scroll-area.svelte";
	import { cn } from "$lib/utils";

	let isActive = (slug: string) => {
		return page.url.pathname === `/blocks/${slug}`;
	};
</script>

<div class="w-full border-b border-dashed">
	<ScrollArea orientation="horizontal" fade={false} class="w-full" scrollbarXClasses="hidden">
		<div class="mx-auto w-fit max-w-7xl">
			<ul
				class="relative flex h-12 min-w-max snap-x snap-mandatory items-center gap-6 px-4 sm:px-6 lg:gap-4"
			>
				{#each blockCategories as category}
					<li
						class={cn(
							"flex h-full snap-start items-center border-b-2 border-transparent transition-all duration-300",
							isActive(category.slug) && "border-b border-primary/60"
						)}
					>
						<a
							href="/blocks/{category.slug}"
							class={cn(
								isActive(category.slug) && "text-primary!",
								"flex h-7 w-fit items-center rounded-sm px-1 text-[13px] text-nowrap text-muted-foreground transition-all duration-300 hover:bg-muted hover:text-foreground lg:-mx-2 lg:px-3 dark:text-muted-foreground"
							)}
						>
							<span class="block w-max text-nowrap capitalize">{category.label}</span>
						</a>
					</li>
				{/each}
			</ul>
		</div>
	</ScrollArea>
</div>
