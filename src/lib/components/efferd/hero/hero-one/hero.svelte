<script lang="ts">
	import { ArrowRight, PhoneCall, Rocket } from "@lucide/svelte";
	import { Button } from "$lib/components/ui/button";
</script>

<section class="relative -top-14 mx-auto w-full max-w-5xl px-4">
	<div
		aria-hidden="true"
		class="absolute inset-0 isolate hidden overflow-hidden contain-strict lg:block"
	>
		<div
			class="absolute inset-0 top-0 isolate -z-20 bg-[radial-gradient(35%_80%_at_49%_0%,color-mix(in_oklab,var(--foreground)_8%,transparent),transparent)] contain-strict"
		></div>
	</div>

	<div
		aria-hidden="true"
		class="absolute inset-0 mx-auto hidden min-h-screen w-full max-w-5xl lg:block"
	>
		<div
			class="absolute inset-y-0 left-0 z-10 h-full w-px bg-foreground/15 [mask-image:linear-gradient(to_bottom,transparent_0%,black_20%,black_80%,transparent_100%)]"
		></div>
		<div
			class="absolute inset-y-0 right-0 z-10 h-full w-px bg-foreground/15 [mask-image:linear-gradient(to_bottom,transparent_0%,black_20%,black_80%,transparent_100%)]"
		></div>
	</div>

	<div class="relative flex flex-col items-center justify-center gap-5 pt-46 pb-10">
		<div aria-hidden="true" class="absolute inset-0 top-14 -z-10 size-full overflow-hidden">
			<div
				class="absolute inset-y-0 left-4 w-px bg-linear-to-b from-transparent via-border to-border md:left-4"
			></div>
			<div
				class="absolute inset-y-0 right-4 w-px bg-linear-to-b from-transparent via-border to-border md:right-4"
			></div>
			<div
				class="absolute inset-y-0 left-8 w-px bg-linear-to-b from-transparent via-border/50 to-border/50 md:left-12"
			></div>
			<div
				class="absolute inset-y-0 right-8 w-px bg-linear-to-b from-transparent via-border/50 to-border/50 md:right-12"
			></div>
		</div>

		<a
			class="group mx-auto flex w-fit animate-in items-center gap-3 rounded-full border bg-card px-3 py-1 shadow transition-all delay-500 duration-500 ease-out fill-mode-backwards slide-in-from-bottom-10 fade-in"
			href="/"
		>
			<Rocket class="size-3 text-muted-foreground" />
			<span class="text-xs">shipped new features!</span>
			<span class="block h-5 border-l"></span>
			<ArrowRight class="size-3 duration-150 ease-out group-hover:translate-x-1" />
		</a>

		<h1
			class="animate-in text-center text-4xl tracking-tight text-balance delay-100 duration-500 ease-out fill-mode-backwards slide-in-from-bottom-10 [text-shadow:0_0_50px_color-mix(in_oklab,var(--foreground)_20%,transparent)] fade-in md:text-5xl lg:text-6xl"
		>
			Building Teams Help
			<br />
			You Scale and Lead
		</h1>

		<p
			class="mx-auto max-w-md animate-in text-center text-base tracking-wider text-foreground/80 delay-200 duration-500 ease-out fill-mode-backwards slide-in-from-bottom-10 fade-in sm:text-lg md:text-xl"
		>
			Conecting you with world-class talent
			<br />
			to scale, innovate and lead
		</p>

		<div
			class="flex animate-in flex-row flex-wrap items-center justify-center gap-3 pt-2 delay-300 duration-500 ease-out fill-mode-backwards slide-in-from-bottom-10 fade-in"
		>
			<Button class="rounded-full" href="/" size="lg" variant="secondary">
				<PhoneCall class="size-4" />
				Book a Call
			</Button>
			<Button class="rounded-full" href="/" size="lg">
				Get started
				<ArrowRight class="size-4" />
			</Button>
		</div>
	</div>
</section>
