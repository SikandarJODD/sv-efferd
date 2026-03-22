<script lang="ts">
	import { cn } from "$lib/utils";
	import type { Snippet } from "svelte";
	import H1 from "$lib/components/markdown/H1.svelte";
	import Paragraph from "$lib/components/markdown/Paragraph.svelte";

	type DocsPageProps = {
		title: string;
		description: string;
		class?: string;
		actions?: Snippet;
		children?: Snippet;
	};

	let { title, description, class: className = "", actions, children }: DocsPageProps = $props();
</script>

<section class={cn("mx-auto w-full max-w-4xl pb-16 sm:pb-20", className)}>
	<div class="overflow-hidden border-x border-border/80">
		<div class="border-b border-border/80 px-5 py-10 sm:px-8 sm:py-12 md:px-12">
			<div class="mx-auto max-w-3xl">
				<H1>{title}</H1>
				<Paragraph class="max-w-2xl text-base leading-7 sm:text-base"
					>{description}</Paragraph
				>

				{#if actions}
					<div class="mt-5 flex flex-wrap gap-2">
						{@render actions()}
					</div>
				{/if}
			</div>
		</div>

		<div class="px-5 py-8 sm:px-8 sm:py-10 md:px-12">
			<div class="mx-auto max-w-3xl">
				{@render children?.()}
			</div>
		</div>
	</div>
</section>
