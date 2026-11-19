import {
	LayoutGridIcon,
	BriefcaseIcon,
	UsersIcon,
	PlugIcon,
	KeyRoundIcon,
	SettingsIcon,
	CreditCardIcon,
	HelpCircleIcon,
	BookOpenIcon
} from "@lucide/svelte";
import type { Component } from "svelte";

export type SidebarNavItem = {
	title: string;
	path?: string;
	icon?: Component;
	isActive?: boolean;
	subItems?: SidebarNavItem[];
};

export type SidebarNavGroup = {
	label?: string;
	items: SidebarNavItem[];
};

export const navGroups: SidebarNavGroup[] = [
	{
		label: "Sales",
		items: [
			{
				title: "Overview",
				path: "#",
				icon: LayoutGridIcon,
				isActive: true
			},
			{
				title: "Orders",
				path: "#",
				icon: BriefcaseIcon
			},
			{
				title: "Customers",
				path: "#",
				icon: UsersIcon
			}
		]
	},
	{
		label: "Connect",
		items: [
			{
				title: "Integrations",
				path: "#",
				icon: PlugIcon
			},
			{
				title: "API keys",
				path: "#",
				icon: KeyRoundIcon
			}
		]
	},
	{
		label: "Account",
		items: [
			{
				title: "Settings",
				path: "#",
				icon: SettingsIcon
			},
			{
				title: "Billing",
				path: "#",
				icon: CreditCardIcon
			}
		]
	}
];

export const footerNavLinks: SidebarNavItem[] = [
	{
		title: "Help center",
		path: "#",
		icon: HelpCircleIcon
	},
	{
		title: "API docs",
		path: "#",
		icon: BookOpenIcon
	}
];

export const navLinks: SidebarNavItem[] = [
	...navGroups.flatMap((group) =>
		group.items.flatMap((item) => (item.subItems?.length ? [item, ...item.subItems] : [item]))
	),
	...footerNavLinks
];
