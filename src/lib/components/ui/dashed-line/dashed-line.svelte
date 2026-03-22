<script lang="ts">
	import { cn, type WithElementRef } from '$lib/utils';
	import type { HTMLAttributes } from 'svelte/elements';

	let {
		ref = $bindable(null),
		class: className,
		'aria-hidden': ariaHidden = 'true',
		...restProps
	}: WithElementRef<HTMLAttributes<HTMLDivElement>> = $props();
</script>

<div
	bind:this={ref}
	aria-hidden={ariaHidden}
	data-slot="dashed-line"
	class={cn('absolute border-collapse border border-dashed', className)}
	{...restProps}
></div>
