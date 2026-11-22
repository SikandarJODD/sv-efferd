<script lang="ts">
	import { Button } from "#lib/components/ui/button/index.js";
	import * as Sidebar from "#lib/components/ui/sidebar/index.js";
	import Logo from "#lib/components/svgs/logo.svelte";
	import PlusIcon from "@lucide/svelte/icons/plus";
	import SearchIcon from "@lucide/svelte/icons/search";
	import { footerNavLinks, navGroups } from "./app-shared.js";
	import LatestChange from "./latest-change.svelte";
	import NavGroup from "./nav-group.svelte";

	let { pathname }: { pathname?: string } = $props();
</script>

<Sidebar.Root collapsible="icon" variant="inset">
	<Sidebar.Header class="h-14 justify-center">
		<Sidebar.MenuButton>
			{#snippet child({ props })}
				<a href="#link" {...props}><Logo /><span class="font-medium">Efferd</span></a>
			{/snippet}
		</Sidebar.MenuButton>
	</Sidebar.Header>
	<Sidebar.Content>
		<Sidebar.Group>
			<Sidebar.MenuItem class="flex items-center gap-2">
				<Sidebar.MenuButton
					class="min-w-8 bg-primary text-primary-foreground duration-200 ease-linear hover:bg-primary/90 hover:text-primary-foreground active:bg-primary/90 active:text-primary-foreground"
					tooltipContent="Quick Create"
					><PlusIcon /><span>New Conversation</span></Sidebar.MenuButton
				>
				<Button
					aria-label="Search conversations"
					class="size-8 group-data-[collapsible=icon]:opacity-0"
					size="icon"
					variant="outline"
				>
					<SearchIcon /><span class="sr-only">Search conversations</span>
				</Button>
			</Sidebar.MenuItem>
		</Sidebar.Group>
		{#each navGroups as group (group.label ?? group.items[0]?.title)}
			<NavGroup {...group} {pathname} />
		{/each}
	</Sidebar.Content>
	<Sidebar.Footer>
		<LatestChange />
		<Sidebar.Menu class="mt-2">
			{#each footerNavLinks as item (item.title)}
				<Sidebar.MenuItem>
					<Sidebar.MenuButton
						class="text-muted-foreground"
						isActive={item.path === pathname}
						size="sm"
					>
						{#snippet child({ props })}
							<a href={item.path} {...props}
								>{#if item.icon}<item.icon />{/if}<span>{item.title}</span></a
							>
						{/snippet}
					</Sidebar.MenuButton>
				</Sidebar.MenuItem>
			{/each}
		</Sidebar.Menu>
	</Sidebar.Footer>
</Sidebar.Root>
