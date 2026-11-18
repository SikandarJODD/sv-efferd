<script lang="ts">
	import Dashboard from "#lib/components/efferd/dashboard/dashboard-one/dashboard.svelte";
</script>

<svelte:head>
	<title>Dashboard One Preview | Svelte Efferd</title>
	<meta
		name="description"
		content="Preview a responsive analytics dashboard with KPI cards, an interactive sales chart, and an invoices table built with Svelte 5."
	/>
</svelte:head>

<main class="min-h-screen bg-background px-4 py-10 sm:px-6">
	<div class="mx-auto w-full max-w-7xl">
		<Dashboard />
	</div>
</main>
