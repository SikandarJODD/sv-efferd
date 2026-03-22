<script lang="ts">
	import { page } from '$app/state';
	import * as Add from '$lib/components/ui/add';
	import { AGENTS, type Agent } from '$lib/components/ui/add';
	import { cn } from '$lib/utils';

	interface InstallComponentProps {
		id?: string;
		class?: string;
	}

	let { id, class: className = '' }: InstallComponentProps = $props();

	let currentAgent: Agent = $state('pnpm');
	let installUrl = $derived(id?.trim() ? `${page.url.origin}/r/${id.trim()}.json` : '');
</script>

{#if installUrl}
	<Add.Provider bind:agent={currentAgent}>
		<Add.Root item={installUrl} withoutRegistry>
			<Add.Group class={cn('h-8 w-80 max-w-full', className)}>
				<Add.Button class="h-8 min-w-0 md:pr-2 md:pl-1 [&>div]:size-8" />
				<Add.GroupSeparator class="h-4" />
				<Add.Dropdown class="size-8">
					<Add.DropdownContent>
						{#each AGENTS as addAgent (addAgent)}
							<Add.DropdownAgentOption agent={addAgent} />
						{/each}
					</Add.DropdownContent>
				</Add.Dropdown>
			</Add.Group>
		</Add.Root>
	</Add.Provider>
{/if}
