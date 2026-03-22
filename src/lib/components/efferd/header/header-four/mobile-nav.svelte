<script lang="ts">
	import { Button } from "$lib/components/ui/button";
	import { Portal, PortalBackdrop } from "$lib/components/ui/portal";
	import { cn } from "$lib/utils";
	import { MenuIcon, XIcon } from "@lucide/svelte";
	import { navLinks } from "./nav-links";
	let open = $state(false);
</script>

<div class="md:hidden">
	<Button
		aria-controls="mobile-menu"
		aria-expanded={open}
		aria-label="Toggle menu"
		class="size-8 md:hidden"
		size="icon"
		variant="secondary"
		onclick={() => (open = !open)}
	>
		{#if open}
			<XIcon class="size-4.5" />
		{:else}
			<MenuIcon class="size-4.5" />
		{/if}
	</Button>
	{#if open}
		<Portal class="top-14">
			<PortalBackdrop />
			<div
				class={cn(
					"ease-out data-[slot=open]:animate-in data-[slot=open]:zoom-in-97",
					"size-full px-6 py-4"
				)}
				data-slot={open ? "open" : "closed"}
			>
				<ul class="grid gap-y-4">
					{#each navLinks as link, i}
						<li>
							<a href={link.href} class="text-xl font-medium">
								{link.label}
							</a>
						</li>
					{/each}
				</ul>
				<div class="mt-4 grid grid-cols-2 gap-2">
					<Button variant="outline">Sign In</Button>
					<Button>Get Started</Button>
				</div>
			</div>
		</Portal>
	{/if}
</div>
