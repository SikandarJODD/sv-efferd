<script lang="ts">
	import { AtSignIcon } from "@lucide/svelte";
	import { Button } from "$lib/components/ui/button";
	import { AuthDivider } from "$lib/components/ui/auth-divider";
	import { FullWidthDivider } from "$lib/components/ui/full-width-divider";
	import { InputGroup, InputGroupAddon, InputGroupInput } from "$lib/components/ui/input-group";
	import GoogleLogo from "$lib/svgs/google.svelte";
	import Logo from "$lib/svgs/logo.svelte";
	import { cn } from "$lib/utils";
	import type { HTMLAttributes } from "svelte/elements";

	type AuthFourProps = HTMLAttributes<HTMLDivElement> & {
		class?: string;
		logoHref?: string;
		privacyHref?: string;
		termsHref?: string;
		emailPlaceholder?: string;
		emailAriaLabel?: string;
	};

	let {
		class: className = "",
		logoHref = "/",
		privacyHref = "/",
		termsHref = "/",
		emailPlaceholder = "your.email@example.com",
		emailAriaLabel = "Email address",
		...restProps
	}: AuthFourProps = $props();
</script>

<div class={cn("relative w-full overflow-hidden px-4 md:h-screen", className)} {...restProps}>
	<div
		class="relative mx-auto flex min-h-screen w-full max-w-sm flex-col justify-center border-x *:px-6"
	>
		<div class="flex flex-col space-y-6">
			<a aria-label="Home" href={logoHref}>
				<Logo class="h-4.5 w-auto" />
			</a>

			<div class="space-y-1">
				<h1 class="text-xl font-semibold tracking-wide">Hey, welcome!</h1>
				<p class="text-base text-muted-foreground">
					Log in or sign up. It only takes a moment.
				</p>
			</div>
		</div>

		<div class="relative my-6 flex size-full flex-col gap-4 py-8">
			<FullWidthDivider position="top" />

			<Button class="w-full" type="button" variant="outline">
				<GoogleLogo aria-hidden="true" data-icon="inline-start" />
				Continue with Google
			</Button>

			<AuthDivider>OR CONTINUE WITH EMAIL</AuthDivider>

			<form class="space-y-2">
				<InputGroup>
					<InputGroupInput
						aria-label={emailAriaLabel}
						placeholder={emailPlaceholder}
						type="email"
					/>
					<InputGroupAddon align="inline-start">
						<AtSignIcon />
					</InputGroupAddon>
				</InputGroup>

				<Button class="w-full" size="sm" type="submit">Continue With Email</Button>
			</form>

			<FullWidthDivider position="bottom" />
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
