const DASHBOARD_LOCALE = "en-US";

export function parseIsoCalendarDate(isoDate: string) {
	return new Date(`${isoDate}T12:00:00`);
}

export function formatDate(isoDate: string, style: "day-month" | "full" = "day-month") {
	return parseIsoCalendarDate(isoDate).toLocaleDateString(DASHBOARD_LOCALE, {
		day: "numeric",
		month: "short",
		...(style === "full" ? { year: "numeric" as const } : {})
	});
}
