<script lang="ts">
	import DocsPage from "$lib/components/docs/docs-page.svelte";
	import Blockquote from "$lib/components/markdown/Blockquote.svelte";
	import H2 from "$lib/components/markdown/H2.svelte";
	import Link from "$lib/components/markdown/Link.svelte";
	import Paragraph from "$lib/components/markdown/Paragraph.svelte";
	import Strong from "$lib/components/markdown/Strong.svelte";
	import { Button } from "$lib/components/ui/button";
</script>

<DocsPage
	title="Templates"
	description="Templates are planned, but this section stays honest for now: the feature is not ready yet."
>
	{#snippet actions()}
		<Button href="/docs/roadmap-feedback" size="sm" variant="outline">See Roadmap</Button>
	{/snippet}

	<Blockquote>
		Templates are <Strong>coming soon</Strong>. This page exists so the docs structure is ready
		without pretending the feature has shipped.
	</Blockquote>

	<H2>What to expect later</H2>
	<Paragraph>
		The template area will eventually cover larger starting points built from multiple blocks,
		along with guidance for customizing them and turning them into production-ready pages.
	</Paragraph>

	<Paragraph>
		For now, the best workflow is to combine individual blocks from the
		<Link href="/blocks">Blocks</Link> section and track upcoming work on the roadmap page.
	</Paragraph>
</DocsPage>
