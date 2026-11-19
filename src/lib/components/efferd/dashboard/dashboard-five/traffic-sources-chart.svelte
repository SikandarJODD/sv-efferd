<script lang="ts">
	import * as Card from "#lib/components/ui/card/index.js";
	import { formatCompactNumber } from "./formatter.js";
	import ShareBarList from "./share-bar-list.svelte";

	const chartData = [
		{ source: "Organic search", sessions: 4120 },
		{ source: "Direct", sessions: 2890 },
		{ source: "Referral", sessions: 1640 },
		{ source: "Paid social", sessions: 980 },
		{ source: "Email", sessions: 620 }
	] as const;
	const maxSessions = Math.max(...chartData.map((row) => row.sessions));
	const rows = chartData.map((row) => ({
		label: row.source,
		value: maxSessions > 0 ? (row.sessions / maxSessions) * 75 : 0,
		displayValue: formatCompactNumber(row.sessions)
	}));
</script>

<Card.Root class="shadow-none">
	<Card.Header class="border-b">
		<Card.Title class="text-balance">Sessions by source</Card.Title>
		<Card.Description class="text-pretty">
			Attributed sessions in the last 12 months.
		</Card.Description>
	</Card.Header>
	<Card.Content class="px-0 py-1">
		<ShareBarList {rows} ariaLabel="Sessions by traffic source" />
	</Card.Content>
</Card.Root>
