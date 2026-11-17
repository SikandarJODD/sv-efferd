import {
	BarChart3Icon,
	BookOpenIcon,
	BriefcaseIcon,
	HelpCircleIcon,
	KeyRoundIcon,
	LayoutGridIcon,
	PlugIcon,
	SendIcon,
	SettingsIcon,
	UsersIcon
} from "@lucide/svelte";
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
			{ title: "Dashboard", url: "#/overview", icon: LayoutGridIcon },
			{ title: "Analytics", url: "#/analytics", icon: BarChart3Icon },
			{ title: "Projects", url: "#/projects", icon: BriefcaseIcon },
			{ title: "Team", url: "#/team", icon: UsersIcon },
			{ title: "Integrations", url: "#/integrations", icon: PlugIcon },
			{ title: "API Keys", url: "#/api-keys", icon: KeyRoundIcon }
		]
	},
	{
		label: "Administration",
		items: [{ title: "Settings", url: "#/settings", icon: SettingsIcon }]
	}
];

export const footerNavLinks: SidebarNavItem[] = [
	{ title: "Feedback", url: "#/feedback", icon: SendIcon },
	{ title: "Help Center", url: "#/help", icon: HelpCircleIcon },
	{ title: "Documentation", url: "#/documentation", icon: BookOpenIcon }
];

export const navLinks = [...navGroups.flatMap((group) => group.items), ...footerNavLinks];
