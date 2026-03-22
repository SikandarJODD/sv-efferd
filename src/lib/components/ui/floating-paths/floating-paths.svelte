<script lang="ts">
	import { cn } from "$lib/utils";
	import { motion } from "motion-sv";
	import type { HTMLAttributes } from "svelte/elements";

	type FloatingPath = {
		id: number;
		d: string;
		opacity: number;
		width: number;
		duration: number;
	};

	type FloatingPathsProps = HTMLAttributes<HTMLDivElement> & {
		class?: string;
		position: number;
	};

	let { class: className = "", position, ...restProps }: FloatingPathsProps = $props();

	const paths = $derived.by<FloatingPath[]>(() =>
		Array.from({ length: 36 }, (_, index) => ({
			id: index,
			d: `M-${380 - index * 5 * position} -${189 + index * 6}C-${380 - index * 5 * position} -${189 + index * 6} -${312 - index * 5 * position} ${216 - index * 6} ${152 - index * 5 * position} ${343 - index * 6}C${616 - index * 5 * position} ${470 - index * 6} ${684 - index * 5 * position} ${875 - index * 6} ${684 - index * 5 * position} ${875 - index * 6}`,
			opacity: 0.1 + index * 0.03,
			width: 0.5 + index * 0.03,
			duration: 20 + (index % 10)
		}))
	);
</script>

<div
	aria-hidden="true"
	class={cn("pointer-events-none absolute inset-0", className)}
	{...restProps}
>
	<svg class="h-full w-full text-primary" fill="none" viewBox="0 0 696 316">
		<title>Background Paths</title>

		{#each paths as path (path.id)}
			<motion.path
				animate={{ pathLength: 1, opacity: [0.3, 0.6, 0.3], pathOffset: [0, 1, 0] }}
				d={path.d}
				initial={{ pathLength: 0.3, opacity: 0.6 }}
				stroke="currentColor"
				stroke-opacity={path.opacity}
				stroke-width={path.width}
				transition={{
					duration: path.duration,
					repeat: Number.POSITIVE_INFINITY,
					ease: "linear"
				}}
			/>
		{/each}
	</svg>
</div>
