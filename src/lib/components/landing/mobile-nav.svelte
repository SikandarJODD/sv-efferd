<script lang="ts">
	import * as Drawer from "#lib/components/ui/drawer/index.js";
	import { Button } from "#lib/components/ui/button/index.js";
	import { Github, X as XLogo } from "#lib/svgs/index.js";
	import { ArrowUpRightIcon, MenuIcon, XIcon } from "@lucide/svelte";
	import { landingNavLinks, landingSocialLinks } from "./config";
	import { getStars, GitHubButton } from "../ui/github-button";
	import { onMount } from "svelte";
	import { otherProjects, withProjectUtm } from "./other-projects";

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
				<Button {...props} aria-label="Open menu" size="icon-sm" variant="ghost">
					<MenuIcon class="size-4" />
				</Button>
			{/snippet}
		</Drawer.Trigger>

		<Drawer.Content
			class="z-[70] max-h-[85svh] px-4 pt-2 pb-[calc(1.25rem+env(safe-area-inset-bottom,0px))] data-[vaul-drawer-direction=bottom]:rounded-t-3xl"
			overlayProps={{ style: "animation-duration: 280ms; transition-duration: 280ms;" }}
			style="animation-duration: 280ms; transition-duration: 280ms;"
		>
			<div class="mx-auto w-full max-w-lg overflow-y-auto scroll-fade-effect-y">
				<Drawer.Header class="relative px-0 py-3 text-left">
					<Drawer.Title class="sr-only">Menu</Drawer.Title>
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
					<div class="grid grid-cols-1 gap-1">
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

					<div class="grid grid-cols-1 gap-1 border-t pt-3">
						{#each blockLinks as link (link.href)}
							<Button
								class="h-9 justify-start px-2 text-sm"
								href={link.href}
								variant="ghost"
								onclick={() => (open = false)}
							>
								{link.label}
							</Button>
						{/each}
					</div>

					<section class="border-t pt-3" aria-labelledby="other-projects-heading">
						<h2 id="other-projects-heading" class="px-2 pb-2 text-sm font-medium">
							Other Projects
						</h2>
						<div class="divide-y">
							{#each otherProjects as project (project.url)}
								<div class="px-2 py-3 first:pt-1">
									<p class="text-sm font-medium">{project.title}</p>
									<p
										class="mt-1 line-clamp-2 text-xs leading-relaxed text-muted-foreground"
									>
										{project.description}
									</p>
									<div class="mt-2 flex items-center gap-2">
										<Button
											aria-label={`View ${project.title} on GitHub`}
											class="rounded-full"
											href={withProjectUtm(
												project.github,
												`mobile-navbar-${project.slug}-github`
											)}
											size="icon-sm"
											target="_blank"
											rel="noopener noreferrer"
											variant="secondary"
											onclick={() => (open = false)}
										>
											<Github class="size-3.5" />
										</Button>
										<Button
											class="rounded-full text-xs"
											href={withProjectUtm(
												project.url,
												`mobile-navbar-${project.slug}`
											)}
											size="sm"
											target="_blank"
											rel="noopener noreferrer"
											variant="outline"
											onclick={() => (open = false)}
										>
											View Project
											<ArrowUpRightIcon class="size-3.5" />
										</Button>
									</div>
								</div>
							{/each}
						</div>
					</section>
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
