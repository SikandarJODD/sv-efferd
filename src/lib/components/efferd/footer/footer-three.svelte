<script lang="ts">
	import AnimatedContainer from '$lib/components/efferd/footer/AnimatedContainer.svelte';
	import { cn } from '$lib/utils';
	import { Logo } from '$lib/svgs';
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

	type FooterSection = {
		label: string;
		links: FooterLink[];
	};

	const footerLinks: FooterSection[] = [
		{
			label: 'Product',
			links: [
				{ title: 'Features', href: '/features' },
				{ title: 'Pricing', href: '/pricing' },
				{ title: 'Testimonials', href: '/testimonials' },
				{ title: 'Integration', href: '/integrations' }
			]
		},
		{
			label: 'Company',
			links: [
				{ title: 'FAQs', href: '/faqs' },
				{ title: 'About Us', href: '/about' },
				{ title: 'Privacy Policy', href: '/privacy' },
				{ title: 'T&S', href: '/terms' }
			]
		},
		{
			label: 'Resources',
			links: [
				{ title: 'Blog', href: '/blog' },
				{ title: 'Changelog', href: '/changelog' },
				{ title: 'Brand', href: '/brand' },
				{ title: 'Help', href: '/help' }
			]
		},
		{
			label: 'Social Links',
			links: [
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
			]
		}
	];

	const currentYear = new Date().getFullYear();
</script>

<footer
	class={cn(
		'relative mx-auto flex w-full max-w-5xl flex-col items-center justify-center rounded-t-4xl border-t px-6 md:rounded-t-6xl md:px-8',
		'dark:bg-[radial-gradient(35%_128px_at_50%_0%,--theme(--color-foreground/.1),transparent)]'
	)}
>
	<div
		class="absolute top-0 right-1/2 left-1/2 h-px w-1/3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-foreground/20 blur"
	></div>

	<div class="grid w-full gap-8 py-6 md:py-8 lg:grid-cols-3 lg:gap-8">
		<AnimatedContainer class="space-y-4">
			<Logo class="h-4 w-auto" />
			<p class="mt-8 text-sm text-muted-foreground md:mt-0">
				Beautify your app with efferd.
			</p>
		</AnimatedContainer>

		<div class="mt-10 grid grid-cols-2 gap-8 md:grid-cols-4 lg:col-span-2 lg:mt-0">
			{#each footerLinks as section, index (section.label)}
				<AnimatedContainer delay={0.1 + index * 0.1}>
					<div class="mb-10 md:mb-0">
						<h3 class="text-xs">{section.label}</h3>
						<ul class="mt-4 space-y-2 text-sm text-muted-foreground">
							{#each section.links as link (`${section.label}-${link.title}`)}
								<li>
									<a
										class="inline-flex items-center duration-250 hover:text-foreground [&_svg]:me-1 [&_svg]:size-4"
										href={link.href}
										rel={link.icon ? 'noreferrer' : undefined}
										target={link.icon ? '_blank' : undefined}
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
	</div>

	<div class="h-px w-full bg-linear-to-r via-border"></div>

	<div class="flex w-full items-center justify-center py-4">
		<p class="text-sm text-muted-foreground">
			&copy; {currentYear} efferd, All rights reserved
		</p>
	</div>
</footer>
