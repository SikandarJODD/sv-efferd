<script lang="ts">
	import { ArrowRightIcon, AtSignIcon } from "@lucide/svelte";
	import { Button } from "$lib/components/ui/button";
	import { FullWidthDivider } from "$lib/components/ui/full-width-divider";
	import { InputGroup, InputGroupAddon, InputGroupInput } from "$lib/components/ui/input-group";

	const avatars = [
		{
			alt: "Avatar 01",
			src: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=72"
		},
		{
			alt: "Avatar 02",
			src: "https://images.unsplash.com/photo-1485206412256-701ccc5b93ca?q=80&w=72"
		},
		{
			alt: "Avatar 03",
			src: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=72"
		},
		{
			alt: "Avatar 04",
			src: "https://images.unsplash.com/photo-1610216705422-caa3fcb6d158?q=80&w=72"
		}
	];
</script>

<div
	class="relative mx-auto flex w-full max-w-3xl flex-col justify-between gap-y-6 border-x bg-secondary/80 px-2 py-8 md:px-4 dark:bg-secondary/40"
>
	<FullWidthDivider position="top" />

	<div class="space-y-1">
		<h2 class="text-center text-2xl font-semibold tracking-tight md:text-4xl">
			Subscripe to our newsletter
		</h2>
		<p class="text-center text-sm text-balance text-muted-foreground md:text-base">
			Get the latest updates and insights delivered right to your inbox.
		</p>
	</div>

	<div class="flex items-center justify-center gap-2">
		<InputGroup class="max-w-[280px] bg-card">
			<InputGroupInput placeholder="Enter your email" />
			<InputGroupAddon>
				<AtSignIcon data-icon="inline-start" />
			</InputGroupAddon>
		</InputGroup>

		<Button>
			Subscribe
			<ArrowRightIcon data-icon="inline-end" />
		</Button>
	</div>

	<div class="flex items-center justify-center gap-2">
		<p class="text-sm text-muted-foreground">
			Written by <span class="font-medium text-foreground">real humans</span> (we swear).
		</p>
		<div class="flex -space-x-[0.45rem] *:rounded-full *:ring-2 *:ring-background">
			{#each avatars as avatar}
				<img
					alt={avatar.alt}
					height="24"
					src={avatar.src}
					width="24"
					class="size-6 object-cover"
				/>
			{/each}
		</div>
	</div>

	<FullWidthDivider position="bottom" />
</div>
