---
name: svelte-efferd
description: Find, compare, install, adapt, and verify Svelte Efferd blocks in Svelte projects. Use when a user asks for a page section or application layout such as a hero, header, pricing section, dashboard, settings page, authentication screen, or app shell; asks which Svelte Efferd block fits a product; provides an Efferd block name or preview; or wants an Efferd registry block added, customized, fixed, or reviewed. Also trigger for requests to browse or search the Svelte Efferd component catalog.
---

# Svelte Efferd

Choose a block for its content and behavior, not because its preview looks impressive. Svelte Efferd blocks are copied into the project through the shadcn-svelte registry. The installed source belongs to the project and should be adapted.

## Workflow

Follow this sequence. Do not skip directly to installation.

### 1. Inspect the project

Read `package.json`, `components.json`, the lockfile, the relevant route, and nearby components before recommending a block.

- Stop if the project is not Svelte. Explain that Svelte Efferd blocks target Svelte.
- Reuse the project's package manager, aliases, global CSS, UI primitives, and component conventions.
- Check whether the requested block or an equivalent local section already exists. Do not install a duplicate.
- Treat discovery-only requests as read-only. Install only when the user asks to add, build, implement, or install.
- If `components.json` is missing, explain that shadcn-svelte must be initialized. Do not run `init` without approval because it creates foundational project configuration.

### 2. Turn the request into selection criteria

Extract the requirements before searching:

1. Section or page type
2. Content that must appear
3. Required interactions
4. Layout and alignment
5. Responsive behavior
6. Visual traits that follow from the product's existing design

Infer criteria from the route and nearby UI when possible. Ask one focused question only when the missing answer would change the component category or required behavior.

### 3. Search the live catalog

Read `https://sv-efferd.pages.dev/component-manifest.json` and confirm the response is JSON with `schemaVersion` and `components`. It is the preferred source for public names, metadata, previews, dependencies, files, and registry URLs. When working inside the Svelte Efferd repository, use `static/component-manifest.json` instead.

If the public manifest is unavailable or returns HTML, read `https://sv-efferd.pages.dev/r/index.json` and the relevant category page at `https://sv-efferd.pages.dev/blocks/<category>`. Use only component names present in the registry index, and inspect previews linked from the category page. Do not treat an HTML fallback as manifest data.

Filter in this order:

1. Match `category` and required `useCases`. Reject wrong-purpose blocks.
2. Match required `layout`, `alignment`, and `responsive` behavior.
3. Use `visualTraits` to break ties, not to override functional fit.
4. Prefer the candidate with fewer unnecessary dependencies and less behavior to remove.

Shortlist at most three blocks. Open every shortlisted `urls.preview` before choosing. If previews cannot be opened, inspect the registry item or source and state that the choice was made without visual confirmation. Never invent a component name, API, dependency, or registry URL.

If no block fits, say so. Recommend composing smaller existing pieces or writing a project-specific section instead of forcing a poor match.

### 4. Explain the choice

Name the selected block and give the concrete reason in one or two sentences. Mention a runner-up only when it represents a meaningful tradeoff. Do not produce a decorative comparison table for an obvious choice.

### 5. Install safely

Use the selected component's exact `urls.registry` value. Build the command from the detected package manager:

```text
pnpm-lock.yaml  -> pnpm dlx shadcn-svelte@latest add <registry-url>
package-lock.json -> npx shadcn-svelte@latest add <registry-url>
bun.lock or bun.lockb -> bun x shadcn-svelte@latest add <registry-url>
yarn.lock -> yarn dlx shadcn-svelte@latest add <registry-url>
```

Honor an explicit `packageManager` field or user instruction over lockfile detection. If multiple lockfiles conflict, ask which package manager is authoritative.

Before installation, inspect the manifest's `files`, `dependencies`, and `registryDependencies`. Warn before overwriting an existing target file. Never pass `--overwrite`, `--yes`, or `--skip-preflight` merely to suppress a prompt or error.

After installation, inspect the actual diff. The CLI output is not proof that the block integrated correctly.

### 6. Adapt the copied source

Make the block belong to the product:

- Replace demo copy, links, images, logos, metrics, and names with user-provided or existing project content.
- Never fabricate customers, testimonials, usage numbers, awards, or company logos. Remove unsupported proof.
- Preserve the project's tokens, type choices, radius scale, icon set, and spacing conventions. Do not add an unrelated gradient, glow, glass effect, or decorative badge.
- Keep the block's useful responsive behavior. Test long text, narrow screens, empty values, and missing optional media.
- Use semantic headings, real links, labelled controls, keyboard access, visible focus, and reduced-motion behavior.
- Do not add motion to static content. Keep existing animation only when it explains change or supports interaction. Avoid `transition-all`, layout-bound animation, and permanent `will-change`.
- Give images and video explicit dimensions. Pause continuous off-screen work and do not autoplay decorative video without a user benefit.

Do not replace global configuration to make one block work. Adapt the block to the project unless the user explicitly requests a broader design-system change.

### 7. Verify

Run the project's existing formatter, type checker, and relevant build or tests. Then inspect the rendered route when browser tooling is available.

Verify all of the following:

- The new imports resolve and no generated dependency is missing.
- The block renders in the intended route with real content.
- Mobile layout, keyboard navigation, focus, and reduced motion work.
- No existing file was unintentionally overwritten.
- Animation uses explicit properties and media reserves its layout space.

Fix failures caused by the installation or adaptation. Do not hide them with broad configuration changes or unrelated refactors.

## Response format

Lead with the result. Include the chosen block, why it fits, the command used or proposed, the files added or changed, and the verification result. If work is blocked, name the missing prerequisite and the smallest next action.

## Final check

Before finishing, ask:

- Did the manifest and preview support the choice?
- Did I install only what the user authorized?
- Does the result use real product content instead of demo proof?
- Does it follow the existing project rather than impose a new visual style?
- Did I verify the installed source instead of trusting the CLI?
