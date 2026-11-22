<script lang="ts">
	import { Card, CardContent, CardFooter } from "#lib/components/ui/card/index.js";
	import { FieldGroup } from "#lib/components/ui/field/index.js";
	import { cn } from "#lib/utils.js";
	import type { ComponentProps, Snippet } from "svelte";

	type Props = ComponentProps<typeof Card> & {
		hint?: string;
		hintId?: string;
		action?: Snippet;
		children: Snippet;
	};

	let { hint, hintId, action, children, class: className, ...restProps }: Props = $props();
</script>

<Card class={cn("pt-[calc(var(--card-spacing)*1.5)]", className)} {...restProps}>
	<CardContent>
		<FieldGroup>{@render children()}</FieldGroup>
	</CardContent>
	{#if hint || action}
		<CardFooter
			class={cn(
				"gap-4",
				action && hint && "justify-between",
				action && !hint && "justify-end"
			)}
		>
			{#if hint}<p id={hintId} class="text-xs text-pretty text-muted-foreground">
					{hint}
				</p>{/if}
			{@render action?.()}
		</CardFooter>
	{/if}
</Card>
