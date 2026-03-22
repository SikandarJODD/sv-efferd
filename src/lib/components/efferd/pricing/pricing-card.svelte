<script lang="ts">
	import { CheckCircle2, type Icon as IconType } from "@lucide/svelte";
	import { Button, type ButtonVariant } from "$lib/components/ui/button";
	import { cn } from "$lib/utils";
	import type { Component } from "svelte";
	import type { HTMLAttributes } from "svelte/elements";

	type PricingCardProps = HTMLAttributes<HTMLDivElement> & {
		icon: typeof IconType | Component;
		name: string;
		price: string;
		description: string;
		features: string[];
		period?: string;
		original?: string;
		badge?: string;
		href?: string;
		featured?: boolean;
		buttonLabel?: string;
		buttonVariant?: Extract<ButtonVariant, "default" | "outline">;
	};

	let {
		icon,
		name,
		price,
		description,
		features,
		period,
		original,
		badge,
		href = "#",
		featured = false,
		buttonLabel = "Get Started",
		buttonVariant = "outline",
		class: className,
		...restProps
	}: PricingCardProps = $props();
	let Icon = $derived(icon);
</script>

<div
	class={cn("relative w-full max-w-xs rounded-xl border bg-background p-1", className)}
	{...restProps}
>
	<!-- {@const Icon = icon} -->

	<div class={cn("relative mb-4 rounded-xl border p-4", featured && "bg-card shadow-xs")}>
		<div class="mb-8 flex items-center justify-between">
			<div
				class="flex items-center gap-2 text-sm font-medium [&_svg:not([class*='size-'])]:size-4"
			>
				<Icon />
				<span>{name}</span>
			</div>

			{#if badge}
				<span class="rounded-full border bg-background px-3 py-1 text-xs shadow-xs"
					>{badge}</span
				>
			{/if}
		</div>

		<div class="mb-3 flex items-end gap-1">
			<span class="text-3xl font-extrabold tracking-tight">{price}</span>

			{#if period}
				<span class="pb-1 text-sm text-muted-foreground">{period}</span>
			{/if}

			{#if original}
				<span class="ml-auto text-lg text-muted-foreground line-through">{original}</span>
			{/if}
		</div>

		<Button class="w-full font-semibold" {href} variant={buttonVariant}>
			{buttonLabel}
		</Button>
	</div>

	<div class="space-y-6 p-3">
		<p class="text-xs text-muted-foreground">{description}</p>

		<ul class="space-y-3">
			{#each features as feature}
				<li class="flex items-start gap-3 text-xs text-muted-foreground">
					<CheckCircle2 aria-hidden="true" class="size-4 text-foreground" />
					<span>{feature}</span>
				</li>
			{/each}
		</ul>
	</div>
</div>
