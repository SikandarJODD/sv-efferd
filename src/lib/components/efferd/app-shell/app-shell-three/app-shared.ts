import {
	ActivityIcon,
	BarChart3Icon,
	HelpCircleIcon,
	LayoutGridIcon,
	ListChecksIcon,
	MessageSquareTextIcon,
	PlugIcon,
	Settings2Icon,
	SettingsIcon,
	UsersIcon
} from "@lucide/svelte";
import type { Component } from "svelte";

export type SidebarNavItem = {
	title: string;
	path?: string;
	icon?: Component;
	subItems?: SidebarNavItem[];
};

export type SidebarNavGroup = {
	label?: string;
	items: SidebarNavItem[];
};

export const navGroups: SidebarNavGroup[] = [
	{
		items: [{ title: "Overview", path: "#/overview", icon: LayoutGridIcon }]
	},
	{
		label: "Today",
		items: [
			{ title: "Queue", path: "#/queue", icon: ListChecksIcon },
			{ title: "Team insights", path: "#/team-insights", icon: BarChart3Icon }
		]
	},
	{
		label: "Inbox",
		items: [
			{
				title: "Conversations",
				icon: MessageSquareTextIcon,
				subItems: [
					{ title: "Unassigned", path: "#/inbox/unassigned" },
					{ title: "Assigned to me", path: "#/inbox/assigned" },
					{ title: "Recently closed", path: "#/inbox/closed" }
				]
			},
			{ title: "Customers", path: "#/customers", icon: UsersIcon },
			{ title: "Channels", path: "#/channels", icon: PlugIcon }
		]
	},
	{
		label: "Organization",
		items: [
			{
				title: "Workspace",
				icon: SettingsIcon,
				subItems: [
					{ title: "Branding", path: "#/workspace/branding" },
					{ title: "Team & roles", path: "#/workspace/team" },
					{ title: "API keys", path: "#/workspace/api-keys" },
					{ title: "Webhooks", path: "#/workspace/webhooks" },
					{ title: "Billing", path: "#/workspace/billing" }
				]
			},
			{ title: "Settings", path: "#/settings", icon: Settings2Icon }
		]
	}
];

export const footerNavLinks: SidebarNavItem[] = [
	{ title: "Help Center", path: "#/help", icon: HelpCircleIcon },
	{ title: "System status", path: "#/status", icon: ActivityIcon }
];

export const navLinks = [
	...navGroups.flatMap((group) =>
		group.items.flatMap((item) => (item.subItems?.length ? [item, ...item.subItems] : [item]))
	),
	...footerNavLinks
];
