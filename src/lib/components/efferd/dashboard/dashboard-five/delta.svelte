<script lang="ts">
	import ArrowDownIcon from "@lucide/svelte/icons/arrow-down";
	import ArrowUpIcon from "@lucide/svelte/icons/arrow-up";
	import ChevronDownIcon from "@lucide/svelte/icons/chevron-down";
	import ChevronUpIcon from "@lucide/svelte/icons/chevron-up";
	import MinusIcon from "@lucide/svelte/icons/minus";
	import TrendingDownIcon from "@lucide/svelte/icons/trending-down";
	import TrendingUpIcon from "@lucide/svelte/icons/trending-up";
	import type { Component, Snippet } from "svelte";
	import { Badge } from "#lib/components/ui/badge/index.js";
	import { cn } from "#lib/utils.js";

	type IconVariant = "default" | "trend" | "arrow";
	type Variant = "default" | "badge";

	let {
		value,
		variant = "default",
		icon = "default",
		precision = 1,
		suffix = "%",
		absolute = true,
		class: className,
		children
	}: {
		value: number;
		variant?: Variant;
		icon?: IconVariant;
		precision?: number;
		suffix?: string;
		absolute?: boolean;
		class?: string;
		children?: Snippet;
	} = $props();

	const Icon = $derived.by((): Component => {
		if (value === 0) return MinusIcon;
		if (icon === "trend") return value > 0 ? TrendingUpIcon : TrendingDownIcon;
		if (icon === "arrow") return value > 0 ? ArrowUpIcon : ArrowDownIcon;
		return value > 0 ? ChevronUpIcon : ChevronDownIcon;
	});
	const formattedValue = $derived((absolute ? Math.abs(value) : value).toFixed(precision));
	const tone = $derived(
		value > 0 ? "text-emerald-600" : value < 0 ? "text-rose-600" : "text-muted-foreground"
	);
</script>

{#snippet content()}
	<Icon data-icon="inline-start" aria-hidden="true" />
	<span class="tabular-nums">{formattedValue}{suffix}</span>
	{@render children?.()}
{/snippet}

{#if variant === "badge"}
	<Badge variant="secondary" class={cn("border-none tabular-nums", tone, className)}>
		{@render content()}
	</Badge>
{:else}
	<span
		class={cn(
			"inline-flex items-center gap-1 text-muted-foreground tabular-nums",
			tone,
			className
		)}
	>
		{@render content()}
	</span>
{/if}
