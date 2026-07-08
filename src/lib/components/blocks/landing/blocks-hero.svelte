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
				class="max-w-2xl text-xl font-semibold tracking-tight text-foreground sm:text-3xl sm:leading-[1.08] lg:text-4xl lg:leading-[1.04]"
			>
				Svelte Marketing Blocks
			</h1>

			<p class="mt-3 max-w-2xl text-sm leading-6 text-muted-foreground sm:text-lg">
				<span class="font-mono">60+</span> UI & Marketing Blocks, built with Svelte, Tailwind
				CSS and Shadcn.
			</p>

			<div class="mt-5 flex flex-wrap items-center gap-2">
				<Button class="right-0 rounded-full border-none! outline-none" href="/blocks/hero">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="20"
						height="20"
						viewBox="0 0 20 20"
						><g fill="currentColor"
							><circle
								cx="14.5"
								cy="8.5"
								r="2.5"
								fill="currentColor"
								stroke="currentColor"
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
							></circle><rect
								x="5"
								y="12"
								width="5"
								height="5"
								rx="1"
								ry="1"
								stroke="currentColor"
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								fill="currentColor"
							></rect><path
								d="m5.1889,3.7146l-2.1169,3.5282c-.2.3333.0401.7572.4287.7572h4.2338c.3886,0,.6287-.424.4287-.7572l-2.1169-3.5282c-.1942-.3237-.6633-.3237-.8575,0Z"
								stroke="currentColor"
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								fill="currentColor"
							></path></g
						></svg
					>
					Explore Blocks</Button
				>
				<Button
					class="rounded-full border border-muted"
					href="https://github.com/SikandarJODD/sv-efferd"
					target="_blank"
					variant="secondary"
				>
					<Github class="size-3.5" />
					Star on GitHub
				</Button>
			</div>
		</div>
	</div>
</section>
