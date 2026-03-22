<script lang="ts" module>
	// sample data
	const data = {
		versions: ["1.0.1", "1.1.0-alpha", "2.0.0-beta1"],
		navMain: [
			{
				title: "Getting Started",
				url: "/sidebar-01",
				items: [
					{
						title: "Installation",
						url: "/sidebar-01",
					},
					{
						title: "Project Structure",
						url: "/sidebar-01",
					},
				],
			},
			{
				title: "Build Your Application",
				url: "/sidebar-01",
				items: [
					{
						title: "Routing",
						url: "/sidebar-01",
					},
					{
						title: "Data Fetching",
						url: "/sidebar-01",
						isActive: true,
					},
					{
						title: "Rendering",
						url: "/sidebar-01",
					},
					{
						title: "Caching",
						url: "/sidebar-01",
					},
					{
						title: "Styling",
						url: "/sidebar-01",
					},
					{
						title: "Optimizing",
						url: "/sidebar-01",
					},
					{
						title: "Configuring",
						url: "/sidebar-01",
					},
					{
						title: "Testing",
						url: "/sidebar-01",
					},
					{
						title: "Authentication",
						url: "/sidebar-01",
					},
					{
						title: "Deploying",
						url: "/sidebar-01",
					},
					{
						title: "Upgrading",
						url: "/sidebar-01",
					},
					{
						title: "Examples",
						url: "/sidebar-01",
					},
				],
			},
			{
				title: "API Reference",
				url: "/sidebar-01",
				items: [
					{
						title: "Components",
						url: "/sidebar-01",
					},
					{
						title: "File Conventions",
						url: "/sidebar-01",
					},
					{
						title: "Functions",
						url: "/sidebar-01",
					},
					{
						title: "next.config.js Options",
						url: "/sidebar-01",
					},
					{
						title: "CLI",
						url: "/sidebar-01",
					},
					{
						title: "Edge Runtime",
						url: "/sidebar-01",
					},
				],
			},
			{
				title: "Architecture",
				url: "/sidebar-01",
				items: [
					{
						title: "Accessibility",
						url: "/sidebar-01",
					},
					{
						title: "Fast Refresh",
						url: "/sidebar-01",
					},
					{
						title: "Svelte Compiler",
						url: "/sidebar-01",
					},
					{
						title: "Supported Browsers",
						url: "/sidebar-01",
					},
					{
						title: "Rollup",
						url: "/sidebar-01",
					},
				],
			},
		],
	};
</script>

<script lang="ts">
	import SearchForm from "./search-form.svelte";
	import VersionSwitcher from "./version-switcher.svelte";
	import * as Sidebar from "$lib/components/ui/sidebar/index.js";
	import type { ComponentProps } from "svelte";

	let { ref = $bindable(null), ...restProps }: ComponentProps<typeof Sidebar.Root> = $props();
</script>

<Sidebar.Root {...restProps} bind:ref>
	<Sidebar.Header>
		<VersionSwitcher versions={data.versions} defaultVersion={data.versions[0]} />
		<SearchForm />
	</Sidebar.Header>
	<Sidebar.Content>
		<!-- We create a Sidebar.Group for each parent. -->
		{#each data.navMain as group (group.title)}
			<Sidebar.Group>
				<Sidebar.GroupLabel>{group.title}</Sidebar.GroupLabel>
				<Sidebar.GroupContent>
					<Sidebar.Menu>
						{#each group.items as item (item.title)}
							<Sidebar.MenuItem>
								<Sidebar.MenuButton isActive={item.isActive}>
									{#snippet child({ props })}
										<a href={item.url} {...props}>{item.title}</a>
									{/snippet}
								</Sidebar.MenuButton>
							</Sidebar.MenuItem>
						{/each}
					</Sidebar.Menu>
				</Sidebar.GroupContent>
			</Sidebar.Group>
		{/each}
	</Sidebar.Content>
	<Sidebar.Rail />
</Sidebar.Root>
