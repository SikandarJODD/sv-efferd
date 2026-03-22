<script lang="ts">
	import { Button } from "$lib/components/ui/button";
	import GithubLogo from "$lib/svgs/github.svelte";
	import Logo from "$lib/svgs/logo.svelte";
	import XLogo from "$lib/svgs/x.svelte";
	import type { Component } from "svelte";

	type NavLink = {
		href: string;
		label: string;
	};

	type SocialLink = {
		href: string;
		label: string;
		icon: Component;
	};

	const navLinks: NavLink[] = [
		{ href: "/#features", label: "Features" },
		{ href: "/#blog", label: "Blog" },
		{ href: "/#about", label: "About" },
		{ href: "/#contact", label: "Contact" },
		{ href: "/licence", label: "Licence" },
		{ href: "/privacy", label: "Privacy" }
	];

	const socialLinks: SocialLink[] = [
		{
			href: "https://x.com/shabanhr",
			label: "X",
			icon: XLogo
		},
		{
			href: "https://github.com/shabanhr",
			label: "Github",
			icon: GithubLogo
		}
	];

	const currentYear = new Date().getFullYear();
</script>

<footer class="mx-auto max-w-5xl *:px-4 *:md:px-6">
	<div class="flex flex-col gap-6 py-6">
		<div class="flex items-center justify-between">
			<div class="flex items-center gap-2">
				<Logo class="h-4.5 w-auto" />
			</div>

			<div class="flex items-center">
				{#each socialLinks as social (social.label)}
					{@const SocialIcon = social.icon}
					<Button
						href={social.href}
						aria-label={social.label}
						size="icon-sm"
						variant="ghost"
						rel="noreferrer"
						target="_blank"
					>
						<SocialIcon class="size-4" />
					</Button>
				{/each}
			</div>
		</div>

		<nav>
			<ul class="flex flex-wrap gap-4 text-sm font-medium text-muted-foreground md:gap-6">
				{#each navLinks as link (link.label)}
					<li>
						<a class="hover:text-foreground" href={link.href}>
							{link.label}
						</a>
					</li>
				{/each}
			</ul>
		</nav>
	</div>

	<div
		class="flex items-center justify-between gap-4 border-t py-4 text-sm text-muted-foreground"
	>
		<p>&copy; {currentYear} efferd</p>

		<p class="inline-flex items-center gap-1">
			<span>Built by</span>
			<a
				aria-label="x/twitter"
				class="inline-flex items-center gap-1 text-foreground/80 hover:text-foreground hover:underline"
				href="https://x.com/shabanhr"
				rel="noreferrer"
				target="_blank"
			>
				<img
					alt="shaban"
					class="size-4 rounded-full"
					height="16"
					src="https://github.com/shabanhr.png"
					width="16"
				/>
				Shaban
			</a>
		</p>
	</div>
</footer>
