import type { LucideIcon } from "@lucide/svelte";

export type LinkItemType = {
	label: string;
	description?: string;
	icon: LucideIcon;
	href: string;
};
