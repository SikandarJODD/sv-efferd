<script lang="ts">
	const logos = [
		{
			src: "https://storage.efferd.com/logo/vercel-wordmark.svg",
			alt: "Vercel Logo"
		},
		{
			src: "https://storage.efferd.com/logo/supabase-wordmark.svg",
			alt: "Supabase Logo"
		},
		{
			src: "https://storage.efferd.com/logo/openai-wordmark.svg",
			alt: "OpenAI Logo"
		},
		{
			src: "https://storage.efferd.com/logo/dub-wordmark.svg",
			alt: "Dub Logo"
		},
		{
			src: "https://storage.efferd.com/logo/turso-wordmark.svg",
			alt: "Turso Logo"
		},

		{
			src: "https://storage.efferd.com/logo/github-wordmark.svg",
			alt: "GitHub Logo"
		},
		{
			src: "https://storage.efferd.com/logo/claude-wordmark.svg",
			alt: "Claude AI Logo"
		},
		{
			src: "https://storage.efferd.com/logo/nvidia-wordmark.svg",
			alt: "Nvidia Logo"
		},
		{
			src: "https://storage.efferd.com/logo/clerk-wordmark.svg",
			alt: "Clerk Logo"
		},
		{
			src: "https://storage.efferd.com/logo/bolt-wordmark.svg",
			alt: "Bolt Logo"
		},

		{
			src: "https://storage.efferd.com/logo/stripe-wordmark.svg",
			alt: "Stripe Logo"
		}
	];
</script>

<div
	class="relative flex flex-wrap items-center justify-center gap-x-10 gap-y-8 py-6 sm:gap-x-12 sm:gap-y-12"
>
	{#each logos as logo}
		<img
			alt={logo.alt}
			class="pointer-events-none h-5 w-fit select-none dark:brightness-0 dark:invert"
			height="auto"
			loading="lazy"
			src={logo.src}
			width="auto"
		/>
	{/each}
</div>
