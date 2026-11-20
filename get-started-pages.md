# Get started pages implementation plan

Build three small documentation pages at `/docs/introduction`, `/docs/installation`, and `/docs/usage`. Each page should use the existing site shell, a centered reading column, the Markdown primitives, and one shared bottom navigation. Keep prose left aligned inside the centered column. These are documentation pages, not marketing landing pages.

## Phase 0: Base components and page contract

- [x] `DocsPage` at `src/lib/components/docs/docs-page.svelte`: shared centered page frame with a `max-w-3xl` reading column, responsive padding, header, content, and footer snippets.
- [x] `DocsPagination` at `src/lib/components/docs/docs-pagination.svelte`: accessible previous and next links with optional `previous` and `next` props. Keep it simple with a top border and no card styling.
- [x] `DocsSeo` at `src/lib/components/docs/docs-seo.svelte`: shared `MetaTags` and `JsonLd` setup. Accept `title`, `description`, `path`, and `keywords`, then create canonical, Open Graph, Twitter, and breadcrumb metadata.
- [ ] Use the existing Markdown components for all headings, paragraphs, lists, links, and steps. Use `CodeSnippet` or `CodeFrame` for code and `PMCommand variant="secondary"` for commands.
- [ ] Add `export const prerender = true` in a `+page.ts` beside each docs page.
- [x] Keep the base style restrained: left-aligned content, border-based separation, clear focus states, and no gradients, glass effects, decorative badges, or entrance animation.
- [x] Keep filenames in kebab case. Add shared abstractions only when multiple pages need them; keep the three illustrations as simple standalone components without extra wrappers.

### Planned folder structure

```text
src/
├── lib/
│   └── components/
│       └── docs/
│           ├── docs-page.svelte
│           ├── docs-pagination.svelte
│           ├── docs-seo.svelte
│           └── usage/
│               ├── block-picker-illustration.svelte
│               ├── package-manager-illustration.svelte
│               └── copy-command-illustration.svelte
└── routes/
    └── (app)/
        └── docs/
            ├── introduction/
            │   ├── +page.svelte
            │   └── +page.ts
            ├── installation/
            │   ├── +page.svelte
            │   └── +page.ts
            └── usage/
                ├── +page.svelte
                └── +page.ts
```

## Phase 1: Introduction page

- [x] Create `src/routes/(app)/docs/introduction/+page.svelte` and its `+page.ts`.
- [x] Use the title `Svelte Efferd Blocks` and the short description: `A Svelte port of Efferd's reusable blocks, built for shadcn-svelte projects.`
- [x] Open with one compact paragraph explaining that the project ports selected Efferd blocks to Svelte and ships editable source through the shadcn-svelte registry.
- [x] Link `Efferd Blocks` with `FaviconLink` so the source project is named without turning the introduction into a promo section.
- [x] Add a brief `What you get` section as a plain Markdown list: browsable block previews, package-manager installation commands, and Svelte source copied into the user's project.
- [x] Add a small `Credits` section near the end. Credit the original work to Shaban with a favicon link, then state `Ported to Svelte by Bhide Svelte` with `https://bhide.dev` rendered through `FaviconLink`. Include the repository link only if it helps the reader inspect or report an issue.
- [x] Keep credits visually subordinate with smaller text and simple spacing. Do not put each credit in a card.
- [x] Add bottom navigation with no previous link and `Installation` as the next page.
- [x] SEO title: `Svelte Efferd Blocks introduction`. Target keywords: `Svelte Efferd Blocks`, `Efferd Blocks Svelte port`, `shadcn-svelte blocks`, and `Svelte UI blocks`.

## Phase 2: Installation page

- [x] Create `src/routes/(app)/docs/installation/+page.svelte` and its `+page.ts`.
- [x] Use the title `Install Svelte Efferd` and the description: `Set up a SvelteKit project, add shadcn-svelte, then install an Efferd block from the registry.`
- [x] Build the page body with `Markdown.Steps` and three `Markdown.Step` entries. Each step needs one short explanation followed by the relevant command or code. Avoid repeating the step title in the paragraph.
- [x] Step 1, `Create a SvelteKit project`: show the current Svelte CLI command in a secondary `PMCommand`, then mention that an existing SvelteKit project can skip this step.
- [x] Step 2, `Set up shadcn-svelte`: show the shadcn-svelte initialization command in a secondary `PMCommand`. State the assumptions that matter for the blocks, including Tailwind CSS and the project's configured import alias.
- [x] Step 3, `Add a block`: show a real registry example such as `hero-one` with a secondary `PMCommand`. Use the production registry URL and explain that the CLI writes source files into the user's project.
- [x] Add a short `Use the component` section after the steps. Use `CodeSnippet` for a minimal Svelte import and render example, with no unrelated boilerplate.
- [x] Keep commands copyable and ensure long registry URLs scroll horizontally without widening the reading column.
- [x] Add bottom navigation from `Introduction` to `Usage`.
- [x] SEO title: `Install Svelte Efferd Blocks`. Target keywords: `install Svelte Efferd`, `shadcn-svelte registry`, `SvelteKit blocks`, `shadcn-svelte CLI`, and `Svelte component installation`.

## Phase 3: Usage page

- [ ] Create `src/routes/(app)/docs/usage/+page.svelte` and its `+page.ts`.
- [ ] Use the title `Use a block` and the description: `Choose a block, copy its install command, and edit the Svelte source in your project.`
- [ ] Keep this page shorter than Installation. Use three numbered sections that match the actual block catalog flow.
- [ ] Add three focused illustrations under `src/lib/components/docs/usage/`. Build them from semantic HTML and existing UI styles so they stay crisp in both themes and do not require new image assets.
- [ ] Illustration 1, `Choose a block`: depict a small block preview with the block title and relevant controls. Mark the selected block without reproducing the whole site chrome.
- [ ] Illustration 2, `Pick a package manager`: depict the install control with `pnpm` selected and make the package-manager selector the clear point of attention.
- [ ] Illustration 3, `Copy and run the command`: depict the copy action and a short registry command, then connect it to the local component file the CLI adds.
- [ ] Wrap each visual in `<figure>` and provide a useful `<figcaption>`. Treat decorative shapes and cursor markers as `aria-hidden`; the surrounding heading and text must contain the full instruction.
- [ ] Use one border-based surface system for the illustrations. Match the real block toolbar proportions, avoid browser-window dots, and do not add fake screenshots or floating callout bubbles.
- [ ] Follow the illustrations with a compact `CodeFrame` named for a real Svelte file, showing the installed component imported and rendered. Keep the example consistent with the registry output path.
- [ ] Add one closing note that the installed source belongs to the user's app and can be edited like any other Svelte component.
- [ ] Add bottom navigation with `Installation` as previous and no next link.
- [ ] SEO title: `Use Svelte Efferd Blocks`. Target keywords: `use Svelte Efferd blocks`, `Svelte block registry`, `copy Svelte components`, `shadcn-svelte blocks`, and `Svelte component source`.

## Phase 4: Quality, SEO, and verification

- [ ] Run `pnpm format`, then `pnpm check`, and fix only issues introduced by the docs work.
- [ ] Run `pnpm build` and confirm the static adapter emits all three docs routes without client-only rendering errors.
- [ ] Inspect the generated HTML for a unique title, description, canonical URL, keyword metadata, Open Graph tags, Twitter tags, JSON-LD, one `<h1>`, and indexable body copy on each page.
- [ ] Add `/docs/introduction`, `/docs/installation`, and `/docs/usage` to the sitemap if the sitemap is maintained by hand. Remove or redirect stale docs URLs only after confirming they are not still in use.
- [ ] Test bottom navigation and sidebar links with a keyboard. Confirm visible focus, logical tab order, descriptive link text, and no focus trapped inside package-manager tabs or copy controls.
- [ ] Check the three pages at narrow mobile, tablet, and desktop widths. The reading column should remain centered, while prose, steps, commands, code, and illustrations stay left aligned and free of horizontal page overflow.
- [ ] Check light and dark themes. Use one border or surface cue at a time, maintain readable contrast, and verify that code highlighting and illustration emphasis do not depend on color alone.
- [ ] Test with JavaScript disabled against the production build. Headings, prose, links, code examples, figures, and previous or next navigation must remain readable.
- [ ] Review the final copy for short sentences, concrete claims, sentence-case headings, and consistent terms. Use `block`, `registry command`, and `source` consistently instead of rotating through synonyms.
- [ ] Final scope check: no marketing hero, no extra feature grid, no fabricated claims, no new animation, and no content beyond what a reader needs to understand, install, and use one block.

## Completion criteria

- [ ] All three routes are prerendered and reachable from the existing Get Started sidebar links.
- [ ] Every page uses the shared docs frame, SEO component, Markdown primitives, and bottom navigation.
- [ ] Installation commands use the secondary `PMCommand` variant.
- [ ] Code examples use `CodeSnippet` or `CodeFrame` from the existing code component folder.
- [ ] The Introduction page uses `FaviconLink` for Efferd and Bhide Svelte credits.
- [ ] The Usage page contains exactly three purposeful, accessible illustrations.
- [ ] The production build, metadata checks, keyboard pass, and responsive pass succeed.
