<script lang="ts">
	import AtSignIcon from "@lucide/svelte/icons/at-sign";
	import { Button } from "#lib/components/ui/button/index.js";
	import { AuthDivider } from "#lib/components/ui/auth-divider/index.js";
	import {
		InputGroup,
		InputGroupAddon,
		InputGroupInput
	} from "#lib/components/ui/input-group/index.js";
	import GithubLogo from "#lib/components/svgs/github.svelte";
	import GoogleLogo from "#lib/components/svgs/google.svelte";
	import Logo from "#lib/components/svgs/logo.svelte";
	import { cn } from "#lib/utils.js";
	import type { HTMLAttributes } from "svelte/elements";

	type AuthThreeProps = HTMLAttributes<HTMLDivElement> & {
		class?: string;
		logoHref?: string;
		privacyHref?: string;
		termsHref?: string;
		emailPlaceholder?: string;
	};

	let {
		class: className = "",
		logoHref = "/",
		privacyHref = "/",
		termsHref = "/",
		emailPlaceholder = "your.email@example.com",
		...restProps
	}: AuthThreeProps = $props();
	const id = $props.id();
	const emailId = `${id}-email`;
</script>

<div class={cn("relative w-full overflow-hidden md:h-dvh", className)} {...restProps}>
	<div
		class="relative mx-auto flex min-h-svh w-full max-w-sm flex-col justify-between p-6 md:p-8"
	>
		<div class="flex justify-center">
			<a href={logoHref}>
				<Logo class="h-4.5 w-auto" />
			</a>
		</div>

		<div
			class="w-full animate-in space-y-4 duration-300 fade-in slide-in-from-bottom-4 motion-reduce:animate-none"
		>
			<div class="flex flex-col space-y-1">
				<h1 class="text-2xl font-bold tracking-wide">Join Now!</h1>
				<p class="text-base text-muted-foreground">Login or create your efferd account.</p>
			</div>

			<form class="space-y-2">
				<label class="sr-only" for={emailId}>Email address</label>
				<InputGroup>
					<InputGroupInput
						autocomplete="email"
						id={emailId}
						name="email"
						placeholder={emailPlaceholder}
						type="email"
					/>
					<InputGroupAddon align="inline-start">
						<AtSignIcon />
					</InputGroupAddon>
				</InputGroup>

				<Button class="w-full" size="sm" type="submit">Continue With Email</Button>
			</form>

			<AuthDivider>OR CONTINUE WITH</AuthDivider>

			<div class="space-y-2">
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

		<p class="text-center text-sm text-muted-foreground">
			This site is protected by reCAPTCHA and the Google
			<a class="underline underline-offset-4 hover:text-primary" href={privacyHref}
				>Privacy Policy</a
			>
			and
			<a class="underline underline-offset-4 hover:text-primary" href={termsHref}
				>Terms of Service</a
			>
			apply.
		</p>
	</div>
</div>
