import type { BlockShowcaseItem } from "#lib/blocks/showcase.js";
import {
	appShellFiveBlock,
	appShellFourBlock,
	appShellOneBlock,
	appShellThreeBlock,
	appShellTwoBlock
} from "./app-shell/index.js";

export const appShellBlocks: BlockShowcaseItem[] = [
	appShellOneBlock,
	appShellTwoBlock,
	appShellThreeBlock,
	appShellFourBlock,
	appShellFiveBlock
];

export function getAppShellBlock(id: string) {
	return appShellBlocks.find((block) => block.id === id);
}
