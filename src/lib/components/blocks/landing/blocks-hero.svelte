<script lang="ts">
	import { StripedPattern } from "$lib/components/magic/striped-pattern";
	import { Button } from "$lib/components/ui/button";
	import { DecorIcon } from "$lib/components/ui/decor-icon";
	import { Github } from "$lib/svgs";
	import { connectLine } from "$lib/utils/connect-line";
	import { mode } from "mode-watcher";
</script>

<section class="relative py-10 sm:py-12 lg:py-12">
	<div aria-hidden="true" class="pointer-events-none absolute inset-0 overflow-hidden">
		<StripedPattern
			class="mask-[radial-gradient(circle_at_right,black,transparent_55%)] dark:text-amber-500/30 text-amber-200"
			direction="right"
		/>
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

	<div
		class="relative mx-auto grid max-w-7xl grid-cols-1 px-4 sm:px-6 md:grid-cols-6 lg:px-8 lg:py-10"
	>
		<div class="max-w-2xl text-left md:col-span-4 lg:max-w-3xl">
			<h1
				class="max-w-2xl text-3xl font-semibold tracking-tight text-foreground sm:text-3xl sm:leading-[1.08] lg:text-4xl lg:leading-[1.04]"
			>
				Svelte Marketing Blocks
			</h1>

			<p class="mt-3 max-w-2xl text-base leading-6 text-muted-foreground sm:text-lg">
				<span class="font-mono">60+</span> UI & Marketing Blocks, built with Svelte, Tailwind
				CSS and Shadcn.
			</p>

			<div class="mt-5 flex flex-wrap items-center gap-2">
				<Button class="right-0 rounded-full border-none! outline-none" href="/blocks/app-shell">
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
		<div id="wrap" class="wrap relative hidden md:block md:col-span-2">
			<div
				id="product-pages"
				class="absolute -top-5 -left-16 w-fit translate-z-10 rounded-full border px-4 py-2 font-mono dark:border-emerald-400 dark:bg-emerald-900/10 dark:text-emerald-400 bg-emerald-50 z-50 text-emerald-500 border-emerald-500"
			>
				Product Pages
			</div>
			<div
				id="landing-pages"
				class="absolute top-14 left-1/2 w-fit rounded-full border px-4 py-2 font-mono dark:border-amber-400 dark:bg-amber-950/30 dark:text-amber-400 bg-amber-50 z-50 text-amber-500 border-amber-500"
			>
				Landing Pages
			</div>
			<div
				id="open-source"
				class="absolute top-28 left-4 w-fit rounded-full border px-4 py-2 font-mono dark:border-blue-400 dark:bg-blue-900/10 dark:text-blue-400 bg-blue-50 z-50 text-blue-500 border-blue-500"
			>
				Open Source
			</div>
			<svg
				style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; pointer-events: none; overflow: visible;"
			>
				<path
					use:connectLine={{
						from: {
							id: "product-pages",
							position: "right",
							offset: 20,
							outset: 10
						},
						to: {
							id: "landing-pages",
							position: "left",
							offset: 21.5,
							outset: 45
						},
						container: "wrap",
						radius: 50,
						stroke: mode.current === "dark" ? "#facc15" : "#f59e0b",
						strokeWidth: 1.4
					}}
				/>
				<path
					use:connectLine={{
						from: {
							id: "landing-pages",
							position: "bottom",
							offset: 80,
							outset: 0
						},
						to: {
							id: "open-source",
							position: "right",
							offset: 20,
							outset: 0
						},
						container: "wrap",
						radius: 50,
						stroke: mode.current === "dark" ? "#3b82f6" : "#60a5fa",
						strokeWidth: 1.4
					}}
					stroke-dasharray="4 4"
				/>
				<path
					use:connectLine={{
						from: {
							id: "product-pages",
							position: "bottom",
							offset: 35,
							outset: 0
						},
						to: {
							id: "open-source",
							position: "left",
							offset: 20,
							outset: 0
						},
						container: "wrap",
						radius: 50,
						stroke: mode.current === "dark" ? "#10b981" : "#34d399",
						strokeWidth: 1.4
					}}
					stroke-dasharray="4 4"
				/>
			</svg>
		</div>
	</div>
</section>
