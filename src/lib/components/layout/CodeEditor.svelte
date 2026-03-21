<script lang="ts">
	import {
		collectDefaultOpenFolderIds,
		findBlockCodeFile,
		flattenBlockCodeFiles,
		type BlockCodeTree
	} from '$lib/blocks/showcase';
	import Check from '@lucide/svelte/icons/check';
	import Copy from '@lucide/svelte/icons/copy';
	import { UseClipboard } from '$lib/hooks/use-clipboard.svelte';
	import { scale } from 'svelte/transition';
	import Button from '../ui/button/button.svelte';
	import Code from './code/code.svelte';
	import CodeTreeNode from './CodeTreeNode.svelte';

	let { codeTree }: { codeTree: BlockCodeTree } = $props();

	let clipboard = new UseClipboard({ delay: 1500 });
	let openFolderIds = $state(new Set<string>());
	let activeFileId = $state('');

	let files = $derived(flattenBlockCodeFiles(codeTree.nodes));
	let fallbackFileId = $derived(codeTree.defaultFileId || files[0]?.id || '');
	let activeFile = $derived(findBlockCodeFile(codeTree, activeFileId) ?? files[0]);

	$effect(() => {
		activeFileId = fallbackFileId;
		openFolderIds = new Set(collectDefaultOpenFolderIds(codeTree.nodes));
	});

	function selectFile(fileId: string) {
		activeFileId = fileId;
	}

	function toggleFolder(folderId: string) {
		const next = new Set(openFolderIds);

		if (next.has(folderId)) {
			next.delete(folderId);
		} else {
			next.add(folderId);
		}

		openFolderIds = next;
	}

	async function copyCode() {
		if (!activeFile) return;
		await clipboard.copy(activeFile.code);
	}
</script>

<div class="flex flex-col border-t sm:min-h-[36rem] sm:flex-row">
	<div
		class="w-full border-b bg-neutral-50 text-black [--color-background:var(--color-zinc-900)] [--color-foreground:white] [--color-muted:var(--color-zinc-800)] sm:w-72 sm:border-r sm:border-b-0 dark:bg-zinc-900/25 dark:text-white"
	>
		<div class="border-b px-4 py-3 text-xs uppercase tracking-[0.24em] text-muted-foreground">
			Files
		</div>
		<div class="max-h-[18rem] overflow-auto px-2 py-3 sm:max-h-[36rem]">
			{#each codeTree.nodes as node (node.id)}
				<CodeTreeNode
					{node}
					{activeFileId}
					{openFolderIds}
					onSelectFile={selectFile}
					onToggleFolder={toggleFolder}
				/>
			{/each}
		</div>
	</div>

	<div class="relative min-h-[32rem] min-w-0 flex-1">
		<div class="flex items-center justify-between gap-3 border-b px-4 py-3">
			<p class="min-w-0 truncate text-sm font-medium">{activeFile?.name ?? 'No file selected'}</p>

			<Button
				class="h-8 w-8 shrink-0"
				variant="ghost"
				size="icon"
				type="button"
				onclick={copyCode}
			>
				{#if clipboard.status === 'success'}
					<span in:scale>
						<Check class="!size-3.5 text-[#10B981]" />
					</span>
				{:else}
					<span in:scale>
						<Copy class="!size-3.5 opacity-50" />
					</span>
				{/if}
			</Button>
		</div>

		{#if activeFile}
			<Code code={activeFile.code} lang={activeFile.lang} highlight={activeFile.highlight} />
		{:else}
			<div class="flex h-full min-h-[20rem] items-center justify-center px-6 text-sm text-muted-foreground">
				No code files are available for this block yet.
			</div>
		{/if}
	</div>
</div>
