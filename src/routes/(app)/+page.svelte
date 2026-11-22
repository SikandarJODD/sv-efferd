<script lang="ts">
	import { asset } from "$app/paths";
	import { blockCategories } from "#lib/blocks/categories.js";
	import BlockCatalog from "#lib/components/home/block-catalog.svelte";
	import Credits from "#lib/components/home/credits.svelte";
	import Features from "#lib/components/home/features.svelte";
	import Hero from "#lib/components/home/hero.svelte";
	import Sponsors from "#lib/components/home/sponsors.svelte";
	import { Separator } from "#lib/components/ui/separator/index.js";
	import { MetaTags, JsonLd } from "svelte-meta-tags";

	const siteName = "Svelte Efferd Blocks";
	const siteUrl = "https://sv-efferd.pages.dev";
	const canonicalUrl = `${siteUrl}/`;
	const title = "Svelte Blocks for shadcn-svelte | Svelte Efferd";
	const description =
		"Browse 80+ open-source Svelte blocks built with Tailwind CSS and shadcn-svelte. Preview each block, install it from the registry, and edit the source.";
	const keywords = [
		"Svelte blocks",
		"shadcn-svelte blocks",
		"Svelte UI components",
		"Svelte landing page sections",
		"Svelte dashboards"
	] as const;
	const ogImageUrl = new URL(asset("og.png"), siteUrl).toString();
	const logoUrl = new URL("/favicon.svg", siteUrl).toString();
	const jsonLdSchema = {
		"@graph": [
			{
				"@type": "Organization",
				"@id": `${canonicalUrl}#organization`,
				name: "Svelte Efferd",
				url: canonicalUrl,
				logo: {
					"@type": "ImageObject",
					url: logoUrl
				},
				sameAs: [
					"https://github.com/SikandarJODD/sv-efferd",
					"https://x.com/Sikandar_Bhide"
				]
			},
			{
				"@type": "WebSite",
				"@id": `${canonicalUrl}#website`,
				url: canonicalUrl,
				name: siteName,
				description,
				alternateName: ["Svelte Efferd", "Efferd Blocks"],
				inLanguage: "en",
				publisher: {
					"@id": `${canonicalUrl}#organization`
				}
			},
			{
				"@type": "CollectionPage",
				"@id": `${canonicalUrl}#webpage`,
				url: canonicalUrl,
				name: title,
				description,
				isPartOf: {
					"@id": `${canonicalUrl}#website`
				},
				about: [
					{
						"@type": "Thing",
						name: "Svelte UI blocks"
					},
					{
						"@type": "Thing",
						name: "shadcn-svelte components"
					}
				],
				primaryImageOfPage: {
					"@type": "ImageObject",
					url: ogImageUrl
				},
				mainEntity: {
					"@type": "ItemList",
					name: "Svelte block categories",
					numberOfItems: blockCategories.length,
					itemListElement: blockCategories.map((category, index) => ({
						"@type": "ListItem",
						position: index + 1,
						item: {
							"@type": "WebPageElement",
							name: `${category.label} blocks`,
							description: category.description,
							url: new URL(`/blocks/${category.slug}`, siteUrl).toString()
						}
					}))
				},
				publisher: {
					"@id": `${canonicalUrl}#organization`
				}
			}
		]
	};
</script>

<MetaTags
	{title}
	{description}
	{keywords}
	openGraph={{
		type: "website",
		title,
		description,
		images: [
			{
				url: ogImageUrl,
				alt: "Svelte Efferd blocks preview",
				width: 1200,
				height: 630,
				type: "image/png"
			}
		],
		siteName,
		url: canonicalUrl,
		locale: "en_US"
	}}
	canonical={canonicalUrl}
	twitter={{
		cardType: "summary_large_image",
		title,
		description,
		image: ogImageUrl,
		imageAlt: "Svelte Efferd blocks preview",
		site: "@Sikandar_Bhide",
		creator: "@Sikandar_Bhide"
	}}
/>
<JsonLd schema={jsonLdSchema} />

<Hero />
<BlockCatalog />
<Separator />
<Sponsors />
<Separator />
<Credits />
<Separator />
<Features />
