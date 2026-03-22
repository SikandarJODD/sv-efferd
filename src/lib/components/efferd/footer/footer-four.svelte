<script lang="ts">
	import LinkGroup from '$lib/components/efferd/footer/LinkGroup.svelte';
	import { cn } from '$lib/utils';
	import { ArrowRightIcon } from '@lucide/svelte';

	type LinkItem = {
		title: string;
		href: string;
	};

	type FooterColumn = {
		social: {
			title: string;
			href: string;
		};
		group: {
			title: string;
			links: LinkItem[];
		};
	};

	const columns: FooterColumn[] = [
		{
			social: { title: 'Facebook', href: 'https://facebook.com' },
			group: {
				title: 'About Us',
				links: [
					{ title: 'Pricing', href: '/pricing' },
					{ title: 'Testimonials', href: '/testimonials' },
					{ title: 'FAQs', href: '/faqs' },
					{ title: 'Contact Us', href: '/contact' },
					{ title: 'Blog', href: '/blog' }
				]
			}
		},
		{
			social: { title: 'Youtube', href: 'https://youtube.com' },
			group: {
				title: 'Support',
				links: [
					{ title: 'Help Center', href: '/help' },
					{ title: 'Terms', href: '/terms' },
					{ title: 'Privacy', href: '/privacy' },
					{ title: 'Security', href: '/security' },
					{ title: 'Cookie Policy', href: '/cookies' }
				]
			}
		},
		{
			social: { title: 'Twitter', href: 'https://x.com' },
			group: {
				title: 'Community',
				links: [
					{ title: 'Forum', href: '/forum' },
					{ title: 'Events', href: '/events' },
					{ title: 'Partners', href: '/partners' },
					{ title: 'Affiliates', href: '/affiliates' },
					{ title: 'Career', href: '/careers' }
				]
			}
		},
		{
			social: { title: 'Instagram', href: 'https://instagram.com' },
			group: {
				title: 'Press',
				links: [
					{ title: 'Investors', href: '/investors' },
					{ title: 'Terms of Use', href: '/terms' },
					{ title: 'Privacy Policy', href: '/privacy' },
					{ title: 'Cookie Policy', href: '/cookies' },
					{ title: 'Legal', href: '/legal' }
				]
			}
		}
	];

	const currentYear = new Date().getFullYear();
</script>

<footer
	class={cn(
		'border-t',
		'dark:bg-[radial-gradient(35%_128px_at_50%_0%,--theme(--color-foreground/.08),transparent)]'
	)}
>
	<div class="relative mx-auto max-w-5xl px-4">
		<div class="relative grid grid-cols-1 border-x md:grid-cols-4 md:divide-x">
			{#each columns as column, index (column.social.title)}
				<div>
					<a
						href={column.social.href}
						class={cn(
							'flex items-center justify-between border-y p-2 text-sm hover:bg-muted md:border-t-0 dark:hover:bg-muted/50',
							index === 0 && 'border-t-0'
						)}
					>
						<span class="font-medium">{column.social.title}</span>
						<ArrowRightIcon class="size-4" />
					</a>
					<LinkGroup title={column.group.title} links={column.group.links} />
				</div>
			{/each}
		</div>
	</div>

	<div class="flex justify-center border-t p-3">
		<p class="text-xs text-muted-foreground">
			&copy; {currentYear} efferd, All rights reserved
		</p>
	</div>
</footer>
