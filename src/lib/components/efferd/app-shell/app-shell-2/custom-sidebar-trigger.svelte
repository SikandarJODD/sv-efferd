<script lang="ts">
	import * as Sidebar from "$lib/components/ui/sidebar/index.js";
	import * as Tooltip from "$lib/components/ui/tooltip/index.js";
	import * as Kbd from "$lib/components/ui/kbd/index.js";
</script>

<Tooltip.Root delayDuration={800}>
	<Tooltip.Trigger>
		{#snippet child({ props })}
			<Sidebar.Trigger size='icon-xs' {...props} />
		{/snippet}
	</Tooltip.Trigger>
	<Tooltip.Content side="right">
		Toggle Sidebar
		<Kbd.Group>
			<Kbd.Root>⌘</Kbd.Root>
			<Kbd.Root>b</Kbd.Root>
		</Kbd.Group>
	</Tooltip.Content>
</Tooltip.Root>
