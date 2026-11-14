<script lang="ts">
	import { cn } from "#lib/utils.js";
	import { motion, useReducedMotion } from "motion-sv";
	import type { Snippet } from "svelte";

	type Props = {
		class?: string;
		delay?: number;
		children?: Snippet;
	};

	let { class: className, delay = 0.1, children }: Props = $props();
	let prefersReducedMotion = useReducedMotion();
</script>

<motion.div
	class={cn(className)}
	initial={prefersReducedMotion.current
		? false
		: { filter: "blur(4px)", translateY: -8, opacity: 0 }}
	transition={{ delay: prefersReducedMotion.current ? 0 : delay, duration: 0.35 }}
	whileInView={{ filter: "blur(0px)", translateY: 0, opacity: 1 }}
>
	{@render children?.()}
</motion.div>
