<script lang="ts">
	import LogoCloudTwo from './logo-cloud-two.svelte';
</script>

<div class="min-h-screen w-full place-content-center px-4">
	<section class="relative max-w-3xl mx-auto py-12">
		<h2
			class="mb-6 text-center text-lg font-medium tracking-tight text-muted-foreground md:text-2xl"
		>
			Companies we{' '}
			<span class="font-semibold text-primary">collaborate</span> with.
		</h2>
		<div class="relative mx-auto max-w-3xl *:border-y-0"></div>
		<div
			class="pointer-events-none absolute -top-px left-1/2 h-px w-screen -translate-x-1/2 bg-border"
		></div>
		<LogoCloudTwo />
		<div
			class="pointer-events-none absolute -bottom-px left-1/2 h-px w-screen -translate-x-1/2 bg-border"
		></div>
	</section>
</div>
