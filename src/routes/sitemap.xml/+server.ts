import { blockCategories } from "#lib/blocks/categories.js";
import type { RequestHandler } from "./$types";

export const prerender = true;

const siteUrl = "https://sv-efferd.pages.dev";
const lastModified = "2026-11-22T09:49:57+00:00";

const pages = [
	{ pathname: "/", priority: "1.0000" },
	{ pathname: "/docs/introduction", priority: "0.8000" },
	{ pathname: "/docs/installation", priority: "0.8000" },
	{ pathname: "/docs/usage", priority: "0.8000" },
	{ pathname: "/docs/skills", priority: "0.8000" },
	{ pathname: "/llms.txt", priority: "0.8000" },
	...blockCategories.map((category) => ({
		pathname: `/blocks/${category.slug}`,
		priority: "0.8000"
	}))
];

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
	.map(
		({ pathname, priority }) => `  <url>
    <loc>${new URL(pathname, siteUrl).href}</loc>
    <lastmod>${lastModified}</lastmod>
    <priority>${priority}</priority>
  </url>`
	)
	.join("\n")}
</urlset>`;

export const GET: RequestHandler = () =>
	new Response(sitemap, {
		headers: {
			"cache-control": "public, max-age=3600",
			"content-type": "application/xml; charset=utf-8"
		}
	});
