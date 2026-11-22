import ActivityIcon from "@lucide/svelte/icons/activity";
import BarChart3Icon from "@lucide/svelte/icons/bar-chart-3";
import HelpCircleIcon from "@lucide/svelte/icons/help-circle";
import LayoutGridIcon from "@lucide/svelte/icons/layout-grid";
import ListChecksIcon from "@lucide/svelte/icons/list-checks";
import MessageSquareTextIcon from "@lucide/svelte/icons/message-square-text";
import PlugIcon from "@lucide/svelte/icons/plug";
import Settings2Icon from "@lucide/svelte/icons/settings-2";
import SettingsIcon from "@lucide/svelte/icons/settings";
import UsersIcon from "@lucide/svelte/icons/users";
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
