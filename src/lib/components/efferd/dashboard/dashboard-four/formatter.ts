export const DASHBOARD_LOCALE = "en-US";

export function parseIsoCalendarDate(isoDate: string) {
	return new Date(`${isoDate}T12:00:00`);
}

export function formatChartAxisTick(isoDate: string, periodDays: number) {
	const date = parseIsoCalendarDate(isoDate);
	return date.toLocaleDateString(
		DASHBOARD_LOCALE,
		periodDays <= 7 ? { weekday: "short" } : { day: "numeric", month: "short" }
	);
}

export function formatChartTooltipDate(isoDate: string) {
	return parseIsoCalendarDate(isoDate).toLocaleDateString(DASHBOARD_LOCALE, {
		weekday: "short",
		day: "numeric",
		month: "short"
	});
}
