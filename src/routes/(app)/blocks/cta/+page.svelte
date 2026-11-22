<script lang="ts">
	import Seo from "#lib/components/site/seo.svelte";
	import BlockPreview from "#lib/components/showcase/block-preview.svelte";
	import type { PageProps } from "./$types";

	let { data }: PageProps = $props();
</script>

<Seo
	title="Svelte CTA Blocks"
	desc="Call-to-action sections for sign-ups, trials, downloads, and contact prompts."
	link="/blocks/cta"
	items={data.blocks}
/>

{#each data.blocks as block (block.id)}
	<BlockPreview
		id={block.id}
		title={block.title}
		description={block.description}
		previewComponent={block.previewComponent}
		codeTree={block.codeTree}
		previewHref={block.previewHref}
		previewMode={block.previewMode}
		previewHeight={block.previewHeight}
		installId={block.installId}
	/>
{/each}
