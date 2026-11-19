<script lang="ts">
	import ChevronDownIcon from "@lucide/svelte/icons/chevron-down";
	import ChevronUpIcon from "@lucide/svelte/icons/chevron-up";
	import MinusIcon from "@lucide/svelte/icons/minus";
	import { cn } from "#lib/utils.js";

	let { value, precision = 1 }: { value: number; precision?: number } = $props();

	const Icon = $derived(value > 0 ? ChevronUpIcon : value < 0 ? ChevronDownIcon : MinusIcon);
	const tone = $derived(
		value > 0 ? "text-emerald-600" : value < 0 ? "text-rose-600" : "text-muted-foreground"
	);
</script>

<span class={cn("inline-flex items-center gap-1 text-xs tabular-nums", tone)}>
	<Icon class="size-3 shrink-0" aria-hidden="true" />
	{Math.abs(value).toFixed(precision)}%
</span>
