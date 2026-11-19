<script lang="ts">
	import type { ComponentProps } from "svelte";
	import * as Card from "#lib/components/ui/card/index.js";
	import { cn } from "#lib/utils.js";

	let { class: className, children, ...restProps }: ComponentProps<typeof Card.Root> = $props();
</script>

<Card.Root class={cn("rounded-none bg-background shadow-none ring-0", className)} {...restProps}>
	{@render children?.()}
</Card.Root>
