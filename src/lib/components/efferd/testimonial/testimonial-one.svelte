<script lang="ts">
	import { Avatar, AvatarFallback, AvatarImage } from '$lib/components/ui/avatar';
</script>

<figure class="mx-auto flex w-full max-w-lg flex-col items-center justify-center">
	<div class="mb-8 flex items-center gap-1">
		<!-- <VercelIcon aria-hidden="true" class="size-6" /> -->
		<svg preserveAspectRatio="xMidYMid" viewBox="0 0 256 222" aria-hidden="true" class="size-6">
			<path d="m128 0 128 221.705H0z" fill="currentColor" />
		</svg>
		<span class="text-lg font-medium">Vercel</span>
	</div>

	<blockquote class="text-center text-xl leading-tight tracking-tight sm:text-2xl md:text-3xl">
		&quot;<span class="font-medium">Svelte Efferd</span> is tooo good.&quot;
	</blockquote>

	<div
		class="mx-auto my-5 h-px w-full max-w-sm bg-border mask-[linear-gradient(to_right,transparent,black,transparent)]"
	></div>

	<figcaption class="flex flex-col items-center gap-5">
		<div class="space-y-0.5 text-center">
			<cite class="text-xl font-medium text-foreground not-italic"> Guillermo Rauch </cite>
			<div class="text-lg text-muted-foreground">CEO, Vercel</div>
		</div>

		<Avatar class="size-12 rounded-full border object-cover">
			<AvatarImage alt="Guillermo Rauch's profile picture" src="https://github.com/rauchg.png" />
			<AvatarFallback>GR</AvatarFallback>
		</Avatar>
	</figcaption>
</figure>
