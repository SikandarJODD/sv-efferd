const DASHBOARD_LOCALE = "en-US";

export function formatDate(date: Date, style: "day-month" | "full" = "day-month") {
	return date.toLocaleDateString(DASHBOARD_LOCALE, {
		day: "numeric",
		month: style === "full" ? "long" : "short",
		...(style === "full" ? { weekday: "short" as const } : {})
	});
}
