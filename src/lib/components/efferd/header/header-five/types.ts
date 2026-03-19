import type { Icon } from '@lucide/svelte';
import type { Component } from 'svelte';

export type LinkItemType = {
	label: string;
	description?: string;
	icon: typeof Icon | Component;
	href: string;
};
