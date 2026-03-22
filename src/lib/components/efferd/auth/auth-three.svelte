<script lang="ts">
	import { AtSignIcon } from '@lucide/svelte';
	import { Button } from '$lib/components/ui/button';
	import { AuthDivider } from '$lib/components/ui/auth-divider';
	import { InputGroup, InputGroupAddon, InputGroupInput } from '$lib/components/ui/input-group';
	import GithubLogo from '$lib/svgs/github.svelte';
	import GoogleLogo from '$lib/svgs/google.svelte';
	import Logo from '$lib/svgs/logo.svelte';
	import { cn } from '$lib/utils';
	import type { HTMLAttributes } from 'svelte/elements';

	type AuthThreeProps = HTMLAttributes<HTMLDivElement> & {
		class?: string;
		logoHref?: string;
		privacyHref?: string;
		termsHref?: string;
		emailPlaceholder?: string;
	};

	let {
		class: className = '',
		logoHref = '#',
		privacyHref = '#',
		termsHref = '#',
		emailPlaceholder = 'your.email@example.com',
		...restProps
	}: AuthThreeProps = $props();
</script>

<div class={cn('relative w-full overflow-hidden md:h-screen', className)} {...restProps}>
	<div
		class="relative mx-auto flex min-h-screen w-full max-w-sm flex-col justify-between p-6 md:p-8"
	>
		<div class="flex justify-center">
			<a href={logoHref}>
				<Logo class="h-4.5 w-auto" />
			</a>
		</div>

		<div class="w-full animate-in space-y-4 duration-600 fade-in slide-in-from-bottom-4">
			<div class="flex flex-col space-y-1">
				<h1 class="text-2xl font-bold tracking-wide">Join Now!</h1>
				<p class="text-base text-muted-foreground">Login or create your efferd account.</p>
			</div>

			<form class="space-y-2">
				<InputGroup>
					<InputGroupInput placeholder={emailPlaceholder} type="email" />
					<InputGroupAddon align="inline-start">
						<AtSignIcon />
					</InputGroupAddon>
				</InputGroup>

				<Button class="w-full" size="sm" type="button">Continue With Email</Button>
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
