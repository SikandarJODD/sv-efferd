<script lang="ts">
	import { Label } from "#lib/components/ui/label/index.js";
	import type { Snippet } from "svelte";

	type Props = {
		label: string;
		htmlFor?: string;
		variant?: "value" | "select";
		children: Snippet;
	};

	let { label, htmlFor, variant = "value", children }: Props = $props();
</script>

{#if variant === "select"}
	<div class="flex min-w-0 flex-col gap-2">
		<Label class="text-xs font-medium text-muted-foreground" for={htmlFor}>{label}</Label>
		{@render children()}
	</div>
{:else}
	<div class="flex min-w-0 flex-col gap-1">
		<span class="text-xs text-muted-foreground">{label}</span>
		{@render children()}
	</div>
{/if}
