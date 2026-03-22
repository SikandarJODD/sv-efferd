<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { createScroll } from '$lib/hooks/use-scroll.svelte';
	import Logo from '$lib/svgs/logo.svelte';
	import { cn } from '$lib/utils';
	import DesktopNav from './desktop-nav.svelte';
	import MobileNav from './mobile-nav.svelte';
	import { navLinks } from './nav-links';
	let scroll = createScroll(10);
</script>

<header
	class={cn(
		'sticky top-0 z-50 mx-auto w-full max-w-5xl border-b border-border  shadow-sm backdrop-blur-sm transition-[max-width] duration-300 ease-out supports-backdrop-filter:bg-background/50 md:transition-all md:ease-out',
		scroll.scrolled &&
			'rounded-full border border-border bg-background/95 backdrop-blur-sm supports-backdrop-filter:bg-background/50 md:top-2 md:max-w-4xl md:shadow'
	)}
>
	<nav
		class={cn(
			'flex h-14 w-full items-center justify-between px-4 md:h-14 md:transition-all md:ease-out',
			scroll.scrolled && 'md:h-12 md:px-2'
		)}
	>
		<div class="flex items-center gap-2">
			<a class="rounded-md p-2 hover:bg-muted dark:hover:bg-muted/50" href="/">
				<Logo class="h-4" />
			</a>
			<div aria-hidden="true" class="h-6 shrink-0 bg-border md:w-px"></div>
			<DesktopNav />
		</div>
		<div>
			<Button size="sm" class="rounded-full" variant="outline">Sign In</Button>
			<Button size="sm" class="rounded-full">Get Started</Button>
		</div>
		<MobileNav />
	</nav>
</header>
