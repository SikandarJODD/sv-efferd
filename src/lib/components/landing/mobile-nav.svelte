<script lang="ts">
	import * as Drawer from "#lib/components/ui/drawer/index.js";
	import { Button } from "#lib/components/ui/button/index.js";
	import { X as XLogo } from "#lib/svgs/index.js";
	import { MenuIcon, XIcon } from "@lucide/svelte";
	import { landingNavLinks, landingSocialLinks } from "./config";
	import { getStars, GitHubButton } from "../ui/github-button";
	import { onMount } from "svelte";

	let open = $state(false);
	const blockLinks = [
		{ label: "Header", href: "/blocks/header" },
		{ label: "Hero", href: "/blocks/hero" },
		{ label: "Auth", href: "/blocks/auth" },
		{ label: "Features", href: "/blocks/features" },
		{ label: "Blog", href: "/blocks/blog" },
		{ label: "Contact", href: "/blocks/contact" },
		{ label: "CTA", href: "/blocks/cta" },
		{ label: "FAQs", href: "/blocks/faqs" },
		{ label: "Logo Cloud", href: "/blocks/logo-cloud" },
		{ label: "Footer", href: "/blocks/footer" },
		{ label: "Image Gallery", href: "/blocks/image-gallery" },
		{ label: "Integrations", href: "/blocks/integrations" }
	] as const;

	let stars = $state(30);
	const repo = { owner: "SikandarJODD", repo: "sv-efferd" };

	onMount(async () => {
		stars = await getStars({ ...repo, fallback: 60 });
	});
</script>

<div class="md:hidden">
	<Drawer.Root bind:open>
		<Drawer.Trigger>
			{#snippet child({ props })}
				<Button
					{...props}
					aria-label="Open menu"
					class="border-border/80 bg-muted/50 backdrop-blur-sm lg:bg-background/70"
					size="icon-sm"
					variant="secondary"
				>
					<MenuIcon class="size-4" />
				</Button>
			{/snippet}
		</Drawer.Trigger>

		<Drawer.Content class="max-h-[85svh] px-4 pt-2 pb-5">
			<div class="mx-auto w-full max-w-lg overflow-y-auto">
				<Drawer.Header class="relative px-0 py-3 text-left">
					<Drawer.Title>Menu</Drawer.Title>
					<Drawer.Description class="sr-only">Site navigation</Drawer.Description>
					<Drawer.Close>
						{#snippet child({ props })}
							<Button
								{...props}
								aria-label="Close menu"
								class="absolute top-1 right-0"
								size="icon-sm"
								variant="ghost"
							>
								<XIcon class="size-4" />
							</Button>
						{/snippet}
					</Drawer.Close>
				</Drawer.Header>

				<nav aria-label="Mobile navigation" class="space-y-3">
					<div class="grid grid-cols-2 gap-1">
						{#each landingNavLinks as link (link.href)}
							<Button
								class="justify-start"
								href={link.href}
								variant="ghost"
								onclick={() => (open = false)}
							>
								{link.label}
							</Button>
						{/each}
					</div>

					<div class="grid grid-cols-2 gap-1 border-t pt-3">
						{#each blockLinks as link (link.href)}
							<Button
								class="h-8 justify-start px-2 text-xs"
								href={link.href}
								variant="ghost"
								onclick={() => (open = false)}
							>
								{link.label}
							</Button>
						{/each}
					</div>
				</nav>

				<div class="mt-3 flex items-center justify-end gap-1 border-t pt-3">
					{#each landingSocialLinks as link (link.href)}
						<Button
							aria-label={link.label}
							href={link.href}
							size="icon-sm"
							target="_blank"
							variant="ghost"
							onclick={() => (open = false)}
						>
							{#if link.id === "x"}
								<XLogo class="size-4" />
							{/if}
						</Button>
					{/each}
					<GitHubButton variant="ghost" class="dark:bg-muted/50" {repo} {stars} />
				</div>
			</div>
		</Drawer.Content>
	</Drawer.Root>
</div>
