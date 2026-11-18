---
name: evilcharts-svelte
description: Install, compose, customize, or debug EvilCharts SV in Svelte 5. Use for provider selection, chart families, compound components, variants, examples, dashboard blocks, registry commands, accessibility, motion, or Dither Kit rendering with LayerChart or Apache ECharts.
---

# EvilCharts for Svelte

Use this skill for the Svelte 5 port by miel at
https://github.com/mielsense/evilcharts-sv. For the original React project, use
https://github.com/legions-developer/evilcharts.

## Workflow

1. Identify the chart family and whether the surrounding code already uses LayerChart or ECharts.
2. Read the exact provider page and its Markdown mirror before choosing props or imports.
3. Install the provider-specific registry item, then compose only parts exported by that root.
4. Start from the closest documented example or block. Preserve its data shape and `chartConfig`
   contract while adapting content and presentation.
5. Add an accessible label, respect reduced motion, and verify the result in both themes at its
   real container size.

Installed copies bundle `references/chart-catalog.md` for choosing a family or compound part and
`references/implementation-guide.md` for writing or changing a chart. HTTP-only loaders can read
the same [chart catalog](https://evilcharts-sv.vercel.app/.well-known/agent-skills/evilcharts-svelte/references/chart-catalog.md)
and [implementation guide](https://evilcharts-sv.vercel.app/.well-known/agent-skills/evilcharts-svelte/references/implementation-guide.md).

## Read the current docs

Start with the machine-readable docs. Do not rely on remembered component APIs.

- Page index: https://evilcharts-sv.vercel.app/llms.txt
- Full snapshot: https://evilcharts-sv.vercel.app/llms-full.txt
- Documentation MCP endpoint: https://evilcharts-sv.vercel.app/mcp
- LayerChart pages: `https://evilcharts-sv.vercel.app/docs/layerchart/{page}.md`
- ECharts pages: `https://evilcharts-sv.vercel.app/docs/echarts/{page}.md`
- Shared chart config: https://evilcharts-sv.vercel.app/docs/chart-config.md

The eight families are Area, Line, Bar, Composed, Radar, Pie, Radial, and Sankey. Both providers
implement all eight. Read the exact chart page and its linked UI primitive pages before writing
imports or props. Never invent a prop, import path, or registry item from a similar chart.

## Choose a provider per chart

Start with LayerChart for inspectable, themeable Svelte SVG and design-led dashboards. Choose
ECharts for dense data, frequent updates, or an existing ECharts option workflow.

In practice, one project may render charts from both providers. Keep each chart root
provider-specific. Never mix compound parts from different providers inside one chart root. Install
both implementations of a chart only when the app intentionally renders both.

## Install from the registry

Use the item name shown on the exact chart page. The general command is:

```bash
npx shadcn-svelte@latest add https://evilcharts-sv.vercel.app/r/{item-name}.json
```

Core chart items follow `{provider}-{family}-chart`, where `provider` is `layerchart` or `echarts`.
Examples and blocks have their own item names, so copy those from the page rather than deriving
them. Preserve the project's existing shadcn-svelte, Tailwind, and package-manager setup. The
registry installs the selected source and its declared dependencies.

## Compose charts

EvilCharts is source installed into the project, not a separate runtime. Each compound chart root
owns its `data`, `config={chartConfig}`, selection, accessibility, and provider context. Its visible
children come from the same installed provider module.

Keep new or edited components coherent with Svelte 5. Use runes, typed `$props()`, and snippets.
Follow the import and composition examples on the exact provider page because chart parts and props
vary by family.

## Use examples and blocks correctly

The default chart page documents focused examples for variants, curves, stacks, selection,
loading, tooltips, legends, brushes, animation, and ordered dither. Its `/blocks` sibling contains
complete compositions with supporting metrics and responsive layout.

Use a focused example to learn one API feature. Use a block when the request needs a finished
dashboard module. Do not present a plain chart example as a block, and do not copy internal
`$lib/registry/...` imports into a consumer project; installed source uses
`$lib/components/evilcharts/...` paths shown in the docs.

## Guardrails

- Keep data, `config`, selection, and accessibility props on the root.
- Keep every child from the same provider and chart family as its root.
- Prefer `chartConfig` labels and colors over hard-coded legend or tooltip metadata.
- Keep config keys aligned with the family: series keys for Cartesian and Radar charts, category
  names for Pie and Radial charts, and node names for Sankey charts. Category-axis keys such as
  `month` belong in the data but normally not in `chartConfig`.
- Use `isLoading` for the provider's built-in loading treatment instead of replacing the chart.
- Treat animation as presentation: stable data should keep stable geometry, and reduced-motion
  users must receive a settled chart.
- Dither is an intentional rendering style adapted from Dither Kit. Use the documented
  `renderStyle`, `ditherVariant`, and bloom options only on families that expose them.
- Registry output is source code. After installation, customize it locally without adding an
  EvilCharts runtime package.
- Treat `@evilcharts/...` in authored docs as registry shorthand, not an npm package import.
