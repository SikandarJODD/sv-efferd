<script lang="ts">
	import { cn, type WithElementRef } from '$lib/utils';
	import type { HTMLAttributes } from 'svelte/elements';

	let {
		ref = $bindable(null),
		class: className,
		children,
		...restProps
	}: WithElementRef<HTMLAttributes<HTMLDivElement>> = $props();
</script>

<div bind:this={ref} class={cn('relative flex w-full items-center', className)} {...restProps}>
	<div class="w-full border-t"></div>
	<div class="flex w-max justify-center px-2 text-xs text-nowrap text-muted-foreground">
		{@render children?.()}
	</div>
	<div class="w-full border-t"></div>
</div>
