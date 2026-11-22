<script lang="ts">
	import * as Sidebar from "#lib/components/ui/sidebar/index.js";
</script>

<Sidebar.Header class="flex-row items-center gap-1 p-1.5">
	<Sidebar.Menu class="flex-1">
		<Sidebar.MenuItem>
			<Sidebar.MenuButton class="px-2 text-xs">
				{#snippet child({ props })}
					<a href="/" aria-label="Svelte Efferd home" {...props}>
						<span class="font-mono font-medium tracking-tight">Svelte Efferd</span>
					</a>
				{/snippet}
			</Sidebar.MenuButton>
		</Sidebar.MenuItem>
	</Sidebar.Menu>
	<Sidebar.Trigger
		size="icon-sm"
		class="shrink-0 text-muted-foreground hover:text-primary"
	/>
</Sidebar.Header>
