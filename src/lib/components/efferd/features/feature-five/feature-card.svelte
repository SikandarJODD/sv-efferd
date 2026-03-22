<script lang="ts">
	import { GridPattern } from "$lib/components/ui/grid-pattern";
	import { cn } from "$lib/utils";
	import type { Icon } from "@lucide/svelte";
	import type { HTMLAttributes } from "svelte/elements";

	type Feature = {
		title: string;
		icon: typeof Icon;
		description: string;
	};

	type Props = HTMLAttributes<HTMLDivElement> & {
		feature: Feature;
	};

	let { feature, class: className, ...props }: Props = $props();
	let FeatureIcon: typeof Icon = $derived(feature.icon);
</script>

<div class={cn("relative overflow-hidden bg-background p-6", className)} {...props}>
	<div
		class="pointer-events-none absolute top-0 left-1/2 -mt-2 -ml-20 size-full mask-[radial-gradient(farthest-side_at_top,white,transparent)]"
	>
		<GridPattern
			class="absolute inset-0 size-full stroke-foreground/20"
			height={40}
			width={40}
			x={20}
		/>
	</div>

	<div class="[&_svg]:size-6 [&_svg]:text-foreground/75">
		<FeatureIcon />
	</div>
	<h3 class="mt-10 text-sm md:text-base">{feature.title}</h3>
	<p class="relative z-20 mt-2 text-xs font-light text-muted-foreground">
		{feature.description}
	</p>
</div>
