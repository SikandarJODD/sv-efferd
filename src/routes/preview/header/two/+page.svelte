<script lang="ts">
	import HeaderTwo from "$lib/components/efferd/header/header-two/header-two.svelte";
</script>

<svelte:head>
	<title>Header Two Preview | Svelte Efferd</title>
	<meta name="description" content="Standalone preview for Header Two in Svelte Efferd." />
</svelte:head>

<div class="min-h-[180vh] bg-background">
	<HeaderTwo />
	<main class="mx-auto max-w-4xl px-4 py-12">
		<div class="space-y-6">
			<h1 class="text-4xl font-semibold tracking-tight">Header Two Preview</h1>
			<p class="max-w-2xl text-muted-foreground">
				Scroll this page to preview the framed sticky header state and compact mobile menu.
			</p>
		</div>
	</main>
</div>
