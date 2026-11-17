<script lang="ts">
	import * as Breadcrumb from "#lib/components/ui/breadcrumb/index.js";
	import type { SidebarNavItem } from "./app-shared.js";

	let { page }: { page?: SidebarNavItem | null } = $props();
</script>

{#if page?.title}
	<Breadcrumb.Root>
		<Breadcrumb.List>
			<Breadcrumb.Item>
				<Breadcrumb.Page class="flex items-center gap-2 [&>svg]:size-3.5">
					{#if page.icon}<page.icon />{/if}
					{page.title}
				</Breadcrumb.Page>
			</Breadcrumb.Item>
		</Breadcrumb.List>
	</Breadcrumb.Root>
{/if}
