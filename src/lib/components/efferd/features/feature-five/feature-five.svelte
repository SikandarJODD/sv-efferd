<script lang="ts">
	import {
		CpuIcon,
		FingerprintIcon,
		PencilIcon,
		Settings2Icon,
		SparklesIcon,
		ZapIcon,
		type Icon
	} from '@lucide/svelte';
	import FeatureCard from './feature-card.svelte';

	type Feature = {
		title: string;
		icon: typeof Icon;
		description: string;
	};

	const features: Feature[] = [
		{
			title: 'Faaast',
			icon: ZapIcon,
			description: 'It supports an entire helping developers and innovate.'
		},
		{
			title: 'Powerful',
			icon: CpuIcon,
			description: 'It supports an entire helping developers and businesses.'
		},
		{
			title: 'Security',
			icon: FingerprintIcon,
			description: 'It supports an helping developers businesses.'
		},
		{
			title: 'Customization',
			icon: PencilIcon,
			description: 'It supports helping developers and businesses innovate.'
		},
		{
			title: 'Control',
			icon: Settings2Icon,
			description: 'It supports helping developers and businesses innovate.'
		},
		{
			title: 'Built for AI',
			icon: SparklesIcon,
			description: 'It supports helping developers and businesses innovate.'
		}
	];
</script>

<div class="mx-auto w-full max-w-5xl space-y-8">
	<div class="mx-auto max-w-3xl text-center">
		<h2 class="text-2xl font-medium text-balance md:text-4xl lg:text-5xl">
			Power. Speed. Control.
		</h2>
		<p class="mt-4 text-sm text-balance text-muted-foreground md:text-base">
			Everything you need to build fast, secure, scalable apps.
		</p>
	</div>

	<div class="overflow-hidden rounded-lg border">
		<div class="grid grid-cols-1 gap-px bg-border sm:grid-cols-2 md:grid-cols-3">
			{#each features as feature (feature.title)}
				<FeatureCard {feature} />
			{/each}
		</div>
	</div>
</div>
