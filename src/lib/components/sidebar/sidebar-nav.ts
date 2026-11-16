export type SidebarNavItem = {
	title: string;
	href: string;
	badge?: "new";
};

export const getStartedItems = [
	{ title: "Introduction", href: "/docs/introduction" },
	{ title: "Installation", href: "/docs/installation" },
	{ title: "Usage", href: "/docs/usage" },
	{ title: "Skills", href: "/docs/skills", badge: "new" },
	{ title: "llms.txt", href: "/llms.txt" }
] as const satisfies readonly SidebarNavItem[];
