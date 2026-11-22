<script lang="ts">
	import { cn } from "#lib/utils.js";
	import type { Snippet } from "svelte";
	import type { HTMLAttributes } from "svelte/elements";

	type Props = HTMLAttributes<HTMLElement> & {
		header?: Snippet;
		children: Snippet;
		footer?: Snippet;
		contentClass?: string;
	};

	let {
		header,
		children,
		footer,
		class: className,
		contentClass,
		...restProps
	}: Props = $props();
</script>

<div
	class={cn("mx-auto w-full max-w-4xl px-4 py-10 sm:px-6 sm:py-14 lg:py-16", className)}
	{...restProps}
>
	{#if header}
		<header class="mb-10">
			{@render header()}
		</header>
	{/if}

	<div class={cn("min-w-0", contentClass)}>
		{@render children()}
	</div>

	{#if footer}
		<footer class="mt-12 sm:mt-14">
			{@render footer()}
		</footer>
	{/if}
</div>
