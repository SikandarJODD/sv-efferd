<script lang="ts">
	import * as Sidebar from "$lib/components/ui/sidebar/index.js";
	import { Logo } from "$lib/svgs";
	import { cn } from "$lib/utils";
	import { navGroups, footerNavLinks } from "./app-shared";
	import LatestChange from "./latest-change.svelte";
	import NavGroup from "./nav-group.svelte";
</script>

<Sidebar.Root
	class={cn(
		"*:data-[slot=sidebar-inner]:bg-background",
		"*:data-[slot=sidebar-inner]:dark:bg-[radial-gradient(60%_18%_at_10%_0%,--theme(--color-foreground/.08),transparent)]",
		"**:data-[slot=sidebar-menu-button]:[&>span]:text-foreground/75"
	)}
	variant="sidebar"
	collapsible="icon"
>
	<Sidebar.Header class="h-14 justify-center border-b px-2">
		<Sidebar.Menu>
			<Sidebar.MenuButton>
				{#snippet child({ props })}
					<a {...props} href="#link">
						<Logo class="size-6" />
						<span class="font-mono font-medium tracking-tighter text-foreground!"
							>Svelte Efferd</span
						>
					</a>
				{/snippet}
			</Sidebar.MenuButton>
		</Sidebar.Menu>
	</Sidebar.Header>
	<Sidebar.Content>
		{#each navGroups as group}
			<NavGroup {...group} />
		{/each}
	</Sidebar.Content>
	<Sidebar.Footer class="gap-0 p-0">
		<LatestChange />
		<Sidebar.Menu class="border-t p-2">
			{#each footerNavLinks as item}
				{@const Icon = item.icon}
				<Sidebar.MenuItem>
					<Sidebar.MenuButton class="text-muted-foreground" isActive={false} size="sm">
						{#snippet child({ props })}
							<a {...props} href={item.path}>
								<Icon />
								<span>{item.title}</span>
							</a>
						{/snippet}
					</Sidebar.MenuButton>
				</Sidebar.MenuItem>
			{/each}
		</Sidebar.Menu>
		<div
			class="px-4 pt-4 pb-2 transition-opacity group-data-[collapsible=icon]:pointer-events-none group-data-[collapsible=icon]:opacity-0"
		>
			<p class="text-[9px] text-nowrap text-muted-foreground">
				© {new Date().getFullYear()} Svelte Efferd LLC
			</p>
		</div>
	</Sidebar.Footer>
	<!-- <Sidebar.Rail /> -->
</Sidebar.Root>
