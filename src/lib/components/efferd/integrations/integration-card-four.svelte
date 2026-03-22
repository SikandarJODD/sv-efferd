<script lang="ts">
	import { cn } from "$lib/utils";

	type LogoType = {
		src: string;
		alt: string;
		isInvertable?: boolean;
	};

	type Props = {
		row: number;
		col: number;
		logo?: LogoType;
	};

	let { row, col, logo }: Props = $props();
</script>

<div
	class={cn(
		"absolute flex size-18 items-center justify-center rounded-md border",
		logo ? "bg-card shadow-xs dark:bg-card/60" : "bg-secondary/30 dark:bg-background"
	)}
	style:left={`${col * 72}px`}
	style:top={`${row * 72}px`}
>
	{#if logo}
		<img
			alt={logo.alt}
			class={cn(
				"pointer-events-none size-8 object-contain p-1 select-none",
				logo.isInvertable && "dark:invert"
			)}
			height="40"
			src={logo.src}
			width="40"
		/>
	{/if}
</div>
