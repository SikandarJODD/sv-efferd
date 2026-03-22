<script lang="ts">
	import AnimatedContainer from '$lib/components/efferd/footer/AnimatedContainer.svelte';
	import { Button } from '$lib/components/ui/button';
	import Logo from '$lib/svgs/logo.svelte';
	import {
		FacebookIcon,
		InstagramIcon,
		LinkedinIcon,
		YoutubeIcon,
		type Icon
	} from '@lucide/svelte';

	type FooterLink = {
		title: string;
		href: string;
		icon?: typeof Icon;
	};

	type FooterLinkGroup = {
		label: string;
		links: FooterLink[];
	};

	type SocialLink = {
		title: string;
		href: string;
		icon: typeof Icon;
	};

	const socialLinks: SocialLink[] = [
		{
			title: 'Facebook',
			href: 'https://facebook.com',
			icon: FacebookIcon
		},
		{
			title: 'Instagram',
			href: 'https://instagram.com',
			icon: InstagramIcon
		},
		{
			title: 'Youtube',
			href: 'https://youtube.com',
			icon: YoutubeIcon
		},
		{
			title: 'LinkedIn',
			href: 'https://linkedin.com',
			icon: LinkedinIcon
		}
	];

	const footerLinkGroups: FooterLinkGroup[] = [
		{
			label: 'Product',
			links: [
				{ title: 'Payments', href: '/payments' },
				{ title: 'Cards & Issuing', href: '/cards' },
				{ title: 'Lending & Credit', href: '/lending' },
				{ title: 'Wealth Management', href: '/wealth' },
				{ title: 'Insurance', href: '/insurance' },
				{ title: 'Crypto Wallets', href: '/crypto-wallets' },
				{ title: 'Treasury Management', href: '/treasury' },
				{ title: 'Merchant Services', href: '/merchant-services' },
				{ title: 'Point of Sale', href: '/point-of-sale' },
				{ title: 'Embedded Finance', href: '/embedded-finance' },
				{ title: 'Open Banking API', href: '/open-banking-api' },
				{ title: 'SDKs & Integrations', href: '/integrations' },
				{ title: 'Pricing', href: '/pricing' }
			]
		},
		{
			label: 'Resources',
			links: [
				{ title: 'Blog', href: '/blog' },
				{ title: 'Case Studies', href: '/case-studies' },
				{ title: 'Documentation', href: '/docs' },
				{ title: 'API Reference', href: '/api-reference' },
				{ title: 'Developer Tools', href: '/developer-tools' },
				{ title: 'Whitepapers', href: '/whitepapers' },
				{ title: 'Reports & Research', href: '/reports' },
				{ title: 'Events & Webinars', href: '/events' },
				{ title: 'E-books', href: '/ebooks' },
				{ title: 'Community Forum', href: '/forum' },
				{ title: 'Release Notes', href: '/releases' },
				{ title: 'System Status', href: '/status' }
			]
		},
		{
			label: 'Company',
			links: [
				{ title: 'About Us', href: '/about' },
				{ title: 'Leadership', href: '/leadership' },
				{ title: 'Careers', href: '/careers' },
				{ title: 'Press', href: '/press' },
				{ title: 'Sustainability', href: '/sustainability' },
				{ title: 'Diversity & Inclusion', href: '/diversity' },
				{ title: 'Investor Relations', href: '/investors' },
				{ title: 'Partners', href: '/partners' },
				{ title: 'Legal & Compliance', href: '/legal' },
				{ title: 'Privacy Policy', href: '/privacy' },
				{ title: 'Cookie Policy', href: '/cookies' },
				{ title: 'Terms of Service', href: '/terms' },
				{ title: 'AML & KYC Policy', href: '/compliance' }
			]
		}
	];

	const currentYear = new Date().getFullYear();
</script>

<footer
	class="relative h-(--footer-height) w-full border-t [--footer-height:520px]"
	style="clip-path: polygon(0% 0, 100% 0%, 100% 100%, 0 100%);"
>
	<div class="fixed bottom-0 h-(--footer-height) w-full">
		<div class="sticky top-[calc(100vh-var(--footer-height))] h-full overflow-y-auto">
			<div
				aria-hidden="true"
				class="absolute inset-0 isolate z-0 opacity-50 contain-strict dark:opacity-60"
			>
				<div
					class="absolute top-0 left-0 h-320 w-140 -translate-y-87.5 -rotate-45 rounded-full bg-[radial-gradient(68.54%_68.72%_at_55.02%_31.46%,--theme(--color-foreground/.06)_0,hsla(0,0%,55%,.02)_50%,--theme(--color-foreground/.01)_80%)]"
				></div>
				<div
					class="absolute top-0 left-0 h-320 w-60 [translate:5%_-50%] -rotate-45 rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,--theme(--color-foreground/.04)_0,--theme(--color-foreground/.01)_80%,transparent_100%)]"
				></div>
				<div
					class="absolute top-0 left-0 h-320 w-60 -translate-y-87.5 -rotate-45 rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,--theme(--color-foreground/.04)_0,--theme(--color-foreground/.01)_80%,transparent_100%)]"
				></div>
			</div>

			<div class="relative mx-auto flex size-full max-w-6xl flex-col justify-between gap-5">
				<div class="grid grid-cols-1 gap-8 px-4 pt-12 md:grid-cols-2 lg:grid-cols-4">
					<AnimatedContainer class="w-full space-y-4">
						<Logo class="h-5 w-auto" />
						<p class="mt-8 text-sm text-muted-foreground md:mt-0">
							Beautifully crafted shadcn blocks by efferd.
						</p>
						<div class="flex gap-2">
							{#each socialLinks as link, index (`social-${link.href}-${index}`)}
								{@const SocialIcon = link.icon}
								<Button href={link.href} aria-label={link.title} size="icon-sm" variant="outline">
									<SocialIcon class="size-4" />
								</Button>
							{/each}
						</div>
					</AnimatedContainer>

					{#each footerLinkGroups as group, index (group.label)}
						<AnimatedContainer class="w-full" delay={0.1 + index * 0.1}>
							<div class="mb-10 md:mb-0">
								<h3 class="text-sm uppercase">{group.label}</h3>
								<ul class="mt-4 space-y-2 text-sm text-muted-foreground md:text-xs lg:text-sm">
									{#each group.links as link (link.title)}
										<li>
											<a
												class="inline-flex items-center hover:text-foreground [&_svg]:me-1 [&_svg]:size-4"
												href={link.href}
											>
												{#if link.icon}
													{@const LinkIcon = link.icon}
													<LinkIcon />
												{/if}
												{link.title}
											</a>
										</li>
									{/each}
								</ul>
							</div>
						</AnimatedContainer>
					{/each}
				</div>

				<div
					class="flex flex-col items-center justify-between gap-2 border-t p-4 text-sm text-muted-foreground md:flex-row"
				>
					<p>&copy; {currentYear} efferd, All rights reserved.</p>
					<a class="hover:text-foreground" href="/license">License</a>
				</div>
			</div>
		</div>
	</div>
</footer>
