<script lang="ts">
	import { Button } from "#lib/components/ui/button/index.js";
	import * as Sidebar from "#lib/components/ui/sidebar/index.js";
	import Logo from "#lib/components/svgs/logo.svelte";
	import { cn } from "#lib/utils.js";
	import SettingsIcon from "@lucide/svelte/icons/settings";
	import AppSearch from "./app-search.svelte";
	import { navGroups } from "./app-shared.js";
	import CustomTrigger from "./custom-trigger.svelte";
	import LatestChange from "./latest-change.svelte";
	import ThemeSwitcher from "./theme-switcher.svelte";

	let { pathname }: { pathname?: string } = $props();
</script>

<Sidebar.Root
	class={cn(
		"*:data-[slot=sidebar-inner]:bg-background",
		"transition-[left,right,top,width] group-data-[collapsible=offcanvas]:top-[calc(var(--app-header-height)*0.5)]"
	)}
	collapsible="offcanvas"
	variant="sidebar"
>
	<Sidebar.Header class="h-(--app-header-height,3rem) flex-row items-center justify-between">
		<Button href="#link" variant="ghost"><Logo /><span class="font-medium">Efferd</span></Button
		>
		<CustomTrigger place="sidebar" />
	</Sidebar.Header>
	<Sidebar.Content>
		<Sidebar.Group><AppSearch /></Sidebar.Group>
		{#each navGroups as group (group.label)}
			<Sidebar.Group>
				<Sidebar.GroupLabel class="group-data-[collapsible=icon]:pointer-events-none"
					>{group.label}</Sidebar.GroupLabel
				>
				<Sidebar.Menu>
					{#each group.items as item (item.title)}
						<Sidebar.MenuItem>
							<Sidebar.MenuButton
								isActive={item.path === pathname}
								tooltipContent={item.title}
							>
								{#snippet child({ props })}<a href={item.path} {...props}
										>{#if item.icon}<item.icon />{/if}<span>{item.title}</span
										></a
									>{/snippet}
							</Sidebar.MenuButton>
						</Sidebar.MenuItem>
					{/each}
				</Sidebar.Menu>
			</Sidebar.Group>
		{/each}
	</Sidebar.Content>
	<Sidebar.Footer class="px-4">
		<LatestChange />
		<div class="flex items-center pt-4 pb-2">
			<ThemeSwitcher />
			<Button
				aria-label="Settings"
				class="text-muted-foreground"
				href="#"
				size="icon-sm"
				variant="ghost"><SettingsIcon /></Button
			>
		</div>
	</Sidebar.Footer>
	<Sidebar.Rail />
</Sidebar.Root>
