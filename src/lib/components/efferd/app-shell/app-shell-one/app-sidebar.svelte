<script lang="ts">
	import * as Sidebar from "#lib/components/ui/sidebar/index.js";
	import Logo from "#lib/svgs/logo.svelte";
	import { footerNavLinks, navGroups } from "./app-shared.js";
	import NavUser from "./nav-user.svelte";

	let { pathname }: { pathname?: string } = $props();
</script>

<Sidebar.Root
	class="static min-h-full *:data-[slot=sidebar-inner]:bg-background"
	collapsible="offcanvas"
	variant="sidebar"
>
	<Sidebar.Header class="relative h-14 justify-center px-2 py-0">
		<a
			class="flex h-10 w-max items-center justify-center rounded-lg px-3 hover:bg-muted dark:hover:bg-muted/50"
			href="#link"
		>
			<Logo class="h-4" />
			<span class="sr-only">Efferd</span>
		</a>
	</Sidebar.Header>
	<Sidebar.Content>
		{#each navGroups as group (group.label)}
			<Sidebar.Group>
				{#if group.label}<Sidebar.GroupLabel class="font-normal"
						>{group.label}</Sidebar.GroupLabel
					>{/if}
				<Sidebar.Menu>
					{#each group.items as item (item.title)}
						<Sidebar.MenuItem>
							<Sidebar.MenuButton
								isActive={item.url === pathname}
								tooltipContent={item.title}
							>
								{#snippet child({ props })}
									<a href={item.url} {...props}
										><item.icon /><span>{item.title}</span></a
									>
								{/snippet}
							</Sidebar.MenuButton>
						</Sidebar.MenuItem>
					{/each}
				</Sidebar.Menu>
			</Sidebar.Group>
		{/each}
	</Sidebar.Content>
	<Sidebar.Footer class="gap-0 p-0">
		<Sidebar.Menu class="border-t p-2">
			{#each footerNavLinks as item (item.title)}
				<Sidebar.MenuItem>
					<Sidebar.MenuButton
						class="text-muted-foreground"
						isActive={item.url === pathname}
						size="sm"
					>
						{#snippet child({ props })}
							<a href={item.url} {...props}><item.icon /><span>{item.title}</span></a>
						{/snippet}
					</Sidebar.MenuButton>
				</Sidebar.MenuItem>
			{/each}
		</Sidebar.Menu>
		<NavUser />
	</Sidebar.Footer>
</Sidebar.Root>
