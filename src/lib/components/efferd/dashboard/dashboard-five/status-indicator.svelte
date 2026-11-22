<script lang="ts">
	import { cn } from "#lib/utils.js";

	let { class: className }: { class?: string } = $props();
</script>

<span
	class={cn(
		"relative flex size-2 shrink-0 items-center justify-center text-emerald-500",
		className
	)}
	aria-hidden="true"
>
	<span class="absolute size-full animate-ping rounded-full bg-current"></span>
	<span class="size-1.5 rounded-full bg-current"></span>
</span>
