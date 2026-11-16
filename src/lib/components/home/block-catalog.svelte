<script lang="ts">
	import { Badge } from "#lib/components/spell/badge/index.js";
	import { appShellCategories, marketingCategories } from "./categories.js";
	import CategoryCard from "./category-card.svelte";
</script>

<section class="relative">
	<div
		class="pointer-events-none absolute inset-x-0 top-0 z-10 mx-auto max-w-7xl -translate-y-full px-4 sm:px-6 lg:px-0"
	>
		<a
			class="pointer-events-auto relative -ml-2 block h-9.5 w-62"
			href="https://bhide.dev?utm_source=sv-efferd&utm_medium=referral&utm_campaign=sv-efferd"
			target="_blank"
			rel="noreferrer"
			aria-label="Bhide Svelte on GitHub"
		>
			<svg
				class="absolute inset-0 size-full overflow-visible text-border/80"
				viewBox="0 0 256 40"
				preserveAspectRatio="none"
				fill="none"
				aria-hidden="true"
			>
				<rect y="39" width="256" height="3" class="fill-background" />
				<path
					d="M0 40.5H18C28 40.5 36 33 36 23V15C36 7.5 42 2.5 49.5 2.5H206.5C214 2.5 220 7.5 220 15V23C220 33 228 40.5 238 40.5H256"
					stroke="currentColor"
					stroke-width="1"
					stroke-linecap="round"
					stroke-linejoin="round"
				/>
			</svg>

			<span
				class="absolute inset-x-8 top-2.5 flex items-center justify-center gap-1.5 text-[13px] whitespace-nowrap"
			>
				<span class="font-cursive text-muted-foreground">Port by</span>
				<span class="flex items-center gap-1">
					<img
						class="size-4.5 rounded-full object-cover"
						src="https://github.com/SikandarJODD.png?size=48"
						alt=""
						width="18"
						height="18"
					/>
					<span class="font-cursive font-medium text-foreground">Bhide Svelte</span>
				</span>
			</span>
		</a>
	</div>

	<div class="relative border-y border-border/80">
		<!-- <DecorIcon class="size-3.5 bg-background stroke-muted-foreground/70" position="top-left" />
		<DecorIcon class="size-3.5 bg-background stroke-muted-foreground/70" position="top-right" />
		<DecorIcon
			class="size-3.5 bg-background  stroke-muted-foreground/70"
			position="bottom-left"
		/>
		<DecorIcon
			class="size-3.5 bg-background stroke-muted-foreground/70"
			position="bottom-right"
		/> -->
		<div class="mx-auto max-w-7xl px-4 py-4 sm:px-6 sm:py-3 lg:px-8">
			<h2 class="text-sm font-medium text-primary md:text-base lg:font-semibold">
				Marketing
			</h2>
		</div>
	</div>

	<div class="mx-auto max-w-7xl px-4 py-6 sm:px-6 sm:py-7 lg:px-8">
		<div class="grid grid-cols-1 gap-3.5 md:grid-cols-3 lg:grid-cols-4 lg:gap-5">
			{#each marketingCategories as card (card.slug)}
				<CategoryCard
					title={card.title}
					href={card.href}
					countLabel={card.countLabel}
					previewComponent={card.previewComponent}
				/>
			{/each}
		</div>
	</div>
</section>

<section>
	<div class="relative border-y border-border/80">
		<!-- <DecorIcon class="size-3.5 bg-background stroke-muted-foreground/70" position="top-left" />
		<DecorIcon class="size-3.5 bg-background stroke-muted-foreground/70" position="top-right" />
		<DecorIcon
			class="size-3.5 bg-background  stroke-muted-foreground/70"
			position="bottom-left"
		/>
		<DecorIcon
			class="size-3.5 bg-background stroke-muted-foreground/70"
			position="bottom-right"
		/> -->
		<div class="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
			<div class="flex items-center gap-2">
				<h2 class="text-sm font-medium tracking-tight text-foreground lg:font-semibold">
					App Shell
				</h2>
				<Badge variant="cyan" class="font-cursive">New</Badge>
			</div>
		</div>
	</div>
	<div class="mx-auto max-w-7xl px-4 py-6 sm:px-6 sm:py-7 lg:px-8">
		<div class="grid grid-cols-1 gap-3.5 md:grid-cols-3 lg:grid-cols-4 lg:gap-5">
			{#each appShellCategories as card (card.slug)}
				<CategoryCard
					title={card.title}
					href={card.href}
					countLabel={card.countLabel}
					previewComponent={card.previewComponent}
				/>
			{/each}
		</div>
	</div>
</section>
