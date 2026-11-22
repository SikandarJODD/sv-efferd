import { Github } from "#lib/components/svgs/index.js";
import type { Component } from "svelte";
import type { SVGAttributes } from "svelte/elements";

export type SidebarNavItem = {
	title: string;
	href: string;
	badge?: "new";
	icon?: Component<SVGAttributes<SVGSVGElement>>;
	external?: boolean;
};

export const getStartedItems = [
	{ title: "Introduction", href: "/docs/introduction" },
	{ title: "Installation", href: "/docs/installation" },
	{ title: "Usage", href: "/docs/usage" },
	{ title: "Skills", href: "/docs/skills", badge: "new" },
	{ title: "llms.txt", href: "/llms.txt", badge: "new" },
	{
		title: "GitHub",
		href: "https://github.com/SikandarJODD/sv-efferd",
		icon: Github,
		external: true
	}
] as const satisfies readonly SidebarNavItem[];
