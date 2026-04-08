<script lang="ts">
	import { asset } from "$app/paths";
	import { MetaTags } from "svelte-meta-tags";

	type Props = {
		title: string;
		desc: string;
		link?: string;
	};

	let siteName = "Svelte Efferd Blocks";
	let siteUrl = "https://sv-efferd.pages.dev";
	let titleTemplate = `%s | ${siteName}`;
	let locale = "en_US";
	let twitterHandle = "@Sikandar_Bhide";
	let ogImageUrl = new URL(asset("/og.png"), siteUrl).toString();

	let { title, desc, link }: Props = $props();

	function normalizePath(path: string) {
		return path.startsWith("/") ? path : `/${path}`;
	}

	let canonical = $derived(link ? new URL(normalizePath(link), siteUrl).toString() : undefined);
	let fullTitle = $derived(`${title} | ${siteName}`);
</script>

<MetaTags
	title={title}
	description={desc}
	titleTemplate={titleTemplate}
	canonical={canonical}
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
