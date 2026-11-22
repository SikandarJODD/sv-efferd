<script lang="ts">
	import { asset } from "$app/paths";
	import { JsonLd, MetaTags } from "svelte-meta-tags";

	type CollectionItem = {
		id: string;
		title: string;
		description: string;
	};

	type Props = {
		title: string;
		desc: string;
		link?: string;
		items?: readonly CollectionItem[];
	};

	let siteName = "Svelte Efferd Blocks";
	let siteUrl = "https://sv-efferd.pages.dev";
	let titleTemplate = `%s | ${siteName}`;
	let locale = "en_US";
	let twitterHandle = "@Sikandar_Bhide";
	let ogImageUrl = new URL(asset("og.png"), siteUrl).toString();

	let { title, desc, link, items = [] }: Props = $props();

	function normalizePath(path: string) {
		return path.startsWith("/") ? path : `/${path}`;
	}

	let canonical = $derived(link ? new URL(normalizePath(link), siteUrl).toString() : undefined);
	let fullTitle = $derived(`${title} | ${siteName}`);
	let schema = $derived.by(() => {
		if (!canonical) return null;

		const organizationId = `${siteUrl}/#organization`;
		const websiteId = `${siteUrl}/#website`;
		const pageId = `${canonical}#webpage`;
		const itemListId = `${canonical}#item-list`;

		return {
			"@graph": [
				{
					"@type": "Organization",
					"@id": organizationId,
					name: "Svelte Efferd",
					url: `${siteUrl}/`,
					logo: {
						"@type": "ImageObject",
						url: new URL(asset("favicon.svg"), siteUrl).toString()
					},
					sameAs: [
						"https://github.com/SikandarJODD/sv-efferd",
						"https://x.com/Sikandar_Bhide"
					]
				},
				{
					"@type": "WebSite",
					"@id": websiteId,
					name: siteName,
					url: `${siteUrl}/`,
					inLanguage: "en",
					publisher: { "@id": organizationId }
				},
				{
					"@type": "BreadcrumbList",
					"@id": `${canonical}#breadcrumb`,
					itemListElement: [
						{
							"@type": "ListItem",
							position: 1,
							name: "Home",
							item: `${siteUrl}/`
						},
						{
							"@type": "ListItem",
							position: 2,
							name: title,
							item: canonical
						}
					]
				},
				{
					"@type": "CollectionPage",
					"@id": pageId,
					name: title,
					description: desc,
					url: canonical,
					inLanguage: "en",
					isPartOf: { "@id": websiteId },
					breadcrumb: { "@id": `${canonical}#breadcrumb` },
					mainEntity: { "@id": itemListId },
					publisher: { "@id": organizationId }
				},
				{
					"@type": "ItemList",
					"@id": itemListId,
					name: `${title} list`,
					numberOfItems: items.length,
					itemListElement: items.map((item, index) => ({
						"@type": "ListItem",
						position: index + 1,
						item: {
							"@type": "WebPageElement",
							"@id": `${canonical}#${item.id}`,
							name: item.title,
							description: item.description,
							url: `${canonical}#${item.id}`,
							isPartOf: { "@id": pageId }
						}
					}))
				}
			]
		};
	});
</script>

<MetaTags
	{title}
	description={desc}
	{titleTemplate}
	{canonical}
	openGraph={{
		type: "website",
		title: fullTitle,
		description: desc,
		images: [
			{
				url: ogImageUrl,
				alt: `${fullTitle} preview`,
				width: 1200,
				height: 630,
				type: "image/png"
			}
		],
		siteName,
		url: canonical,
		locale
	}}
	twitter={{
		cardType: "summary_large_image",
		title: fullTitle,
		description: desc,
		image: ogImageUrl,
		imageAlt: `${fullTitle} preview`,
		site: twitterHandle,
		creator: twitterHandle
	}}
/>
{#if schema}
	<JsonLd {schema} />
{/if}
