<script lang="ts">
	import * as Markdown from "#lib/components/base/markdown/index.js";
	import DocsPage from "#lib/components/docs/docs-page.svelte";
	import DocsPagination from "#lib/components/docs/docs-pagination.svelte";
	import DocsSeo from "#lib/components/docs/docs-seo.svelte";
	import { FaviconLink } from "#lib/components/ui/favicon-link/index.js";

	const description =
		"A Svelte port of Efferd's reusable blocks, built for shadcn-svelte projects.";
	const keywords = [
		"Svelte Efferd Blocks",
		"Efferd Blocks Svelte port",
		"shadcn-svelte blocks",
		"Svelte UI blocks"
	];
</script>

<DocsSeo
	title="Svelte Efferd Blocks introduction"
	{description}
	path="/docs/introduction"
	{keywords}
/>

<DocsPage>
	{#snippet header()}
		<Markdown.H1>Svelte Efferd Blocks</Markdown.H1>
		<Markdown.Paragraph class="max-w-2xl">{description}</Markdown.Paragraph>
	{/snippet}

	<Markdown.Paragraph>
		Browse the catalog, choose a block, and install its source through the shadcn-svelte
		registry. This project ports selected work from
		<FaviconLink href="https://efferd.com/blocks" rel="noreferrer">Efferd Blocks</FaviconLink>
		to Svelte.
	</Markdown.Paragraph>

	<Markdown.H2 class="mt-10">What you get</Markdown.H2>
	<Markdown.UnorderedList class="mt-4">
		<Markdown.ListItem>Browser previews for each available block.</Markdown.ListItem>
		<Markdown.ListItem>Install commands for your package manager.</Markdown.ListItem>
		<Markdown.ListItem>Svelte source you can edit in your project.</Markdown.ListItem>
	</Markdown.UnorderedList>

	<section aria-labelledby="credits" class="mt-12 border-t border-border pt-6">
		<Markdown.H2 id="credits" class="mt-0 text-lg">Credits</Markdown.H2>
		<Markdown.Paragraph class="mt-3 text-sm leading-6">
			Original blocks by
			<FaviconLink href="https://x.com/shabanhr" rel="noreferrer">Shaban</FaviconLink>. Ported
			to Svelte by
			<FaviconLink href="https://bhide.dev" rel="noreferrer">Bhide Svelte</FaviconLink>.
		</Markdown.Paragraph>
	</section>

	{#snippet footer()}
		<DocsPagination next={{ title: "Installation", href: "/docs/installation" }} />
	{/snippet}
</DocsPage>
