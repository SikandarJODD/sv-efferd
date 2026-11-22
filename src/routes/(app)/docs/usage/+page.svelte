<script lang="ts">
	import * as Markdown from "#lib/components/base/markdown/index.js";
	import DocsPage from "#lib/components/docs/docs-page.svelte";
	import DocsPagination from "#lib/components/docs/docs-pagination.svelte";
	import DocsSeo from "#lib/components/docs/docs-seo.svelte";
	import UsageVideo from "#lib/components/docs/usage/usage-video.svelte";
	import { CodeFrame, type CodeBlock } from "#lib/components/ui/code/index.js";

	const description =
		"Choose a block, copy its install command, and edit the Svelte source in your project.";
	const keywords = [
		"use Svelte Efferd blocks",
		"Svelte block registry",
		"copy Svelte components",
		"shadcn-svelte blocks",
		"Svelte component source"
	];
	const example: CodeBlock = {
		filename: "src/routes/+page.svelte",
		lang: "svelte",
		filecode: [
			'<script lang="ts">',
			'\timport FeatureOne from "$lib/components/efferd/features/feature-one.svelte";',
			"</" + "script>",
			"",
			"<FeatureOne />"
		].join("\n")
	};
</script>

<DocsSeo title="Use Svelte Efferd Blocks" {description} path="/docs/usage" {keywords} />

<DocsPage>
	{#snippet header()}
		<Markdown.H1>Use a block</Markdown.H1>
		<Markdown.Paragraph class="max-w-2xl">{description}</Markdown.Paragraph>
	{/snippet}

	<section aria-labelledby="copy-install-command">
		<Markdown.H2 id="copy-install-command" class="mt-0">1. Copy the install command</Markdown.H2
		>
		<Markdown.Paragraph>
			Open a block on the <Markdown.Link href="/blocks/features">Features page</Markdown.Link
			>, then select the command in its toolbar. A checkmark confirms it is on your clipboard.
		</Markdown.Paragraph>
		<UsageVideo
			id="copy-command-video"
			title="Copy the Feature One install command"
			src="/videos/usage/usage-install-command-light-6s.mp4"
			poster="/videos/usage/usage-install-command-light-poster.jpg"
			caption="The registry command stays attached to the block being previewed."
		/>
	</section>

	<section aria-labelledby="run-install-command" class="mt-12">
		<Markdown.H2 id="run-install-command">2. Run the command</Markdown.H2>
		<Markdown.Paragraph>
			Paste it into a terminal at your project root. The CLI installs dependencies and writes
			the block's source files.
		</Markdown.Paragraph>
		<UsageVideo
			id="terminal-install-video"
			title="Install Feature One from the terminal"
			src="/videos/usage/usage-terminal-install-light-6s.mp4"
			poster="/videos/usage/usage-terminal-install-light-poster.jpg"
			caption="Each completed task is reported before the process exits."
		/>
	</section>

	<section aria-labelledby="use-installed-component" class="mt-12">
		<Markdown.H2 id="use-installed-component">3. Use the component</Markdown.H2>
		<Markdown.Paragraph>
			Open the generated feature files and choose the entry you need. Import it directly into
			your route.
		</Markdown.Paragraph>
		<UsageVideo
			id="component-files-video"
			title="Choose an installed feature component"
			src="/videos/usage/usage-component-files-light-6s.mp4"
			poster="/videos/usage/usage-component-files-light-poster.jpg"
			caption="The active entry is highlighted without hiding the rest of the generated tree."
		/>
		<div class="mt-6">
			<CodeFrame code={example} />
		</div>
		<Markdown.Paragraph>
			The installed source belongs to your app. Edit it like any other Svelte component.
		</Markdown.Paragraph>
	</section>

	{#snippet footer()}
		<DocsPagination
			previous={{ title: "Installation", href: "/docs/installation" }}
			next={{ title: "Skills", href: "/docs/skills" }}
		/>
	{/snippet}
</DocsPage>
