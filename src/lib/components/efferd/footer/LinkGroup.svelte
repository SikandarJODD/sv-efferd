<script lang="ts">
	type LinkItem = {
		title: string;
		href: string;
	};

	type Props = {
		title: string;
		links: LinkItem[];
	};

	let { title, links }: Props = $props();
</script>

<div class="p-2">
	<h3 class="mt-2 mb-4 text-xs font-medium uppercase tracking-wider text-foreground/75">
		{title}
	</h3>
	<ul class="space-y-1.5">
		{#each links as link (link.title)}
			<li>
				<a class="text-xs text-muted-foreground hover:text-foreground" href={link.href}>
					{link.title}
				</a>
			</li>
		{/each}
	</ul>
</div>
