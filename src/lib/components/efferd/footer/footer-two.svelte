<script lang="ts">
	import { Button } from "$lib/components/ui/button";
	import { cn } from "$lib/utils";
	import Logo from "$lib/svgs/logo.svelte";
	import XLogo from "$lib/svgs/x.svelte";
	import {
		FacebookIcon,
		GithubIcon,
		InstagramIcon,
		LinkedinIcon,
		YoutubeIcon
	} from "@lucide/svelte";
	import type { Component } from "svelte";

	type FooterLink = {
		title: string;
		href: string;
	};

	type SocialLink = {
		link: string;
		icon: Component;
		label: string;
	};

	const company: FooterLink[] = [
		{
			title: "About Us",
			href: "/"
		},
		{
			title: "Careers",
			href: "/"
		},
		{
			title: "Brand assets",
			href: "/"
		},
		{
			title: "Privacy Policy",
			href: "/"
		},
		{
			title: "Terms of Service",
			href: "/"
		}
	];

	const resources: FooterLink[] = [
		{
			title: "Blog",
			href: "/"
		},
		{
			title: "Help Center",
			href: "/"
		},
		{
			title: "Contact Support",
			href: "/"
		},
		{
			title: "Community",
			href: "/"
		},
		{
			title: "Security",
			href: "/"
		}
	];

	const socialLinks: SocialLink[] = [
		{
			icon: FacebookIcon,
			link: "https://facebook.com",
			label: "Facebook"
		},
		{
			icon: GithubIcon,
			link: "https://github.com",
			label: "Github"
		},
		{
			icon: InstagramIcon,
			link: "https://instagram.com",
			label: "Instagram"
		},
		{
			icon: LinkedinIcon,
			link: "https://linkedin.com",
			label: "LinkedIn"
		},
		{
			icon: XLogo,
			link: "https://x.com",
			label: "X"
		},
		{
			icon: YoutubeIcon,
			link: "https://youtube.com",
			label: "YouTube"
		}
	];

	const currentYear = new Date().getFullYear();
</script>

<footer class="relative">
	<div
		class={cn(
			"mx-auto max-w-5xl lg:border-x",
			"dark:bg-[radial-gradient(35%_80%_at_15%_0%,--theme(--color-foreground/.1),transparent)]"
		)}
	>
		<div class="absolute inset-x-0 h-px w-full bg-border"></div>

		<div class="grid max-w-5xl grid-cols-6 gap-6 p-4">
			<div class="col-span-6 flex flex-col gap-4 pt-5 md:col-span-4">
				<a class="w-max" href="/">
					<Logo class="h-5 w-auto" />
				</a>
				<p class="max-w-sm text-sm text-balance text-muted-foreground">
					Beautify your app with efferd.
				</p>
				<div class="flex gap-2">
					{#each socialLinks as item, index (`social-${item.link}-${index}`)}
						{@const SocialIcon = item.icon}
						<Button
							href={item.link}
							aria-label={item.label}
							rel="noreferrer"
							size="icon-sm"
							target="_blank"
							variant="outline"
						>
							<SocialIcon class="size-4" />
						</Button>
					{/each}
				</div>
			</div>

			<div class="col-span-3 w-full md:col-span-1">
				<span class="text-xs text-muted-foreground">Resources</span>
				<div class="mt-2 flex flex-col gap-2">
					{#each resources as item (item.title)}
						<a class="w-max text-sm hover:underline" href={item.href}>
							{item.title}
						</a>
					{/each}
				</div>
			</div>

			<div class="col-span-3 w-full md:col-span-1">
				<span class="text-xs text-muted-foreground">Company</span>
				<div class="mt-2 flex flex-col gap-2">
					{#each company as item (item.title)}
						<a class="w-max text-sm hover:underline" href={item.href}>
							{item.title}
						</a>
					{/each}
				</div>
			</div>
		</div>

		<div class="absolute inset-x-0 h-px w-full bg-border"></div>

		<div class="flex max-w-4xl flex-col justify-between gap-2 py-4">
			<p class="text-center text-sm font-light text-muted-foreground">
				&copy; {currentYear} efferd, All rights reserved
			</p>
		</div>
	</div>
</footer>
