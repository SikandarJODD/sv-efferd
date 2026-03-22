<script lang="ts">
	import { FullWidthDivider } from "$lib/components/ui/full-width-divider";
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
			description: "Blazing fast performance with edge network optimizations."
		},
		{
			title: "Secure by Design",
			icon: ShieldCheckIcon,
			description: "Enterprise-grade security, zero configuration required."
		},
		{
			title: "Real-time Sync",
			icon: ActivityIcon,
			description: "Real-time data sync across all devices efficiently."
		},
		{
			title: "Global Scale",
			icon: GlobeIcon,
			description: "Instant global deployment to 35+ regions worldwide."
		}
	];
</script>

<div class="mx-auto min-h-screen w-full max-w-5xl place-content-center space-y-12 border-x py-4">
	<div class="relative grid grid-cols-1 gap-px bg-border md:grid-cols-2 lg:grid-cols-4">
		<FullWidthDivider position="top" />

		{#each features as feature (feature.title)}
			{@const FeatureIcon = feature.icon}
			<div
				class={cn(
					"relative flex flex-col justify-between overflow-hidden bg-background p-4 md:p-6"
				)}
			>
				<div
					class="relative z-10 flex items-center pt-4 pb-6 [&_svg]:size-5 [&_svg]:text-primary"
				>
					<FeatureIcon />
				</div>

				<div class="relative z-10 space-y-2">
					<h3 class="text-lg font-medium text-foreground">{feature.title}</h3>
					<p class="text-xs leading-relaxed text-muted-foreground">
						{feature.description}
					</p>
				</div>
			</div>
		{/each}

		<FullWidthDivider position="bottom" />
	</div>
</div>
