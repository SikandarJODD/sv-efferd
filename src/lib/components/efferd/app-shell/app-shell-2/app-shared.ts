import {
    LayoutGridIcon,
    BarChart3Icon,
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
        label: "Product",
        items: [
            {
                title: "Dashboard",
                path: "#",
                icon: LayoutGridIcon,
                isActive: true
            },
            {
                title: "Analytics",
                path: "#",
                icon: BarChart3Icon
            },
            {
                title: "Projects",
                path: "#",
                icon: BriefcaseIcon
            }
        ]
    },
    {
        label: "Workspace",
        items: [
            {
                title: "Team",
                path: "#",
                icon: UsersIcon
            },
            {
                title: "Integrations",
                path: "#",
                icon: PlugIcon
            },
            {
                title: "API Keys",
                path: "#",
                icon: KeyRoundIcon
            }
        ]
    },
    {
        label: "Administration",
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
        title: "Help Center",
        path: "#",
        icon: HelpCircleIcon
    },
    {
        title: "Documentation",
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
