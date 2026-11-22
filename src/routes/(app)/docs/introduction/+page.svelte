<script lang="ts">
	import * as Markdown from "#lib/components/base/markdown/index.js";
	import DocsPage from "#lib/components/docs/docs-page.svelte";
	import DocsPagination from "#lib/components/docs/docs-pagination.svelte";
	import DocsSeo from "#lib/components/docs/docs-seo.svelte";
	import { ChatGPT, Claude } from "#lib/components/icons/index.js";
	import { Button } from "#lib/components/ui/button/index.js";
	import { FaviconLink } from "#lib/components/ui/favicon-link/index.js";

	const description = "Open-source blocks for Svelte 5 and shadcn-svelte.";
	const seoDescription =
		"Open-source Svelte 5 blocks with live previews, registry installs, editable source, and a skill for AI coding agents.";
	const keywords = [
		"Svelte Efferd Blocks",
		"Efferd Blocks Svelte port",
		"shadcn-svelte blocks",
		"Svelte UI blocks"
	];
	const aiPrompt =
		"What is Svelte Efferd? List its main features, block categories, available resources, and how to get started. Use https://sv-efferd.pages.dev/llms.txt for accurate information.";
	const chatGptUrl = `https://chatgpt.com/?q=${encodeURIComponent(aiPrompt)}`;
	const claudeUrl = `https://claude.ai/new?q=${encodeURIComponent(aiPrompt)}`;
</script>

<DocsSeo
	title="Svelte Efferd Blocks introduction"
	description={seoDescription}
	path="/docs/introduction"
	{keywords}
/>

<DocsPage>
	{#snippet header()}
		<Markdown.H1>Svelte Efferd Blocks</Markdown.H1>
		<Markdown.Paragraph class="max-w-2xl">{description}</Markdown.Paragraph>
	{/snippet}
	<Markdown.H2 class="mt-10">What you get</Markdown.H2>
	<Markdown.UnorderedList class="mt-4">
		<Markdown.ListItem
			>82 blocks across 19 marketing and application categories.</Markdown.ListItem
		>
		<Markdown.ListItem>Responsive layouts with light and dark mode support.</Markdown.ListItem>
		<Markdown.ListItem
			>Browser previews with controls for different screen sizes.</Markdown.ListItem
		>
		<Markdown.ListItem
			>One-command installs through the shadcn-svelte registry.</Markdown.ListItem
		>
		<Markdown.ListItem
			>Editable Svelte source that becomes part of your project.</Markdown.ListItem
		>
	</Markdown.UnorderedList>

	<section aria-labelledby="coding-agents" class="mt-12">
		<Markdown.H2 id="coding-agents">Use it with coding agents</Markdown.H2>
		<Markdown.Paragraph>
			The <Markdown.Link href="/docs/skills">Svelte Efferd Skill</Markdown.Link> helps coding agents
			search the catalog, compare blocks, install the right files, adapt them to your project, and
			check the result.
		</Markdown.Paragraph>
	</section>

	<section aria-labelledby="learn-with-ai" class="mt-12">
		<Markdown.H2 id="learn-with-ai">Learn about Svelte Efferd</Markdown.H2>
		<Markdown.Paragraph>
			Get a quick overview of the blocks, features, and available tools.
		</Markdown.Paragraph>
		<div class="mt-5 flex flex-wrap gap-2">
			<Button
				href={claudeUrl}
				target="_blank"
				rel="noreferrer"
				size="sm"
				variant="outline"
				class="rounded-full shadow-none"
			>
				<Claude />
				Ask Claude
			</Button>
			<Button
				href={chatGptUrl}
				target="_blank"
				rel="noreferrer"
				size="sm"
				variant="outline"
				class="rounded-full shadow-none"
			>
				<ChatGPT class="size-5.5" />
				Ask ChatGPT
			</Button>
		</div>
	</section>

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
