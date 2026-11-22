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

	const prompts: PromptExample[] = [
		{
			id: "saas-landing-page",
			title: "Build a SaaS landing page",
			goal: "Assemble a focused landing page that explains the product and leads visitors to one primary action.",
			code: {
				filename: "SaaS landing page prompt",
				lang: "markdown",
				filecode: `Use /svelte-efferd.

## Goal

Build a focused SaaS landing page that explains the product and leads visitors to one primary action.

## Project context

- Inspect the existing Svelte project before changing anything.
- Read https://sv-efferd.pages.dev/llms.txt.
- Use https://sv-efferd.pages.dev/component-manifest.json to find blocks.
- Follow the existing color tokens, typography, spacing, radius, and icon choices.

## Find the blocks

Search for a header, hero, feature section, pricing section, FAQ, CTA, and footer.

Shortlist up to three candidates for each section. Include the component name, preview URL, and one reason it fits. Remove sections that are not supported by the available product content.

## Build

Install the selected blocks with their exact registry URLs.

Replace demo text, links, images, and data with content from the project. Keep existing routes and actions working. Do not invent customers, testimonials, logos, awards, or product metrics.

## Check

Test narrow screens, long text, keyboard navigation, focus states, heading order, and reduced motion.

Avoid \`transition-all\`, unnecessary looping animation, and media without explicit dimensions.

Run the project formatter, type checker, and relevant tests.

## Report

List the selected blocks, installation commands, changed files, and check results.`
			}
		},
		{
			id: "product-hero-header",
			title: "Add a product hero and header",
			goal: "Introduce the product clearly and keep its primary navigation usable on small screens.",
			code: {
				filename: "Product hero and header prompt",
				lang: "markdown",
				filecode: `Use /svelte-efferd.

## Goal

Add a product hero and responsive header that explain the product clearly and guide visitors to one primary action.

## Project context

- Inspect the current landing page, routes, navigation, and available product assets.
- Read https://sv-efferd.pages.dev/llms.txt.
- Use https://sv-efferd.pages.dev/component-manifest.json to find blocks.
- Keep the existing color tokens, typography, spacing, radius, and icon choices.

## Find the blocks

Search for header and hero blocks that fit the product's content, navigation depth, and available media.

Shortlist up to three compatible pairs. Include each component name, preview URL, and one reason the pair works together. Prefer blocks that need little content or behavior removed.

## Build

Install the selected blocks with their exact registry URLs.

Keep existing routes, active navigation states, account actions, and mobile navigation working. Replace demo content with real product copy and assets. Use one primary action. Add supporting media only when a real asset exists.

Do not add an announcement badge unless there is a real announcement.

## Check

Test the header and hero at narrow, medium, and wide widths. Check keyboard navigation, visible focus, menu behavior, heading order, image dimensions, and reduced motion.

Run the project formatter, type checker, and relevant tests.

## Report

List the selected blocks, installation commands, changed files, and check results.`
			}
		},
		{
			id: "pricing-faq",
			title: "Build a pricing and FAQ flow",
			goal: "Help visitors compare real plans and resolve purchase questions without fabricated details.",
			code: {
				filename: "Pricing and FAQ prompt",
				lang: "markdown",
				filecode: `Use /svelte-efferd.

## Goal

Build a pricing and FAQ flow that helps visitors compare real plans and resolve purchase questions.

## Project context

- Inspect the existing plans, limits, prices, billing terms, and purchase actions.
- Read https://sv-efferd.pages.dev/llms.txt.
- Use https://sv-efferd.pages.dev/component-manifest.json to find blocks.
- Follow the project's existing tokens, typography, spacing, form controls, and button styles.

## Find the blocks

Search for pricing and FAQ blocks whose information density matches the available data.

Shortlist up to three combinations. Include the component names, preview URLs, and the tradeoff between them. Reject blocks that need invented plan details or large amounts of empty content.

## Build

Install the selected blocks with their exact registry URLs.

Use the real plan names, prices, limits, billing terms, and FAQ answers. Keep plan differences easy to scan and use one clear purchase action per plan. Preserve monthly or annual billing behavior when it already exists.

Remove unsupported guarantees, discounts, testimonials, and popularity labels.

## Check

Test long plan names, uneven feature lists, missing values, narrow screens, keyboard access, focus states, and FAQ expansion. Confirm that pricing and billing labels are unambiguous.

Run the project formatter, type checker, and relevant tests.

## Report

List the selected blocks, installation commands, changed files, and check results.`
			}
		},
		{
			id: "analytics-dashboard",
			title: "Create an analytics dashboard",
			goal: "Turn existing product data into a responsive dashboard with a clear reading order.",
			code: {
				filename: "Analytics dashboard prompt",
				lang: "markdown",
				filecode: `Use /svelte-efferd.

## Goal

Create a responsive analytics dashboard for the metrics and workflows already present in the application.

## Project context

- Inspect the available data, routes, filters, charts, tables, and user actions.
- Map the real data fields before choosing a dashboard block.
- Read https://sv-efferd.pages.dev/llms.txt.
- Use https://sv-efferd.pages.dev/component-manifest.json to find blocks.
- Keep the existing application shell, tokens, typography, and data-fetching patterns.

## Find the blocks

Search for dashboard blocks that match the number of metrics, chart types, table density, and navigation structure.

Shortlist up to three candidates. Include each component name, preview URL, and the data it can display without forcing unrelated widgets into the page.

## Build

Install the selected block with its exact registry URL.

Connect it to real project data. Preserve loading, empty, error, and zero-value states. Use tabular numbers for changing metrics and provide text alternatives for charts. Do not add metrics the application cannot calculate.

## Check

Test narrow screens, long labels, large numbers, empty datasets, keyboard navigation, visible focus, and table overflow. Confirm that charts remain understandable without relying on color alone.

Avoid per-frame state updates, layout-bound animation, and rendering large unbounded lists without virtualization.

Run the project formatter, type checker, and relevant tests.

## Report

List the selected block, installation command, data connections, changed files, and check results.`
			}
		},
		{
			id: "application-shell",
			title: "Create an application shell",
			goal: "Give the application durable navigation without replacing its routing or permissions model.",
			code: {
				filename: "Application shell prompt",
				lang: "markdown",
				filecode: `Use /svelte-efferd.

## Goal

Create an application shell around the existing authenticated routes without changing the routing or permissions model.

## Project context

- Inspect the current routes, navigation depth, account controls, breadcrumbs, and permission checks.
- Read https://sv-efferd.pages.dev/llms.txt.
- Use https://sv-efferd.pages.dev/component-manifest.json to find blocks.
- Preserve the existing design tokens, icon set, layout conventions, and authentication behavior.

## Find the blocks

Search for app-shell blocks that support the current navigation depth and responsive behavior.

Shortlist up to three candidates. Include each component name, preview URL, and how it handles desktop navigation, mobile navigation, page titles, and account actions.

## Build

Install the selected block with its exact registry URL.

Connect the shell to the existing routes. Preserve URLs, permission checks, breadcrumbs, account controls, and active navigation states. Remove demo destinations instead of leaving dead links.

Keep page content independent from the shell so existing routes remain easy to maintain.

## Check

Test keyboard navigation, visible focus, active states, long labels, nested routes, narrow screens, and menu dismissal. Confirm that the sidebar or mobile menu does not cover or trap access to page content.

Run the project formatter, type checker, and relevant tests.

## Report

List the selected block, installation command, navigation changes, changed files, and check results.`
			}
		},
		{
			id: "account-settings",
			title: "Build account settings",
			goal: "Organize account controls into a clear form that preserves validation and save behavior.",
			code: {
				filename: "Account settings prompt",
				lang: "markdown",
				filecode: `Use /svelte-efferd.

## Goal

Build account and notification settings around the fields and actions already implemented in the project.

## Project context

- Inspect the existing settings routes, form actions, validation, account data, and notification options.
- Read https://sv-efferd.pages.dev/llms.txt.
- Use https://sv-efferd.pages.dev/component-manifest.json to find blocks.
- Keep the current form controls, tokens, typography, spacing, and save behavior.

## Find the blocks

Search for settings blocks that match the number of sections, field density, and navigation pattern.

Shortlist up to three candidates. Include each component name, preview URL, and how it organizes account details, preferences, notifications, and destructive actions.

## Build

Install the selected block with its exact registry URL.

Connect the real fields and form actions. Preserve validation messages, disabled states, submitting states, destructive confirmations, and unsaved-change handling. Give every control a programmatic label and group related options semantically.

Remove demo fields that the application does not support.

## Check

Test keyboard navigation, visible focus, validation errors, long labels, disabled controls, save failures, and narrow screens. Confirm that destructive actions are clearly separated and require confirmation.

Run the project formatter, type checker, and relevant tests.

## Report

List the selected block, installation command, connected settings, changed files, and check results.`
			}
		},
		{
			id: "authentication-flow",
			title: "Build an authentication screen",
			goal: "Present the existing sign-in or sign-up flow without changing its security behavior.",
			code: {
				filename: "Authentication screen prompt",
				lang: "markdown",
				filecode: `Use /svelte-efferd.

## Goal

Build an authentication screen for the current sign-in or sign-up flow without changing its security behavior.

## Project context

- Inspect the authentication provider, form actions, redirects, validation, password rules, and error handling.
- Read https://sv-efferd.pages.dev/llms.txt.
- Use https://sv-efferd.pages.dev/component-manifest.json to find blocks.
- Preserve the existing tokens, typography, form components, and authentication logic.

## Find the blocks

Search for auth blocks that match the required fields, recovery flow, and available sign-in methods.

Shortlist up to three candidates. Include each component name, preview URL, and how much adaptation it needs. Reject blocks that depend on providers or fields the project does not support.

## Build

Install the selected block with its exact registry URL.

Connect the existing form actions, redirects, validation messages, recovery links, and submitting states. Keep password-manager support and correct autocomplete attributes. Do not add social providers that are not configured.

Use real product copy and legal links. Remove demo testimonials or decorative proof.

## Check

Test keyboard navigation, visible focus, invalid fields, server errors, submitting states, password-manager behavior, narrow screens, and zoomed text. Confirm that errors are announced and focus moves predictably.

Run the project formatter, type checker, and relevant tests.

## Report

List the selected block, installation command, preserved auth behavior, changed files, and check results.`
			}
		},
		{
			id: "developer-tool-page",
			title: "Build a developer-tool page",
			goal: "Explain a technical product with concrete examples instead of generic marketing claims.",
			code: {
				filename: "Developer-tool page prompt",
				lang: "markdown",
				filecode: `Use /svelte-efferd.

## Goal

Build a landing page for this developer tool using its real commands, APIs, and technical constraints.

## Project context

- Inspect the README, documentation, installation commands, API examples, and onboarding flow.
- Read https://sv-efferd.pages.dev/llms.txt.
- Use https://sv-efferd.pages.dev/component-manifest.json to find blocks.
- Follow the project's existing tokens, typography, code style, and documentation links.

## Find the blocks

Search for blocks that can hold technical copy, code examples, integrations, features, and a clear onboarding action.

Shortlist up to three combinations. Include the component names, preview URLs, and how each combination supports the available technical content. Prefer the smallest set that explains the product completely.

## Build

Install the selected blocks with their exact registry URLs.

Use real commands and API examples from the repository. Keep code examples accurate and copyable. Link to the actual documentation and make the primary action match the real onboarding path.

Do not claim that setup is instant or hide required configuration.

## Check

Test code wrapping, copy actions, long commands, keyboard navigation, focus states, narrow screens, and heading order. Confirm that commands match the supported package managers and current API.

Run the project formatter, type checker, and relevant tests.

## Report

List the selected blocks, installation commands, technical sources used, changed files, and check results.`
			}
		},
		{
			id: "integrations-proof",
			title: "Add integrations and customer proof",
			goal: "Show verified integrations and customer evidence without filling empty space with invented brands.",
			code: {
				filename: "Integrations and proof prompt",
				lang: "markdown",
				filecode: `Use /svelte-efferd.

## Goal

Add integrations and customer proof using only verified project data and approved assets.

## Project context

- Inspect the repository for approved integration names, logos, customer quotes, links, and attribution.
- Read https://sv-efferd.pages.dev/llms.txt.
- Use https://sv-efferd.pages.dev/component-manifest.json to find blocks.
- Preserve the existing tokens, typography, logo treatment, and link behavior.

## Find the blocks

Search for integrations, logo-cloud, team, or testimonial blocks that match the verified content.

Shortlist up to three candidates. Include each component name, preview URL, and the exact content available to fill it. Reject blocks that require invented brands, quotes, people, or statistics.

## Build

Install the selected blocks with their exact registry URLs.

Use only approved names, logos, quotes, roles, links, and attribution. Preserve logo aspect ratios and add useful alt text. Keep external links accurate and identify them clearly when needed.

If verified content is missing, omit the section and list what content is required. Do not generate placeholders that look like real proof.

## Check

Test missing logos, long company names, narrow screens, keyboard navigation, visible focus, image dimensions, and reduced motion. Confirm that animated logo rows pause when off-screen.

Run the project formatter, type checker, and relevant tests.

## Report

List the selected blocks, installation commands, verified content used, omitted content, changed files, and check results.`
			}
		},
		{
			id: "page-review",
			title: "Review and rebuild weak sections",
			goal: "Replace only the sections that block comprehension, navigation, or conversion.",
			code: {
				filename: "Page review prompt",
				lang: "markdown",
				filecode: `Use /svelte-efferd.

## Goal

Review the current page and replace only the sections with a clear content, interaction, responsiveness, or accessibility problem.

## Project context

- Inspect the full page, nearby routes, shared components, content, and existing user actions.
- Read https://sv-efferd.pages.dev/llms.txt.
- Use https://sv-efferd.pages.dev/component-manifest.json to find possible replacements.
- Treat the current design tokens and working sections as constraints, not as material to replace by default.

## Find the blocks

Start with a short audit. Name each problem, its effect on the user, and whether a component replacement is necessary.

For every section that needs replacement, shortlist up to three blocks. Include each component name, preview URL, and the specific problem it solves. Keep sections that already work.

## Build

Install only the selected replacements using their exact registry URLs.

Preserve real content, routes, analytics, actions, and working interactions. Adapt the blocks to the current visual system. Do not turn the page into a catalog of unrelated blocks or change its visual direction without a concrete reason.

## Check

Compare the page before and after each replacement. Test narrow screens, long content, keyboard navigation, visible focus, heading order, reduced motion, and layout stability. Confirm that every replacement fixes the named problem without removing useful behavior.

Run the project formatter, type checker, and relevant tests.

## Report

List the audit findings, kept sections, replaced sections, installation commands, changed files, and check results.`
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
			<CodeFrame code={usageExample} wrap />
		</div>
	</section>

	<section aria-labelledby="agent-references" class="mt-12">
		<Markdown.H2 id="agent-references">Agent references</Markdown.H2>
		<Markdown.Paragraph>
			Use the <Markdown.Link href="/llms.txt">llms.txt guide</Markdown.Link> for project instructions
			and the
			<Markdown.Link href="/component-manifest.json">component manifest</Markdown.Link>
			to find blocks, previews, and install URLs.
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
					<CodeFrame code={prompt.code} wrap />
				</div>
			</article>
		{/each}
	</section>

	{#snippet footer()}
		<DocsPagination previous={{ title: "Usage", href: "/docs/usage" }} />
	{/snippet}
</DocsPage>
