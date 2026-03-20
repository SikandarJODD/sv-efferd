<script lang="ts">
	import FeatureOne from '$lib/components/efferd/features/feature-one.svelte';
	import FeatureTwo from '$lib/components/efferd/features/feature-two.svelte';
	import FeatureThree from '$lib/components/efferd/features/feature-three.svelte';
	import FeatureFour from '$lib/components/efferd/features/feature-four/feature-four.svelte';
	import FeatureFive from '$lib/components/efferd/features/feature-five/feature-five.svelte';
	import FooterFive from '$lib/components/efferd/footer/footer-five.svelte';
	import FooterFour from '$lib/components/efferd/footer/footer-four.svelte';
	import FooterOne from '$lib/components/efferd/footer/footer-one.svelte';
	import FooterSix from '$lib/components/efferd/footer/footer-six.svelte';
	import FooterThree from '$lib/components/efferd/footer/footer-three.svelte';
	import FooterTwo from '$lib/components/efferd/footer/footer-two.svelte';
</script>

<div class="space-y-16 py-8">
	<FeatureOne />
	<FeatureTwo />
	<FeatureThree />
	<FeatureFour />
	<FeatureFive />

	<div class="space-y-16 pt-8">
		<FooterOne />
		<FooterTwo />
		<FooterThree />
		<FooterFour />
		<FooterFive />
		<FooterSix />
	</div>
</div>
