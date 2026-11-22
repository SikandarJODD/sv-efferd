import ChartPieIcon from "@lucide/svelte/icons/chart-pie";
import FunnelIcon from "@lucide/svelte/icons/funnel";
import GitBranchIcon from "@lucide/svelte/icons/git-branch";
import LayoutDashboardIcon from "@lucide/svelte/icons/layout-dashboard";
import MousePointerClickIcon from "@lucide/svelte/icons/mouse-pointer-click";
import PlugIcon from "@lucide/svelte/icons/plug";
import RepeatIcon from "@lucide/svelte/icons/repeat";
import SettingsIcon from "@lucide/svelte/icons/settings";
import UserIcon from "@lucide/svelte/icons/user";
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
		label: "Explore",
		items: [
			{ title: "Dashboard", path: "/", icon: LayoutDashboardIcon },
			{ title: "Events", path: "/", icon: MousePointerClickIcon },
			{ title: "Funnels", path: "/", icon: FunnelIcon },
			{ title: "Retention", path: "/", icon: RepeatIcon },
			{ title: "Flows", path: "/", icon: GitBranchIcon }
		]
	},
	{
		label: "Audiences",
		items: [
			{ title: "Segments", path: "/", icon: UsersIcon },
			{ title: "Cohorts", path: "/", icon: ChartPieIcon },
			{ title: "Profiles", path: "/", icon: UserIcon }
		]
	},
	{
		label: "Configure",
		items: [{ title: "Integrations", path: "/", icon: PlugIcon }]
	},
	{
		label: "Administration",
		items: [{ title: "Settings", path: "/", icon: SettingsIcon }]
	}
];

export const navLinks = navGroups.flatMap((group) =>
	group.items.flatMap((item) => (item.subItems?.length ? [item, ...item.subItems] : [item]))
);
