<script lang="ts">
	import { ChevronLeftIcon } from '@lucide/svelte';
	import { Particles } from '$lib/components/magic/particles';
	import { Button } from '$lib/components/ui/button';
	import { Github, Google, Logo } from '$lib/svgs';
	import { cn } from '$lib/utils';
	import type { HTMLAttributes } from 'svelte/elements';

	type AuthOneProps = HTMLAttributes<HTMLDivElement> & {
		class?: string;
		homeHref?: string;
		termsHref?: string;
		privacyHref?: string;
	};

	let {
		class: className = '',
		homeHref = '#',
		termsHref = '#',
		privacyHref = '#',
		...restProps
	}: AuthOneProps = $props();
</script>

<div class={cn('relative w-full md:h-screen md:overflow-hidden', className)} {...restProps}>
	<Particles class="absolute inset-0" color="#666666" ease={20} quantity={120} />

	<div class="relative mx-auto flex min-h-screen max-w-5xl flex-col justify-center px-8">
		<Button class="absolute top-4 left-4" href={homeHref} variant="ghost">
			<ChevronLeftIcon data-icon="inline-start" />
			Home
		</Button>

		<div class="mx-auto w-full max-w-sm space-y-4">
			<Logo class="h-5 w-auto" />

			<div class="flex flex-col space-y-1">
				<h1 class="text-2xl font-bold tracking-wide">Sign In or Join Now!</h1>
				<p class="text-base text-muted-foreground">login or create your efferd account.</p>
			</div>

			<div class="space-y-2">
				<Button class="w-full" type="button">
					<Google data-icon="inline-start" />
					Continue with Google
				</Button>

				<Button class="w-full" type="button">
					<Github data-icon="inline-start" />
					Continue with GitHub
				</Button>
			</div>

			<p class="mt-8 text-sm text-muted-foreground">
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
