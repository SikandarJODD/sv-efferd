<script lang="ts">
	const logos = [
		{
			src: 'https://storage.efferd.com/logo/nvidia-wordmark.svg',
			alt: 'Nvidia Logo'
		},
		{
			src: 'https://storage.efferd.com/logo/supabase-wordmark.svg',
			alt: 'Supabase Logo'
		},
		{
			src: 'https://storage.efferd.com/logo/openai-wordmark.svg',
			alt: 'OpenAI Logo'
		},
		{
			src: 'https://storage.efferd.com/logo/turso-wordmark.svg',
			alt: 'Turso Logo'
		},
		{
			src: 'https://storage.efferd.com/logo/vercel-wordmark.svg',
			alt: 'Vercel Logo'
		},
		{
			src: 'https://storage.efferd.com/logo/github-wordmark.svg',
			alt: 'GitHub Logo'
		},
		{
			src: 'https://storage.efferd.com/logo/claude-wordmark.svg',
			alt: 'Claude AI Logo'
		},
		{
			src: 'https://storage.efferd.com/logo/clerk-wordmark.svg',
			alt: 'Clerk Logo'
		}
	];
</script>

<div class="grid grid-cols-2 rounded-lg bg-border shadow md:grid-cols-4">
	{#each logos as logo, i}
		<div class="flex items-center justify-center rounded-lg border bg-background p-8">
			<img
				alt={logo.alt}
				class="pointer-events-none block h-4 select-none md:h-5 dark:brightness-0 dark:invert"
				height="auto"
				loading="lazy"
				src={logo.src}
				width="auto"
			/>
		</div>
	{/each}
</div>
