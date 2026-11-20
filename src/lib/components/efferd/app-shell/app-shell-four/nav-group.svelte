<script lang="ts">
	import * as Collapsible from "#lib/components/ui/collapsible/index.js";
	import * as Sidebar from "#lib/components/ui/sidebar/index.js";
	import { ChevronRightIcon } from "@lucide/svelte";
	import type { SidebarNavGroup } from "./app-shared.js";

	let { label, items, pathname }: SidebarNavGroup & { pathname?: string } = $props();
</script>

<Sidebar.Group>
	{#if label}<Sidebar.GroupLabel>{label}</Sidebar.GroupLabel>{/if}
	<Sidebar.Menu>
		{#each items as item (item.title)}
			<Collapsible.Root
				class="group/collapsible"
				open={item.path === pathname ||
					item.subItems?.some((subItem) => subItem.path === pathname)}
			>
				{#snippet child({ props })}
					<Sidebar.MenuItem {...props}>
						{#if item.subItems?.length}
							<Collapsible.Trigger>
								{#snippet child({ props })}
									<Sidebar.MenuButton
										{...props}
										isActive={item.path === pathname}
									>
										{#if item.icon}<item.icon />{/if}<span>{item.title}</span>
										<ChevronRightIcon
											class="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90"
										/>
									</Sidebar.MenuButton>
								{/snippet}
							</Collapsible.Trigger>
							<Collapsible.Content>
								<Sidebar.MenuSub>
									{#each item.subItems as subItem (subItem.title)}
										<Sidebar.MenuSubItem>
											<Sidebar.MenuSubButton
												isActive={subItem.path === pathname}
											>
												{#snippet child({ props })}<a
														href={subItem.path}
														{...props}
														>{#if subItem.icon}<subItem.icon
															/>{/if}<span>{subItem.title}</span></a
													>{/snippet}
											</Sidebar.MenuSubButton>
										</Sidebar.MenuSubItem>
									{/each}
								</Sidebar.MenuSub>
							</Collapsible.Content>
						{:else}
							<Sidebar.MenuButton isActive={item.path === pathname}>
								{#snippet child({ props })}<a href={item.path} {...props}
										>{#if item.icon}<item.icon />{/if}<span>{item.title}</span
										></a
									>{/snippet}
							</Sidebar.MenuButton>
						{/if}
					</Sidebar.MenuItem>
				{/snippet}
			</Collapsible.Root>
		{/each}
	</Sidebar.Menu>
</Sidebar.Group>
