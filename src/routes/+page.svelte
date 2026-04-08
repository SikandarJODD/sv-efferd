<script lang="ts">
	import { asset } from "$app/paths";
	import { MetaTags, JsonLd } from "svelte-meta-tags";
	import BlocksLandingPage from "$lib/components/blocks/landing/blocks-landing-page.svelte";
	import favicon from "$lib/assets/favicon.svg";

	const siteName = "Svelte Efferd Blocks";
	const siteUrl = "https://sv-efferd.pages.dev";
	const canonicalUrl = `${siteUrl}/`;
	const title = "Svelte Efferd Blocks | Marketing Blocks for Shadcn-Svelte";
	const description =
		"Browse beautiful shadcn-svelte marketing blocks for landing pages, hero sections, CTAs, pricing, testimonials, FAQs, headers, footers, and more.";
	const keywords = [
		"shadcn-svelte marketing blocks",
		"Svelte marketing blocks",
		"shadcn blocks for marketing",
		"landing page blocks for Svelte",
		"hero sections",
		"CTA blocks",
		"pricing sections",
		"testimonial sections",
		"FAQ sections",
		"header blocks",
		"footer blocks",
		"contact sections"
	] as const;
	const categoryNames = [
		"Hero sections",
		"CTA sections",
		"Pricing sections",
		"Testimonial sections",
		"FAQ sections",
		"Blog sections",
		"Contact sections",
		"Header sections",
		"Footer sections",
		"Logo cloud sections",
		"Integration sections",
		"Feature sections"
	] as const;
	const ogImageUrl = new URL(asset("/og.png"), siteUrl).toString();
	const logoUrl = new URL(favicon, siteUrl).toString();
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
						name: "Marketing blocks"
					},
					{
						"@type": "Thing",
						name: "shadcn-svelte components"
					},
					{
						"@type": "Thing",
						name: "Svelte landing page sections"
					}
				],
				primaryImageOfPage: {
					"@type": "ImageObject",
					url: ogImageUrl
				},
				mainEntity: {
					"@type": "ItemList",
					name: "Marketing block categories",
					numberOfItems: categoryNames.length,
					itemListElement: categoryNames.map((name, index) => ({
						"@type": "ListItem",
						position: index + 1,
						name
					}))
				},
				publisher: {
					"@id": `${canonicalUrl}#organization`
				}
			}
		]
	};
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

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
				alt: "Svelte Efferd marketing blocks preview",
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
		imageAlt: "Svelte Efferd marketing blocks preview",
		site: "@Sikandar_Bhide",
		creator: "@Sikandar_Bhide"
	}}
/>
<JsonLd schema={jsonLdSchema} />

<BlocksLandingPage />
