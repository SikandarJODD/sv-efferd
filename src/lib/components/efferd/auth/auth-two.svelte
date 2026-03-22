<script lang="ts">
	import { AtSignIcon } from "@lucide/svelte";
	import { Button } from "$lib/components/ui/button";
	import { AuthDivider } from "$lib/components/ui/auth-divider";
	import { DecorIcon } from "$lib/components/ui/decor-icon";
	import { InputGroup, InputGroupAddon, InputGroupInput } from "$lib/components/ui/input-group";
	import GithubLogo from "$lib/svgs/github.svelte";
	import GoogleLogo from "$lib/svgs/google.svelte";
	import { cn } from "$lib/utils";
	import type { HTMLAttributes } from "svelte/elements";

	type AuthTwoProps = HTMLAttributes<HTMLDivElement> & {
		class?: string;
		termsHref?: string;
		privacyHref?: string;
		emailPlaceholder?: string;
	};

	let {
		class: className = "",
		termsHref = "/",
		privacyHref = "/",
		emailPlaceholder = "your.email@example.com",
		...restProps
	}: AuthTwoProps = $props();
</script>

<div
	class={cn(
		"relative flex h-screen w-full items-center justify-center overflow-hidden px-6 md:px-8",
		className
	)}
	{...restProps}
>
	<div
		class={cn(
			"relative flex w-full max-w-sm flex-col justify-between p-6 md:p-8",
			"dark:bg-[radial-gradient(50%_80%_at_20%_0%,--theme(--color-foreground/.1),transparent)]"
		)}
	>
		<div class="absolute -inset-y-6 -left-px w-px bg-border"></div>
		<div class="absolute -inset-y-6 -right-px w-px bg-border"></div>
		<div class="absolute -inset-x-6 -top-px h-px bg-border"></div>
		<div class="absolute -inset-x-6 -bottom-px h-px bg-border"></div>

		<DecorIcon position="top-left" />
		<DecorIcon position="bottom-right" />

		<div class="w-full max-w-sm animate-in space-y-8">
			<div class="flex flex-col space-y-1">
				<h1 class="text-2xl font-bold tracking-wide">Join Now!</h1>
				<p class="text-base text-muted-foreground">Login or create your efferd account.</p>
			</div>

			<div class="space-y-4">
				<form class="space-y-2">
					<InputGroup>
						<InputGroupInput placeholder={emailPlaceholder} type="email" />
						<InputGroupAddon align="inline-start">
							<AtSignIcon />
						</InputGroupAddon>
					</InputGroup>

					<Button class="w-full" size="sm" type="button">Continue With Email</Button>
				</form>

				<AuthDivider>OR</AuthDivider>

				<div class="grid grid-cols-2 gap-2">
					<Button class="w-full" type="button" variant="outline">
						<GoogleLogo data-icon="inline-start" />
						Google
					</Button>

					<Button class="w-full" type="button" variant="outline">
						<GithubLogo data-icon="inline-start" />
						GitHub
					</Button>
				</div>
			</div>

			<p class="text-sm text-muted-foreground">
				By clicking continue, you agree to our
				<a class="underline underline-offset-4 hover:text-primary" href={termsHref}
					>Terms of Service</a
				>
				and
				<a class="underline underline-offset-4 hover:text-primary" href={privacyHref}
					>Privacy Policy</a
				>.
			</p>
		</div>
	</div>
</div>
