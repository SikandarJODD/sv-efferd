<script lang="ts">
	import Sponsors from "$lib/components/landing/sponsors.svelte";
	import { Separator } from "$lib/components/ui/separator";
	import BlocksHero from "./blocks-hero.svelte";
	import CreditsSection from "./credits-section.svelte";
	import FeaturesSection from "./features-section.svelte";
	import MarketingSection from "./marketing-section.svelte";
</script>

<BlocksHero />
<MarketingSection />
<Separator />
<Sponsors />
<Separator />
<CreditsSection />
<Separator />
<FeaturesSection />
