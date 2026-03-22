<script lang="ts">
	import BlocksLandingPage from "$lib/components/blocks/landing/blocks-landing-page.svelte";

	const description =
		"Browse compact, production-ready Svelte Efferd marketing blocks for auth, headers, footers, CTAs, galleries, integrations, and more.";
</script>

<svelte:head>
	<title>Blocks | Svelte Efferd</title>
	<meta name="description" content={description} />
	<meta property="og:title" content="Blocks | Svelte Efferd" />
	<meta property="og:description" content={description} />
</svelte:head>

<BlocksLandingPage />
