<script lang="ts">
	import { ArrowRight, PhoneCall } from "@lucide/svelte";
	import { Button } from "$lib/components/ui/button";
</script>

<section class="mx-auto w-full max-w-5xl overflow-hidden pt-16">
	<div aria-hidden="true" class="absolute inset-0 size-full overflow-hidden">
		<div
			class="absolute inset-0 isolate -z-10 bg-[radial-gradient(20%_80%_at_20%_0%,color-mix(in_oklab,var(--foreground)_10%,transparent),transparent)]"
		></div>
	</div>

	<div class="relative z-10 flex max-w-2xl flex-col gap-5 px-4">
		<a
			class="group flex w-fit animate-in items-center gap-3 rounded-sm border bg-card p-1 shadow-xs transition-all delay-500 duration-500 ease-out fill-mode-backwards slide-in-from-bottom-10 fade-in"
			href="#link"
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
			class="animate-in text-4xl leading-tight font-medium text-balance text-foreground delay-100 duration-500 ease-out fill-mode-backwards slide-in-from-bottom-10 fade-in md:text-5xl"
		>
			Building Digital Experiences That Drive Growth
		</h1>

		<p
			class="animate-in text-sm tracking-wider text-muted-foreground delay-200 duration-500 ease-out fill-mode-backwards slide-in-from-bottom-10 fade-in sm:text-lg md:text-xl"
		>
			We help brands scale faster through design, development
			<br />
			and strategic execution.
		</p>

		<div
			class="flex w-fit animate-in items-center justify-center gap-3 pt-2 delay-300 duration-500 ease-out fill-mode-backwards slide-in-from-bottom-10 fade-in"
		>
			<Button href="#book-a-call" variant="outline">
				<PhoneCall class="size-4" />
				Book a Call
			</Button>
			<Button href="#get-started">
				Get started
				<ArrowRight class="size-4" />
			</Button>
		</div>
	</div>

	<div class="relative">
		<div
			class="absolute -inset-x-20 inset-y-0 -translate-y-1/3 scale-120 rounded-full bg-[radial-gradient(ellipse_at_center,color-mix(in_oklab,var(--foreground)_10%,transparent),transparent,transparent)] blur-[50px]"
		></div>
		<div
			class="relative mt-8 -mr-56 animate-in overflow-hidden [mask-image:linear-gradient(to_bottom,black_0%,black_60%,transparent_100%)] px-2 delay-100 duration-1000 ease-out fill-mode-backwards slide-in-from-bottom-5 fade-in sm:mt-12 sm:mr-0 md:mt-20"
		>
			<div
				class="relative mx-auto max-w-5xl overflow-hidden rounded-lg border bg-background p-2 shadow-xl ring-1 inset-shadow-2xs ring-card inset-shadow-foreground/10 dark:inset-shadow-xs dark:inset-shadow-foreground/20"
			>
				<img
					alt="app screen"
					class="z-2 aspect-video rounded-lg border dark:hidden"
					height="1080"
					src="https://storage.efferd.com/screen/dashboard-light.webp"
					width="1920"
				/>
				<img
					alt="app screen"
					class="hidden aspect-video rounded-lg bg-background dark:block"
					height="1080"
					src="https://storage.efferd.com/screen/dashboard-dark.webp"
					width="1920"
				/>
			</div>
		</div>
	</div>
</section>
