<script lang="ts">
	import { page } from "$app/state";
	import { StripedPattern } from "$lib/components/magic/striped-pattern";
	import { DecorIcon } from "$lib/components/ui/decor-icon";
	import { cn } from "$lib/utils";
	import { docsPrimaryPages, docsSecondaryPages, normalizeDocsPath } from "./config";

	let currentPath = $derived(normalizeDocsPath(page.url.pathname));

	function navItemClass(isActive: boolean, tone: "primary" | "secondary") {
		return cn(
			"flex items-center rounded-md  px-2.5 py-2 text-sm leading-none transition-colors",
			isActive
				? "border-border/80 bg-foreground/[0.04] font-medium text-primary/80!"
				: "border-transparent hover:bg-foreground/[0.03] hover:text-foreground",
			tone === "secondary" ? "text-muted-foreground/80" : "text-muted-foreground"
		);
	}
</script>

<aside class="sticky top-20 hidden self-start md:block">
	<nav aria-label="Docs">
		<ul class="space-y-1">
			{#each docsPrimaryPages as item (item.href)}
				<li>
					<a
						aria-current={currentPath === item.href ? "page" : undefined}
						class={navItemClass(currentPath === item.href, "primary")}
						href={item.href}
					>
						{item.title}
					</a>
				</li>
			{/each}
		</ul>
	</nav>

	<ul>
		{#each docsSecondaryPages as item (item.href)}
			<li>
				<a
					aria-current={currentPath === item.href ? "page" : undefined}
					class={navItemClass(currentPath === item.href, "primary")}
					href={item.href}
				>
					{item.title}
				</a>
			</li>
		{/each}
	</ul>
</aside>
