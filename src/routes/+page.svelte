<script lang="ts">
	import BlogOne from '$lib/components/efferd/blogs/blog-one/blog-one.svelte';
	import BlogThree from '$lib/components/efferd/blogs/blog-three/blog-three.svelte';
	import BlogTwo from '$lib/components/efferd/blogs/blog-two/blog-two.svelte';
	import CtaFive from '$lib/components/efferd/cta/cta-five.svelte';
	import CtaFour from '$lib/components/efferd/cta/cta-four.svelte';
	import CtaOne from '$lib/components/efferd/cta/cta-one.svelte';
	import CtaThree from '$lib/components/efferd/cta/cta-three.svelte';
	import CtaTwo from '$lib/components/efferd/cta/cta-two.svelte';
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
</div>
