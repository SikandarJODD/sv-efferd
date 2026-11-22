import { execFileSync } from "node:child_process";
import { existsSync, readFileSync, readdirSync, renameSync, writeFileSync } from "node:fs";
import { basename, dirname, extname, join, relative, resolve } from "node:path";

const root = resolve(import.meta.dirname, "..");

const blockNames = [
	["app-shell", "all_app_shell", "all-app-shell"],
	["auth", "all_auth", "all-auth"],
	["blog", "all_blog", "all-blog"],
	["contact", "all_contact", "all-contact"],
	["cta", "all_cta", "all-cta"],
	["faqs", "all_faqs", "all-faqs"],
	["features", "all_features", "all-features"],
	["footer", "all_footer", "all-footer"],
	["header", "all_header", "all-header"],
	["hero", "all_hero", "all-hero"],
	["image-gallery", "all_image_gallery", "all-image-gallery"],
	["integrations", "all_integrations", "all-integrations"],
	["logo-cloud", "all_logo_cloud", "all-logo-cloud"],
	["not-found", "all_not_found", "all-not-found"],
	["pricing", "all_pricing", "all-pricing"],
	["testimonials", "all_testimonials", "all-testimonials"]
];

const componentNames = [
	["src/lib/components/base/Seo.svelte", "src/lib/components/base/seo.svelte"],
	[
		"src/lib/components/base/import-alias/ImportAliasToggle.svelte",
		"src/lib/components/base/import-alias/import-alias-toggle.svelte"
	],
	[
		"src/lib/components/efferd/footer/AnimatedContainer.svelte",
		"src/lib/components/efferd/footer/animated-container.svelte"
	],
	[
		"src/lib/components/efferd/footer/LinkGroup.svelte",
		"src/lib/components/efferd/footer/link-group.svelte"
	],
	[
		"src/lib/components/layout/BlockPreview.svelte",
		"src/lib/components/layout/block-preview.svelte"
	],
	[
		"src/lib/components/layout/CategoryNavigation.svelte",
		"src/lib/components/layout/category-navigation.svelte"
	],
	["src/lib/components/layout/CodeEditor.svelte", "src/lib/components/layout/code-editor.svelte"],
	[
		"src/lib/components/layout/CodeTreeNode.svelte",
		"src/lib/components/layout/code-tree-node.svelte"
	],
	[
		"src/lib/components/layout/InstallComponent.svelte",
		"src/lib/components/layout/install-component.svelte"
	]
];

const renames = [
	...blockNames.map(([, oldName, newName]) => [
		`src/lib/blocks/${oldName}.ts`,
		`src/lib/blocks/${newName}.ts`
	]),
	...componentNames
];

const replacements = [
	...blockNames.flatMap(([category, oldName, newName]) => [
		[`#lib/blocks/${category}/${oldName}`, `#lib/blocks/${newName}`],
		[`src/lib/blocks/${category}/${oldName}`, `src/lib/blocks/${newName}`],
		[`#lib/blocks/${oldName}`, `#lib/blocks/${newName}`],
		[`src/lib/blocks/${oldName}`, `src/lib/blocks/${newName}`]
	]),
	...componentNames.map(([oldPath, newPath]) => [
		oldPath.split("/").at(-1),
		newPath.split("/").at(-1)
	])
];

function existsWithExactCase(path) {
	return existsSync(path) && readdirSync(dirname(path)).includes(basename(path));
}

for (const [from, to] of renames) {
	const source = join(root, from);
	const destination = join(root, to);

	if (!existsWithExactCase(source)) {
		if (existsWithExactCase(destination)) continue;
		throw new Error(`Missing rename source: ${from}`);
	}

	if (source.toLowerCase() === destination.toLowerCase()) {
		const temporary = `${to}.rename-temp`;
		execFileSync("git", ["mv", "-f", from, temporary], { cwd: root });
		execFileSync("git", ["mv", "-f", temporary, to], { cwd: root });
		console.log(`renamed ${from} -> ${to}`);
		continue;
	}

	if (existsWithExactCase(destination)) {
		throw new Error(`Rename destination already exists: ${to}`);
	}

	renameSync(source, destination);
	console.log(`renamed ${from} -> ${to}`);
}

const sourceExtensions = new Set([".css", ".js", ".json", ".svelte", ".ts"]);

function collectFiles(directory) {
	return readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
		const path = join(directory, entry.name);
		return entry.isDirectory()
			? collectFiles(path)
			: sourceExtensions.has(extname(path))
				? [path]
				: [];
	});
}

const referenceFiles = [
	...collectFiles(join(root, "src")),
	...collectFiles(join(root, "static/r")),
	join(root, "registry.json")
];

for (const file of referenceFiles) {
	const original = readFileSync(file, "utf8");
	const updated = replacements.reduce(
		(content, [from, to]) => content.replaceAll(from, to),
		original
	);

	if (updated === original) continue;

	writeFileSync(file, updated);
	console.log(`updated ${relative(root, file)}`);
}
