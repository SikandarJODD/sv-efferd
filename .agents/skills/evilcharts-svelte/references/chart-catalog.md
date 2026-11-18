# Chart catalog

Use this catalog to choose the family and valid compound parts. Exact props and variants remain in
the current provider page linked for each row.

| Family   | Use it for                                                | LayerChart root     | ECharts root           | Compound parts                                                                                     |
| -------- | --------------------------------------------------------- | ------------------- | ---------------------- | -------------------------------------------------------------------------------------------------- |
| Area     | Magnitude over an ordered axis, stacking, filled trends   | `EvilAreaChart`     | `EChartsAreaChart`     | `Area`, `Dot`, `ActiveDot`, `XAxis`, `YAxis`, `Grid`, `Tooltip`, `Legend`, `Brush`                 |
| Line     | Trends, comparisons, buffers, animated strokes            | `EvilLineChart`     | `EChartsLineChart`     | `Line`, `Dot`, `ActiveDot`, `XAxis`, `YAxis`, `Grid`, `Tooltip`, `Legend`, `Brush`                 |
| Bar      | Category comparison, stacks, percentages, horizontal bars | `EvilBarChart`      | `EChartsBarChart`      | `Bar`, `XAxis`, `YAxis`, `Grid`, `Tooltip`, `Legend`, `Brush`                                      |
| Composed | Bars and lines sharing one cartesian plot                 | `EvilComposedChart` | `EChartsComposedChart` | `Bar`, `Line`, `Dot`, `ActiveDot`, `XAxis`, `YAxis`, `Grid`, `Tooltip`, `Legend`, `Brush`          |
| Radar    | Multivariate profiles on polar axes                       | `EvilRadarChart`    | `EChartsRadarChart`    | `Radar`, `Dot`, `ActiveDot`, `PolarGrid`, `PolarAngleAxis`, `PolarRadiusAxis`, `Tooltip`, `Legend` |
| Pie      | Part-to-whole, donuts, labels, sector selection           | `EvilPieChart`      | `EChartsPieChart`      | `Pie`, `Label`, `Background`, `Tooltip`, `Legend`                                                  |
| Radial   | Progress rings and concentric comparisons                 | `EvilRadialChart`   | `EChartsRadialChart`   | `RadialBar`, `Tooltip`, `Legend`                                                                   |
| Sankey   | Directed flow between named nodes                         | `EvilSankeyChart`   | `EChartsSankeyChart`   | `Node`, `NodeLabel`, `Link`, `Tooltip`                                                             |

## Documentation routes

For a family slug such as `area-chart`, use:

- LayerChart guide: `https://evilcharts-sv.vercel.app/docs/layerchart/{family}`
- LayerChart Markdown: `https://evilcharts-sv.vercel.app/docs/layerchart/{family}.md`
- LayerChart blocks: `https://evilcharts-sv.vercel.app/docs/layerchart/{family}/blocks`
- ECharts guide: `https://evilcharts-sv.vercel.app/docs/echarts/{family}`
- ECharts Markdown: `https://evilcharts-sv.vercel.app/docs/echarts/{family}.md`
- ECharts blocks:
  `https://evilcharts-sv.vercel.app/docs/echarts/{family}/blocks`

Valid family slugs are `area-chart`, `line-chart`, `bar-chart`, `composed-chart`, `radar-chart`,
`pie-chart`, `radial-chart`, and `sankey-chart`.

## Provider-specific capabilities

LayerChart renders Svelte-owned SVG and is the default for inspectability, CSS theming, and
design-led interfaces. Its motion is implemented with `@humanspeak/svelte-motion`.

ECharts renders Canvas by default and accepts `renderer="svg"` on chart roots. Prefer it for dense
data, frequent updates, or integration with an existing ECharts workflow.

Both providers expose the same family-level composition model, but their exact props are not
assumed to be interchangeable. A page can render both providers in separate roots; a root cannot
contain parts from the other provider.

ECharts children compile provider options; they are not promises of matching DOM elements. Brushes
belong to the Cartesian Area, Line, Bar, and Composed families. Ordered-dither rendering is
available for Area, Line, Bar, Composed, Pie, and Radar, not Radial or Sankey.

## Examples and blocks

Focused registry examples use `ex-*` item names and demonstrate one feature at a time. Public block
item names omit the source file's `b-` prefix. Both providers publish blocks for all eight chart
families. Each LayerChart block has an ECharts counterpart with the same data, palette, labels, and
supporting composition; ECharts also includes its provider-specific Peak Week block. Always copy the
exact item name from the provider page.
