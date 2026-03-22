<script lang="ts">
	import { DecorIcon } from '$lib/components/ui/decor-icon';
	import { cn } from '$lib/utils';
	import type { Icon } from '@lucide/svelte';
	import type { HTMLAttributes } from 'svelte/elements';

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

<div
	class={cn(
		'relative flex flex-col justify-between gap-6 bg-background px-6 pt-8 pb-6 shadow-xs',
		'dark:bg-[radial-gradient(50%_80%_at_25%_0%,--theme(--color-foreground/.1),transparent)]',
		className
	)}
	{...props}
>
	<div class="absolute -inset-y-4 -left-px w-px bg-border"></div>
	<div class="absolute -inset-y-4 -right-px w-px bg-border"></div>
	<div class="absolute -inset-x-4 -top-px h-px bg-border"></div>
	<div class="absolute -right-4 -bottom-px -left-4 h-px bg-border"></div>

	<DecorIcon class="size-3.5" position="top-left" />

	<div
		class={cn(
			'relative z-10 flex w-fit items-center justify-center rounded-lg border bg-muted/20 p-3',
			'[&_svg]:size-5 [&_svg]:stroke-[1.5] [&_svg]:text-foreground'
		)}
	>
		<FeatureIcon />
	</div>

	<div class="relative z-10 space-y-2">
		<h3 class="text-base font-medium text-foreground">{feature.title}</h3>
		<p class="text-xs leading-relaxed text-muted-foreground">{feature.description}</p>
	</div>
</div>
