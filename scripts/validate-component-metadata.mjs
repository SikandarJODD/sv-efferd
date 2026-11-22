import fs from "node:fs";
import path from "node:path";
import process from "node:process";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");

const readJson = (relativePath) =>
	JSON.parse(fs.readFileSync(path.join(root, relativePath), "utf8"));

const categories = readJson("content/categories.json");
const metadata = readJson("content/component-meta.json");
const registry = readJson("registry.json");
const schema = readJson("schemas/component-manifest.schema.json");

const categoryPrefixes = {
	dashboard: "dashboard",
	"app-shell": "app-shell",
	settings: "settings",
	hero: "hero",
	header: "header",
	"logo-cloud": "logo-cloud",
	features: "feature",
	integrations: "integration",
	testimonials: "testimonial",
	team: "team",
	cta: "cta",
	pricing: "pricing",
	blog: "blog",
	auth: "auth",
	faqs: "faq",
	contact: "contact",
	footer: "footer",
	"image-gallery": "image-gallery",
	"not-found": "not-found"
};

const errors = [];
const registryByName = new Map(registry.items.map((item) => [item.name, item]));
const metadataNames = new Set();
const componentProperties = schema.$defs.component.properties;
const controlledFields = ["layout", "alignment", "useCases", "visualTraits", "responsive"];

const addError = (message) => errors.push(message);
const exists = (relativePath) => fs.existsSync(path.join(root, relativePath));

if (metadata.schemaVersion !== schema.properties.schemaVersion.const) {
	addError(`Unsupported schemaVersion: ${metadata.schemaVersion}`);
}

for (const category of Object.keys(categories)) {
	if (!categoryPrefixes[category]) {
		addError(`Category has no registry prefix: ${category}`);
	}
}

for (const component of metadata.components) {
	if (metadataNames.has(component.name)) {
		addError(`Duplicate component metadata: ${component.name}`);
	}
	metadataNames.add(component.name);

	if (!categories[component.category]) {
		addError(`${component.name}: unknown category "${component.category}"`);
		continue;
	}

	const prefix = categoryPrefixes[component.category];
	const variant = component.name.slice(prefix.length + 1);
	const expectedCategoryPath = `/blocks/${component.category}`;
	const expectedPreviewPath = `/preview/${component.category}/${variant}`;

	if (!component.name.startsWith(`${prefix}-`)) {
		addError(`${component.name}: does not match the "${prefix}" registry prefix`);
	}
	if (component.paths?.category !== expectedCategoryPath) {
		addError(`${component.name}: expected category path ${expectedCategoryPath}`);
	}
	if (component.paths?.preview !== expectedPreviewPath) {
		addError(`${component.name}: expected preview path ${expectedPreviewPath}`);
	}

	for (const field of controlledFields) {
		const values = component[field];
		const allowed = new Set(componentProperties[field].items.enum);
		if (!Array.isArray(values) || values.length === 0) {
			addError(`${component.name}: ${field} must contain at least one value`);
			continue;
		}
		if (new Set(values).size !== values.length) {
			addError(`${component.name}: ${field} contains duplicate values`);
		}
		for (const value of values) {
			if (!allowed.has(value)) {
				addError(`${component.name}: unknown ${field} value "${value}"`);
			}
		}
	}

	const registryItem = registryByName.get(component.name);
	if (!registryItem) {
		addError(`${component.name}: missing from registry.json`);
	} else {
		if (!registryItem.description) {
			addError(`${component.name}: registry description is missing`);
		}
		if (!Array.isArray(registryItem.files) || registryItem.files.length === 0) {
			addError(`${component.name}: registry files are missing`);
		}
	}

	if (!exists(`static/r/${component.name}.json`)) {
		addError(`${component.name}: built registry file is missing`);
	}
	if (!exists(`src/routes/(app)/blocks/${component.category}/+page.svelte`)) {
		addError(`${component.name}: category route is missing`);
	}
	if (!exists(`src/routes/(preview)${expectedPreviewPath}/+page.svelte`)) {
		addError(`${component.name}: preview route is missing`);
	}
}

const expectedNames = registry.items
	.filter((item) =>
		Object.values(categoryPrefixes).some((prefix) =>
			new RegExp(`^${prefix}-(one|two|three|four|five|six)$`).test(item.name)
		)
	)
	.map((item) => item.name);

for (const name of expectedNames) {
	if (!metadataNames.has(name)) {
		addError(`Missing component metadata: ${name}`);
	}
}

for (const name of metadataNames) {
	if (!expectedNames.includes(name)) {
		addError(`Metadata does not match a public category block: ${name}`);
	}
}

if (errors.length > 0) {
	console.error(errors.map((error) => `- ${error}`).join("\n"));
	process.exit(1);
}

console.log(`Validated ${metadata.components.length} component metadata entries.`);
