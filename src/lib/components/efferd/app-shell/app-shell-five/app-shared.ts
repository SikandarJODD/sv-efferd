import {
	ChartPieIcon,
	FunnelIcon,
	GitBranchIcon,
	LayoutDashboardIcon,
	MousePointerClickIcon,
	PlugIcon,
	RepeatIcon,
	SettingsIcon,
	UserIcon,
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
		label: "Explore",
		items: [
			{ title: "Dashboard", path: "#/overview", icon: LayoutDashboardIcon },
			{ title: "Events", path: "#/events", icon: MousePointerClickIcon },
			{ title: "Funnels", path: "#/funnels", icon: FunnelIcon },
			{ title: "Retention", path: "#/retention", icon: RepeatIcon },
			{ title: "Flows", path: "#/flows", icon: GitBranchIcon }
		]
	},
	{
		label: "Audiences",
		items: [
			{ title: "Segments", path: "#/segments", icon: UsersIcon },
			{ title: "Cohorts", path: "#/cohorts", icon: ChartPieIcon },
			{ title: "Profiles", path: "#/profiles", icon: UserIcon }
		]
	},
	{
		label: "Configure",
		items: [{ title: "Integrations", path: "#/integrations", icon: PlugIcon }]
	},
	{
		label: "Administration",
		items: [{ title: "Settings", path: "#/settings", icon: SettingsIcon }]
	}
];

export const navLinks = navGroups.flatMap((group) =>
	group.items.flatMap((item) => (item.subItems?.length ? [item, ...item.subItems] : [item]))
);
