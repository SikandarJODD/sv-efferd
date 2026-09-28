<script lang="ts">
	import Seo from "$lib/components/base/Seo.svelte";
	import ChangelogPage from "$lib/components/changelog/changelog-page.svelte";

	const description =
		"Discover new Svelte Efferd blocks, features, fixes, and improvements in the project changelog.";
</script>

<Seo title="Changelog" desc={description} link="/changelog" />

<ChangelogPage />
