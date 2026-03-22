<script lang="ts">
	import { asset } from "$app/paths";
	import BlocksLandingPage from "$lib/components/blocks/landing/blocks-landing-page.svelte";
	// import SiteHero from "$lib/components/landing/site-hero.svelte";
	import favicon from "$lib/assets/favicon.svg";
</script>

<!-- <div class="relative flex flex-col">
	<SiteHeader />
	<SiteHero />
</div> -->

<svelte:head>
	<link rel="icon" href={favicon} />
	<title>Svelte Efferd Blocks</title>
	<meta
		name="description"
		content="Save hours of design time with clean, ready-to-use shadcn-svelte blocks that just work, modern, responsive, and built for speed."
	/>
	<!-- New Open Graph Meta Tags -->
	<meta property="og:title" content="Svelte Efferd Blocks" />
	<meta
		property="og:description"
		content="Save hours of design time with clean, ready-to-use shadcn-svelte blocks that just work, modern, responsive, and built for speed."
	/>
	<meta property="og:image" content={asset("/og.png")} />
	<meta property="og:site_name" content="Sample Site" />
	<meta property="og:url" content="https://samplesite.com/page.html" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="Svelte Efferd Blocks" />
	<meta
		name="twitter:description"
		content="Save hours of design time with clean, ready-to-use shadcn-svelte blocks that just work, modern, responsive, and built for speed."
	/>
	<meta name="twitter:image" content={asset("/og.png")} />
	<meta name="twitter:site" content="@Sikandar_Bhide" />
</svelte:head>

<BlocksLandingPage />
