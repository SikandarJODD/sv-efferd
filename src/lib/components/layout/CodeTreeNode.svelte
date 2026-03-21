<script lang="ts">
	import type { BlockCodeNode } from '$lib/blocks/showcase';
	import { cn } from '$lib/utils';
	import ChevronDown from '@lucide/svelte/icons/chevron-down';
	import ChevronRight from '@lucide/svelte/icons/chevron-right';
	import FileCode2 from '@lucide/svelte/icons/file-code-2';
	import Folder from '@lucide/svelte/icons/folder';
	import FolderOpen from '@lucide/svelte/icons/folder-open';
	import CodeTreeNode from './CodeTreeNode.svelte';

	interface CodeTreeNodeProps {
		node: BlockCodeNode;
		activeFileId: string;
		openFolderIds: Set<string>;
		onSelectFile: (fileId: string) => void;
		onToggleFolder: (folderId: string) => void;
	}

	let { node, activeFileId, openFolderIds, onSelectFile, onToggleFolder }: CodeTreeNodeProps =
		$props();

	let isOpen = $derived(node.type === 'folder' ? openFolderIds.has(node.id) : false);
</script>

{#if node.type === 'folder'}
	<div>
		<button
			type="button"
			class="flex w-full items-center gap-2 rounded-md px-2 py-1.5 text-left text-xs text-muted-foreground transition-colors hover:bg-muted/60 hover:text-foreground"
			onclick={() => onToggleFolder(node.id)}
		>
			<span class="flex w-4 shrink-0 items-center justify-center">
				{#if isOpen}
					<ChevronDown class="size-3.5" />
				{:else}
					<ChevronRight class="size-3.5" />
				{/if}
			</span>
			{#if isOpen}
				<FolderOpen class="size-3.5 text-foreground/80" />
			{:else}
				<Folder class="size-3.5 text-foreground/80" />
			{/if}
			<span class="truncate">{node.name}</span>
		</button>

		{#if isOpen}
			<div class="ml-4 border-l border-border/60 pl-1.5">
				{#each node.children as child (child.id)}
					<CodeTreeNode
						node={child}
						{activeFileId}
						{openFolderIds}
						{onSelectFile}
						{onToggleFolder}
					/>
				{/each}
			</div>
		{/if}
	</div>
{:else}
	<button
		type="button"
		class={cn(
			'flex w-full items-center gap-2 rounded-md px-2 py-1.5 text-left text-xs transition-colors',
			activeFileId === node.id
				? 'bg-accent text-foreground shadow-sm'
				: 'text-muted-foreground hover:bg-muted/60 hover:text-foreground'
		)}
		onclick={() => onSelectFile(node.id)}
	>
		<span class="w-4 shrink-0"></span>
		<FileCode2 class="size-3.5 shrink-0 text-sky-500" />
		<span class="truncate">{node.name}</span>
	</button>
{/if}
