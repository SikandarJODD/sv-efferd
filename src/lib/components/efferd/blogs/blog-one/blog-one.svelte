<script>
	import { FullWidthDivider } from "$lib/components/ui/full-width-divider";
	import BlogCard from "./blog-card.svelte";
	const blogs = [
		{
			title: "The New Design",
			date: "May 20 2025",
			description: "What everyone new to the field should know, and how we can help.",
			href: "#"
		},
		{
			title: "Letter Club",
			date: "Aug 14 2025",
			description: "An ode to the slow web.",
			href: "#"
		},
		{
			title: "Have the Coffee",
			date: "Sep 19 2025",
			description: "Carve space out for oppurtunity.",
			href: "#"
		},
		{
			title: "Shadcn UI",
			date: "Oct 12 2025",
			description: "Building modern applications with reusable components.",
			href: "#"
		},
		{
			title: "Fesgin",
			date: "Nov 23 2025",
			description: "Exploring the intersection of design and development.",
			href: "#"
		}
	];
</script>

<div class="mx-auto flex min-h-screen w-full max-w-3xl flex-col justify-start md:border-x">
	<div class="space-y-2 px-4 py-8 md:py-12">
		<h1 class="text-2xl font-semibold tracking-wide md:text-4xl">Latest Blogs</h1>
		<p class="text-sm text-muted-foreground">
			Discover the latest trends and insights in the world of design and technology.
		</p>
	</div>

	<div class="relative">
		<FullWidthDivider />
		<div class="divide-y">
			{#each blogs as blog}
				<BlogCard {...blog} />
			{/each}
		</div>
		<FullWidthDivider />
	</div>
</div>
