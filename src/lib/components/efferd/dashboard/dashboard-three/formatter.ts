export const DASHBOARD_LOCALE = "en-US";

export function parseIsoCalendarDate(isoDate: string): Date {
	return new Date(`${isoDate}T12:00:00`);
}

export function formatChartAxisTick(isoDate: string, periodDays: number): string {
	const date = parseIsoCalendarDate(isoDate);
	return date.toLocaleDateString(
		DASHBOARD_LOCALE,
		periodDays <= 7 ? { weekday: "short" } : { day: "numeric", month: "short" }
	);
}

export function formatChartTooltipDate(isoDate: string): string {
	return parseIsoCalendarDate(isoDate).toLocaleDateString(DASHBOARD_LOCALE, {
		weekday: "long",
		day: "numeric",
		month: "short"
	});
}
