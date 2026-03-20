<script lang="ts">
	import { cn } from '$lib/utils';

	type Logo = {
		src: string;
		alt: string;
	};

	type Props = {
		row: number;
		col: number;
		logo?: Logo;
	};

	let { row, col, logo }: Props = $props();
</script>

<div
	class={cn('absolute flex size-16 items-center justify-center', logo && 'bg-secondary/40')}
	style:left={`${col * 64}px`}
	style:top={`${row * 64}px`}
>
	{#if logo}
		<img
			alt={logo.alt}
			class="pointer-events-none size-8 select-none object-contain p-1 dark:invert"
			height="40"
			src={logo.src}
			width="40"
		/>
	{/if}
</div>
