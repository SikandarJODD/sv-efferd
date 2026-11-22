import { blockCategories } from "#lib/blocks/categories.js";
import type { RequestHandler } from "./$types";

export const prerender = true;

const siteUrl = "https://sv-efferd.pages.dev";
const absoluteUrl = (pathname: string) => new URL(pathname, siteUrl).href;

const categoryLinks = blockCategories
	.map(
		(category) =>
			`- [${category.label}](${absoluteUrl(`/blocks/${category.slug}`)}): ${category.description}`
	)
	.join("\n");

const content = `# Svelte Efferd

> Copy-ready Svelte blocks installed through the shadcn-svelte registry.

Svelte Efferd provides editable page sections and application layouts for Svelte projects. Each block has a browser preview and a registry endpoint.

- Site: ${siteUrl}
- Source: https://github.com/SikandarJODD/sv-efferd

## Features

- Responsive blocks
- Free and open source
- 89 blocks across 19 categories

## Documentation

- [Introduction](${absoluteUrl("/docs/introduction")})
- [Installation](${absoluteUrl("/docs/installation")})
- [Usage](${absoluteUrl("/docs/usage")})
- [Svelte Efferd skill](${absoluteUrl("/docs/skills")}): Install the agent skill and copy task-specific prompts.

## Machine-readable data

- [Component manifest](${absoluteUrl("/component-manifest.json")}): Categories, tags, preview links, install commands, dependencies, and files for every public block.
- [Registry index](${absoluteUrl("/r/index.json")}): All installable registry items.

## Categories

${categoryLinks}

## Install a block

Use the registry URL from the component manifest:

\`\`\`sh
pnpm dlx shadcn-svelte@latest add ${absoluteUrl("/r/hero-one.json")}
\`\`\`

## Guidance for agents

1. Read the component manifest and filter by category, layout, alignment, use case, visual traits, or responsive behavior.
2. Open the component's preview URL before choosing it.
3. Use its exact install command or registry URL. Do not invent component names.
4. Treat installed files as project source that can be edited.

## Issues and ideas

- [Open a GitHub issue](https://github.com/SikandarJODD/sv-efferd/issues) for bugs.
- [DM @Sikandar_Bhide on X](https://x.com/Sikandar_Bhide) with ideas for new blocks or features.
`;

export const GET: RequestHandler = () =>
	new Response(content, {
		headers: {
			"cache-control": "public, max-age=3600",
			"content-type": "text/plain; charset=utf-8"
		}
	});
