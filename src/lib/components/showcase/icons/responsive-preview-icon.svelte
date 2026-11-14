<script lang="ts">
	interface ResponsivePreviewIconProps {
		enabled: boolean;
	}

	let { enabled }: ResponsivePreviewIconProps = $props();
	let strokeClass = $derived(enabled ? "stroke-green-500" : "stroke-primary");
</script>

<svg
	xmlns="http://www.w3.org/2000/svg"
	width="28"
	height="28"
	viewBox="0 0 24 24"
	fill="none"
	aria-hidden="true"
>
	<path
		d="M2 6V18C2 19.6569 3.34315 21 5 21L19 21C20.6569 21 22 19.6569 22 18V6C22 4.34315 20.6569 3 19 3H5C3.34315 3 2 4.34315 2 6Z"
		class={enabled ? "fill-green-500/10 stroke-green-500" : "stroke-primary"}
		stroke-width="1.5"
		stroke-linecap="round"
		stroke-linejoin="round"
	></path>
	<path
		d="M10 3L10 21"
		class={strokeClass}
		stroke-width="1.5"
		stroke-linecap="round"
		stroke-linejoin="round"
	></path>
	<path
		d="M5.5 7H6.5M5.5 10H6.5"
		class={strokeClass}
		stroke-width="1.5"
		stroke-linecap="round"
		stroke-linejoin="round"
	></path>
	<path
		d="M17 10L15 12L17 14"
		class={strokeClass}
		stroke-width="1.5"
		stroke-linecap="round"
		stroke-linejoin="round"
	></path>
</svg>
