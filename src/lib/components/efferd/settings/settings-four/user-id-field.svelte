<script lang="ts">
	import CheckIcon from "@lucide/svelte/icons/check";
	import CopyIcon from "@lucide/svelte/icons/copy";
	import {
		InputGroup,
		InputGroupAddon,
		InputGroupButton,
		InputGroupInput
	} from "#lib/components/ui/input-group/index.js";
	import { UseClipboard } from "#lib/hooks/use-clipboard.svelte.js";
	import SettingField from "./setting-field.svelte";
	import SettingsSection from "./settings-section.svelte";

	const userId = "user_1UNKM8D5KJZV19B0KHC4VDQ9X";
	const clipboard = new UseClipboard();
</script>

<SettingsSection hint="This may be used to identify your account in the API." hintId="user-id-hint">
	<SettingField
		description="This is your unique account identifier on Efferd."
		htmlFor="user-id"
		label="Your User ID"
	>
		<InputGroup>
			<InputGroupInput
				aria-describedby="user-id-hint"
				class="font-mono tabular-nums"
				id="user-id"
				readonly
				value={userId}
			/>
			<InputGroupAddon align="inline-end">
				<InputGroupButton
					aria-label={clipboard.status === "success"
						? "User ID copied"
						: clipboard.status === "failure"
							? "Failed to copy user ID"
							: "Copy user ID"}
					onclick={() => clipboard.copy(userId)}
					size="icon-xs"
				>
					{#if clipboard.copied}<CheckIcon />{:else}<CopyIcon />{/if}
				</InputGroupButton>
			</InputGroupAddon>
		</InputGroup>
		<span class="sr-only" role="status" aria-live="polite" aria-atomic="true">
			{clipboard.status === "success"
				? "User ID copied"
				: clipboard.status === "failure"
					? "Failed to copy user ID"
					: ""}
		</span>
	</SettingField>
</SettingsSection>
