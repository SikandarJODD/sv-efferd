<script lang="ts">
	import IntegrationCardFour from "./integration-card-four.svelte";

	type LogoType = {
		src: string;
		alt: string;
		isInvertable?: boolean;
	};

	type TileData = {
		row: number;
		col: number;
		logo?: LogoType;
	};

	const tiles: TileData[] = [
		{
			row: 0,
			col: 1
		},
		{
			row: 0,
			col: 3,
			logo: {
				src: "https://storage.efferd.com/logo/notion.svg",
				alt: "Notion Logo"
			}
		},
		{ row: 1, col: 0 },
		{
			row: 1,
			col: 2,
			logo: {
				src: "https://storage.efferd.com/logo/cursor.svg",
				alt: "Cursor Logo",
				isInvertable: true
			}
		},
		{
			row: 1,
			col: 4,
			logo: {
				src: "https://storage.efferd.com/logo/vercel.svg",
				alt: "Vercel Logo",
				isInvertable: true
			}
		},
		{
			row: 2,
			col: 1,
			logo: {
				src: "https://storage.efferd.com/logo/planetscale.svg",
				alt: "Planetscale Logo",
				isInvertable: true
			}
		},
		{
			row: 2,
			col: 3,
			logo: {
				src: "https://storage.efferd.com/logo/gmail.svg",
				alt: "Gmail Logo"
			}
		},
		{ row: 3, col: 0 },
		{
			row: 3,
			col: 2,
			logo: {
				src: "https://storage.efferd.com/logo/supabase.svg",
				alt: "Supabase Logo"
			}
		},
		{
			row: 3,
			col: 4,
			logo: {
				src: "https://storage.efferd.com/logo/canva.svg",
				alt: "Canva Logo"
			}
		},
		{
			row: 4,
			col: 1,
			logo: {
				src: "https://storage.efferd.com/logo/adobe.svg",
				alt: "Adobe Logo"
			}
		},
		{
			row: 4,
			col: 3,
			logo: {
				src: "https://storage.efferd.com/logo/polar.svg",
				alt: "Polar Logo"
			}
		}
	];
</script>

<div class="mx-auto grid max-w-5xl grid-cols-1 gap-12 p-4 md:grid-cols-2 md:items-center">
	<div class="max-w-xl space-y-5">
		<h2 class="text-3xl font-medium tracking-tight text-foreground sm:text-4xl md:text-5xl">
			Seamless Integration
		</h2>
		<p class="text-lg leading-8 text-muted-foreground">
			Integrate with over 100+ tools and platforms to streamline your workflow and boost
			productivity.
		</p>
	</div>

	<div class="place-items-end">
		<div
			class="relative size-90 mask-[radial-gradient(ellipse_at_center,black,black,transparent)]"
		>
			{#each tiles as tile (`${tile.row}_${tile.col}`)}
				<IntegrationCardFour {...tile} />
			{/each}
		</div>
	</div>
</div>
