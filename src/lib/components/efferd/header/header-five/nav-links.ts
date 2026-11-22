import FileTextIcon from "@lucide/svelte/icons/file-text";
import GlobeIcon from "@lucide/svelte/icons/globe";
import LayersIcon from "@lucide/svelte/icons/layers";
import PlugIcon from "@lucide/svelte/icons/plug";
import ShieldIcon from "@lucide/svelte/icons/shield";
import UserPlusIcon from "@lucide/svelte/icons/user-plus";
import UsersIcon from "@lucide/svelte/icons/users";
import StarIcon from "@lucide/svelte/icons/star";
import HandshakeIcon from "@lucide/svelte/icons/handshake";
import CodeIcon from "@lucide/svelte/icons/code";
import RotateCcwIcon from "@lucide/svelte/icons/rotate-ccw";
import LeafIcon from "@lucide/svelte/icons/leaf";
import HandHelpingIcon from "@lucide/svelte/icons/hand-helping";
import ChartArea from "@lucide/svelte/icons/chart-area";

import type { LinkItemType } from "./types";

let productLinks: LinkItemType[] = [
	{
		label: "Website Builder",
		href: "/",
		description: "Create responsive websites with ease",
		icon: GlobeIcon
	},
	{
		label: "Cloud Platform",
		href: "/",
		description: "Deploy and scale apps in the cloud",
		icon: LayersIcon
	},
	{
		label: "Team Collaboration",
		href: "/",
		description: "Tools to help your teams work better together",
		icon: UserPlusIcon
	},
	{
		label: "Analytics",
		href: "/",
		description: "Track and analyze your website traffic",
		icon: ChartArea
	}
];

let companyLinks: LinkItemType[] = [
	{
		label: "About Us",
		href: "/",
		description: "Learn more about our story and team",
		icon: UsersIcon
	},
	{
		label: "Customer Stories",
		href: "/",
		description: "See how we've helped our clients succeed",
		icon: StarIcon
	},
	{
		label: "Partnerships",
		href: "/",
		icon: HandshakeIcon,
		description: "Collaborate with us for mutual growth"
	}
];

let companyLinks2: LinkItemType[] = [
	{
		label: "Terms of Service",
		href: "/",
		icon: FileTextIcon
	},
	{
		label: "Privacy Policy",
		href: "/",
		icon: ShieldIcon
	},
	{
		label: "Refund Policy",
		href: "/",
		icon: RotateCcwIcon
	}
];

export { productLinks, companyLinks, companyLinks2 };

let navLinks = [
	{
		label: "Features",
		href: "/"
	},
	{
		label: "Pricing",
		href: "/"
	},
	{
		label: "About",
		href: "/"
	}
];

export { navLinks };
