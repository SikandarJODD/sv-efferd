<script lang="ts">
	import Seo from "#lib/components/site/seo.svelte";
	import BlockPreview from "#lib/components/showcase/block-preview.svelte";
	import type { PageProps } from "./$types";

	let { data }: PageProps = $props();
</script>

<Seo
	title="Svelte Auth Blocks"
	desc="Account access pages for sign-in, sign-up, password recovery, and verification."
	link="/blocks/auth"
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
