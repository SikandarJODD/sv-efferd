<script lang="ts">
	import { page } from "$app/state";
	import { Button } from "$lib/components/ui/button";
	import * as Sidebar from "$lib/components/ui/sidebar";
	import { cn } from "$lib/utils";
	import { docsNavGroups, docsSupportLinks, normalizeDocsPath } from "./config";

	let currentPath = $derived(normalizeDocsPath(page.url.pathname));
</script>

<Sidebar.Root collapsible="offcanvas">
	<Sidebar.Header class="border-b border-sidebar-border/80 p-0">
		<div class="px-4 py-4">
			<a
				href="/docs"
				class="block rounded-md text-sm font-semibold tracking-tight text-sidebar-foreground transition-colors hover:text-sidebar-foreground/80"
			>
				Efferd Docs
			</a>
			<p class="mt-1 text-xs leading-5 text-sidebar-foreground/70">
				Minimal guides for browsing, installing, and supporting the project.
			</p>
		</div>
	</Sidebar.Header>

	<Sidebar.Content>
		{#each docsNavGroups as group (group.title)}
			<Sidebar.Group>
				<Sidebar.GroupLabel>{group.title}</Sidebar.GroupLabel>
				<Sidebar.GroupContent>
					<Sidebar.Menu>
						{#each group.items as item (item.href)}
							<Sidebar.MenuItem>
								<Sidebar.MenuButton
									isActive={currentPath === item.href}
									tooltipContent={item.title}
								>
									{#snippet child({ props })}
										{@const buttonClass =
											typeof props.class === "string"
												? props.class
												: undefined}
										<a
											href={item.href}
											{...props}
											class={cn(
												buttonClass,
												currentPath === item.href && "font-medium"
											)}
										>
											{item.title}
										</a>
									{/snippet}
								</Sidebar.MenuButton>
							</Sidebar.MenuItem>
						{/each}
					</Sidebar.Menu>
				</Sidebar.GroupContent>
			</Sidebar.Group>
		{/each}
	</Sidebar.Content>

	<Sidebar.Footer class="border-t border-sidebar-border/80">
		<div class="rounded-lg border border-sidebar-border/80 bg-sidebar-accent/30 p-3">
			<p class="text-sm font-medium text-sidebar-foreground">Support Efferd</p>
			<p class="mt-1 text-xs leading-5 text-sidebar-foreground/70">
				Star the repo or say hi on X if the blocks are useful.
			</p>
			<div class="mt-3 flex flex-wrap gap-2">
				<Button
					href={docsSupportLinks.githubRepo}
					target="_blank"
					rel="noreferrer"
					size="sm"
					variant="secondary"
				>
					GitHub
				</Button>
				<Button
					href={docsSupportLinks.xProfile}
					target="_blank"
					rel="noreferrer"
					size="sm"
					variant="ghost"
				>
					X
				</Button>
			</div>
		</div>
	</Sidebar.Footer>

	<Sidebar.Rail />
</Sidebar.Root>
