<script lang="ts">
	import * as Markdown from "#lib/components/base/markdown/index.js";
	import DocsPage from "#lib/components/docs/docs-page.svelte";
	import DocsPagination from "#lib/components/docs/docs-pagination.svelte";
	import DocsSeo from "#lib/components/docs/docs-seo.svelte";
	import { CodeFrame, type CodeBlock } from "#lib/components/ui/code/index.js";
	import { PMCommand } from "#lib/components/ui/pm-command/index.js";

	type PromptExample = {
		id: string;
		title: string;
		goal: string;
		code: CodeBlock;
	};

	const description =
		"Install the Svelte Efferd skill to help AI coding agents find, add, adapt, and verify Svelte blocks in existing projects.";
	const keywords = [
		"Svelte Efferd skill",
		"Svelte agent skill",
		"AI coding agent Svelte",
		"shadcn-svelte blocks",
		"Svelte UI skill",
		"agent skills"
	];

	const usageExample: CodeBlock = {
		filename: "Prompt",
		lang: "markdown",
		filecode: `Use /svelte-efferd to find and install a hero for this product page.

Match the existing color tokens and typography. Replace the demo content, then check the mobile layout, keyboard access, and reduced motion.`
	};

	function buildPrompt(goal: string, requirements: string): string {
		return `Use /svelte-efferd for this task.

Read https://sv-efferd.pages.dev/llms.txt and https://sv-efferd.pages.dev/component-manifest.json before choosing any blocks.

Goal: ${goal}

${requirements}

Inspect the existing Svelte project first. Reuse its package manager, component aliases, color tokens, typography, spacing, radius scale, and icon set.

Search the Svelte Efferd catalog and give me a shortlist of no more than three candidates. For each candidate, include its name, preview URL, and the concrete reason it fits. Do not choose a block only because its demo looks polished.

Install the best match using its exact registry URL. Do not overwrite an existing component without checking its local changes first.

Replace demo copy, links, images, and data with content already present in the project or content I provide. Do not invent customers, testimonials, company logos, awards, or usage numbers.

After adapting the block, check narrow screens, long text, keyboard navigation, visible focus, heading order, control labels, and reduced motion. Avoid transition-all, layout-bound animation, unnecessary looping motion, and media without explicit dimensions.

Run the project's formatter, type checker, and relevant tests. Report the selected block, installation command, changed files, and verification results.`;
	}

	const prompts: PromptExample[] = [
		{
			id: "saas-landing-page",
			title: "Build a SaaS landing page",
			goal: "Assemble a focused landing page that explains the product and leads visitors to one primary action.",
			code: {
				filename: "SaaS landing page prompt",
				lang: "markdown",
				filecode: buildPrompt(
					"Build a focused SaaS landing page that explains the product and leads visitors to one primary action.",
					"Look for a compatible header, hero, feature section, pricing section, FAQ, CTA, and footer. Keep only the sections supported by the available product content. Preserve the current route structure and avoid repeating the same claim in several sections."
				)
			}
		},
		{
			id: "product-hero-header",
			title: "Add a product hero and header",
			goal: "Introduce the product clearly and keep its primary navigation usable on small screens.",
			code: {
				filename: "Product hero and header prompt",
				lang: "markdown",
				filecode: buildPrompt(
					"Add a product hero and responsive header to the current landing page.",
					"The hero must show the actual product value, one primary action, and supporting media only if a real asset exists. The header must preserve the project's routes, active states, account actions, and mobile navigation. Do not add an announcement badge unless there is a real announcement."
				)
			}
		},
		{
			id: "pricing-faq",
			title: "Build a pricing and FAQ flow",
			goal: "Help visitors compare real plans and resolve purchase questions without fabricated details.",
			code: {
				filename: "Pricing and FAQ prompt",
				lang: "markdown",
				filecode: buildPrompt(
					"Build a pricing and FAQ flow using the real plans, limits, and billing terms in this project.",
					"Choose pricing and FAQ blocks whose information density matches the available data. Keep plan differences easy to scan, use one clear purchase action per plan, and preserve monthly or annual billing behavior if it already exists. Remove any unsupported guarantee, discount, or popularity label."
				)
			}
		},
		{
			id: "analytics-dashboard",
			title: "Create an analytics dashboard",
			goal: "Turn existing product data into a responsive dashboard with a clear reading order.",
			code: {
				filename: "Analytics dashboard prompt",
				lang: "markdown",
				filecode: buildPrompt(
					"Create an analytics dashboard for the metrics and workflows already present in this application.",
					"Map real data fields to the dashboard before choosing a block. Preserve loading, empty, error, and zero-value states. Use tabular numbers for changing metrics, provide text alternatives for charts, and make tables usable without horizontal page overflow. Do not add metrics the application cannot calculate."
				)
			}
		},
		{
			id: "application-shell",
			title: "Create an application shell",
			goal: "Give the application durable navigation without replacing its routing or permissions model.",
			code: {
				filename: "Application shell prompt",
				lang: "markdown",
				filecode: buildPrompt(
					"Create an application shell around the existing authenticated routes.",
					"Choose an app-shell block that fits the current navigation depth and responsive needs. Keep route URLs, permission checks, account controls, breadcrumbs, and active navigation behavior intact. The sidebar or mobile menu must be keyboard accessible and must not cover the page at narrow widths."
				)
			}
		},
		{
			id: "account-settings",
			title: "Build account settings",
			goal: "Organize account controls into a clear form that preserves validation and save behavior.",
			code: {
				filename: "Account settings prompt",
				lang: "markdown",
				filecode: buildPrompt(
					"Build account and notification settings around the fields and actions already implemented in this project.",
					"Choose a settings block that matches the number of sections and field density. Preserve form actions, validation messages, disabled states, destructive confirmations, and unsaved-change handling. Every control needs a programmatic label, and related options must be grouped semantically."
				)
			}
		},
		{
			id: "authentication-flow",
			title: "Build an authentication screen",
			goal: "Present the existing sign-in or sign-up flow without changing its security behavior.",
			code: {
				filename: "Authentication screen prompt",
				lang: "markdown",
				filecode: buildPrompt(
					"Build an authentication screen for the current sign-in or sign-up flow.",
					"Inspect the existing authentication provider, form actions, redirects, validation, password rules, and error handling before choosing a block. Keep password-manager support, autocomplete attributes, submitting states, and recovery links working. Do not add social providers that are not configured."
				)
			}
		},
		{
			id: "developer-tool-page",
			title: "Build a developer-tool page",
			goal: "Explain a technical product with concrete examples instead of generic marketing claims.",
			code: {
				filename: "Developer-tool page prompt",
				lang: "markdown",
				filecode: buildPrompt(
					"Build a landing page for this developer tool using its real commands, APIs, and technical constraints.",
					"Prefer blocks that can hold code, integration details, and precise product behavior. Use real commands from the repository and keep code examples copyable. Do not claim that setup is instant or seamless. Link to the actual documentation and make the main action match the product's real onboarding path."
				)
			}
		},
		{
			id: "integrations-proof",
			title: "Add integrations and customer proof",
			goal: "Show verified integrations and customer evidence without filling empty space with invented brands.",
			code: {
				filename: "Integrations and proof prompt",
				lang: "markdown",
				filecode: buildPrompt(
					"Add integrations and customer proof using only verified project data and approved assets.",
					"Choose integrations, logo-cloud, team, or testimonial blocks only when the repository contains matching names, logos, quotes, and links. Preserve logo aspect ratios and useful alt text. If verified proof is missing, omit that section and explain what content would be needed instead of generating placeholders."
				)
			}
		},
		{
			id: "page-review",
			title: "Review and rebuild weak sections",
			goal: "Replace only the sections that block comprehension, navigation, or conversion.",
			code: {
				filename: "Page review prompt",
				lang: "markdown",
				filecode: buildPrompt(
					"Review the current page and replace only the sections that have a clear content, interaction, responsiveness, or accessibility problem.",
					"Start with a short audit. For every proposed replacement, name the current problem and the Svelte Efferd block that addresses it. Keep sections that already work. Do not turn the page into a catalog of unrelated blocks, and do not change the product's visual direction unless an existing token or component is causing the problem."
				)
			}
		}
	];
</script>

<DocsSeo
	title="Svelte Efferd skill for AI coding agents"
	{description}
	path="/docs/skills"
	{keywords}
/>

<DocsPage>
	{#snippet header()}
		<Markdown.H1>Svelte Efferd Skill</Markdown.H1>
		<Markdown.Paragraph class="max-w-2xl">{description}</Markdown.Paragraph>
	{/snippet}

	<section aria-labelledby="install-skill">
		<Markdown.H2 id="install-skill" class="mt-0">Install the skill</Markdown.H2>
		<div class="mt-2">
			<PMCommand
				variant="secondary"
				title="Install the Svelte Efferd skill"
				command="execute"
				args={["skills", "add", "SikandarJODD/sv-efferd", "--skill", "svelte-efferd"]}
			/>
		</div>
	</section>

	<section aria-labelledby="use-skill" class="mt-12">
		<Markdown.H2 id="use-skill">How to use it</Markdown.H2>
		<Markdown.Paragraph>
			Mention <span class="font-mono tracking-tight text-[#0072e0] dark:text-[#41a4ff]"
				>/svelte-efferd</span
			> and describe the page, its content, and any constraints. The skill handles catalog search,
			installation, adaptation, and checks.
		</Markdown.Paragraph>
		<div class="mt-5">
			<CodeFrame code={usageExample} />
		</div>
	</section>

	<section aria-labelledby="agent-references" class="mt-12">
		<Markdown.H2 id="agent-references">Agent references</Markdown.H2>
		<Markdown.Paragraph>
			The prompts below point the agent to two maintained sources. The
			<Markdown.Link href="/llms.txt">llms.txt guide</Markdown.Link> explains how to work with the
			registry. The
			<Markdown.Link href="/component-manifest.json">component manifest</Markdown.Link>
			lists component metadata, previews, dependencies, files, and install URLs.
		</Markdown.Paragraph>
	</section>

	<section aria-labelledby="prompt-library" class="mt-12">
		<Markdown.H2 id="prompt-library">Prompt library</Markdown.H2>
		<Markdown.Paragraph>
			Use these prompts as starting points. Replace the goal or constraints when your project
			needs something more specific.
		</Markdown.Paragraph>

		{#each prompts as prompt, index (prompt.id)}
			<article
				aria-labelledby={prompt.id}
				class={index === 0 ? "mt-10" : "mt-12 border-t border-border pt-10"}
			>
				<Markdown.H3 id={prompt.id} class="mt-0">{prompt.title}</Markdown.H3>
				<Markdown.Paragraph class="mt-3">
					<Markdown.Strong>Goal.</Markdown.Strong>
					{prompt.goal}
				</Markdown.Paragraph>
				<div class="mt-5">
					<CodeFrame code={prompt.code} />
				</div>
			</article>
		{/each}
	</section>

	{#snippet footer()}
		<DocsPagination previous={{ title: "Usage", href: "/docs/usage" }} />
	{/snippet}
</DocsPage>
