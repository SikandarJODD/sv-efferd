import { appShellBlocks } from "#lib/blocks/all-app-shell.js";
import { authBlocks } from "#lib/blocks/all-auth.js";
import { blogBlocks } from "#lib/blocks/all-blog.js";
import { contactBlocks } from "#lib/blocks/all-contact.js";
import { ctaBlocks } from "#lib/blocks/all-cta.js";
import { faqBlocks } from "#lib/blocks/all-faqs.js";
import { featureBlocks } from "#lib/blocks/all-features.js";
import { footerBlocks } from "#lib/blocks/all-footer.js";
import { headerBlocks } from "#lib/blocks/all-header.js";
import { heroBlocks } from "#lib/blocks/all-hero.js";
import { imageGalleryBlocks } from "#lib/blocks/all-image-gallery.js";
import { integrationBlocks } from "#lib/blocks/all-integrations.js";
import { logoCloudBlocks } from "#lib/blocks/all-logo-cloud.js";
import type { Component } from "svelte";
import AppShellPreview from "./previews/app-shell.svelte";
import AuthPreview from "./previews/auth.svelte";
import BlogPreview from "./previews/blog.svelte";
import ContactPreview from "./previews/contact.svelte";
import CtaPreview from "./previews/cta.svelte";
import FaqsPreview from "./previews/faqs.svelte";
import FeaturesPreview from "./previews/features.svelte";
import FooterPreview from "./previews/footer.svelte";
import HeaderPreview from "./previews/header.svelte";
import HeroPreview from "./previews/hero.svelte";
import ImageGalleryPreview from "./previews/image-gallery.svelte";
import IntegrationsPreview from "./previews/integrations.svelte";
import LogoCloudPreview from "./previews/logo-cloud.svelte";

export type CategoryConfig = {
	slug: string;
	title: string;
	href: string;
	count: number;
	countLabel: string;
	previewComponent: Component<{ title: string; countLabel: string }>;
};

function formatBlockLabel(count: number) {
	return `${count} ${count === 1 ? "block" : "blocks"}`;
}

export const marketingCategories: CategoryConfig[] = [
	{
		slug: "header",
		title: "Header",
		href: "/blocks/header",
		count: headerBlocks.length,
		countLabel: formatBlockLabel(headerBlocks.length),
		previewComponent: HeaderPreview
	},
	{
		slug: "hero",
		title: "Hero Sections",
		href: "/blocks/hero",
		count: heroBlocks.length,
		countLabel: formatBlockLabel(heroBlocks.length),
		previewComponent: HeroPreview
	},
	{
		slug: "auth",
		title: "Auth",
		href: "/blocks/auth",
		count: authBlocks.length,
		countLabel: formatBlockLabel(authBlocks.length),
		previewComponent: AuthPreview
	},
	{
		slug: "features",
		title: "Features",
		href: "/blocks/features",
		count: featureBlocks.length,
		countLabel: formatBlockLabel(featureBlocks.length),
		previewComponent: FeaturesPreview
	},
	{
		slug: "blog",
		title: "Blog Sections",
		href: "/blocks/blog",
		count: blogBlocks.length,
		countLabel: formatBlockLabel(blogBlocks.length),
		previewComponent: BlogPreview
	},
	{
		slug: "contact",
		title: "Contact",
		href: "/blocks/contact",
		count: contactBlocks.length,
		countLabel: formatBlockLabel(contactBlocks.length),
		previewComponent: ContactPreview
	},
	{
		slug: "cta",
		title: "Call to Action",
		href: "/blocks/cta",
		count: ctaBlocks.length,
		countLabel: formatBlockLabel(ctaBlocks.length),
		previewComponent: CtaPreview
	},
	{
		slug: "faqs",
		title: "FAQs",
		href: "/blocks/faqs",
		count: faqBlocks.length,
		countLabel: formatBlockLabel(faqBlocks.length),
		previewComponent: FaqsPreview
	},
	{
		slug: "logo-cloud",
		title: "Logo Cloud",
		href: "/blocks/logo-cloud",
		count: logoCloudBlocks.length,
		countLabel: formatBlockLabel(logoCloudBlocks.length),
		previewComponent: LogoCloudPreview
	},
	{
		slug: "footer",
		title: "Footer",
		href: "/blocks/footer",
		count: footerBlocks.length,
		countLabel: formatBlockLabel(footerBlocks.length),
		previewComponent: FooterPreview
	},
	{
		slug: "image-gallery",
		title: "Image Gallery",
		href: "/blocks/image-gallery",
		count: imageGalleryBlocks.length,
		countLabel: formatBlockLabel(imageGalleryBlocks.length),
		previewComponent: ImageGalleryPreview
	},
	{
		slug: "integrations",
		title: "Integrations",
		href: "/blocks/integrations",
		count: integrationBlocks.length,
		countLabel: formatBlockLabel(integrationBlocks.length),
		previewComponent: IntegrationsPreview
	}
];

export const appShellCategories: CategoryConfig[] = [
	{
		slug: "app-shell",
		title: "App Shell",
		href: "/blocks/app-shell",
		count: appShellBlocks.length,
		countLabel: formatBlockLabel(appShellBlocks.length),
		previewComponent: AppShellPreview
	}
];
