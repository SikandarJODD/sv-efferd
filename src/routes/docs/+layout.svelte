<script lang="ts">
	import { page } from "$app/state";
	import DocsSidebar from "$lib/components/docs/docs-sidebar.svelte";
	import { getDocsPage } from "$lib/components/docs/config";
	import * as Breadcrumb from "$lib/components/ui/breadcrumb";
	import DecorIcon from "$lib/components/ui/decor-icon/decor-icon.svelte";

	let { children } = $props();
	let currentPage = $derived(getDocsPage(page.url.pathname));
</script>

<section class="relative min-w-0">
	<header
		class="sticky top-0 z-20 flex h-14 shrink-0 items-center border-b border-border/80 bg-background/95 px-4 backdrop-blur supports-backdrop-filter:bg-background/70"
	>
		<DecorIcon
			class="z-50 size-3.5 bg-background stroke-muted-foreground/80"
			position="top-left"
		/>
		<DecorIcon
			class="z-50 size-3.5 bg-background stroke-muted-foreground/80"
			position="top-right"
		/>
		<DecorIcon
			class="z-50 size-3.5 bg-background stroke-muted-foreground/80"
			position="bottom-left"
		/>
		<DecorIcon
			class="z-50 size-3.5 bg-background stroke-muted-foreground/80"
			position="bottom-right"
		/>
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

	<div class="grid md:grid-cols-[14rem_minmax(0,1fr)]">
		<div class="hidden border-e border-border/80 px-3 pt-6 md:block lg:px-4">
			<DocsSidebar />
		</div>

		<div class="min-w-0 p-6 sm:py-0">
			{@render children()}
		</div>
	</div>
</section>
