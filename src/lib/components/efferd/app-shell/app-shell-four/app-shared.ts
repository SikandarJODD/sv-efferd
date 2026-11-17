import {
	ActivityIcon,
	BarChart3Icon,
	CreditCardIcon,
	FileTextIcon,
	HelpCircleIcon,
	LayoutGridIcon,
	MegaphoneIcon,
	SettingsIcon,
	ShoppingCartIcon,
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
	label: string;
	items: SidebarNavItem[];
};

export const navGroups: SidebarNavGroup[] = [
	{
		label: "Overview",
		items: [
			{ title: "Dashboard", path: "#/dashboard", icon: LayoutGridIcon },
			{ title: "Sales", path: "#/sales", icon: BarChart3Icon }
		]
	},
	{
		label: "Store",
		items: [
			{
				title: "Orders",
				path: "#/orders",
				icon: ShoppingCartIcon,
				subItems: [
					{ title: "All orders", path: "#/orders/all" },
					{ title: "Unfulfilled", path: "#/orders/unfulfilled" },
					{ title: "Returns", path: "#/orders/returns" }
				]
			},
			{
				title: "Products",
				path: "#/products",
				icon: FileTextIcon,
				subItems: [
					{ title: "Catalog", path: "#/products/catalog" },
					{ title: "Inventory", path: "#/products/inventory" },
					{ title: "Collections", path: "#/products/collections" }
				]
			},
			{ title: "Customers", path: "#/customers", icon: UsersIcon },
			{ title: "Marketing", path: "#/marketing", icon: MegaphoneIcon }
		]
	},
	{
		label: "Administration",
		items: [
			{ title: "Settings", path: "#/settings", icon: SettingsIcon },
			{
				title: "Billing",
				path: "#/billing",
				icon: CreditCardIcon,
				subItems: [
					{ title: "Plan", path: "#/billing/plan" },
					{ title: "Invoices", path: "#/billing/invoices" },
					{ title: "Payment methods", path: "#/billing/payment-methods" }
				]
			}
		]
	}
];

export const footerNavLinks: SidebarNavItem[] = [
	{ title: "Seller help", path: "#/seller-help", icon: HelpCircleIcon },
	{ title: "Platform status", path: "#/status", icon: ActivityIcon }
];

export const navLinks = [
	...navGroups.flatMap((group) =>
		group.items.flatMap((item) => (item.subItems?.length ? [item, ...item.subItems] : [item]))
	),
	...footerNavLinks
];
