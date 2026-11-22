import { parseIsoCalendarDate } from "./formatter.js";

const values = [
	162, 162, 162, 162, 162, 162, 161, 161, 160, 160, 159, 158, 158, 157, 157, 157, 157, 157, 157,
	157, 157, 157, 157, 157, 156, 156, 155, 155, 154, 153, 152, 151, 150, 149, 149, 150, 147, 151,
	147, 145, 143, 141, 139, 137, 137, 137, 137, 137, 137, 136, 134, 132, 129, 127, 125, 124, 124,
	124, 124, 124, 124, 122, 120, 118, 115, 113, 112, 111, 114, 110, 113, 111, 111, 107, 109, 105,
	103, 101, 98, 100, 97, 101, 99, 100, 94, 102, 99, 107, 104, 118, 127
];

const firstDate = parseIsoCalendarDate("2026-02-18");

export const conversationVolumeData = values.map((conversations, index) => {
	const date = new Date(firstDate);
	date.setDate(date.getDate() + index);
	return { date, conversations };
});
