<script lang="ts">
	import { Marquee } from '$lib/components/magic/marquee';

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

<div class="overflow-hidden mask-[linear-gradient(to_right,transparent,black,transparent)] py-4">
	<Marquee>
		{#each logos as logo}
			<img
				alt={logo.alt}
				class="pointer-events-none h-4 select-none md:h-5 dark:brightness-0 dark:invert"
				height="auto"
				loading="lazy"
				src={logo.src}
				width="auto"
			/>
		{/each}
	</Marquee>
</div>
