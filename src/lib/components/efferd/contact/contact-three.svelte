<script lang="ts">
	import { FullWidthDivider } from "$lib/components/ui/full-width-divider";
	import GithubLogo from "$lib/svgs/github.svelte";
	import XLogo from "$lib/svgs/x.svelte";
	import { cn } from "$lib/utils";
	import { Mail, MapPin, Phone, type Icon as IconType } from "@lucide/svelte";
	import type { Component } from "svelte";

	const APP_EMAIL = "mail@example.com";
	const APP_PHONE = "+92 300 1234567";
	const APP_PHONE_2 = "+92 321 9876543";

	type ContactItem = {
		title: string;
		description: string;
		icon: typeof IconType;
		content: {
			type: "link" | "text";
			label: string;
			href?: string;
		}[];
	};

	type SocialLink = {
		icon: Component;
		href: string;
		label: string;
	};

	const contactItems: ContactItem[] = [
		{
			title: "Email",
			description: "We respond to all emails within 24 hours.",
			icon: Mail,
			content: [
				{
					type: "link",
					label: APP_EMAIL,
					href: `mailto:${APP_EMAIL}`
				}
			]
		},
		{
			title: "Office",
			description: "Drop by our office for a chat.",
			icon: MapPin,
			content: [
				{
					type: "text",
					label: "Office # 100, 101 Second Floor Kohinoor 1, Faisalabad, Pakistan"
				}
			]
		},
		{
			title: "Phone",
			description: "We're available Mon-Fri, 9am-5pm.",
			icon: Phone,
			content: [
				{
					type: "link",
					label: APP_PHONE,
					href: `tel:${APP_PHONE}`
				},
				{
					type: "link",
					label: APP_PHONE_2,
					href: `tel:${APP_PHONE_2}`
				}
			]
		}
	];

	const socialLinks: SocialLink[] = [
		{
			icon: GithubLogo,
			href: "/",
			label: "GitHub"
		},
		{
			icon: XLogo,
			href: "/",
			label: "Twitter"
		}
	];
</script>

<div class="relative mx-auto min-h-screen max-w-5xl overflow-x-clip border-x">
	<div class="flex grow flex-col justify-center px-4 py-18 md:items-center">
		<h1 class="text-4xl font-bold md:text-5xl">Contact Us</h1>
		<p class="mb-5 text-base text-muted-foreground">Contact the support team at efferd.</p>
	</div>

	<FullWidthDivider />

	<div class="grid md:grid-cols-3">
		{#each contactItems as item, index}
			{@const Icon = item.icon}
			<div
				class={cn(
					"flex flex-col justify-between border-b md:border-r md:border-b-0",
					index === contactItems.length - 1 && "border-b-0 md:border-r-0"
				)}
			>
				<div
					class={cn(
						"flex items-center gap-x-3 border-b bg-secondary/50 p-4 dark:bg-secondary/20",
						"[&_svg]:size-5 [&_svg]:stroke-[1.5] [&_svg]:text-muted-foreground"
					)}
				>
					<Icon />
					<h2 class="text-lg font-medium tracking-wider">{item.title}</h2>
				</div>

				<div class="flex items-center gap-x-2 p-4 py-12">
					<div>
						{#each item.content as entry}
							{#if entry.type === "link"}
								<a
									class="block font-mono text-sm font-medium tracking-wide hover:underline"
									href={entry.href}
								>
									{entry.label}
								</a>
							{:else}
								<span class="font-mono text-sm font-medium tracking-wide">
									{entry.label}
								</span>
							{/if}
						{/each}
					</div>
				</div>

				<div class="border-t p-4">
					<p class="text-sm text-muted-foreground">{item.description}</p>
				</div>
			</div>
		{/each}
	</div>

	<FullWidthDivider />

	<div class="z-1 flex h-full flex-col items-center justify-center gap-4 py-24">
		<h2
			class="text-center text-2xl font-medium tracking-tight text-muted-foreground md:text-3xl"
		>
			Find us <span class="text-foreground">online</span>
		</h2>
		<div class="flex flex-wrap items-center gap-2">
			{#each socialLinks as link}
				{@const Icon = link.icon}
				<a
					class="flex items-center gap-x-2 rounded-full border bg-card px-3 py-1.5 shadow hover:bg-accent"
					href={link.href}
					rel="noopener noreferrer"
					target="_blank"
				>
					<Icon class="size-3.5 text-muted-foreground" />
					<span class="font-mono text-xs font-medium tracking-wide">{link.label}</span>
				</a>
			{/each}
		</div>
	</div>
</div>
