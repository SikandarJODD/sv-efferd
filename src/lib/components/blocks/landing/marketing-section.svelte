<script lang="ts">
	import { DecorIcon } from "$lib/components/ui/decor-icon";
	import MarketingCard from "./marketing-card.svelte";
	import { marketingCards } from "./marketing-cards";
</script>

<section class="relative">
	<div class="relative border-y border-border/80">
		<DecorIcon class="size-3.5 bg-background stroke-muted-foreground/70" position="top-left" />
		<DecorIcon class="size-3.5 bg-background stroke-muted-foreground/70" position="top-right" />
		<DecorIcon
			class="size-3.5 bg-background  stroke-muted-foreground/70"
			position="bottom-left"
		/>
		<DecorIcon
			class="size-3.5 bg-background stroke-muted-foreground/70"
			position="bottom-right"
		/>
		<div class="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
			<h2 class="text-sm font-semibold tracking-tight text-foreground">Marketing</h2>
		</div>
	</div>

	<div class="mx-auto max-w-7xl px-4 py-6 sm:px-6 sm:py-7 lg:px-8">
		<div class="grid grid-cols-1 gap-3.5 md:grid-cols-3 lg:grid-cols-4 lg:gap-5">
			{#each marketingCards as card (card.slug)}
				<MarketingCard
					title={card.title}
					href={card.href}
					countLabel={card.countLabel}
					previewComponent={card.previewComponent}
				/>
			{/each}
		</div>
	</div>
</section>
