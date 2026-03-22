<script>
	import { Avatar, AvatarFallback, AvatarImage } from "$lib/components/ui/avatar";
	import MaskLine from "$lib/components/ui/mask-line/mask-line.svelte";
</script>

<figure
	class="mx-auto flex w-full max-w-lg flex-col items-center justify-center md:grid md:grid-cols-[auto_1fr]"
>
	<div class="relative">
		<!-- Vertical lines  -->
		<MaskLine class="left-0" orientation="vertical" />
		<MaskLine class="right-0" orientation="vertical" />
		<!-- Horizontal lines  -->
		<MaskLine class="top-0 md:w-xl" orientation="horizontal" />
		<MaskLine class="bottom-0 md:w-xl" orientation="horizontal" />

		<Avatar
			class="size-24 rounded-none mask-[radial-gradient(circle,black_60%,transparent)] *:rounded-none md:size-32"
		>
			<AvatarImage alt="Shadcn's profile picture" src="https://github.com/shadcn.png" />
			<AvatarFallback>SH</AvatarFallback>
		</Avatar>
	</div>
	<figcaption class="space-y-4 p-8 text-center md:p-6 md:text-left">
		<blockquote class="text-lg leading-tight tracking-tight text-muted-foreground">
			&quot;<span class="font-medium text-foreground">Svelte Efferd</span> is so polished I might
			just retire. The ecosystem is in safe hands.&quot;
		</blockquote>

		<div>
			<cite class="text-xs font-medium text-foreground not-italic"> Shadcn </cite>
			<div class="text-[10px] text-muted-foreground">Founder, shadcn/ui</div>
		</div>
	</figcaption>
</figure>
