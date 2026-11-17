<script lang="ts">
	import {
		Field,
		FieldContent,
		FieldDescription,
		FieldLabel
	} from "#lib/components/ui/field/index.js";
	import { cn } from "#lib/utils.js";
	import type { ComponentProps, Snippet } from "svelte";

	type Props = ComponentProps<typeof Field> & {
		label: string;
		description: string;
		htmlFor: string;
		children: Snippet;
	};

	let { label, description, htmlFor, children, class: className, ...restProps }: Props = $props();
</script>

<Field
	class={cn(
		"px-(--card-spacing) @md/field-group:has-[>[data-slot=field-content]]:items-center",
		className
	)}
	orientation="responsive"
	{...restProps}
>
	<FieldContent>
		<FieldLabel class="font-normal" for={htmlFor}>{label}</FieldLabel>
		<FieldDescription class="text-xs">{description}</FieldDescription>
	</FieldContent>
	<FieldContent class="items-end">
		{@render children()}
	</FieldContent>
</Field>
