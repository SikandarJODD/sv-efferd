<script lang="ts">
	import { ArrowUpRightIcon } from "@lucide/svelte";
	import * as NavigationMenu from "#lib/components/ui/navigation-menu/index.js";
	import { Github } from "#lib/svgs/index.js";
	import { landingNavLinks } from "./config";
	import { otherProjects, withProjectUtm } from "./other-projects";
</script>

<NavigationMenu.Root>
	<NavigationMenu.List class="gap-1">
		{#each landingNavLinks as link (link.href)}
			<NavigationMenu.Item>
				<NavigationMenu.Link
					class="rounded-full px-3 py-1.5 text-muted-foreground hover:text-foreground"
				>
					{#snippet child({ props })}
						<a href={link.href} {...props}>{link.label}</a>
					{/snippet}
				</NavigationMenu.Link>
			</NavigationMenu.Item>
		{/each}

		<NavigationMenu.Item>
			<NavigationMenu.Trigger
				class="h-8 rounded-full px-3 font-normal text-muted-foreground hover:text-foreground"
			>
				Other Projects
			</NavigationMenu.Trigger>
			<NavigationMenu.Content class="p-0 shadow-none">
				<div class="w-[42rem]">
					<ul class="grid grid-cols-2 gap-1 p-2">
						{#each otherProjects as project (project.url)}
							<li
								class="group/project-card relative flex min-w-0 items-start gap-1 rounded-md p-2 transition-colors focus-within:bg-accent hover:bg-accent"
							>
								<a
									href={withProjectUtm(project.url, `navbar-${project.slug}`)}
									target="_blank"
									rel="noopener noreferrer"
									class="min-w-0 flex-1 rounded-sm p-1 outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
								>
									<div
										class="flex items-center gap-1.5 text-sm leading-none font-medium"
									>
										<span class="truncate">{project.title}</span>
									</div>
									<p
										class="mt-1 line-clamp-2 text-xs leading-snug text-muted-foreground"
									>
										{project.description}
									</p>
								</a>
								<a
									href={withProjectUtm(
										project.github,
										`navbar-${project.slug}-github`
									)}
									target="_blank"
									rel="noopener noreferrer"
									aria-label={`View ${project.title} on GitHub`}
									class="flex size-7 shrink-0 items-center justify-center rounded-md border text-muted-foreground transition-colors outline-none hover:text-foreground focus-visible:ring-3 focus-visible:ring-ring/50"
								>
									<Github class="size-3.5" />
								</a>
								<span
									aria-hidden="true"
									class="pointer-events-none absolute right-3 bottom-2 translate-y-1 text-muted-foreground opacity-0 transition-[opacity,transform] duration-200 group-hover/project-card:translate-y-0 group-hover/project-card:opacity-100 motion-reduce:transition-none"
								>
									<ArrowUpRightIcon class="size-3" />
								</span>
							</li>
						{/each}
					</ul>
					<div
						class="flex items-center justify-center gap-1.5 border-t px-3 py-1.5 text-xs text-muted-foreground"
					>
						<span>Built by</span>
						<a
							href={withProjectUtm("https://bhide.dev", "navbar-owner")}
							target="_blank"
							rel="noopener noreferrer"
							class="inline-flex min-h-8 items-center gap-1.5 rounded-sm font-medium text-foreground outline-none hover:text-primary focus-visible:ring-3 focus-visible:ring-ring/50"
						>
							<img
								src="https://github.com/SikandarJODD.png"
								alt=""
								width="16"
								height="16"
								class="size-4 rounded-full"
							/>
							Bhide Svelte
						</a>
					</div>
				</div>
			</NavigationMenu.Content>
		</NavigationMenu.Item>
	</NavigationMenu.List>
</NavigationMenu.Root>
