<script lang="ts">
	import { DecorIcon } from '$lib/components/ui/decor-icon';
	import { cn } from '$lib/utils';
	import type { HTMLAttributes } from 'svelte/elements';

	type DecorPosition = 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';

	type Integration = {
		src: string;
		name: string;
		description: string;
		isInvertable?: boolean;
		decorPosition?: DecorPosition;
	};

	type Props = HTMLAttributes<HTMLDivElement> & {
		integration: Integration;
	};

	let { integration, class: className, ...props }: Props = $props();
</script>

<div
	class={cn(
		'relative flex flex-col items-start gap-4 bg-background p-4 text-start md:p-6 md:even:bg-background/75',
		className
	)}
	{...props}
>
	<img
		alt={integration.name}
		class={cn(
			'pointer-events-none size-8 shrink-0 select-none object-contain',
			integration.isInvertable && 'dark:invert'
		)}
		height="32"
		src={integration.src}
		width="32"
	/>

	<div class="space-y-1">
		<h3 class="font-semibold">{integration.name}</h3>
		<p class="text-xs text-muted-foreground md:text-sm">
			{integration.description}
		</p>
	</div>

	{#if integration.decorPosition}
		<DecorIcon position={integration.decorPosition} />
	{/if}
</div>
