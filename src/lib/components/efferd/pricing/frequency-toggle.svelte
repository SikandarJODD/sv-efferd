<script lang="ts" module>
	export type FREQUENCY = "monthly" | "yearly";
</script>

<script lang="ts">
	import { cn } from "$lib/utils";
	import { createLayoutMotion } from "motion-sv";
	import type { HTMLAttributes } from "svelte/elements";

	type FREQUENCY = "monthly" | "yearly";

	type FrequencyToggleProps = HTMLAttributes<HTMLDivElement> & {
		frequency: FREQUENCY;
		setFrequency: (frequency: FREQUENCY) => void;
		frequencies?: FREQUENCY[];
	};

	const layout = createLayoutMotion();

	let {
		frequency,
		setFrequency,
		frequencies = ["monthly", "yearly"],
		class: className,
		...restProps
	}: FrequencyToggleProps = $props();

	const selectFrequency = layout.update.with((nextFrequency: FREQUENCY) => {
		if (nextFrequency !== frequency) {
			setFrequency(nextFrequency);
		}
	});
</script>

<div
	class={cn("mx-auto flex w-fit rounded-xl border bg-card p-1 shadow-xs", className)}
	{...restProps}
>
	{#each frequencies as freq}
		<button
			aria-pressed={frequency === freq}
			class="relative px-4 py-1 text-sm capitalize"
			onclick={() => selectFrequency(freq)}
			type="button"
		>
			<span class="relative z-10">{freq}</span>

			{#if frequency === freq}
				<layout.span
					class="absolute inset-0 z-10 rounded-xl bg-background mix-blend-difference dark:bg-foreground"
					layoutId="frequency-toggle"
					transition={{ type: "spring", duration: 0.4 }}
				/>
			{/if}
		</button>
	{/each}
</div>
