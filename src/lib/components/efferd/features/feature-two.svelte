<script lang="ts">
	import { DecorIcon } from "$lib/components/ui/decor-icon";
	import { DashedLine } from "$lib/components/ui/dashed-line";
	import { CommandIcon, HistoryIcon, SquareDashedIcon, type Icon } from "@lucide/svelte";

	type Feature = {
		title: string;
		icon: typeof Icon;
		description: string;
	};

	const features: Feature[] = [
		{
			title: "Auto-Save Everything",
			icon: HistoryIcon,
			description: "Write without worry, every time."
		},
		{
			title: "Drag-and-Drop Blocks",
			icon: SquareDashedIcon,
			description: "Rearrange sections with the block editor."
		},
		{
			title: "Keyboard Shortcuts",
			icon: CommandIcon,
			description: "Speed up your workflow with quick keys."
		}
	];

	const frameLines = [
		"-top-[1.5px] right-3 left-3",
		"top-3 -right-[1.5px] bottom-3",
		"top-3 bottom-3 -left-[1.5px]",
		"right-3 -bottom-[1.5px] left-3"
	] as const;
</script>

<div class="mx-auto max-w-5xl">
	<h2 class="mb-5 text-center text-2xl font-medium md:text-3xl">Ensuring your speedy workflow</h2>

	<div class="relative">
		<DecorIcon class="size-6 stroke-border stroke-2" position="top-left" />
		<DecorIcon class="size-6 stroke-border stroke-2" position="top-right" />
		<DecorIcon class="size-6 stroke-border stroke-2" position="bottom-left" />
		<DecorIcon class="size-6 stroke-border stroke-2" position="bottom-right" />

		{#each frameLines as lineClass}
			<DashedLine class={lineClass} />
		{/each}

		<div class="grid grid-cols-1 md:grid-cols-3">
			{#each features as feature (feature.title)}
				{@const FeatureIcon = feature.icon}
				<div
					class="group relative p-8 [&_svg]:size-7 [&_svg]:mask-b-from-0% [&_svg]:text-muted-foreground"
				>
					<FeatureIcon />
					<h3 class="mt-4 text-lg font-medium">{feature.title}</h3>
					<p class="text-sm leading-relaxed text-muted-foreground">
						{feature.description}
					</p>

					<DashedLine
						class="right-5 bottom-0 left-5 group-last:hidden md:top-5 md:right-0 md:bottom-5 md:left-full"
					/>
				</div>
			{/each}
		</div>
	</div>
</div>
