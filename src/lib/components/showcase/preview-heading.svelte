<script lang="ts">
	import { CopyButton } from "#lib/components/ui/copy-button/index.js";
	import { DecorIcon } from "#lib/components/ui/decor-icon/index.js";

	interface PreviewHeadingProps {
		title: string;
		description?: string;
		url: string;
	}

	let { title, description = "", url }: PreviewHeadingProps = $props();
</script>

<div class="relative border-b px-5 py-5 sm:px-6 sm:py-4 lg:px-7">
	<DecorIcon
		class="hidden size-3.5 bg-background stroke-muted-foreground/70 md:block"
		position="top-left"
	/>
	<DecorIcon
		class="z-999 hidden size-3.5 translate-x-[calc(50%)] -translate-y-[calc(50%+0.5px)] bg-background stroke-muted-foreground/70 md:block"
		position="top-right"
	/>
	<div class="relative max-w-2xl">
		<div class="flex flex-wrap items-end gap-x-2 gap-y-1">
			<h2 class="text-xl font-medium tracking-tight text-foreground sm:text-xl">
				{title}
			</h2>
			<CopyButton
				text={url}
				size="icon-xs"
				class="text-muted-foreground hover:text-foreground"
				aria-label={`Copy link to ${title}`}
				title={`Copy link to ${title}`}
			/>
		</div>
		{#if description}
			<p class="mt-1.5 text-sm text-muted-foreground">
				{description}
			</p>
		{/if}
	</div>
</div>
