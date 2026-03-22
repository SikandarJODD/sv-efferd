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
	<div class="mx-auto w-fit">
		<ul
			class="relative mx-auto -mb-px flex h-12 snap-x snap-proximity scroll-px-6 items-center gap-8 overflow-x-auto overflow-y-hidden px-6 lg:scroll-px-2 lg:gap-4"
		>
			{#each blockCategories as category}
				<li
					class={cn(
						"flex h-full snap-start items-center border-b border-b-transparent",
						isActive(category.slug) && "border-primary"
					)}
				>
					<a
						href="/blocks/{category.slug}"
						class={cn(
							isActive(category.slug) && "text-primary!",
							"flex h-7 w-fit items-center rounded-sm px-1 text-[13px] text-nowrap text-zinc-700 transition-all duration-300 hover:bg-muted hover:text-foreground lg:-mx-2 lg:px-3 dark:text-muted-foreground"
						)}
					>
						<span class="block w-max text-nowrap capitalize">{category.label}</span>
					</a>
				</li>
			{/each}
		</ul>
	</div>
</div>
