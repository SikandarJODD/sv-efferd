<script lang="ts">
	import {
		Accordion,
		AccordionContent,
		AccordionItem,
		AccordionTrigger
	} from "$lib/components/ui/accordion";
	import { Button } from "$lib/components/ui/button";
	import {
		Empty,
		EmptyContent,
		EmptyHeader,
		EmptyMedia,
		EmptyTitle
	} from "$lib/components/ui/empty";
	import { FullWidthDivider } from "$lib/components/ui/full-width-divider";
	import { InputGroup, InputGroupAddon, InputGroupInput } from "$lib/components/ui/input-group";
	import { cn } from "$lib/utils";
	import { SearchIcon, SearchSlashIcon } from "@lucide/svelte";

	type CategoryId = "all" | "getting-started" | "features" | "billing" | "support";

	type Category = {
		id: CategoryId;
		label: string;
	};

	type Faq = {
		id: number;
		category: Exclude<CategoryId, "all">;
		title: string;
		content: string;
	};

	const categories: Category[] = [
		{ id: "all", label: "All" },
		{ id: "getting-started", label: "Getting Started" },
		{ id: "features", label: "Features" },
		{ id: "billing", label: "Billing" },
		{ id: "support", label: "Support" }
	];

	const faqs: Faq[] = [
		{
			id: 1,
			category: "getting-started",
			title: "How do I create my first project?",
			content:
				'Click the "New Project" button in your dashboard, choose a template or start from scratch, customize your project name and settings, and you\'ll be ready to start building in seconds.'
		},
		{
			id: 2,
			category: "getting-started",
			title: "What are the system requirements?",
			content:
				"Efferd works on any modern web browser including Chrome, Firefox, Safari, and Edge. No special software installation is required, just visit our platform and log in."
		},
		{
			id: 3,
			category: "features",
			title: "Can I use Efferd for team collaboration?",
			content:
				"Absolutely! Invite team members, set role-based permissions, leave comments on components, and track changes in real-time. Our collaboration features are built for teams of all sizes."
		},
		{
			id: 4,
			category: "features",
			title: "Is there a component library?",
			content:
				"Yes, Efferd includes a comprehensive library of pre-built, customizable components. You can also create your own reusable components and share them across your projects."
		},
		{
			id: 5,
			category: "features",
			title: "Do you support custom integrations?",
			content:
				"We support integrations with GitHub, GitLab, Figma, Slack, and major cloud providers. For custom integrations, contact our support team to discuss your needs."
		},
		{
			id: 6,
			category: "billing",
			title: "What payment methods do you accept?",
			content:
				"We accept all major credit cards, PayPal, and bank transfers for annual plans. Invoicing is available for enterprise customers."
		},
		{
			id: 7,
			category: "billing",
			title: "Can I change my plan anytime?",
			content:
				"Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and we'll prorate your billing accordingly."
		},
		{
			id: 8,
			category: "support",
			title: "How do I report a bug?",
			content:
				"Use the in-app feedback button or email support@efferd.com with details about the issue. Our team typically responds within 24 hours."
		},
		{
			id: 9,
			category: "support",
			title: "Do you offer training or onboarding?",
			content:
				"We provide video tutorials, documentation, and live webinars. Premium plans include personalized onboarding sessions with our support team."
		}
	];

	let searchTerm = $state("");
	let activeCategory = $state<CategoryId>("all");

	let filteredFaqs = $derived(
		faqs.filter((faq) => {
			const normalizedSearch = searchTerm.trim().toLowerCase();
			const matchesCategory = activeCategory === "all" || faq.category === activeCategory;
			const matchesSearch =
				faq.title.toLowerCase().includes(normalizedSearch) ||
				faq.content.toLowerCase().includes(normalizedSearch);

			return matchesCategory && matchesSearch;
		})
	);
</script>

<div class="mx-auto min-h-screen w-full max-w-3xl md:border-x">
	<div class="px-4 py-16 lg:px-6">
		<h1 class="mb-4 text-3xl font-semibold md:text-4xl">Frequently Asked Questions</h1>
		<p class="mb-8 max-w-2xl text-muted-foreground">
			Find answers to common questions about Efferd. Can't find what you're looking for? Our
			support team is here to help.
		</p>

		<InputGroup class="max-w-sm">
			<InputGroupInput bind:value={searchTerm} placeholder="Search FAQs..." />
			<InputGroupAddon>
				<SearchIcon data-icon="inline-start" />
			</InputGroupAddon>
		</InputGroup>
	</div>

	<FullWidthDivider contained={true} />

	<div class="flex flex-wrap gap-1 border-b px-4 md:gap-3">
		{#each categories as category (category.id)}
			<Button
				type="button"
				variant="ghost"
				aria-pressed={activeCategory === category.id}
				class={cn(
					"relative h-auto rounded-none px-1 py-2 text-sm text-muted-foreground shadow-none hover:text-primary md:px-2 md:text-base",
					activeCategory === category.id && "text-primary"
				)}
				onclick={() => (activeCategory = category.id)}
			>
				{category.label}
				{#if activeCategory === category.id}
					<span class="absolute inset-x-0 bottom-0 h-0.5 rounded-full bg-primary"></span>
				{/if}
			</Button>
		{/each}
	</div>

	<Accordion type="single" class="space-y-2 px-4 py-12 lg:px-6">
		{#each filteredFaqs as faq (faq.id)}
			<AccordionItem
				value={faq.id.toString()}
				class="rounded-lg border px-4 py-0 shadow-xs last:border-b"
			>
				<AccordionTrigger class="py-3 hover:no-underline">
					{faq.title}
				</AccordionTrigger>
				<AccordionContent class="pt-2 pb-4 text-muted-foreground">
					{faq.content}
				</AccordionContent>
			</AccordionItem>
		{/each}
	</Accordion>

	{#if filteredFaqs.length === 0}
		<Empty class="px-4 pb-12 lg:px-6">
			<EmptyHeader>
				<EmptyMedia variant="icon">
					<SearchIcon />
				</EmptyMedia>
				<EmptyTitle>No FAQs found matching your search.</EmptyTitle>
			</EmptyHeader>
			<EmptyContent>
				<Button variant="outline" onclick={() => (searchTerm = "")}>
					<SearchSlashIcon data-icon="inline-start" />
					Clear search
				</Button>
			</EmptyContent>
		</Empty>
	{/if}

	<div class="flex items-center px-4 py-6 lg:px-6">
		<p class="text-muted-foreground">
			Can't find what you're looking for?
			<a class="text-primary hover:underline" href="mailto:support@efferd.com">
				Contact Us
			</a>
		</p>
	</div>
</div>
