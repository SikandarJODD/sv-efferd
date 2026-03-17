<script lang="ts">
	import { cn, type WithElementRef } from '$lib/utils.js';
	import type { HTMLTextareaAttributes } from 'svelte/elements';

	type Props = WithElementRef<HTMLTextareaAttributes>;

	let {
		ref = $bindable(null),
		value = $bindable(),
		class: className,
		'data-slot': dataSlot = 'textarea',
		...restProps
	}: Props = $props();
</script>

<textarea
	bind:this={ref}
	data-slot={dataSlot}
	class={cn(
		'flex min-h-24 w-full min-w-0 rounded-md border border-input bg-background px-3 py-2 text-base shadow-xs ring-offset-background transition-[color,box-shadow] outline-none selection:bg-primary selection:text-primary-foreground placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50 md:text-sm dark:bg-input/30',
		'focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50',
		'aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40',
		className
	)}
	bind:value
	{...restProps}
></textarea>
