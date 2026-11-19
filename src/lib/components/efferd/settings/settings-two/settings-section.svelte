<script lang="ts">
	import {
		Card,
		CardContent,
		CardDescription,
		CardHeader,
		CardTitle
	} from "#lib/components/ui/card/index.js";
	import { FieldGroup } from "#lib/components/ui/field/index.js";
	import { cn } from "#lib/utils.js";
	import type { ComponentProps, Snippet } from "svelte";

	type Props = ComponentProps<typeof Card> & {
		title: string;
		description: string;
		children: Snippet;
	};

	let { title, description, children, class: className, ...restProps }: Props = $props();
</script>

<Card class={cn("rounded-none bg-background py-0 shadow-none ring-0", className)} {...restProps}>
	<CardHeader class="gap-0 border-b py-4">
		<CardTitle>{title}</CardTitle>
		<CardDescription>{description}</CardDescription>
	</CardHeader>
	<CardContent class="flex-1 py-5">
		<FieldGroup class="gap-5">
			{@render children()}
		</FieldGroup>
	</CardContent>
</Card>
