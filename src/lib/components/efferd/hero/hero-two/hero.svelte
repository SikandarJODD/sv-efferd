<script lang="ts">
	import { ArrowRight, PhoneCall } from "@lucide/svelte";
	import { Button } from "$lib/components/ui/button";
	import { DecorIcon } from "$lib/components/ui/decor-icon";
	import { FullWidthDivider } from "$lib/components/ui/full-width-divider";
</script>

<section>
	<div
		class="relative flex flex-col items-center justify-center gap-5 px-4 py-12 md:px-4 md:py-24 lg:py-28"
	>
		<div aria-hidden="true" class="absolute inset-0 -z-10 size-full overflow-hidden">
			<div
				class="absolute -inset-x-20 inset-y-0 z-0 rounded-full bg-[radial-gradient(ellipse_at_center,color-mix(in_oklab,var(--foreground)_10%,transparent),transparent,transparent)] blur-[50px]"
			></div>
			<div
				class="absolute inset-y-0 left-4 w-px bg-linear-to-b from-transparent via-border to-border md:left-8"
			></div>
			<div
				class="absolute inset-y-0 right-4 w-px bg-linear-to-b from-transparent via-border to-border md:right-8"
			></div>
			<div
				class="absolute inset-y-0 left-8 w-px bg-linear-to-b from-transparent via-border/50 to-border/50 md:left-12"
			></div>
			<div
				class="absolute inset-y-0 right-8 w-px bg-linear-to-b from-transparent via-border/50 to-border/50 md:right-12"
			></div>
		</div>

		<a
			class="group mx-auto flex w-fit animate-in items-center gap-3 rounded-sm border bg-card p-1 shadow transition-all delay-500 duration-500 ease-out fill-mode-backwards slide-in-from-bottom-10 fade-in"
			href="/"
		>
			<div class="rounded-xs border bg-card px-1.5 py-0.5 shadow-sm">
				<p class="font-mono text-xs">NOW</p>
			</div>

			<span class="text-xs">accepting new client projects</span>
			<span class="block h-5 border-l"></span>

			<div class="pr-1">
				<ArrowRight
					class="size-3 -translate-x-0.5 duration-150 ease-out group-hover:translate-x-0.5"
				/>
			</div>
		</a>

		<h1
			class="max-w-2xl animate-in text-center text-3xl text-balance text-foreground delay-100 duration-500 ease-out fill-mode-backwards slide-in-from-bottom-10 fade-in md:text-5xl lg:text-6xl"
		>
			Building Digital Experiences That Drive Growth
		</h1>

		<p
			class="animate-in text-center text-sm tracking-wider text-muted-foreground delay-200 duration-500 ease-out fill-mode-backwards slide-in-from-bottom-10 fade-in sm:text-lg"
		>
			We help brands scale faster through design,
			<br />
			development and strategic execution.
		</p>

		<div
			class="flex w-fit animate-in items-center justify-center gap-3 pt-2 delay-300 duration-500 ease-out fill-mode-backwards slide-in-from-bottom-10 fade-in"
		>
			<Button href="/" variant="outline">
				<PhoneCall class="size-4" />
				Book a Call
			</Button>
			<Button href="/">
				Get started
				<ArrowRight class="size-4" />
			</Button>
		</div>
	</div>

	<div class="relative">
		<DecorIcon class="size-4" position="top-left" />
		<DecorIcon class="size-4" position="top-right" />
		<DecorIcon class="size-4" position="bottom-left" />
		<DecorIcon class="size-4" position="bottom-right" />

		<FullWidthDivider class="-top-px" />
		<div class="overflow-hidden *:pointer-events-none *:aspect-video *:select-none">
			<img
				alt="light app screen"
				class="dark:hidden"
				height="auto"
				src="https://storage.efferd.com/screen/dashboard-light.webp"
				width="auto"
			/>
			<img
				alt="dark app screen"
				class="hidden dark:block"
				height="auto"
				src="https://storage.efferd.com/screen/dashboard-dark.webp"
				width="auto"
			/>
		</div>
		<FullWidthDivider class="-bottom-px" />
	</div>
</section>
