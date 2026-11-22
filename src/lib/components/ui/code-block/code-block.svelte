<script lang="ts" module>
	import { tv, type VariantProps } from "tailwind-variants";

	export const codeBlockVariants = tv({
		base: "group/code-block relative flex w-full min-w-0 flex-col overflow-hidden rounded-lg text-sm has-[>[data-slot=code-block-content]:focus-visible]:ring-3 has-[>[data-slot=code-block-content]:focus-visible]:ring-ring/50 data-[size=sm]:text-xs",
		variants: {
			variant: {
				default:
					"border border-input text-foreground has-[>[data-slot=code-block-content]:focus-visible]:border-ring dark:bg-input/30",
				destructive:
					"border border-destructive/30 text-destructive dark:border-destructive/40"
			}
		},
		defaultVariants: {
			variant: "default"
		}
	});

	export type CodeBlockVariant = VariantProps<typeof codeBlockVariants>["variant"];
	export type CodeBlockSize = "default" | "sm";
</script>

<script lang="ts">
	import { cn, type WithElementRef } from "#lib/utils.js";
	import type { HTMLAttributes } from "svelte/elements";

	let {
		ref = $bindable(null),
		class: className,
		variant = "default",
		size = "default",
		children,
		...restProps
	}: WithElementRef<HTMLAttributes<HTMLDivElement>> & {
		variant?: CodeBlockVariant;
		size?: CodeBlockSize;
	} = $props();
</script>

<div
	bind:this={ref}
	data-slot="code-block"
	data-variant={variant}
	data-size={size}
	class={cn(codeBlockVariants({ variant }), className)}
	{...restProps}
>
	{@render children?.()}
</div>
