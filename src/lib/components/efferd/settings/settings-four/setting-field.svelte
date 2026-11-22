<script lang="ts">
	import {
		Field,
		FieldContent,
		FieldDescription,
		FieldLabel
	} from "#lib/components/ui/field/index.js";
	import type { ComponentProps, Snippet } from "svelte";

	type Props = ComponentProps<typeof Field> & {
		label: string;
		htmlFor: string;
		description: string;
		children?: Snippet;
	};

	let { label, htmlFor, description, children, ...restProps }: Props = $props();
</script>

<Field orientation="responsive" {...restProps}>
	<FieldContent>
		<FieldLabel class="mb-1" for={htmlFor}>{label}</FieldLabel>
		<FieldDescription>{description}</FieldDescription>
	</FieldContent>
	{#if children}
		<FieldContent>{@render children()}</FieldContent>
	{/if}
</Field>
