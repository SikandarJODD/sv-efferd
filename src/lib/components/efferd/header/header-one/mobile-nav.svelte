<script lang="ts">
	import { Button } from "#lib/components/ui/button/index.js";
	import * as Sheet from "#lib/components/ui/sheet/index.js";
	import { MenuIcon, XIcon } from "@lucide/svelte";
	import { navLinks } from "./nav-links";

	let open = $state(false);
</script>

<div class="md:hidden">
	<Sheet.Root bind:open>
		<Sheet.Trigger>
			{#snippet child({ props })}
				<Button
					{...props}
					aria-label="Open menu"
					class="size-11 md:hidden"
					size="icon"
					variant="outline"
				>
					<MenuIcon class="size-4.5" />
				</Button>
			{/snippet}
		</Sheet.Trigger>

		<Sheet.Content
			class="top-14 gap-0 border-x-0 p-4 pb-[calc(1rem+env(safe-area-inset-bottom,0px))] shadow-none data-[side=top]:h-[calc(100dvh-3.5rem)] motion-reduce:transition-none motion-reduce:data-open:animate-none motion-reduce:data-closed:animate-none"
			showCloseButton={false}
			side="top"
		>
			<Sheet.Title class="sr-only">Navigation menu</Sheet.Title>
			<Sheet.Description class="sr-only">Primary site navigation</Sheet.Description>
			<Sheet.Close>
				{#snippet child({ props })}
					<Button
						{...props}
						aria-label="Close menu"
						class="absolute top-2 right-4 size-11"
						size="icon"
						variant="ghost"
					>
						<XIcon class="size-4.5" />
					</Button>
				{/snippet}
			</Sheet.Close>

			<nav aria-label="Mobile navigation" class="mt-12 overflow-y-auto overscroll-contain">
				<div class="grid gap-y-2">
					{#each navLinks as link}
						<Button
							class="min-h-11 justify-start"
							variant="ghost"
							href={link.href}
							onclick={() => (open = false)}
						>
							{link.label}
						</Button>
					{/each}
				</div>
				<div class="mt-12 flex flex-col gap-2">
					<Button class="min-h-11 w-full" variant="outline">Sign In</Button>
					<Button class="min-h-11 w-full">Get Started</Button>
				</div>
			</nav>
		</Sheet.Content>
	</Sheet.Root>
</div>
