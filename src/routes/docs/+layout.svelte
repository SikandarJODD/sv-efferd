<script lang="ts">
	import { page } from "$app/state";
	import DocsSidebar from "$lib/components/docs/docs-sidebar.svelte";
	import { getDocsPage } from "$lib/components/docs/config";
	import * as Breadcrumb from "$lib/components/ui/breadcrumb";
	import { Separator } from "$lib/components/ui/separator";
	import * as Sidebar from "$lib/components/ui/sidebar";

	let { children } = $props();
	let currentPage = $derived(getDocsPage(page.url.pathname));
</script>

<Sidebar.Provider>
	<DocsSidebar />

	<Sidebar.Inset class="min-w-0 overflow-hidden border-x border-border/80">
		<header
			class="sticky top-0 z-20 flex h-14 shrink-0 items-center gap-2 border-b border-border/80 bg-background/95 px-4 backdrop-blur supports-backdrop-filter:bg-background/70"
		>
			<Sidebar.Trigger class="-ms-1" />
			<Separator orientation="vertical" class="me-2 h-4" />

			<Breadcrumb.Root>
				<Breadcrumb.List>
					<Breadcrumb.Item class="hidden md:block">
						<Breadcrumb.Link href="/docs">Docs</Breadcrumb.Link>
					</Breadcrumb.Item>
					<Breadcrumb.Separator class="hidden md:block" />
					<Breadcrumb.Item>
						<Breadcrumb.Page>{currentPage.title}</Breadcrumb.Page>
					</Breadcrumb.Item>
				</Breadcrumb.List>
			</Breadcrumb.Root>
		</header>

		<div class="flex flex-1 flex-col py-6 sm:py-8">
			{@render children()}
		</div>
	</Sidebar.Inset>
</Sidebar.Provider>
