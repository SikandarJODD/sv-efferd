<script lang="ts">
	import ChevronDownIcon from "@lucide/svelte/icons/chevron-down";
	import ChevronUpIcon from "@lucide/svelte/icons/chevron-up";
	import MinusIcon from "@lucide/svelte/icons/minus";
	import TrendingDownIcon from "@lucide/svelte/icons/trending-down";
	import TrendingUpIcon from "@lucide/svelte/icons/trending-up";
	import { Badge } from "#lib/components/ui/badge/index.js";
	import { cn } from "#lib/utils.js";

	let {
		value,
		variant = "default",
		icon = "default",
		precision = 1,
		suffix = "%"
	}: {
		value: number;
		variant?: "default" | "badge";
		icon?: "default" | "trend";
		precision?: number;
		suffix?: string;
	} = $props();

	const Icon = $derived(value === 0
		? MinusIcon
		: icon === "trend"
			? value > 0 ? TrendingUpIcon : TrendingDownIcon
			: value > 0 ? ChevronUpIcon : ChevronDownIcon);
	const tone = $derived(value > 0 ? "text-emerald-600" : value < 0 ? "text-rose-600" : "text-muted-foreground");
</script>

{#if variant === "badge"}
	<Badge
		variant="secondary"
		class={cn("gap-1 border-none tabular-nums", value > 0
			? "bg-emerald-500/10 text-emerald-600"
			: value < 0 ? "bg-rose-500/10 text-rose-600" : "text-muted-foreground")}
	>
		<Icon data-icon="inline-start" />
		{Math.abs(value).toFixed(precision)}{suffix}
	</Badge>
{:else}
	<span class={cn("inline-flex items-center gap-1 text-xs tabular-nums", tone)}>
		<Icon class="size-3 shrink-0" />
		{Math.abs(value).toFixed(precision)}{suffix}
	</span>
{/if}
