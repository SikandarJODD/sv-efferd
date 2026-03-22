<script lang="ts">
	import { Button } from "$lib/components/ui/button";
	import { Portal, PortalBackdrop } from "$lib/components/ui/portal";
	import { Github, X as XLogo } from "$lib/svgs";
	import { cn } from "$lib/utils";
	import { MenuIcon, XIcon } from "@lucide/svelte";
	import { landingNavLinks, landingSocialLinks } from "./config";

	let open = $state(false);

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
		<Portal class="top-16">
			<PortalBackdrop state="open" />

			<div
				class={cn(
					"data-[slot=open]:animate-in data-[slot=open]:fade-in-0 data-[slot=open]:slide-in-from-top-2",
					"p-4 duration-300 ease-out"
				)}
				data-slot="open"
				id="site-mobile-menu"
			>
				<div class="mx-auto w-full max-w-7xl">
					<div
						class="rounded-2xl border border-border/80 bg-background/95 p-4 shadow-lg backdrop-blur-xl"
					>
						<div class="grid gap-1">
							{#each landingNavLinks as link}
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
							<div class="flex gap-2">
								{#each landingSocialLinks as link}
									<Button
										aria-label={link.label}
										class="flex-1 justify-center rounded-xl border-border/80 bg-background/80"
										href={link.href}
										size="sm"
										variant="outline"
										onclick={closeMenu}
									>
										{#if link.id === "x"}
											<XLogo class="size-4" />
										{:else}
											<Github class="size-4" />
										{/if}
										<span>{link.label}</span>
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
