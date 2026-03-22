<script lang="ts">
	import { StripedPattern } from "$lib/components/magic/striped-pattern";
	import { DashedLines } from "$lib/components/ui/dashed-lines";
	import { DecorIcon } from "$lib/components/ui/decor-icon";
</script>

<section class="relative border-b border-border/80 px-4 py-10 sm:px-6 sm:py-12 lg:px-8 lg:py-14">
	<div aria-hidden="true" class="pointer-events-none absolute inset-0 overflow-hidden">
		<StripedPattern
			class="[mask-image:radial-gradient(circle_at_top,black,transparent_75%)] text-border/70 opacity-40"
			direction="right"
		/>
		<div
			class="absolute inset-x-[12%] top-0 h-28 bg-[radial-gradient(circle_at_top,color-mix(in_oklab,var(--foreground)_8%,transparent)_0%,transparent_72%)] opacity-80 blur-2xl"
		></div>
	</div>

	<DecorIcon class="size-3.5 bg-background stroke-muted-foreground/70" position="top-left" />
	<DecorIcon class="size-3.5 bg-background stroke-muted-foreground/70" position="top-right" />
	<DecorIcon class="size-3.5 bg-background stroke-muted-foreground/70" position="bottom-left" />
	<DecorIcon class="size-3.5 bg-background stroke-muted-foreground/70" position="bottom-right" />

	<div class="relative mx-auto max-w-3xl">
		<h1
			class="max-w-2xl text-3xl font-semibold tracking-tight text-balance text-foreground sm:text-4xl lg:text-[3.25rem] lg:leading-[1.02]"
		>
			Explore beautiful Svelte Efferd blocks
		</h1>

		<p class="mt-3 max-w-xl text-sm leading-6 text-muted-foreground sm:text-[15px]">
			Discover carefully crafted marketing blocks for Svelte projects, ready to copy,
			customize, and ship.
		</p>
	</div>

	<div aria-hidden="true" class="pointer-events-none absolute inset-x-0 bottom-0 h-12">
		<DashedLines
			class="[mask-image:linear-gradient(to_bottom,transparent,black)] stroke-border/80 opacity-70"
			height={52}
			width={24}
			x={12}
		/>
	</div>
</section>
