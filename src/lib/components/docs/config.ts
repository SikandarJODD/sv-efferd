export type DocsPage = {
	title: string;
	description: string;
	href: string;
	group: "Getting Started" | "Resources";
};

const docsPages = [
	{
		title: "Introduction",
		description: "What Efferd is, what is included, and where to start exploring.",
		href: "/docs",
		group: "Getting Started"
	},
	{
		title: "Installation",
		description: "Set up the registry flow and start adding blocks to your project.",
		href: "/docs/installation",
		group: "Getting Started"
	},
	{
		title: "Templates",
		description: "A placeholder for the template system that is planned next.",
		href: "/docs/templates",
		group: "Resources"
	},
	{
		title: "Sponsors & Support",
		description: "Support the project, share it, or reach out to the owner.",
		href: "/docs/sponsors-support",
		group: "Resources"
	},
	{
		title: "Roadmap & Feedback",
		description: "See what is planned next and where to send feedback.",
		href: "/docs/roadmap-feedback",
		group: "Resources"
	}
] as const satisfies readonly DocsPage[];

export type DocsNavGroup = {
	title: DocsPage["group"];
	items: readonly DocsPage[];
};

export const docsNavGroups: readonly DocsNavGroup[] = [
	{
		title: "Getting Started",
		items: docsPages.filter((page) => page.group === "Getting Started")
	},
	{
		title: "Resources",
		items: docsPages.filter((page) => page.group === "Resources")
	}
] as const;

export const docsPagesByHref = new Map<string, DocsPage>(
	docsPages.map((page) => [page.href, page] satisfies [string, DocsPage])
);

export const docsSupportLinks = {
	githubRepo: "https://github.com/SikandarJODD/sv-efferd",
	githubIssues: "https://github.com/SikandarJODD/sv-efferd/issues",
	xProfile: "https://x.com/Sikandar_Bhide",
	xShare: "https://x.com/intent/tweet?text=Exploring%20Svelte%20Efferd%20blocks&url=https%3A%2F%2Fgithub.com%2FSikandarJODD%2Fsv-efferd"
} as const;

export function normalizeDocsPath(pathname: string) {
	if (pathname.length > 1 && pathname.endsWith("/")) {
		return pathname.slice(0, -1);
	}

	return pathname;
}

export function getDocsPage(pathname: string) {
	return docsPagesByHref.get(normalizeDocsPath(pathname)) ?? docsPages[0];
}

export { docsPages };
