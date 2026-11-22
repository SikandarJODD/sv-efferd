<script lang="ts">
	import AudienceMix from "./audience-mix.svelte";
	import BrowserShare from "./browser-share.svelte";
	import OnlineNow from "./online-now.svelte";
	import TopCountries from "./top-countries.svelte";
	import TopPages from "./top-pages.svelte";
	import TopReferrers from "./top-referrers.svelte";
	import TrafficSourcesChart from "./traffic-sources-chart.svelte";
	import VisitorsChart from "./visitors-chart.svelte";
	import WebVitals from "./web-vitals.svelte";
</script>

<div class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
	<VisitorsChart />
	<OnlineNow />
	<TopPages />
	<TopCountries />
	<TrafficSourcesChart />
	<AudienceMix />
	<BrowserShare />
	<TopReferrers />
	<WebVitals />
</div>
