import { authBlocks } from "#lib/blocks/auth/all_auth.js";
import { blogBlocks } from "#lib/blocks/blog/all_blog.js";
import { contactBlocks } from "#lib/blocks/contact/all_contact.js";
import { ctaBlocks } from "#lib/blocks/cta/all_cta.js";
import { faqBlocks } from "#lib/blocks/faqs/all_faqs.js";
import { featureBlocks } from "#lib/blocks/features/all_features.js";
import { footerBlocks } from "#lib/blocks/footer/all_footer.js";
import { headerBlocks } from "#lib/blocks/header/all_header.js";
import { heroBlocks } from "#lib/blocks/hero/all_hero.js";
import { imageGalleryBlocks } from "#lib/blocks/image-gallery/all_image_gallery.js";
import { integrationBlocks } from "#lib/blocks/integrations/all_integrations.js";
import { logoCloudBlocks } from "#lib/blocks/logo-cloud/all_logo_cloud.js";
import type { Component } from "svelte";
import AuthPreview from "./category-previews/auth-preview.svelte";
import BlogPreview from "./category-previews/blog-preview.svelte";
import ContactPreview from "./category-previews/contact-preview.svelte";
import CtaPreview from "./category-previews/cta-preview.svelte";
import FaqsPreview from "./category-previews/faqs-preview.svelte";
import FeaturesPreview from "./category-previews/features-preview.svelte";
import FooterPreview from "./category-previews/footer-preview.svelte";
import HeaderPreview from "./category-previews/header-preview.svelte";
import HeroPreview from "./category-previews/hero-preview.svelte";
import ImageGalleryPreview from "./category-previews/image-gallery-preview.svelte";
import IntegrationsPreview from "./category-previews/integrations-preview.svelte";
import LogoCloudPreview from "./category-previews/logo-cloud-preview.svelte";

export type MarketingCardConfig = {
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

export const marketingCards: MarketingCardConfig[] = [
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
