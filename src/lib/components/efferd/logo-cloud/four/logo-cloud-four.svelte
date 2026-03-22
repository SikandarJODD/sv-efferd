<script lang="ts">
	import { Marquee } from "$lib/components/magic/marquee";
	import { ProgressiveBlur } from "$lib/components/ui/progressive-blur";

	const logos = [
		{
			src: "https://storage.efferd.com/logo/nvidia-wordmark.svg",
			alt: "Nvidia Logo"
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
			src: "https://storage.efferd.com/logo/turso-wordmark.svg",
			alt: "Turso Logo"
		},
		{
			src: "https://storage.efferd.com/logo/vercel-wordmark.svg",
			alt: "Vercel Logo"
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
			src: "https://storage.efferd.com/logo/clerk-wordmark.svg",
			alt: "Clerk Logo"
		}
	];
</script>

<div
	class="relative border-x border-y bg-linear-to-r from-secondary/50 via-transparent to-secondary/50 py-6"
>
	<Marquee class="flex items-center gap-20" style="--duration: 30s; --gap: 2rem;">
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

	<ProgressiveBlur
		blurIntensity={1}
		class="pointer-events-none absolute top-0 left-0 h-full w-[100px] md:w-[160px]"
		direction="left"
	/>
	<ProgressiveBlur
		blurIntensity={1}
		class="pointer-events-none absolute top-0 right-0 h-full w-[100px] md:w-[160px]"
		direction="right"
	/>
</div>
