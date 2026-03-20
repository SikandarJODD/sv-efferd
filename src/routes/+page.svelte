<script lang="ts">
	import AuthFive from '$lib/components/efferd/auth/auth-five.svelte';
	import AuthFour from '$lib/components/efferd/auth/auth-four.svelte';
	import AuthOne from '$lib/components/efferd/auth/auth-one.svelte';
	import AuthThree from '$lib/components/efferd/auth/auth-three.svelte';
	import AuthTwo from '$lib/components/efferd/auth/auth-two.svelte';

	const authSections = [
		{ title: 'Auth One', component: AuthOne },
		{ title: 'Auth Two', component: AuthTwo },
		{ title: 'Auth Three', component: AuthThree },
		{ title: 'Auth Four', component: AuthFour },
		{ title: 'Auth Five', component: AuthFive }
	];
</script>

<svelte:head>
	<title>Auth Blocks Preview</title>
</svelte:head>

<div class="bg-background">
	{#each authSections as section (section.title)}
		{@const AuthComponent = section.component}

		<section class="relative border-b">
			<div class="pointer-events-none absolute top-4 left-4 z-50">
				<span
					class="rounded-full border bg-background/90 px-3 py-1 text-xs font-medium backdrop-blur"
				>
					{section.title}
				</span>
			</div>

			<AuthComponent />
		</section>
	{/each}
</div>
