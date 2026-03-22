<script lang="ts">
	import { StripedPattern } from "$lib/components/magic/striped-pattern";
	import { Button } from "$lib/components/ui/button";
	import { DashedLines } from "$lib/components/ui/dashed-lines";
	import { DecorIcon } from "$lib/components/ui/decor-icon";
	import { Github } from "$lib/svgs";
</script>

<section class="relative py-10 sm:py-12 lg:py-12">
	<div aria-hidden="true" class="pointer-events-none absolute inset-0 overflow-hidden">
		<StripedPattern
			class="[mask-image:radial-gradient(circle_at_right,black,transparent_55%)] text-muted-foreground/30"
			direction="right"
		/>
		<div
			class="absolute inset-x-[12%] top-0 h-28 bg-[radial-gradient(circle_at_top,color-mix(in_oklab,var(--foreground)_8%,transparent)_0%,transparent_72%)] opacity-80 blur-2xl"
		></div>
	</div>

	<DecorIcon class="z-40 size-3.5 bg-background stroke-muted-foreground/80" position="top-left" />
	<DecorIcon
		class="z-40 size-3.5 bg-background stroke-muted-foreground/80"
		position="top-right"
	/>
	<DecorIcon
		class="z-40 size-3.5 bg-background stroke-muted-foreground/80"
		position="bottom-left"
	/>
	<DecorIcon
		class="z-40 size-3.5 bg-background stroke-muted-foreground/80"
		position="bottom-right"
	/>

	<div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="max-w-2xl text-left lg:max-w-3xl">
			<h1
				class="max-w-2xl text-xl font-semibold tracking-tight text-foreground sm:text-[2.55rem] sm:leading-[1.08] lg:text-3xl lg:leading-[1.04]"
			>
				Explore beautiful shadcn blocks
			</h1>

			<p class="mt-3 max-w-xl text-sm leading-6 text-muted-foreground sm:text-base">
				Discover beautifully crafted shadcn blocks, ready to copy, customize, and drop into
				your next project.
			</p>

			<div class="mt-5 flex flex-wrap items-center gap-2">
				<Button class="rounded-none" href="/blocks/hero" size="sm">Explore</Button>
				<Button
					class="rounded-none"
					href="https://github.com/SikandarJODD/sv-efferd"
					size="sm"
					target="_blank"
					variant="outline"
				>
					<Github class="size-3.5" />
					Star on GitHub
				</Button>
			</div>
		</div>
	</div>
</section>
