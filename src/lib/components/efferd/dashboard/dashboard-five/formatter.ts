export const DASHBOARD_LOCALE = "en-US";

export function formatCompactNumber(value: number) {
	return new Intl.NumberFormat(DASHBOARD_LOCALE, {
		maximumFractionDigits: 2,
		notation: "compact"
	}).format(value);
}

export function formatInteger(value: number) {
	return new Intl.NumberFormat(DASHBOARD_LOCALE, {
		maximumFractionDigits: 0
	}).format(value);
}
