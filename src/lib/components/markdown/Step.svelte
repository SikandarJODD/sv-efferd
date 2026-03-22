<script lang="ts">
	import { cn } from "$lib/utils";
	import type { Snippet } from "svelte";

	let { class: className, children } = $props<{
		class?: string;
		children?: Snippet;
	}>();
</script>

<div class={cn("step relative mb-10 ml-8 last:mb-0", className)}>
	<div class="space-y-4">
		{@render children?.()}
	</div>
</div>

<style>
	.step::before {
		counter-increment: step;
		content: counter(step);
		position: absolute;
		top: 0;
		left: -2.125rem;
		display: flex;
		height: 1.5rem;
		width: 1.5rem;
		align-items: center;
		justify-content: center;
		border-radius: 9999px;
		border: 1px solid hsl(var(--border));
		background: hsl(var(--background));
		color: hsl(var(--foreground));
		font-size: 0.75rem;
		font-weight: 600;
		box-shadow: var(--shadow-xs);
	}
</style>
