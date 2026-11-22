<script lang="ts">
	import * as Sidebar from "#lib/components/ui/sidebar/index.js";
	import { Logo } from "#lib/components/svgs/index.js";
</script>

<Sidebar.Header class="flex-row items-center">
	<Sidebar.Menu class="flex-1">
		<Sidebar.MenuItem>
			<Sidebar.MenuButton size="lg">
				{#snippet child({ props })}
					<a href="/" aria-label="Svelte Efferd home" {...props}>
						<Logo class="size-5" />
						<span class="font-mono font-medium tracking-tight">Svelte Efferd</span>
					</a>
				{/snippet}
			</Sidebar.MenuButton>
		</Sidebar.MenuItem>
	</Sidebar.Menu>
	<Sidebar.Trigger size="icon-sm" class="shrink-0" />
</Sidebar.Header>
