import { spawnSync } from "node:child_process";
import { rmSync, writeFileSync } from "node:fs";

const installationUrls = [
	"http://localhost:5173/r/full-width-divider.json",
	"http://localhost:5173/r/decor-icon.json",
	"http://localhost:5173/r/marquee.json",
	"http://localhost:5173/r/progressive-blur.json",
	"http://localhost:5173/r/grid-filler.json",
	"http://localhost:5173/r/dashed-line.json",
	"http://localhost:5173/r/grid-pattern.json",
	"http://localhost:5173/r/mask-line.json",
	"http://localhost:5173/r/portal.json",
	"http://localhost:5173/r/auth-divider.json",
	"http://localhost:5173/r/particles.json",
	"http://localhost:5173/r/floating-paths.json",
	"http://localhost:5173/r/cta-one.json",
	"http://localhost:5173/r/cta-two.json",
	"http://localhost:5173/r/cta-three.json",
	"http://localhost:5173/r/cta-four.json",
	"http://localhost:5173/r/cta-five.json",
	"http://localhost:5173/r/not-found-one.json",
	"http://localhost:5173/r/not-found-two.json",
	"http://localhost:5173/r/logo-cloud-one.json",
	"http://localhost:5173/r/logo-cloud-two.json",
	"http://localhost:5173/r/logo-cloud-three.json",
	"http://localhost:5173/r/logo-cloud-four.json",
	"http://localhost:5173/r/logo-cloud-five.json",
	"http://localhost:5173/r/contact-one.json",
	"http://localhost:5173/r/contact-two.json",
	"http://localhost:5173/r/contact-three.json",
	"http://localhost:5173/r/contact-four.json",
	"http://localhost:5173/r/contact-five.json",
	"http://localhost:5173/r/blog-one.json",
	"http://localhost:5173/r/blog-two.json",
	"http://localhost:5173/r/blog-three.json",
	"http://localhost:5173/r/auth-one.json",
	"http://localhost:5173/r/auth-two.json",
	"http://localhost:5173/r/auth-three.json",
	"http://localhost:5173/r/auth-four.json",
	"http://localhost:5173/r/auth-five.json",
	"http://localhost:5173/r/faq-one.json",
	"http://localhost:5173/r/faq-two.json",
	"http://localhost:5173/r/faq-three.json",
	"http://localhost:5173/r/faq-four.json",
	"http://localhost:5173/r/faq-five.json",
	"http://localhost:5173/r/feature-one.json",
	"http://localhost:5173/r/feature-two.json",
	"http://localhost:5173/r/feature-three.json",
	"http://localhost:5173/r/feature-four.json",
	"http://localhost:5173/r/feature-five.json",
	"http://localhost:5173/r/footer-one.json",
	"http://localhost:5173/r/footer-two.json",
	"http://localhost:5173/r/footer-three.json",
	"http://localhost:5173/r/footer-four.json",
	"http://localhost:5173/r/footer-five.json",
	"http://localhost:5173/r/footer-six.json",
	"http://localhost:5173/r/integration-one.json",
	"http://localhost:5173/r/integration-two.json",
	"http://localhost:5173/r/integration-three.json",
	"http://localhost:5173/r/integration-four.json",
	"http://localhost:5173/r/integration-five.json",
	"http://localhost:5173/r/hero-one.json",
	"http://localhost:5173/r/hero-two.json",
	"http://localhost:5173/r/hero-three.json",
	"http://localhost:5173/r/header-one.json",
	"http://localhost:5173/r/header-two.json",
	"http://localhost:5173/r/header-three.json",
	"http://localhost:5173/r/header-four.json",
	"http://localhost:5173/r/header-five.json",
	"http://localhost:5173/r/dashboard-one.json",
	"http://localhost:5173/r/dashboard-two.json",
	"http://localhost:5173/r/dashboard-three.json",
	"http://localhost:5173/r/dashboard-four.json",
	"http://localhost:5173/r/dashboard-five.json",
	"http://localhost:5173/r/settings-one.json",
	"http://localhost:5173/r/settings-two.json",
	"http://localhost:5173/r/settings-three.json",
	"http://localhost:5173/r/settings-four.json",
	"http://localhost:5173/r/settings-five.json",
	"http://localhost:5173/r/app-shell-one.json",
	"http://localhost:5173/r/app-shell-two.json",
	"http://localhost:5173/r/app-shell-three.json",
	"http://localhost:5173/r/app-shell-four.json",
	"http://localhost:5173/r/app-shell-five.json",
	"http://localhost:5173/r/pricing-one.json",
	"http://localhost:5173/r/pricing-two.json",
	"http://localhost:5173/r/pricing-three.json",
	"http://localhost:5173/r/pricing-four.json",
	"http://localhost:5173/r/team-one.json",
	"http://localhost:5173/r/team-two.json",
	"http://localhost:5173/r/team-three.json",
	"http://localhost:5173/r/testimonial-one.json",
	"http://localhost:5173/r/testimonial-two.json",
	"http://localhost:5173/r/testimonial-three.json",
	"http://localhost:5173/r/testimonial-four.json",
	"http://localhost:5173/r/testimonial-five.json",
	"http://localhost:5173/r/image-gallery-one.json"
];

const issues = [];
const ansiPattern = /\x1B(?:[@-Z\\-_]|\[[0-?]*[ -/]*[@-~])/g;

function run(command, args) {
	const result = spawnSync(command, args, { encoding: "utf8" });
	const output = [result.stdout, result.stderr, result.error?.message]
		.filter(Boolean)
		.join("\n")
		.replace(ansiPattern, "")
		.trim();

	return { passed: result.status === 0, output };
}

rmSync("issues.md", { force: true });

for (const [index, installationUrl] of installationUrls.entries()) {
	const componentName = installationUrl.split("/").pop().replace(".json", "");

	console.log(`\n[${index + 1}/${installationUrls.length}] ${componentName}`);
	console.log(`  Installing: ${installationUrl}`);

	const installation = run("pnpm", [
		"dlx",
		"shadcn-svelte@latest",
		"add",
		installationUrl,
		"--yes"
	]);

	if (!installation.passed) {
		console.log("  ✗ Installation failed");
		issues.push({
			componentName,
			installationUrl,
			stage: "installation",
			output: installation.output
		});
	} else {
		console.log("  Running: pnpm check");
		const check = run("pnpm", ["check"]);

		if (check.passed) {
			console.log("  ✓ Passed");
		} else {
			console.log("  ✗ pnpm check failed");
			issues.push({
				componentName,
				installationUrl,
				stage: "pnpm check",
				output: check.output
			});
		}
	}

	rmSync("src/lib/components", { recursive: true, force: true });
	console.log("  Cleaned: src/lib/components");
}

if (issues.length > 0) {
	const report = issues
		.map(
			(issue) => `## ${issue.componentName}

- Installation URL: ${issue.installationUrl}
- Failed stage: ${issue.stage}

\`\`\`text
${issue.output || "No output captured."}
\`\`\``
		)
		.join("\n\n");

	writeFileSync("issues.md", `# Registry issues\n\n${report}\n`);
	console.log(`\nFinished with ${issues.length} issue(s). See issues.md.`);
	process.exitCode = 1;
} else {
	console.log(`\nAll ${installationUrls.length} components passed.`);
}
