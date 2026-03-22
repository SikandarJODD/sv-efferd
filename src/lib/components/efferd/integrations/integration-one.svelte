<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { cn } from '$lib/utils';
	import { ArrowUpRightIcon } from '@lucide/svelte';

	type Integration = {
		src: string;
		name: string;
		description: string;
		isInvertable?: boolean;
	};

	const data: Integration[] = [
		{
			src: 'https://storage.efferd.com/logo/vercel.svg',
			name: 'Vercel',
			description: 'Amet praesentium deserunt ex commodi tempore fuga....',
			isInvertable: true
		},
		{
			src: 'https://storage.efferd.com/logo/openai.svg',
			name: 'OpenAI',
			description: 'Amet praesentium deserunt ex commodi tempore fuga....',
			isInvertable: true
		},
		{
			src: 'https://storage.efferd.com/logo/supabase.svg',
			name: 'Supabase',
			description: 'Amet praesentium deserunt ex commodi tempore fuga....'
		},
		{
			src: 'https://storage.efferd.com/logo/notion.svg',
			name: 'Notion',
			description: 'Amet praesentium deserunt ex commodi tempore fuga....'
		}
	];
</script>

<div
	class={cn(
		'mx-auto grid max-w-5xl gap-1 overflow-hidden rounded-md bg-secondary p-1 sm:grid-cols-2 lg:grid-cols-4 dark:bg-secondary/50'
	)}
>
	{#each data as item (item.name)}
		<div
			class={cn(
				'group relative flex flex-col justify-between gap-2 rounded-md bg-background p-6 shadow-sm'
			)}
		>
			<img
				alt={item.name}
				class={cn(
					'pointer-events-none size-8 shrink-0 select-none object-contain',
					item.isInvertable && 'dark:invert'
				)}
				height="32"
				src={item.src}
				width="32"
			/>

			<div class="space-y-1">
				<h3 class="font-semibold">{item.name}</h3>
				<p class="text-xs text-muted-foreground md:text-sm">
					{item.description}
				</p>
			</div>
		</div>
	{/each}

	<div class="relative flex items-center justify-center p-1 sm:col-span-2 lg:col-span-4">
		<Button href="/integrations" class="group text-xs" size="sm" variant="link">
			View all integrations
			<ArrowUpRightIcon data-icon="inline-end" />
		</Button>
	</div>
</div>
