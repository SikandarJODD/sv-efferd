<script lang="ts">
	import {
		Accordion,
		AccordionContent,
		AccordionItem,
		AccordionTrigger
	} from "$lib/components/ui/accordion";

	type Question = {
		id: string;
		title: string;
		content: string;
	};

	const questions: Question[] = [
		{
			id: "item-1",
			title: "What is Efferd?",
			content:
				"Efferd is a collection of beautifully crafted Shadcn UI blocks and components, designed to help developers build modern websites with ease."
		},
		{
			id: "item-2",
			title: "Who can benefit from Efferd?",
			content:
				"Efferd is built for founders, product teams, and agencies that want to accelerate idea validation and delivery."
		},
		{
			id: "item-3",
			title: "What features does Efferd include?",
			content:
				"Efferd offers a collaborative workspace where you can design and build beautiful web applications, with reusable UI blocks, deployment automation, and comprehensive analytics all in one place. With Efferd, you can streamline your team’s workflow and deliver high-quality websites quickly and efficiently."
		},
		{
			id: "item-4",
			title: "Can I customize components in Efferd?",
			content:
				"Yes. Efferd offers editable design systems and code scaffolding so you can tailor blocks to your brand and workflow."
		},
		{
			id: "item-5",
			title: "Does Efferd integrate with my existing tools?",
			content:
				"Efferd connects with popular source control, design tools, and cloud providers to fit into your current stack."
		},
		{
			id: "item-6",
			title: "How do I get support while using Efferd?",
			content:
				"You can access detailed docs, community forums, and dedicated customer success channels for help at any time."
		},
		{
			id: "item-7",
			title: "How do I get started with Efferd?",
			content:
				"You can access detailed docs, community forums, and dedicated customer success channels for help at any time."
		}
	];
</script>

<div class="mx-auto min-h-screen w-full max-w-5xl lg:border-x">
	<div
		class="mx-4 grid h-[calc(100vh-3.5rem)] grid-cols-1 border-x md:mx-0 md:grid-cols-2 md:border-x-0"
	>
		<div class="space-y-4 px-4 pt-12 pb-4 md:border-r">
			<h2 class="text-3xl font-black md:text-4xl">FAQs</h2>
			<p class="text-muted-foreground">
				Here are some common questions and answers that you might encounter when using
				Efferd.
			</p>
		</div>

		<div class="place-content-center">
			<Accordion type="single" class="rounded-none border-x-0 border-y">
				{#each questions as item (item.id)}
					<AccordionItem value={item.id} class="px-4">
						<AccordionTrigger
							class="py-4 hover:no-underline focus-visible:underline focus-visible:ring-0"
						>
							{item.title}
						</AccordionTrigger>
						<AccordionContent class="pb-4 text-muted-foreground">
							{item.content}
						</AccordionContent>
					</AccordionItem>
				{/each}
			</Accordion>
		</div>
	</div>

	<div class="flex h-14 items-center justify-center border-t">
		<p class="text-muted-foreground">
			Can't find what you're looking for?
			<a class="text-primary hover:underline" href="mailto:support@efferd.com">
				Contact Us
			</a>
		</p>
	</div>
</div>
