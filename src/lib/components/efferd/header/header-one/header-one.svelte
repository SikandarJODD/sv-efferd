<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { createScroll } from '$lib/hooks/use-scroll.svelte';
	import { Logo } from '$lib/svgs';
	import { cn } from '$lib/utils';
	import MobileNav from './mobile-nav.svelte';
	import { navLinks } from './nav-links';

	let scroll = createScroll(50);
	// $inspect(scroll.scrolled, 'Value');
</script>

<header
	class={cn(
		'sticky top-0 z-50 w-full border-b border-transparent',
		scroll.scrolled &&
			'border-border bg-background/95 backdrop-blur-sm supports-backdrop-filter:bg-background/50'
	)}
>
	<nav class="mx-auto flex h-14 w-full max-w-5xl items-center justify-between px-4">
		<a class="rounded-md p-2 w-fit hover:bg-muted dark:hover:bg-muted/50" href="/">
			<Logo class="h-4" />
		</a>
		<div class="hidden items-center gap-2 md:flex">
			{#each navLinks as link}
				<Button href={link.href} size="sm" variant="ghost">
					{link.label}
				</Button>
			{/each}
			<Button size="sm" variant="outline">Sign In</Button>
			<Button size="sm">Get Started</Button>
		</div>
		<MobileNav />
	</nav>
</header>
