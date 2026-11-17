<script lang="ts">
	import { Avatar, AvatarFallback, AvatarImage } from "#lib/components/ui/avatar/index.js";

	const avatarSrc = "https://github.com/shabanhr.png";
</script>

<header class="flex items-center gap-4">
	<Avatar class="size-14">
		<AvatarImage alt="Shaban Haider" src={avatarSrc} />
		<AvatarFallback>SH</AvatarFallback>
	</Avatar>
	<div class="min-w-0">
		<h1 class="text-xl font-medium text-balance">Shaban Haider</h1>
		<p class="text-sm text-pretty text-muted-foreground">
			Manage information to make Efferd work better for you.
		</p>
	</div>
</header>
