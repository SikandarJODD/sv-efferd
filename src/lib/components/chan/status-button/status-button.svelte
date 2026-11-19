<script lang="ts" module>
	import type { ButtonProps } from "#lib/components/ui/button/index.js";
	import type { Snippet } from "svelte";

	export type ButtonStatus = "idle" | "loading" | "success" | "failed";

	export type StatusButtonProps = Omit<
		ButtonProps,
		"children" | "onclick"
	> & {
		children: Snippet;
		/**
		 * Uncontrolled mode: loading while the returned promise is pending, then
		 * success. Omit it when the form owns the submission.
		 */
		onclick?: (event: MouseEvent) => void | Promise<void>;
		/** Controlled mode, e.g. derived from a form action. */
		status?: ButtonStatus;
		/** Also called for automatic returns to idle. */
		onStatusChange?: (status: ButtonStatus) => void;
		/** Called when `onclick` rejects. */
		onError?: (error: unknown) => void;
		/** Shown next to the spinner while the action is pending. */
		loadingLabel?: Snippet;
		/** Shown next to the check icon, e.g. "Submitted" for a "Submit" button. */
		successLabel?: Snippet;
		successDuration?: number;
		/** Shown next to the failure icon when the action rejects. */
		failedLabel?: Snippet;
		failedDuration?: number;
	};
</script>

<script lang="ts">
	import { navigating } from "$app/state";
	import XIcon from "@lucide/svelte/icons/x";
	import { Button } from "#lib/components/ui/button/index.js";
	import { cn } from "#lib/utils.js";
	import { AnimatePresence, motion, useReducedMotion } from "motion-sv";
	import type { Transition, Variants } from "motion-sv";
	import { watch } from "runed";
	import Spinner from "./spinner.svelte";
	import SuccessIcon from "./success-icon.svelte";

	const DEFAULT_SUCCESS_DURATION = 1500;
	const DEFAULT_FAILED_DURATION = 2500;

	const swapVariants: Variants = {
		initial: { opacity: 0, y: 8, filter: "blur(4px)" },
		animate: { opacity: 1, y: 0, filter: "blur(0px)" },
		exit: { opacity: 0, y: -8, filter: "blur(4px)" }
	};

	const reducedMotionVariants: Variants = {
		initial: { opacity: 0 },
		animate: { opacity: 1 },
		exit: { opacity: 0 }
	};

	// A spring keeps its velocity when the status changes mid-swap; a cubic-bezier
	// would restart from zero.
	const swapTransition: Transition = {
		type: "spring",
		duration: 0.3,
		bounce: 0
	};

	// Bounce only on the entrance, and only on movement: opacity and blur would
	// overshoot.
	const successVariants: Variants = {
		...swapVariants,
		animate: {
			...swapVariants.animate,
			transition: {
				type: "spring",
				duration: 0.45,
				bounce: 0.35,
				opacity: swapTransition,
				filter: swapTransition
			}
		}
	};

	const failedVariants: Variants = {
		...swapVariants,
		animate: {
			...swapVariants.animate,
			x: [0, -4, 4, -2, 2, 0],
			transition: {
				type: "spring",
				duration: 0.4,
				bounce: 0,
				x: { type: "tween", duration: 0.35, ease: "easeInOut" },
				opacity: swapTransition,
				filter: swapTransition
			}
		}
	};

	let {
		ref = $bindable(null),
		children,
		class: className,
		variant,
		onclick,
		status,
		onStatusChange,
		onError,
		loadingLabel,
		successLabel,
		successDuration = DEFAULT_SUCCESS_DURATION,
		failedLabel,
		failedDuration = DEFAULT_FAILED_DURATION,
		...restProps
	}: StatusButtonProps = $props();

	let internalStatus = $state<ButtonStatus>("idle");
	const currentStatus = $derived(status ?? internalStatus);
	const isBusy = $derived(currentStatus !== "idle");

	const shouldReduceMotion = useReducedMotion();
	const variants = $derived(
		shouldReduceMotion.current ? reducedMotionVariants : swapVariants
	);
	const transition = $derived<Transition>(
		shouldReduceMotion.current ? { duration: 0 } : swapTransition
	);
	// Skip exits during navigation because motion-sv's global outro can delay route removal.
	const exitVariant = $derived(navigating.type === null ? "exit" : undefined);

	function setStatus(nextStatus: ButtonStatus) {
		if (nextStatus === currentStatus) return;

		if (status === undefined) internalStatus = nextStatus;
		onStatusChange?.(nextStatus);
	}

	watch(
		[() => currentStatus, () => successDuration, () => failedDuration],
		([nextStatus, nextSuccessDuration, nextFailedDuration]) => {
			if (nextStatus !== "success" && nextStatus !== "failed") return;

			const duration =
				nextStatus === "success"
					? nextSuccessDuration
					: nextFailedDuration;
			const timeoutId = window.setTimeout(
				() => setStatus("idle"),
				duration
			);
			return () => window.clearTimeout(timeoutId);
		}
	);

	async function handleClick(event: MouseEvent) {
		if (isBusy) {
			event.preventDefault();
			return;
		}

		if (!onclick) return;

		setStatus("loading");

		try {
			await onclick(event);
			setStatus("success");
		} catch (error) {
			setStatus("failed");
			onError?.(error);
		}
	}
</script>

{#snippet loadingContent()}
	<Spinner />
	{#if loadingLabel}
		{@render loadingLabel()}
	{:else}
		<span class="sr-only">Loading</span>
	{/if}
{/snippet}

{#snippet successContent()}
	<SuccessIcon />
	{#if successLabel}
		{@render successLabel()}
	{:else}
		<span class="sr-only">Success</span>
	{/if}
{/snippet}

{#snippet failedContent()}
	<XIcon />
	{#if failedLabel}
		{@render failedLabel()}
	{:else}
		<span class="sr-only">Failed</span>
	{/if}
{/snippet}

<Button
	bind:ref
	variant={currentStatus === "failed" ? "destructive" : variant}
	data-status={currentStatus}
	aria-busy={currentStatus === "loading"}
	aria-disabled={isBusy || undefined}
	onclick={handleClick}
	class={cn(
		"inline-grid justify-items-center *:col-start-1 *:row-start-1 *:flex *:items-center *:gap-[inherit]",
		className
	)}
	{...restProps}
>
	<!-- Invisible copies of the widest states keep the button's width fixed. -->
	<span aria-hidden="true" class="invisible">
		{@render children?.()}
	</span>
	<span aria-hidden="true" class="invisible">
		{@render successContent()}
	</span>
	<span aria-hidden="true" class="invisible">
		{@render failedContent()}
	</span>
	<span aria-hidden="true" class="invisible">
		{@render loadingContent()}
	</span>

	<AnimatePresence initial={false}>
		{#if currentStatus === "idle"}
			<motion.span
				{variants}
				initial="initial"
				animate="animate"
				exit={exitVariant}
				{transition}
			>
				{@render children()}
			</motion.span>
		{:else if currentStatus === "loading"}
			<motion.span
				role="status"
				{variants}
				initial="initial"
				animate="animate"
				exit={exitVariant}
				{transition}
			>
				{@render loadingContent()}
			</motion.span>
		{:else if currentStatus === "success"}
			<motion.span
				role="status"
				variants={shouldReduceMotion.current
					? variants
					: successVariants}
				initial="initial"
				animate="animate"
				exit={exitVariant}
				{transition}
			>
				{@render successContent()}
			</motion.span>
		{:else}
			<motion.span
				role="alert"
				variants={shouldReduceMotion.current
					? variants
					: failedVariants}
				initial="initial"
				animate="animate"
				exit={exitVariant}
				{transition}
			>
				{@render failedContent()}
			</motion.span>
		{/if}
	</AnimatePresence>
</Button>
