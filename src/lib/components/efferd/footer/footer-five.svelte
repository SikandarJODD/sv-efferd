<script lang="ts">
	import { Button } from "$lib/components/ui/button";
	import AppleLogo from "$lib/svgs/apple.svelte";
	import PlayStoreLogo from "$lib/svgs/play-store.svelte";
	import XLogo from "$lib/svgs/x.svelte";
	import { FacebookIcon, InstagramIcon, LinkedinIcon } from "@lucide/svelte";
	import type { Component } from "svelte";

	type FooterLink = {
		href: string;
		label: string;
	};

	type FooterSection = {
		title: string;
		links: FooterLink[];
	};

	type SocialLink = {
		href: string;
		icon: Component;
		label: string;
	};

	const footerLinks: FooterSection[] = [
		{
			title: "Company",
			links: [
				{ href: "/", label: "Engineering Blog" },
				{ href: "/", label: "Marketplace" },
				{ href: "/", label: "What's New" },
				{ href: "/", label: "About" },
				{ href: "/", label: "Press" },
				{ href: "/", label: "Careers" },
				{ href: "/", label: "Social Good" }
			]
		},
		{
			title: "Community",
			links: [
				{ href: "/", label: "Linktree for Enterprise" },
				{ href: "/", label: "2023 Creator Report" },
				{ href: "/", label: "2022 Creator Report" },
				{ href: "/", label: "Charities" },
				{ href: "/", label: "What's Trending" },
				{ href: "/", label: "Creator Profile Directory" },
				{ href: "/", label: "Explore Templates" }
			]
		},
		{
			title: "Support",
			links: [
				{ href: "/", label: "Help Topics" },
				{ href: "/", label: "Getting Started" },
				{ href: "/", label: "Linoree Pro" },
				{ href: "/", label: "Features & How-tos" },
				{ href: "/", label: "FAQs" },
				{ href: "/", label: "Report a Violation" }
			]
		},
		{
			title: "Legal",
			links: [
				{ href: "/", label: "Terms & Conditions" },
				{ href: "/", label: "Privacy Notice" },
				{ href: "/", label: "Cookie Notice" },
				{ href: "/", label: "Trust Center" },
				{ href: "/", label: "Cookie Preferences" },
				{ href: "/", label: "Transparency Report" },
				{ href: "/", label: "Law Enforcement Access Policy" }
			]
		}
	];

	const socialLinks: SocialLink[] = [
		{
			icon: FacebookIcon,
			href: "https://facebook.com",
			label: "Facebook"
		},
		{
			icon: InstagramIcon,
			href: "https://instagram.com",
			label: "Instagram"
		},
		{
			icon: LinkedinIcon,
			href: "https://linkedin.com",
			label: "LinkedIn"
		},
		{
			icon: XLogo,
			href: "https://x.com",
			label: "X"
		}
	];

	const currentYear = new Date().getFullYear();
</script>

<footer class="border-t">
	<div class="mx-auto max-w-6xl px-4 lg:px-6">
		<div class="grid grid-cols-2 gap-8 py-8 md:grid-cols-4">
			{#each footerLinks as item (item.title)}
				<div>
					<h3 class="mb-4 text-xs">{item.title}</h3>
					<ul class="space-y-2 text-sm text-muted-foreground">
						{#each item.links as link (link.label)}
							<li>
								<a class="hover:text-foreground" href={link.href}>
									{link.label}
								</a>
							</li>
						{/each}
					</ul>
				</div>
			{/each}
		</div>

		<div class="h-px bg-border"></div>

		<div class="flex flex-wrap items-center justify-between gap-4 py-5">
			<div class="flex items-center gap-2">
				{#each socialLinks as item, index (`social-${item.href}-${index}`)}
					{@const SocialIcon = item.icon}
					<Button
						href={item.href}
						aria-label={item.label}
						size="icon-sm"
						variant="outline"
					>
						<SocialIcon class="size-4" />
					</Button>
				{/each}
			</div>

			<div class="flex gap-4">
				<Button
					href="https://play.google.com/store"
					class="h-11"
					target="_blank"
					rel="noreferrer"
				>
					<PlayStoreLogo class="size-5" />
					<div class="flex flex-col items-start justify-center pr-2 text-left">
						<span class="text-[10px] leading-none font-light tracking-tighter">
							GET IT ON
						</span>
						<p class="text-base leading-none font-bold">Google Play</p>
					</div>
				</Button>

				<Button
					href="https://www.apple.com/app-store/"
					class="h-11"
					target="_blank"
					rel="noreferrer"
				>
					<AppleLogo class="size-5" />
					<div class="flex flex-col items-start justify-center pr-2 text-left">
						<span class="text-[10px] leading-none tracking-tighter"
							>Download on the</span
						>
						<p class="text-base leading-none font-bold">App Store</p>
					</div>
				</Button>
			</div>
		</div>

		<div class="h-px bg-border"></div>

		<div class="py-4 text-center text-xs text-muted-foreground">
			<p>&copy; {currentYear} efferd, All rights reserved</p>
		</div>
	</div>
</footer>
