<script lang="ts">
	import * as Markdown from "#lib/components/base/markdown/index.js";
	import DocsPage from "#lib/components/docs/docs-page.svelte";
	import DocsPagination from "#lib/components/docs/docs-pagination.svelte";
	import DocsSeo from "#lib/components/docs/docs-seo.svelte";
	import { CodeSnippet, type CodeBlock } from "#lib/components/ui/code/index.js";
	import { PMCommand } from "#lib/components/ui/pm-command/index.js";

	const description =
		"Set up a SvelteKit project, add shadcn-svelte, then install an Efferd block from the registry.";
	const keywords = [
		"install Svelte Efferd",
		"shadcn-svelte registry",
		"SvelteKit blocks",
		"shadcn-svelte CLI",
		"Svelte component installation"
	];
	const example: CodeBlock = {
		filename: "src/routes/+page.svelte",
		lang: "svelte",
		filecode: [
			'<script lang="ts">',
			'\timport HeroOne from "$lib/components/efferd/hero/hero-one/preview.svelte";',
			"</" + "script>",
			"",
			"<HeroOne />"
		].join("\n")
	};
</script>

<DocsSeo title="Install Svelte Efferd Blocks" {description} path="/docs/installation" {keywords} />

<DocsPage>
	{#snippet header()}
		<Markdown.H1>Install Svelte Efferd</Markdown.H1>
		<Markdown.Paragraph class="max-w-2xl">{description}</Markdown.Paragraph>
	{/snippet}

	<Markdown.Steps class="mb-0">
		<Markdown.Step title="Create a SvelteKit project">
			<Markdown.Paragraph class="mt-0">
				Start with Tailwind CSS. Skip this step if you already have a SvelteKit project.
			</Markdown.Paragraph>
			<div class="mt-4">
				<PMCommand
					variant="secondary"
					title="Create SvelteKit project"
					command="execute"
					args={["sv", "create", "my-app", "--add", "tailwindcss"]}
				/>
			</div>
		</Markdown.Step>

		<Markdown.Step title="Set up shadcn-svelte">
			<Markdown.Paragraph class="mt-0">
				Run the initializer from the project root. It creates
				<Markdown.CodeSpan>components.json</Markdown.CodeSpan> and asks you to confirm the component
				and import aliases.
			</Markdown.Paragraph>
			<div class="mt-4">
				<PMCommand
					variant="secondary"
					title="Initialize shadcn-svelte"
					command="execute"
					args={["shadcn-svelte@latest", "init"]}
				/>
			</div>
		</Markdown.Step>

		<Markdown.Step title="Add a block" class="pb-4">
			<Markdown.Paragraph class="mt-0">
				Pass a registry URL to the CLI. It installs the block files and their dependencies.
			</Markdown.Paragraph>
			<div class="mt-4">
				<PMCommand
					variant="secondary"
					title="Install Hero One"
					command="execute"
					args={[
						"shadcn-svelte@latest",
						"add",
						"https://sv-efferd.pages.dev/r/hero-one.json"
					]}
				/>
			</div>
		</Markdown.Step>
	</Markdown.Steps>

	<Markdown.H2>Use the component</Markdown.H2>
	<Markdown.Paragraph
		>Import the installed entry file and render it in a route.</Markdown.Paragraph
	>
	<div class="mt-5">
		<CodeSnippet code={example} />
	</div>

	{#snippet footer()}
		<DocsPagination
			previous={{ title: "Introduction", href: "/docs/introduction" }}
			next={{ title: "Usage", href: "/docs/usage" }}
		/>
	{/snippet}
</DocsPage>
