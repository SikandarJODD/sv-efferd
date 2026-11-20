<script lang="ts">
	import type { Snippet } from 'svelte';

	let {
		children
	}: {
		children: Snippet;
	} = $props();
</script>

<div
	class="inline-block w-fit rounded bg-secondary px-1.5 py-0.5 font-mono text-sm dark:bg-secondary/70"
>
	{@render children()}
</div>
