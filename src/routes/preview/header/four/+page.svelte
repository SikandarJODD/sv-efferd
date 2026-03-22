<script lang="ts">
	import HeaderFour from "$lib/components/efferd/header/header-four/header-four.svelte";
</script>

<svelte:head>
	<title>Header Four Preview | Svelte Efferd</title>
	<meta name="description" content="Standalone preview for Header Four in Svelte Efferd." />
</svelte:head>

<div class="min-h-[180vh] bg-background">
	<HeaderFour />
	<main class="mx-auto max-w-5xl px-4 py-12">
		<div class="space-y-6">
			<h1 class="text-4xl font-semibold tracking-tight">Header Four Preview</h1>
			<p class="max-w-2xl text-muted-foreground">
				Scroll this page to preview the floating rounded header and mobile drawer behavior.
			</p>
		</div>
	</main>
</div>
