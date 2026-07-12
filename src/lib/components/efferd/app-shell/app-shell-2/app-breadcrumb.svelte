<script lang="ts">
	import * as Breadcrumb from "$lib/components/ui/breadcrumb/index.js";
	import type { Component } from "svelte";
	// Use LucideIcon type if using lucide icons
	type AppBreadcrumbProps = {
		title: string;
		icon?: Component;
	};

	let {page }: { page: AppBreadcrumbProps } = $props();
	let IconComponent = $derived(page.icon);
</script>

<Breadcrumb.Root>
	<Breadcrumb.List>
		<Breadcrumb.Item>
			<Breadcrumb.Page class="flex items-center gap-2 [&>svg]:size-3.5">
				{page.title}
				<IconComponent />
			</Breadcrumb.Page>
		</Breadcrumb.Item>
	</Breadcrumb.List>
</Breadcrumb.Root>
