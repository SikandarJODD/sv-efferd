# Implementation guide

## Find the closest source

Read the exact chart's Markdown page first. It includes the install command, basic composition,
focused examples, API tables, and links to related UI primitives. Use `llms.txt` to discover pages
and `llms-full.txt` when broad comparison is useful.

Examples are intentionally narrow: default geometry, variants, curves, stacks, loading, selection,
animation, dots, legends, tooltips, brushes, gradients, and dither are demonstrated independently.
Blocks are complete dashboard compositions with supporting values, labels, and responsive layout.

When an agent has repository access, the authored examples live under
`src/lib/registry/examples/{layerchart,echarts}/` and blocks under
`src/lib/registry/blocks/{layerchart,echarts}/`. Consumer imports must still follow the public docs,
not those internal registry paths.

## Install and import

Install one provider-specific family:

```bash
npx shadcn-svelte@latest add https://evilcharts-sv.vercel.app/r/layerchart-area-chart.json
```

The registry resolves declared dependencies automatically and installs application-owned source
under `$lib/components/evilcharts/{charts,ui,blocks}`. The installed component normally imports
from a path like:

```ts
import { EvilAreaChart } from '$lib/components/evilcharts/charts/layerchart-area-chart/index.js';
import type { ChartConfig } from '$lib/components/evilcharts/ui/layerchart-chart/index.js';
```

For ECharts, use the `echarts-` registry item and `ECharts*Chart` root shown on its page, and import
`ChartConfig` from `$lib/components/evilcharts/ui/echarts-chart/index.js`. Do not install both
versions automatically. Inspect the installed chart's `index.ts` when you need its exact public
compound exports.

## Compose a chart

Define data and `chartConfig`, then put only the visible parts needed inside the root:

```svelte
<script lang="ts">
	import { EvilAreaChart } from '$lib/components/evilcharts/charts/layerchart-area-chart/index.js';
	import type { ChartConfig } from '$lib/components/evilcharts/ui/layerchart-chart/index.js';

	const data = [
		{ month: 'January', desktop: 186, mobile: 80 },
		{ month: 'February', desktop: 305, mobile: 200 }
	];

	const chartConfig = {
		desktop: {
			label: 'Desktop',
			colors: { light: ['#047857'], dark: ['#10b981'] }
		},
		mobile: {
			label: 'Mobile',
			colors: { light: ['#be123c'], dark: ['#f43f5e'] }
		}
	} satisfies ChartConfig;
</script>

<EvilAreaChart {data} config={chartConfig} accessibility={{ label: 'Monthly traffic by device' }}>
	<EvilAreaChart.Grid />
	<EvilAreaChart.XAxis dataKey="month" />
	<EvilAreaChart.Legend />
	<EvilAreaChart.Tooltip />
	<EvilAreaChart.Area dataKey="desktop" variant="gradient" />
	<EvilAreaChart.Area dataKey="mobile" variant="gradient" />
</EvilAreaChart>
```

Use the page's source rather than this structural example when exact data, variants, interactions,
or layout matter.

## Interaction and state

Add `isClickable` only to the documented series or legend parts. Handle the root selection callback
shown on that family page. Some roots support controlled selection; verify the exact prop and its
`undefined` versus `null` semantics in the API table instead of guessing.

Use `isLoading` on the root for loading UI. Give the chart one accessible name with either
`accessibility.label` or `accessibility.labelledBy`. When it needs more context, add either
`description` or `describedBy` separately. Preserve keyboard-operable series selection,
`aria-pressed`, ECharts' screen-reader controls, transparent SVG interaction targets, and keyboard
brush handles when customizing installed source.

## Rendering and motion

- Keep chart geometry stable during purely visual animation.
- Respect `prefers-reduced-motion`; do not add a second animation system around the chart.
- LayerChart motion uses `@humanspeak/svelte-motion`; ECharts uses its native animation engine.
  Use `animationType="none"` or ECharts `animation={false}` only when the exact API table exposes
  that prop. Otherwise rely on the component's built-in reduced-motion behavior.
- Use ECharts `renderer="svg"` only when SVG output is specifically useful; Canvas is its default.
- Use Dither Kit-derived rendering only through the documented chart props and preserve its credit
  when redistributing adapted source.
- Verify tooltips, legends, brushes, selection, loading, light/dark themes, and the actual responsive
  container after customization.

## Debugging order

1. Confirm the registry item, installed dependencies, and import path match the provider.
2. Confirm every compound child belongs to the same root and provider.
3. Confirm data and config follow the family mapping: Cartesian and Radar series keys, Pie and
   Radial category names, or Sankey node names. Each config `colors` object needs a valid `light` or
   `dark` array. Sankey link endpoints must be integer node indexes, values must be finite and
   non-negative, and the graph must be acyclic; both providers render an empty graph for a
   recognized validation failure.
4. Compare the current page's API table and closest example.
5. Type-check, then inspect the browser console and the chart container's measured size.
6. Exercise loading, tooltips, selection, keyboard use, reduced motion, and brushes where relevant
   at desktop and mobile sizes in both themes.
7. For library internals, consult LayerChart, ECharts, or `@humanspeak/svelte-motion` documentation
   only after identifying which provider owns the failing behavior.
