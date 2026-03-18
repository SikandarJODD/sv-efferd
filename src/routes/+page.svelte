<script lang="ts">
	import PageSkeletons from '$lib/components/base/PageSkeletons.svelte';
	import ContactFive from '$lib/components/efferd/contact/contact-five.svelte';
	import ContactFour from '$lib/components/efferd/contact/contact-four.svelte';
	import ContactOne from '$lib/components/efferd/contact/contact-one.svelte';
	import ContactThree from '$lib/components/efferd/contact/contact-three.svelte';
	import ContactTwo from '$lib/components/efferd/contact/contact-two.svelte';
	import HeaderOne from '$lib/components/efferd/header/header/header-one.svelte';
	import { Skeleton } from '$lib/components/ui/skeleton';
</script>

<!-- <ContactOne /> -->
<!-- <ContactTwo /> -->
<!-- <ContactThree /> -->
<!-- <ContactFour /> -->

<!-- <main class="relative flex size-full min-h-screen w-full items-center justify-center p-4">
	<ContactFive />
</main> -->
<HeaderOne />

<div class="min-h-[300vh]">
	<PageSkeletons />
</div>
