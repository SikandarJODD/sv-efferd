<script lang="ts">
	import { Button } from "$lib/components/ui/button";
	import { Portal, PortalBackdrop } from "$lib/components/ui/portal";
	import { Github, X as XLogo } from "$lib/svgs";
	import { cn } from "$lib/utils";
	import { MenuIcon, XIcon } from "@lucide/svelte";
	import { landingNavLinks, landingSocialLinks } from "./config";

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

	function closeMenu() {
		open = false;
	}
</script>

<div class="md:hidden">
	<Button
		aria-controls="site-mobile-menu"
		aria-expanded={open}
		aria-label={open ? "Close menu" : "Open menu"}
		class="border-border/80 bg-background/70 backdrop-blur-sm"
		size="icon-sm"
		variant="outline"
		onclick={() => (open = !open)}
	>
		{#if open}
			<XIcon class="size-4" />
		{:else}
			<MenuIcon class="size-4" />
		{/if}
	</Button>

	{#if open}
		<Portal class="top-0">
			<PortalBackdrop state="open" />

			<div
				class={cn(
					"data-[slot=open]:animate-in data-[slot=open]:fade-in-0 data-[slot=open]:slide-in-from-top-2",
					"flex-1 overflow-y-auto p-4 z-100 duration-300 ease-out"
				)}
				data-slot="open"
				id="site-mobile-menu"
			>
				<div class="mx-auto w-full max-w-7xl">
					<div
						class="rounded-2xl border border-border/80 bg-background/95 p-4 shadow-lg backdrop-blur-xl"
					>
						<div class="flex items-center pl-4 justify-end gap-3">
							<Button
								aria-label="Close menu"
								size="icon-sm"
								variant="ghost"
								onclick={closeMenu}
							>
								<XIcon class="size-4" />
							</Button>
						</div>

						<div class="grid gap-1">
							{#each landingNavLinks as link (link.href)}
								<Button
									class="justify-start rounded-xl text-sm"
									href={link.href}
									variant="ghost"
									onclick={closeMenu}
								>
									{link.label}
								</Button>
							{/each}
						</div>

						<div class="mt-4 border-t border-border/80 pt-4">
							<div class="grid grid-cols-2 gap-2">
								{#each blockLinks as link (link.href)}
									<Button
										class="justify-start rounded-xl text-sm"
										href={link.href}
										variant="link"
										onclick={closeMenu}
									>
										{link.label}
									</Button>
								{/each}
							</div>
						</div>

						<div class="mt-4 border-t border-border/80 pt-4">
							<div class="flex justify-end gap-2">
								{#each landingSocialLinks as link (link.href)}
									<Button
										aria-label={link.label}
										href={link.href}
										size="icon-sm"
										target="_blank"
										variant="outline"
										onclick={closeMenu}
									>
										{#if link.id === "x"}
											<XLogo class="size-4" />
										{:else}
											<Github class="size-4" />
										{/if}
										<!-- <span>{link.label}</span> -->
									</Button>
								{/each}
							</div>
						</div>
					</div>
				</div>
			</div>
		</Portal>
	{/if}
</div>
