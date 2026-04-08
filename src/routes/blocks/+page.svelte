<script lang="ts">
	import BlocksLandingPage from "$lib/components/blocks/landing/blocks-landing-page.svelte";
	import Seo from "$lib/components/base/Seo.svelte";

	const description =
		"Browse compact, production-ready Svelte Efferd marketing blocks for auth, headers, footers, CTAs, galleries, integrations, and more.";
</script>

<Seo title="Blocks" desc={description} link="/blocks" />

<BlocksLandingPage />
