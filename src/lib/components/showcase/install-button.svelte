<script lang="ts">
	import { page } from "$app/state";
	import * as Add from "#lib/components/ui/add/index.js";
	import { AGENTS, type Agent } from "#lib/components/ui/add/index.js";
	import { cn } from "#lib/utils.js";

	interface InstallButtonProps {
		id?: string;
		class?: string;
	}

	let { id, class: className = "" }: InstallButtonProps = $props();

	let currentAgent: Agent = $state("pnpm");
	let installUrl = $derived(id?.trim() ? `${page.url.origin}/r/${id.trim()}.json` : "");
</script>

{#if installUrl}
	<Add.Provider bind:agent={currentAgent}>
		<Add.Root item={installUrl} withoutRegistry>
			<Add.Group class={cn("min-h-8 w-full max-w-full sm:h-8 sm:w-80", className)}>
				<Add.Button
					data-s-event={`copy_install_command:${id}`}
					class="min-h-8 min-w-0 cursor-pointer py-1 pr-1 md:h-8 md:py-0 md:pr-2 md:pl-1 [&>div]:size-8"
				/>
				<Add.GroupSeparator />
				<Add.Dropdown class="size-8 cursor-pointer">
					<Add.DropdownContent>
						{#each AGENTS as addAgent (addAgent)}
							<Add.DropdownAgentOption agent={addAgent} class="cursor-pointer" />
						{/each}
					</Add.DropdownContent>
				</Add.Dropdown>
			</Add.Group>
		</Add.Root>
	</Add.Provider>
{/if}
