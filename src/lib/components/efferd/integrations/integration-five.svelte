<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { cn } from '$lib/utils';
	import { ArrowUpRightIcon } from '@lucide/svelte';

	type Integration = {
		src?: string;
		name: string;
		isInvertable?: boolean;
	};

	const data: Integration[] = [
		{
			name: 'Empty 1'
		},
		{
			name: 'Vercel',
			src: 'https://storage.efferd.com/logo/vercel.svg',
			isInvertable: true
		},
		{
			name: 'OpenAI',
			src: 'https://storage.efferd.com/logo/openai.svg',
			isInvertable: true
		},
		{
			src: 'https://storage.efferd.com/logo/supabase.svg',
			name: 'Supabase'
		},
		{
			name: 'GitHub',
			src: 'https://storage.efferd.com/logo/github.svg',
			isInvertable: true
		},
		{
			name: 'Notion',
			src: 'https://storage.efferd.com/logo/notion.svg'
		},
		{
			name: 'Gmail',
			src: 'https://storage.efferd.com/logo/gmail.svg'
		},
		{
			name: 'Google Maps',
			src: 'https://storage.efferd.com/logo/google-maps.svg'
		},
		{
			name: 'Neon',
			src: 'https://storage.efferd.com/logo/neon.svg'
		},
		{
			name: 'Empty 2'
		}
	];
</script>

<div class="flex flex-col items-center justify-center gap-6 py-24">
	<div class="max-w-xl space-y-2 px-4 text-center">
		<h2 class="text-4xl font-semibold tracking-tight">All types of integration</h2>
		<p class="text-base text-muted-foreground md:text-lg">
			Connect your favourite apps and services easily
		</p>
	</div>

	<div class="flex flex-col justify-center rounded-full border bg-secondary dark:bg-secondary/10">
		<div class="mask-l-from-90 mask-r-from-90 flex items-center justify-center -space-x-4 p-1">
			{#each data as item (item.name)}
				<div
					class={cn(
						'relative z-0 transition-transform',
						item.src && 'hover:z-10 hover:scale-110'
					)}
				>
					<div class="flex size-12 items-center justify-center overflow-hidden rounded-full border bg-card shadow-sm md:size-16">
						{#if item.src}
							<img
								alt={item.name}
								class={cn(
									'pointer-events-auto size-5 select-none object-contain md:size-6',
									item.isInvertable && 'dark:invert'
								)}
								height="24"
								src={item.src}
								width="24"
							/>
						{/if}
					</div>
				</div>
			{/each}
		</div>
	</div>

	<Button href="/integrations" class="rounded-full px-5">
		See all integrations
		<ArrowUpRightIcon data-icon="inline-end" />
	</Button>
</div>
