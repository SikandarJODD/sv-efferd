<script lang="ts">
	import HeaderOne from '$lib/components/efferd/header/header-one/header-one.svelte';
</script>

<svelte:head>
	<title>Header One Preview | Svelte Efferd</title>
	<meta name="description" content="Standalone preview for Header One in Svelte Efferd." />
</svelte:head>

<div class="min-h-[180vh] bg-background">
	<HeaderOne />
	<main class="mx-auto max-w-5xl px-4 py-12">
		<div class="space-y-6">
			<h1 class="text-4xl font-semibold tracking-tight">Header One Preview</h1>
			<p class="max-w-2xl text-muted-foreground">
				Scroll this page to preview the sticky header state and the mobile navigation behavior.
			</p>
		</div>
	</main>
</div>
