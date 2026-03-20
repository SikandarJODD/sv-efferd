<script lang="ts">
	import { DecorIcon } from '$lib/components/ui/decor-icon';
	import LogoCard from './logo-card.svelte';
</script>

<div class="grid grid-cols-2 border md:grid-cols-4">
	<LogoCard
		class="relative border-r border-b bg-secondary dark:bg-secondary/30"
		logo={{
			src: 'https://storage.efferd.com/logo/nvidia-wordmark.svg',
			alt: 'Nvidia Logo'
		}}
	>
		<DecorIcon class="z-10" position="bottom-right" />
	</LogoCard>

	<LogoCard
		class="border-b md:border-r"
		logo={{
			src: 'https://storage.efferd.com/logo/supabase-wordmark.svg',
			alt: 'Supabase Logo'
		}}
	/>

	<LogoCard
		class="relative border-r border-b md:bg-secondary dark:md:bg-secondary/30"
		logo={{
			src: 'https://storage.efferd.com/logo/github-wordmark.svg',
			alt: 'GitHub Logo'
		}}
	>
		<DecorIcon class="z-10" position="bottom-right" />
		<DecorIcon class="z-10 hidden md:block" position="bottom-left" />
	</LogoCard>

	<LogoCard
		class="relative border-b bg-secondary md:bg-background dark:bg-secondary/30 md:dark:bg-background"
		logo={{
			src: 'https://storage.efferd.com/logo/openai-wordmark.svg',
			alt: 'OpenAI Logo'
		}}
	/>

	<LogoCard
		class="relative border-r border-b bg-secondary md:border-b-0 md:bg-background dark:bg-secondary/30 md:dark:bg-background"
		logo={{
			src: 'https://storage.efferd.com/logo/turso-wordmark.svg',
			alt: 'Turso Logo'
		}}
	>
		<DecorIcon class="z-10 md:hidden" position="bottom-right" />
	</LogoCard>

	<LogoCard
		class="border-b bg-background md:border-r md:border-b-0 md:bg-secondary dark:md:bg-secondary/30"
		logo={{
			src: 'https://storage.efferd.com/logo/clerk-wordmark.svg',
			alt: 'Clerk Logo'
		}}
	/>

	<LogoCard
		class="border-r"
		logo={{
			src: 'https://storage.efferd.com/logo/claude-wordmark.svg',
			alt: 'Claude AI Logo'
		}}
	/>

	<LogoCard
		class="bg-secondary dark:bg-secondary/30"
		logo={{
			src: 'https://storage.efferd.com/logo/vercel-wordmark.svg',
			alt: 'Vercel Logo'
		}}
	/>
</div>
