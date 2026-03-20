<script>
	import LogoCloudFour from './logo-cloud-four.svelte';
</script>

<div class="min-h-screen w-full place-content-center p-4">
	<div class="w-full">
		<h2 class="mb-5 text-center">
			<span class="block text-2xl font-medium text-muted-foreground"> Already used by </span>
			<span class="text-2xl font-black tracking-tight text-primary md:text-3xl">
				Best in the Game
			</span>
		</h2>
		<div class="relative mx-auto max-w-3xl *:border-y-0">
			<div
				class="pointer-events-none absolute -top-px left-1/2 h-px w-screen -translate-x-1/2 bg-border"
			></div>
			<LogoCloudFour />
			<div
				class="pointer-events-none absolute -bottom-px left-1/2 h-px w-screen -translate-x-1/2 bg-border"
			></div>
		</div>
	</div>
</div>
