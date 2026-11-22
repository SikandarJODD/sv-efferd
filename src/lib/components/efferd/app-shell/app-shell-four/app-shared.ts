import ActivityIcon from "@lucide/svelte/icons/activity";
import BarChart3Icon from "@lucide/svelte/icons/bar-chart-3";
import CreditCardIcon from "@lucide/svelte/icons/credit-card";
import FileTextIcon from "@lucide/svelte/icons/file-text";
import HelpCircleIcon from "@lucide/svelte/icons/help-circle";
import LayoutGridIcon from "@lucide/svelte/icons/layout-grid";
import MegaphoneIcon from "@lucide/svelte/icons/megaphone";
import SettingsIcon from "@lucide/svelte/icons/settings";
import ShoppingCartIcon from "@lucide/svelte/icons/shopping-cart";
import UsersIcon from "@lucide/svelte/icons/users";
import type { Component } from "svelte";

export type SidebarNavItem = {
	title: string;
	path?: string;
	icon?: Component;
	subItems?: SidebarNavItem[];
};

export type SidebarNavGroup = {
	label: string;
	items: SidebarNavItem[];
};

export const navGroups: SidebarNavGroup[] = [
	{
		label: "Overview",
		items: [
			{ title: "Dashboard", path: "/", icon: LayoutGridIcon },
			{ title: "Sales", path: "/", icon: BarChart3Icon }
		]
	},
	{
		label: "Store",
		items: [
			{
				title: "Orders",
				path: "/",
				icon: ShoppingCartIcon,
				subItems: [
					{ title: "All orders", path: "/" },
					{ title: "Unfulfilled", path: "/" },
					{ title: "Returns", path: "/" }
				]
			},
			{
				title: "Products",
				path: "/",
				icon: FileTextIcon,
				subItems: [
					{ title: "Catalog", path: "/" },
					{ title: "Inventory", path: "/" },
					{ title: "Collections", path: "/" }
				]
			},
			{ title: "Customers", path: "/", icon: UsersIcon },
			{ title: "Marketing", path: "/", icon: MegaphoneIcon }
		]
	},
	{
		label: "Administration",
		items: [
			{ title: "Settings", path: "/", icon: SettingsIcon },
			{
				title: "Billing",
				path: "/",
				icon: CreditCardIcon,
				subItems: [
					{ title: "Plan", path: "/" },
					{ title: "Invoices", path: "/" },
					{ title: "Payment methods", path: "/" }
				]
			}
		]
	}
];

export const footerNavLinks: SidebarNavItem[] = [
	{ title: "Seller help", path: "/", icon: HelpCircleIcon },
	{ title: "Platform status", path: "/", icon: ActivityIcon }
];

export const navLinks = [
	...navGroups.flatMap((group) =>
		group.items.flatMap((item) => (item.subItems?.length ? [item, ...item.subItems] : [item]))
	),
	...footerNavLinks
];
