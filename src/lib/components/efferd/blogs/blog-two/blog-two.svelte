<script lang="ts">
	import { FullWidthDivider } from "$lib/components/ui/full-width-divider";
	import { GridFiller } from "$lib/components/ui/grid-filler";
	import BlogCard from "./blog-card.svelte";

	type BlogType = {
		title: string;
		date: string;
		description: string;
		category: string;
		author: string;
		href: string;
	};

	const blogs: BlogType[] = [
		{
			title: "The New Design Principles for Modern Web Apps",
			date: "May 20 2025",
			category: "Design",
			author: "Sarah Chen",
			description:
				"We dive deep into modern UI/UX fundamentals and explore how small changes can make a massive impact on user retention.",
			href: "#"
		},
		{
			title: "Letter Club: An Ode to the Slow Web",
			date: "Aug 14 2025",
			category: "Design",
			author: "Mike Allyn",
			description:
				"In a world of instant gratification, we explore the beauty of thoughtful, long-form content and meaningful connections over time.",
			href: "#"
		},
		{
			title: "Carve Out Space for Opportunity and Coffee",
			date: "Sep 19 2025",
			category: "Productivity",
			author: "Jessica Doi",
			description:
				"Taking a break is work. Learn how simple rituals like a morning coffee can boost your creativity and productivity.",
			href: "#"
		},
		{
			title: "Building Modern Applications with Shadcn UI Components",
			date: "Oct 12 2025",
			category: "Design",
			author: "Tom Cook",
			description:
				"A comprehensive guide to leveraging Shadcn UI to build accessible, customizable, and beautiful user interfaces with incredible speed.",
			href: "#"
		},
		{
			title: "Fesgin: Bridging The Gap Between Design and Code",
			date: "Nov 23 2025",
			category: "Design",
			author: "David Park",
			description:
				"How designers and developers can collaborate more effectively to bridge the gap between creative vision and technical implementation.",
			href: "#"
		},
		{
			title: "The Art of Simplicity in User Interface Design",
			date: "Dec 05 2025",
			category: "Minimalism",
			author: "Emma Wilson",
			description:
				"Discover how minimalism in design leads to clearer communication and a more intuitive user experience, focusing on what matters.",
			href: "#"
		},
		{
			title: "Why Web Performance Matters For Your Business Growth",
			date: "Jan 18 2026",
			category: "Engineering",
			author: "Chris Martin",
			description:
				"We discuss techniques for improving web performance, from lazy loading to code splitting, ensuring your application runs smoothly.",
			href: "#"
		},
		{
			title: "Practicing Digital Well-being in an Always-On World",
			date: "Feb 02 2026",
			category: "Lifestyle",
			author: "Olivia Kim",
			description:
				"Strategies for maintaining a healthy relationship with digital tools, setting boundaries, and ensuring technology serves us rather than consumes us.",
			href: "#"
		}
	];
</script>

<div class="mx-auto w-full max-w-5xl py-4 lg:border-x">
	<div class="space-y-2 px-4 py-8 md:py-12">
		<h1 class="text-2xl font-semibold tracking-wide md:text-4xl">Latest Blogs</h1>
		<p class="text-sm text-muted-foreground">
			Discover the latest trends and insights in the world of design and technology.
		</p>
	</div>
	<FullWidthDivider contained={true} />
	<div class="grid grid-cols-1 gap-px bg-border sm:grid-cols-2 md:grid-cols-3">
		{#each blogs as blog (blog.title)}
			<BlogCard {...blog} />
		{/each}
		<GridFiller
			class="bg-background"
			mdColumns={3}
			smColumns={4}
			lgColumns={3}
			totalItems={blogs.length}
		/>
	</div>
	<FullWidthDivider contained={true} />
</div>
