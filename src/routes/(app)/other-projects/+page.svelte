<script lang="ts">
	import { Github } from "#lib/components/svgs/index.js";
	import { libraries, otherProjects, withProjectUtm } from "#lib/components/site/projects.js";
	import { Badge } from "#lib/components/spell/badge/index.js";
	import { Button } from "#lib/components/ui/button/index.js";
	import * as Card from "#lib/components/ui/card/index.js";
	import { FaviconLink } from "#lib/components/ui/favicon-link/index.js";

	const title = "Other projects";
	const description = "Other projects built by Bhide Svelte.";
</script>

<svelte:head>
	<title>{title} | Svelte Efferd Blocks</title>
	<meta name="description" content={description} />
</svelte:head>

<main class="mx-auto w-full max-w-4xl px-4 py-12 sm:px-6 sm:py-16">
	<header class="text-center">
		<h1 class="text-3xl font-medium text-foreground">{title}</h1>
		<p class="mt-3 text-sm text-muted-foreground">
			Other projects built by
			<FaviconLink href="https://bhide.dev" rel="noreferrer">Bhide Svelte</FaviconLink>.
		</p>
	</header>

	<section class="mt-10" aria-labelledby="projects-heading">
		<h2 id="projects-heading" class="sr-only">Projects</h2>
		<div class="grid gap-3 sm:grid-cols-2">
			{#each otherProjects as project (project.slug)}
				<Card.Root size="sm" class="gap-3 shadow-none">
					<Card.Header>
						<Card.Title>
							<h3>{project.title}</h3>
						</Card.Title>
						<Card.Description>{project.description}</Card.Description>
					</Card.Header>
					<Card.Content class="flex-row flex-wrap gap-1.5">
						{#each project.badges as badge (badge)}
							<Badge variant="secondary">{badge}</Badge>
						{/each}
					</Card.Content>
					<Card.Footer class="mt-auto gap-2">
						<Button
							href={withProjectUtm(project.url, project.slug)}
							variant="outline"
							size="sm"
							class="rounded-full px-3 text-[13px] shadow-none"
							target="_blank"
							rel="noopener noreferrer"
							data-s-event={`project_website:${project.slug}`}
						>
							Visit Website
						</Button>
						<Button
							href={withProjectUtm(project.github, `${project.slug}-github`)}
							variant="secondary"
							size="sm"
							class="rounded-full px-3 text-[13px]"
							target="_blank"
							rel="noopener noreferrer"
						>
							<Github data-icon="inline-start" />
							GitHub
						</Button>
					</Card.Footer>
				</Card.Root>
			{/each}
		</div>
	</section>

	<section class="mt-12" aria-labelledby="libraries-heading">
		<h2 id="libraries-heading" class="text-xl font-medium text-foreground">Libraries</h2>
		<p class="mt-2 text-sm text-muted-foreground">Small Svelte packages with a focused job.</p>

		<div class="mt-5 grid gap-3 sm:grid-cols-2">
			{#each libraries as library (library.slug)}
				<Card.Root size="sm" class="gap-3 shadow-none">
					<Card.Header>
						<Card.Title>
							<h3>{library.title}</h3>
						</Card.Title>
						<Card.Description>{library.description}</Card.Description>
					</Card.Header>
					<Card.Content class="flex-row flex-wrap gap-1.5">
						{#each library.badges as badge (badge)}
							<Badge variant="secondary">{badge}</Badge>
						{/each}
					</Card.Content>
					<Card.Footer class="mt-auto gap-2">
						{#if library.url}
							<Button
								href={withProjectUtm(library.url, library.slug)}
								variant="outline"
								size="sm"
								class="rounded-full px-3 text-[13px] shadow-none"
								target="_blank"
								rel="noopener noreferrer"
								data-s-event={`library_website:${library.slug}`}
							>
								Visit Website
							</Button>
						{/if}
						<Button
							href={withProjectUtm(library.github, `${library.slug}-github`)}
							variant="secondary"
							size="sm"
							class="rounded-full px-3 text-[13px]"
							target="_blank"
							rel="noopener noreferrer"
						>
							<Github data-icon="inline-start" />
							GitHub
						</Button>
					</Card.Footer>
				</Card.Root>
			{/each}
		</div>
	</section>
</main>
