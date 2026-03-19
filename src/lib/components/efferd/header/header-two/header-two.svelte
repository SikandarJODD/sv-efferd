<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { createScroll } from '$lib/hooks/use-scroll.svelte';
	import { Logo } from '$lib/svgs';
	import { cn } from '$lib/utils';
	import MobileNav from './mobile-nav.svelte';
	import { navLinks } from './nav-links';
	let scroll = createScroll(10);
</script>

<header
	class={cn(
		'sticky top-0 z-50 mx-auto w-full max-w-4xl border-b border-transparent md:rounded-md md:border md:transition-all md:ease-out',
		scroll.scrolled &&
			'border-border bg-background/95 backdrop-blur-sm supports-backdrop-filter:bg-background/50 md:top-2 md:max-w-3xl md:shadow'
	)}
>
	<nav
		class={cn(
			'flex h-14 w-full items-center justify-between px-4 md:h-12 md:transition-all md:ease-out',
			scroll.scrolled && 'md:px-2'
		)}
	>
		<a class="rounded-md p-2 hover:bg-muted dark:hover:bg-muted/50" href="/">
			<Logo class="h-4" />
		</a>
		<div class="hidden items-center gap-2 md:flex">
			<div>
				{#each navLinks as {label, href}}
					<Button size="sm" variant="ghost" href={href}>
                        {label}
                    </Button>
				{/each}
			</div>
			<Button size="sm" variant="outline">Sign In</Button>
			<Button size="sm">Get Started</Button>
		</div>
		<MobileNav />
	</nav>
</header>
