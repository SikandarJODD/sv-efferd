<script lang="ts">
	import { cn } from "#lib/utils.js";

	let {
		color = "emerald",
		pulse = true,
		class: className
	}: {
		color?: "emerald" | "rose" | "amber" | "sky";
		pulse?: boolean;
		class?: string;
	} = $props();

	const tone = $derived(
		{
			emerald: "text-emerald-500",
			rose: "text-rose-500",
			amber: "text-amber-500",
			sky: "text-sky-500"
		}[color]
	);
</script>

<span
	class={cn(
		"relative flex size-2 shrink-0 items-center justify-center rounded-full",
		tone,
		className
	)}
>
	<span
		aria-hidden="true"
		class={cn("absolute size-full rounded-full bg-current", pulse ? "animate-ping" : "hidden")}
	></span>
	<span aria-hidden="true" class="size-1.5 rounded-full bg-current"></span>
</span>
