<script lang="ts">
	import { Card, CardDescription, CardHeader, CardTitle } from "#lib/components/ui/card/index.js";
	import { cn } from "#lib/utils.js";
	import type { ComponentProps, Snippet } from "svelte";

	type Props = ComponentProps<typeof Card> & {
		title: string;
		description: string;
		children: Snippet;
	};

	let { title, description, children, class: className, ...restProps }: Props = $props();
</script>

<Card class={cn("gap-0 pb-0 shadow-none dark:ring-0", className)} {...restProps}>
	<CardHeader class="border-b">
		<CardTitle>{title}</CardTitle>
		<CardDescription>{description}</CardDescription>
	</CardHeader>
	{@render children()}
</Card>
