<script lang="ts">
	import { BorderSeparator } from '$lib/components/ui/border-seperator';
	import { Button } from '$lib/components/ui/button';
	import { Github, Logo, X as XLogo } from '$lib/svgs';
	import { MoonIcon, SunIcon } from '@lucide/svelte';
	import { mode, toggleMode } from 'mode-watcher';
	import { landingNavLinks, landingSocialLinks } from './config';
	import MobileNav from './mobile-nav.svelte';

	function themeLabel() {
		return mode.current === 'dark' ? 'Switch to light mode' : 'Switch to dark mode';
	}
</script>

<header class="relative z-20 mx-auto max-w-7xl border-b border-border/80">
	<nav class="cpx flex h-14 items-center justify-between gap-3">
		<a
			aria-label="Efferd home"
			class="flex shrink-0 items-center rounded-md p-2 transition-colors hover:bg-muted/60"
			href="/"
		>
			<Logo class="h-5 w-auto" />
		</a>

		<div class="hidden flex-1 items-center justify-center md:flex">
			<div class="flex items-center gap-1">
				{#each landingNavLinks as link}
					<Button
						class="px-3 text-sm text-muted-foreground hover:text-foreground"
						href={link.href}
						size="sm"
						variant="ghost"
					>
						{link.label}
					</Button>
				{/each}
			</div>
		</div>

		<div class="hidden items-center gap-2 md:flex">
			{#each landingSocialLinks as link}
				<Button aria-label={link.label} href={link.href} size="icon-sm" variant="ghost">
					{#if link.id === 'x'}
						<XLogo class="size-4" />
					{:else}
						<Github class="size-4" />
					{/if}
				</Button>
			{/each}

			<Button
				aria-label={themeLabel()}
				size="icon-sm"
				title={themeLabel()}
				variant="secondary"
				onclick={toggleMode}
			>
				{#if mode.current === 'dark'}
					<SunIcon class="size-4" />
				{:else}
					<MoonIcon class="size-4" />
				{/if}
			</Button>
		</div>

		<div class="flex items-center gap-2 md:hidden">
			<Button
				aria-label={themeLabel()}
				size="icon-sm"
				title={themeLabel()}
				variant="secondary"
				onclick={toggleMode}
			>
				{#if mode.current === 'dark'}
					<SunIcon class="size-4" />
				{:else}
					<MoonIcon class="size-4" />
				{/if}
			</Button>
			<MobileNav />
		</div>
	</nav>
</header>
