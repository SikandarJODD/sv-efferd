import {
	FileTextIcon,
	GlobeIcon,
	LayersIcon,
	PlugIcon,
	ShieldIcon,
	UserPlusIcon,
	UsersIcon,
	StarIcon,
	HandshakeIcon,
	CodeIcon,
	RotateCcwIcon,
	LeafIcon,
	HandHelpingIcon,
	ChartArea
} from "@lucide/svelte";

import type { LinkItemType } from "./types";

let productLinks: LinkItemType[] = [
	{
		label: "Website Builder",
		href: "#",
		description: "Create responsive websites with ease",
		icon: GlobeIcon
	},
	{
		label: "Cloud Platform",
		href: "#",
		description: "Deploy and scale apps in the cloud",
		icon: LayersIcon
	},
	{
		label: "Team Collaboration",
		href: "#",
		description: "Tools to help your teams work better together",
		icon: UserPlusIcon
	},
	{
		label: "Analytics",
		href: "#",
		description: "Track and analyze your website traffic",
		icon: ChartArea
	},
	{
		label: "Integrations",
		href: "#",
		description: "Connect your apps and services",
		icon: PlugIcon
	},
	{
		label: "API",
		href: "#",
		description: "Build custom integrations with our API",
		icon: CodeIcon
	}
];

let companyLinks: LinkItemType[] = [
	{
		label: "About Us",
		href: "#",
		description: "Learn more about our story and team",
		icon: UsersIcon
	},
	{
		label: "Customer Stories",
		href: "#",
		description: "See how we've helped our clients succeed",
		icon: StarIcon
	},
	{
		label: "Partnerships",
		href: "#",
		icon: HandshakeIcon,
		description: "Collaborate with us for mutual growth"
	}
];

let companyLinks2: LinkItemType[] = [
	{
		label: "Terms of Service",
		href: "#",
		icon: FileTextIcon
	},
	{
		label: "Privacy Policy",
		href: "#",
		icon: ShieldIcon
	},
	{
		label: "Refund Policy",
		href: "#",
		icon: RotateCcwIcon
	},
	{
		label: "Blog",
		href: "#",
		icon: LeafIcon
	},
	{
		label: "Help Center",
		href: "#",
		icon: HandHelpingIcon
	}
];

export { productLinks, companyLinks, companyLinks2 };
