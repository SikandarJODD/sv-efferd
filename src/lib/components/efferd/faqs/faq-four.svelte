<script lang="ts">
	import {
		Accordion,
		AccordionContent,
		AccordionItem,
		AccordionTrigger
	} from '$lib/components/ui/accordion';
	import { Button } from '$lib/components/ui/button';
	import {
		CreditCardIcon,
		FeatherIcon,
		LayoutGridIcon,
		LifeBuoyIcon,
		PowerIcon,
		type Icon
	} from '@lucide/svelte';
	import type { Component } from 'svelte';

	type CategoryId = 'all' | 'getting-started' | 'features' | 'billing' | 'support';

	type Category = {
		id: CategoryId;
		label: string;
		icon: Component | typeof Icon;
	};

	type Faq = {
		id: number;
		category: Exclude<CategoryId, 'all'>;
		title: string;
		content: string;
	};

	const categories: Category[] = [
		{
			icon: LayoutGridIcon,
			id: 'all',
			label: 'All Topics'
		},
		{
			icon: PowerIcon,
			id: 'getting-started',
			label: 'Getting Started'
		},
		{
			icon: FeatherIcon,
			id: 'features',
			label: 'Features'
		},
		{
			icon: CreditCardIcon,
			id: 'billing',
			label: 'Billing'
		},
		{
			icon: LifeBuoyIcon,
			id: 'support',
			label: 'Support'
		}
	];

	const faqs: Faq[] = [
		{
			id: 1,
			category: 'getting-started',
			title: 'How do I create my first project?',
			content:
				'Click the "New Project" button in your dashboard, choose a template or start from scratch, customize your project name and settings, and you\'ll be ready to start building in seconds.'
		},
		{
			id: 2,
			category: 'getting-started',
			title: 'What are the system requirements?',
			content:
				'Efferd works on any modern web browser including Chrome, Firefox, Safari, and Edge. No special software installation is required, just visit our platform and log in.'
		},
		{
			id: 3,
			category: 'features',
			title: 'Can I use Efferd for team collaboration?',
			content:
				'Absolutely! Invite team members, set role-based permissions, leave comments on components, and track changes in real-time. Our collaboration features are built for teams of all sizes.'
		},
		{
			id: 4,
			category: 'features',
			title: 'Is there a component library?',
			content:
				'Yes, Efferd includes a comprehensive library of pre-built, customizable components. You can also create your own reusable components and share them across your projects.'
		},
		{
			id: 5,
			category: 'features',
			title: 'Do you support custom integrations?',
			content:
				'We support integrations with GitHub, GitLab, Figma, Slack, and major cloud providers. For custom integrations, contact our support team to discuss your needs.'
		},
		{
			id: 6,
			category: 'billing',
			title: 'What payment methods do you accept?',
			content:
				'We accept all major credit cards, PayPal, and bank transfers for annual plans. Invoicing is available for enterprise customers.'
		},
		{
			id: 7,
			category: 'billing',
			title: 'Can I change my plan anytime?',
			content:
				'Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and we\'ll prorate your billing accordingly.'
		},
		{
			id: 8,
			category: 'support',
			title: 'How do I report a bug?',
			content:
				'Use the in-app feedback button or email support@efferd.com with details about the issue. Our team typically responds within 24 hours.'
		},
		{
			id: 9,
			category: 'support',
			title: 'Do you offer training or onboarding?',
			content:
				'We provide video tutorials, documentation, and live webinars. Premium plans include personalized onboarding sessions with our support team.'
		}
	];

	let activeCategory = $state<CategoryId>('all');

	let filteredFaqs = $derived(
		faqs.filter((faq) => activeCategory === 'all' || faq.category === activeCategory)
	);

	let currentCategory = $derived(categories.find((category) => category.id === activeCategory));
</script>

<section class="mx-auto min-h-screen w-full max-w-5xl">
	<div class="flex flex-col items-center justify-center gap-4 px-4 py-16">
		<h2 class="font-mono text-4xl font-black text-balance md:text-5xl lg:font-black">FaQs</h2>
		<p class="text-muted-foreground">Your questions answered here.</p>
	</div>

	<div class="relative grid min-h-full grid-cols-1 py-12 md:grid-cols-3">
		<div class="flex h-full items-start justify-center border-b pb-2 md:border-b-0">
			<div class="flex w-max flex-wrap items-start justify-start gap-2 md:flex-col md:justify-center">
				{#each categories as category (category.id)}
					{@const CategoryIcon = category.icon}
					<Button
						variant={activeCategory === category.id ? 'outline' : 'ghost'}
						onclick={() => (activeCategory = category.id)}
					>
						<CategoryIcon class="size-4" />
						{category.label}
					</Button>
				{/each}
			</div>
		</div>

		<div class="col-span-2 space-y-5 px-4 py-5">
			{#if currentCategory}
				{@const CurrentCategoryIcon = currentCategory.icon}
				<div class="flex items-center gap-2">
					<CurrentCategoryIcon class="size-4" />
					<span class="font-medium">{currentCategory.label}</span>
				</div>
			{/if}

			<Accordion type="single" class="space-y-2">
				{#each filteredFaqs as item (item.id)}
					<AccordionItem value={item.id.toString()} class="border-b-0">
						<AccordionTrigger class="py-3 bg-muted px-4 hover:no-underline dark:bg-muted/50">
							{item.title}
						</AccordionTrigger>

						<AccordionContent class="p-4">
							{item.content}
						</AccordionContent>
					</AccordionItem>
				{/each}
			</Accordion>
		</div>
	</div>
</section>
