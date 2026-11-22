<script lang="ts">
	import type { LucideIcon } from "@lucide/svelte";
	import FileTextIcon from "@lucide/svelte/icons/file-text";
	import LayoutDashboardIcon from "@lucide/svelte/icons/layout-dashboard";
	import ShieldCheckIcon from "@lucide/svelte/icons/shield-check";
	import TerminalIcon from "@lucide/svelte/icons/terminal";
	import FeatureCard from "./feature-card.svelte";

	type Feature = {
		title: string;
		icon: LucideIcon;
		description: string;
	};

	const features: Feature[] = [
		{
			title: "Interactive Dashboard",
			icon: LayoutDashboardIcon,
			description: "Visualize your data with drag-and-drop widgets."
		},
		{
			title: "Instant API",
			icon: TerminalIcon,
			description: "Auto-generate REST and GraphQL APIs instantly."
		},
		{
			title: "Role-Based Access",
			icon: ShieldCheckIcon,
			description: "Secure resources with granular permission controls."
		},
		{
			title: "Audit Trails",
			icon: FileTextIcon,
			description: "Track every change with comprehensive logs."
		}
	];
</script>

<div
	class="mx-auto flex min-h-svh w-full max-w-5xl flex-col justify-center gap-12 px-4 py-12 md:px-8"
>
	<div class="mx-auto max-w-2xl space-y-2 text-center">
		<h2 class="text-3xl font-medium tracking-tight md:text-5xl">Build apps faster</h2>
		<p class="text-sm leading-relaxed text-muted-foreground md:text-base">
			The complete platform for secure, scalable apps. You code, we handle the rest.
		</p>
	</div>

	<div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
		{#each features as feature (feature.title)}
			<FeatureCard {feature} />
		{/each}
	</div>
</div>
