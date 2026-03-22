<script lang="ts">
	import { cn } from "$lib/utils";
	import { ActivityIcon, GlobeIcon, ShieldCheckIcon, ZapIcon, type Icon } from "@lucide/svelte";

	type Feature = {
		title: string;
		icon: typeof Icon;
		description: string;
	};

	const features: Feature[] = [
		{
			title: "Lightning Fast",
			icon: ZapIcon,
			description: "Blazing fast edge performance."
		},
		{
			title: "Secure by Design",
			icon: ShieldCheckIcon,
			description: "Security by design, zero config."
		},
		{
			title: "Real-time Sync",
			icon: ActivityIcon,
			description: "Real-time sync across devices."
		},
		{
			title: "Global Scale",
			icon: GlobeIcon,
			description: "Instant global deployment."
		}
	];
</script>

<div class="mx-auto grid max-w-5xl grid-cols-2 gap-4 py-4 md:grid-cols-4">
	{#each features as feature, index (feature.title)}
		{@const FeatureIcon = feature.icon}
		<div
			class={cn(
				"relative flex flex-col items-center justify-center p-2",
				"after:absolute after:inset-y-0 after:right-0 after:h-full after:w-px after:bg-linear-to-b after:from-foreground/6 after:via-foreground/25 after:to-foreground/6",
				"[&_svg]:size-6 [&_svg]:text-muted-foreground",
				{
					"after:hidden": index === features.length - 1,
					"after:hidden after:md:block": index === 1
				}
			)}
		>
			<FeatureIcon />
			<h3 class="mt-4 text-center text-xs font-medium md:text-sm lg:text-base">
				{feature.title}
			</h3>
			<p class="mt-1 text-center text-[10px] text-muted-foreground md:text-xs">
				{feature.description}
			</p>
		</div>
	{/each}
</div>
