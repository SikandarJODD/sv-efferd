<script lang="ts">
	import {
		FieldDescription,
		FieldGroup,
		FieldLegend,
		FieldSet
	} from "#lib/components/ui/field/index.js";
	import type { ComponentProps, Snippet } from "svelte";

	type Props = ComponentProps<typeof FieldSet> & {
		title: string;
		description: string;
		children: Snippet;
	};

	let { title, description, children, ...restProps }: Props = $props();
</script>

<FieldSet {...restProps}>
	<FieldLegend class="mb-1">{title}</FieldLegend>
	<FieldDescription>{description}</FieldDescription>
	<FieldGroup class="rounded-lg border py-6">
		{@render children()}
	</FieldGroup>
</FieldSet>
