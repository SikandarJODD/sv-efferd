<script lang="ts">
	import BlogOne from '$lib/components/efferd/blogs/blog-one/blog-one.svelte';
	import BlogThree from '$lib/components/efferd/blogs/blog-three/blog-three.svelte';
	import BlogTwo from '$lib/components/efferd/blogs/blog-two/blog-two.svelte';
	import CtaFive from '$lib/components/efferd/cta/cta-five.svelte';
	import CtaFour from '$lib/components/efferd/cta/cta-four.svelte';
	import CtaOne from '$lib/components/efferd/cta/cta-one.svelte';
	import CtaThree from '$lib/components/efferd/cta/cta-three.svelte';
	import CtaTwo from '$lib/components/efferd/cta/cta-two.svelte';
	import FaqFive from '$lib/components/efferd/faqs/faq-five.svelte';
	import FaqFour from '$lib/components/efferd/faqs/faq-four.svelte';
	import FaqOne from '$lib/components/efferd/faqs/faq-one.svelte';
	import FaqThree from '$lib/components/efferd/faqs/faq-three.svelte';
	import FaqTwo from '$lib/components/efferd/faqs/faq-two.svelte';
</script>

<div class="space-y-16 py-8">
	<BlogOne />
	<BlogTwo />
	<BlogThree />

	<div class="space-y-8 px-4 md:px-6">
		<CtaOne />
		<CtaTwo />
		<CtaThree />
		<CtaFour />
		<CtaFive />
	</div>

	<FaqOne />
	<FaqTwo />
	<FaqThree />
	<FaqFour />
	<FaqFive />
</div>
