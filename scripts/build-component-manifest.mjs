import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");

const readJson = (relativePath) =>
	JSON.parse(fs.readFileSync(path.join(root, relativePath), "utf8"));

const categories = readJson("content/categories.json");
const metadata = readJson("content/component-meta.json");
const registry = readJson("registry.json");
const registryByName = new Map(registry.items.map((item) => [item.name, item]));
const siteUrl = registry.homepage.replace(/\/$/, "");

const absoluteUrl = (pathname) => new URL(pathname, `${siteUrl}/`).href;

const manifest = {
	schemaVersion: metadata.schemaVersion,
	site: {
		name: "Svelte Efferd",
		url: siteUrl,
		framework: "Svelte",
		registryUrl: absoluteUrl("/r/index.json")
	},
	categories: Object.entries(categories).map(([slug, category]) => ({
		slug,
		label: category.label,
		description: category.description,
		url: absoluteUrl(`/blocks/${slug}`),
		...(category.badge ? { badge: category.badge } : {})
	})),
	components: metadata.components.map((component) => {
		const registryItem = registryByName.get(component.name);
		const registryUrl = absoluteUrl(`/r/${component.name}.json`);

		if (!registryItem) {
			throw new Error(`Missing registry item: ${component.name}`);
		}

		return {
			name: component.name,
			title: registryItem.title,
			description: registryItem.description,
			category: component.category,
			layout: component.layout,
			alignment: component.alignment,
			useCases: component.useCases,
			visualTraits: component.visualTraits,
			responsive: component.responsive,
			urls: {
				category: absoluteUrl(component.paths.category),
				preview: absoluteUrl(component.paths.preview),
				registry: registryUrl
			},
			installCommand: `pnpm dlx shadcn-svelte@latest add ${registryUrl}`,
			dependencies: registryItem.dependencies ?? [],
			registryDependencies: registryItem.registryDependencies ?? [],
			files: registryItem.files.map((file) => ({
				path: file.path,
				type: file.type,
				...(file.target ? { target: file.target } : {})
			}))
		};
	})
};

const outputPath = path.join(root, "static/component-manifest.json");
fs.writeFileSync(outputPath, `${JSON.stringify(manifest, null, "\t")}\n`);

console.log(
	`Generated ${path.relative(root, outputPath)} with ${manifest.components.length} components.`
);
