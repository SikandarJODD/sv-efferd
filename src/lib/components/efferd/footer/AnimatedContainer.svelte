<script lang="ts">
	import { cn } from "$lib/utils";
	import { motion } from "motion-sv";
	import type { Snippet } from "svelte";

	type Props = {
		class?: string;
		delay?: number;
		children?: Snippet;
	};

	let { class: className, delay = 0.1, children }: Props = $props();
</script>

<motion.div
	class={cn(className)}
	initial={{ filter: "blur(4px)", translateY: -8, opacity: 0 }}
	transition={{ delay, duration: 0.8 }}
	whileInView={{ filter: "blur(0px)", translateY: 0, opacity: 1 }}
>
	{@render children?.()}
</motion.div>
