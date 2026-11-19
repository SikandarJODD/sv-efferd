<script lang="ts">
	import * as Card from "#lib/components/ui/card/index.js";
	import Delta from "./delta.svelte";

	const vitals = [
		{
			label: "LCP",
			name: "Largest Contentful Paint",
			value: "1.9s",
			delta: 120,
			deltaLabel: "faster vs prior month",
			suffix: "ms"
		},
		{
			label: "INP",
			name: "Interaction to Next Paint",
			value: "142ms",
			delta: 18,
			deltaLabel: "faster vs prior month",
			suffix: "ms"
		},
		{
			label: "CLS",
			name: "Cumulative Layout Shift",
			value: "0.04",
			delta: 0.07,
			deltaLabel: "lower vs prior month",
			suffix: ""
		}
	] as const;
</script>

<Card.Root class="shadow-none md:col-span-2 lg:col-span-4">
	<Card.Header class="border-b">
		<Card.Title class="text-balance">Core Web Vitals</Card.Title>
		<Card.Description class="text-pretty">
			Field experience on real sessions, measured at the origin.
		</Card.Description>
	</Card.Header>
	<Card.Content>
		<ul class="grid gap-6 sm:grid-cols-3">
			{#each vitals as vital (vital.label)}
				<li class="flex flex-col gap-1">
					<p class="text-sm font-medium text-pretty">{vital.label}</p>
					<p class="text-xs text-pretty text-muted-foreground">{vital.name}</p>
					<p class="text-2xl font-semibold text-balance tabular-nums">{vital.value}</p>
					<div
						class="flex items-center gap-1.5 text-xs text-pretty text-muted-foreground"
					>
						<Delta value={vital.delta} suffix={vital.suffix} />
						<span>{vital.deltaLabel}</span>
					</div>
				</li>
			{/each}
		</ul>
	</Card.Content>
</Card.Root>
