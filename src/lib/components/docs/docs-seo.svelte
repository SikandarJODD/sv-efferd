<script lang="ts">
	import { asset } from "$app/paths";
	import { JsonLd, MetaTags } from "svelte-meta-tags";

	type Props = {
		title: string;
		description: string;
		path: string;
		keywords: readonly string[];
	};

	const SITE_NAME = "Svelte Efferd Blocks";
	const SITE_URL = "https://sv-efferd.pages.dev";
	const DOCS_PATH = "/docs/introduction";
	const AUTHOR_NAME = "Bhide Svelte";
	const AUTHOR_URL = "https://bhide.dev";
	const TWITTER_HANDLE = "@Sikandar_Bhide";

	let { title, description, path, keywords }: Props = $props();

	const imageUrl = new URL(asset("og.png"), `${SITE_URL}/`).toString();
	const logoUrl = new URL(asset("favicon.svg"), `${SITE_URL}/`).toString();

	let canonical = $derived(getCanonicalUrl(path));
	let pathname = $derived(new URL(canonical).pathname);
	let fullTitle = $derived(`${title} | ${SITE_NAME}`);
	let normalizedKeywords = $derived.by(() => [
		...new Set(keywords.map((keyword) => keyword.trim()).filter(Boolean))
	]);
	let breadcrumbItems = $derived.by(() => {
		const items = [
			{
				"@type": "ListItem",
				position: 1,
				name: "Home",
				item: `${SITE_URL}/`
			}
		];

		if (pathname !== DOCS_PATH) {
			items.push({
				"@type": "ListItem",
				position: items.length + 1,
				name: "Docs",
				item: new URL(DOCS_PATH, SITE_URL).toString()
			});
		}

		items.push({
			"@type": "ListItem",
			position: items.length + 1,
			name: title,
			item: canonical
		});

		return items;
	});
	let schema = $derived({
		"@graph": [
			{
				"@type": "Organization",
				"@id": `${SITE_URL}/#organization`,
				name: SITE_NAME,
				url: `${SITE_URL}/`,
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
				"@id": `${SITE_URL}/#website`,
				name: SITE_NAME,
				url: `${SITE_URL}/`,
				inLanguage: "en",
				publisher: { "@id": `${SITE_URL}/#organization` }
			},
			{
				"@type": "BreadcrumbList",
				"@id": `${canonical}#breadcrumb`,
				itemListElement: breadcrumbItems
			},
			{
				"@type": "TechArticle",
				"@id": `${canonical}#article`,
				headline: title,
				description,
				url: canonical,
				inLanguage: "en",
				keywords: normalizedKeywords.join(", "),
				mainEntityOfPage: {
					"@type": "WebPage",
					"@id": canonical
				},
				isPartOf: { "@id": `${SITE_URL}/#website` },
				breadcrumb: { "@id": `${canonical}#breadcrumb` },
				image: {
					"@type": "ImageObject",
					url: imageUrl,
					width: 1200,
					height: 630
				},
				author: {
					"@type": "Person",
					name: AUTHOR_NAME,
					url: AUTHOR_URL
				},
				publisher: { "@id": `${SITE_URL}/#organization` }
			}
		]
	});

	function getCanonicalUrl(value: string) {
		const url = new URL(value.startsWith("/") ? value : `/${value}`, SITE_URL);
		url.search = "";
		url.hash = "";
		return url.toString();
	}
</script>

<MetaTags
	{title}
	titleTemplate={`%s | ${SITE_NAME}`}
	{description}
	{canonical}
	keywords={normalizedKeywords}
	robots={false}
	additionalMetaTags={[{ name: "author", content: AUTHOR_NAME }]}
	openGraph={{
		type: "article",
		title: fullTitle,
		description,
		url: canonical,
		siteName: SITE_NAME,
		locale: "en_US",
		images: [
			{
				url: imageUrl,
				alt: `${title} documentation`,
				width: 1200,
				height: 630,
				type: "image/png"
			}
		],
		article: {
			section: "Documentation",
			tags: normalizedKeywords
		}
	}}
	twitter={{
		cardType: "summary_large_image",
		title: fullTitle,
		description,
		image: imageUrl,
		imageAlt: `${title} documentation`,
		site: TWITTER_HANDLE,
		creator: TWITTER_HANDLE
	}}
/>
<JsonLd {schema} />
