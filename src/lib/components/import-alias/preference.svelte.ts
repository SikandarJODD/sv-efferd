import { PersistedState } from "runed";
import type { ImportAliasStyle } from "./transform.js";

export const importAliasStyle = new PersistedState<ImportAliasStyle>(
	"sveltekit-import-alias-style",
	"dollar"
);
