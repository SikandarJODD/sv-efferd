<script lang="ts">
	import { Button } from "$lib/components/ui/button";
	import { DecorIcon } from "$lib/components/ui/decor-icon";
	import { Github } from "$lib/svgs";
	import { ArrowRight, Rocket } from "@lucide/svelte";
	import { landingHero } from "./config";
	import { DashedLine } from "../ui/dashed-line";
	import { BorderSeparator } from "../ui/border-seperator";
	import { DashedLines } from "../ui/dashed-lines";
</script>

<section
	class="relative flex min-h-[calc(100vh-4rem)] items-center justify-center border-b border-border/80 px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-32"
	id="blocks"
>
	<div aria-hidden="true" class="pointer-events-none absolute inset-0">
		<div
			class="absolute top-1/2 left-1/2 size-[30rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,color-mix(in_oklab,var(--foreground)_12%,transparent)_0%,transparent_70%)] blur-3xl"
		></div>
		<div
			class="absolute inset-x-[0%] inset-y-[0%] bg-[radial-gradient(circle_at_center,color-mix(in_oklab,var(--foreground)_6%,transparent)_0%,transparent_75%)] opacity-70"
		></div>
	</div>
	<DashedLines
		class="absolute bottom-0 h-12 mask-[linear-gradient(to_bottom,transparent,var(--muted-foreground),var(--muted-foreground))] stroke-muted-foreground/50 dark:stroke-muted-foreground/30"
	/>

	<DecorIcon class="z-40 size-4 bg-background stroke-muted-foreground/80" position="top-left" />
	<DecorIcon class="z-40 size-4 bg-background stroke-muted-foreground/80" position="top-right" />
	<DecorIcon
		class="z-40 size-4 bg-background stroke-muted-foreground/80"
		position="bottom-left"
	/>
	<DecorIcon
		class="z-40 size-4 bg-background stroke-muted-foreground/80"
		position="bottom-right"
	/>

	<div class=" relative z-10 mx-auto flex flex-col items-center text-center">
		<a
			class="group mx-auto flex w-fit items-center gap-3 rounded-full border bg-transparent py-1 pr-1 pl-3 shadow-lg backdrop-blur-lg"
			href="/blocks"
			id="link"
		>
			<Rocket class="size-3 text-muted-foreground" />
			<span class="font-mono text-sm">60 New Blocks</span>
			<span class="block h-5 border-l"></span>
			<span class="flex items-center justify-center rounded-full bg-background p-2">
				<ArrowRight
					class="size-3 -rotate-45 rounded-full duration-150 ease-out group-hover:rotate-0"
				/>
			</span>
		</a>

		<h1
			class="mt-8 max-w-4xl text-4xl font-semibold tracking-normal text-balance sm:text-5xl lg:text-6xl"
		>
			{landingHero.title}
		</h1>

		<p
			class="mt-6 max-w-2xl text-base leading-7 text-pretty text-muted-foreground sm:text-lg sm:leading-8"
		>
			{landingHero.description}
		</p>

		<div class="mt-8 flex flex-col items-center gap-3 sm:flex-row">
			<Button class="rounded-none" href={landingHero.primaryCta.href} size="lg">
				<span>{landingHero.primaryCta.label}</span>
			</Button>

			<Button
				class="rounded-none"
				variant="outline"
				href={landingHero.secondaryCta.href}
				size="lg"
			>
				<Github class="size-4" />
				<span>{landingHero.secondaryCta.label}</span>
			</Button>
		</div>
	</div>
</section>
