<script lang="ts">
	import Seo from "#lib/components/base/Seo.svelte";
	import ChangelogPage from "#lib/components/changelog/changelog-page.svelte";

	const description =
		"See new Svelte Efferd blocks, dependency updates, and site changes.";
</script>

<Seo title="Changelog" desc={description} link="/changelog" />

<ChangelogPage />
