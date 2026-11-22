import BarChart3Icon from "@lucide/svelte/icons/bar-chart-3";
import BookOpenIcon from "@lucide/svelte/icons/book-open";
import BriefcaseIcon from "@lucide/svelte/icons/briefcase";
import HelpCircleIcon from "@lucide/svelte/icons/help-circle";
import KeyRoundIcon from "@lucide/svelte/icons/key-round";
import LayoutGridIcon from "@lucide/svelte/icons/layout-grid";
import PlugIcon from "@lucide/svelte/icons/plug";
import SendIcon from "@lucide/svelte/icons/send";
import SettingsIcon from "@lucide/svelte/icons/settings";
import UsersIcon from "@lucide/svelte/icons/users";
import type { Component } from "svelte";

export type SidebarNavItem = {
	title: string;
	url: string;
	icon: Component;
};

export type SidebarNavGroup = {
	label?: string;
	items: SidebarNavItem[];
};

export const navGroups: SidebarNavGroup[] = [
	{
		label: "Product",
		items: [
			{ title: "Dashboard", url: "/", icon: LayoutGridIcon },
			{ title: "Analytics", url: "/", icon: BarChart3Icon },
			{ title: "Projects", url: "/", icon: BriefcaseIcon },
			{ title: "Team", url: "/", icon: UsersIcon },
			{ title: "Integrations", url: "/", icon: PlugIcon },
			{ title: "API Keys", url: "/", icon: KeyRoundIcon }
		]
	},
	{
		label: "Administration",
		items: [{ title: "Settings", url: "/", icon: SettingsIcon }]
	}
];

export const footerNavLinks: SidebarNavItem[] = [
	{ title: "Feedback", url: "/", icon: SendIcon },
	{ title: "Help Center", url: "/", icon: HelpCircleIcon },
	{ title: "Documentation", url: "/", icon: BookOpenIcon }
];

export const navLinks = [...navGroups.flatMap((group) => group.items), ...footerNavLinks];
