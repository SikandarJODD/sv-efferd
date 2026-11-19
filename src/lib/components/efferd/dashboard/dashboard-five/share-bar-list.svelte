<script lang="ts">
	import { cn } from "#lib/utils.js";

	export type ShareBarRow = {
		label: string;
		value: number;
		displayValue?: string;
	};

	let {
		rows,
		ariaLabel,
		class: className
	}: {
		rows: readonly ShareBarRow[];
		ariaLabel: string;
		class?: string;
	} = $props();

	function clamp(value: number) {
		return Math.min(100, Math.max(0, value));
	}

	function fillStyle(value: number) {
		const clamped = clamp(value);
		const borderMix = Math.min(100, Math.max(36, clamped * 1.75));
		return [
			`width: ${clamped}%`,
			`border-right-color: color-mix(in srgb, var(--chart-2) ${borderMix}%, transparent)`,
			"background-image: linear-gradient(to right, color-mix(in srgb, var(--chart-2) 4%, transparent), color-mix(in srgb, var(--chart-2) 36%, transparent))"
		].join(";");
	}
</script>

<ul class={cn("my-auto flex w-full flex-col gap-0.5", className)} aria-label={ariaLabel}>
	{#each rows as row (row.label)}
		<li class="relative flex h-12 items-center gap-2 overflow-hidden px-3">
			<div class="z-10 flex w-full items-center justify-between gap-2 text-sm">
				<span class="text-pretty">{row.label}</span>
				<span class="font-medium tabular-nums">{row.displayValue ?? `${row.value}%`}</span>
			</div>
			<div
				aria-hidden="true"
				class="pointer-events-none absolute top-0 left-0 h-full border-r-2 border-solid"
				style={fillStyle(row.value)}
			></div>
		</li>
	{/each}
</ul>
