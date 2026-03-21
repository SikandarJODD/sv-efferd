<script lang="ts">
	import { cn, type WithElementRef } from '$lib/utils';
	import type { Snippet } from 'svelte';
	import type { HTMLAttributes } from 'svelte/elements';

	type BorderSeparatorProps = WithElementRef<HTMLAttributes<HTMLDivElement>> & {
		children?: Snippet;
	};

	let {
		ref = $bindable(null),
		class: className,
		children,
		'aria-hidden': ariaHidden = 'true',
		...props
	}: BorderSeparatorProps = $props();
</script>

<div
	bind:this={ref}
	aria-hidden={ariaHidden}
	data-slot="border-separator"
	class={cn(
		'-translate-x-1/2 pointer-events-none absolute left-1/2 w-screen border-t border-dashed',
		className
	)}
	{...props}
>
	{@render children?.()}
</div>
