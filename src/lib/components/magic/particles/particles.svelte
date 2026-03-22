<script lang="ts">
	import { cn } from '$lib/utils.js';
	import { untrack } from 'svelte';
	import type { HTMLAttributes } from 'svelte/elements';

	type RgbColor = [red: number, green: number, blue: number];

	type Point = {
		x: number;
		y: number;
	};

	type CanvasSize = {
		w: number;
		h: number;
	};

	type Circle = {
		x: number;
		y: number;
		translateX: number;
		translateY: number;
		size: number;
		alpha: number;
		targetAlpha: number;
		dx: number;
		dy: number;
		magnetism: number;
	};

	type ParticlesProps = HTMLAttributes<HTMLDivElement> & {
		class?: string;
		quantity?: number;
		staticity?: number;
		ease?: number;
		size?: number;
		refresh?: boolean;
		color?: string;
		vx?: number;
		vy?: number;
	};

	let {
		class: classProp,
		class: className = '',
		quantity = 100,
		staticity = 50,
		ease = 50,
		size = 0.4,
		refresh = true,
		color = '#ffffff',
		vx = 0,
		vy = 0,
		...restProps
	}: ParticlesProps = $props();

	let canvasRef = $state<HTMLCanvasElement | null>(null);
	let canvasContainerRef = $state<HTMLDivElement | null>(null);
	let context = $state<CanvasRenderingContext2D | null>(null);
	let mouse = $state<Point>({ x: 0, y: 0 });
	let canvasSize = $state<CanvasSize>({ w: 0, h: 0 });

	let circles: Circle[] = [];
	let frameId: number | null = null;

	const rgb = $derived(hexToRgb(color));
	const normalizedEase = $derived(Math.max(ease, 1));
	const normalizedStaticity = $derived(Math.max(staticity, 1));
	const normalizedQuantity = $derived(Math.max(0, Math.floor(quantity)));
	const normalizedSize = $derived(Math.max(size, 0));

	function hexToRgb(hex: string): RgbColor {
		const normalizedHex = hex.trim().replace(/^#/, '');
		const expandedHex =
			normalizedHex.length === 3
				? normalizedHex
						.split('')
						.map((char) => `${char}${char}`)
						.join('')
				: normalizedHex;

		if (!/^[0-9a-fA-F]{6}$/.test(expandedHex)) {
			return [255, 255, 255];
		}

		const hexInt = Number.parseInt(expandedHex, 16);

		return [(hexInt >> 16) & 255, (hexInt >> 8) & 255, hexInt & 255];
	}

	function createCircle(particleSize: number = normalizedSize): Circle {
		return {
			x: Math.floor(Math.random() * canvasSize.w),
			y: Math.floor(Math.random() * canvasSize.h),
			translateX: 0,
			translateY: 0,
			size: Math.floor(Math.random() * 2) + particleSize,
			alpha: 0,
			targetAlpha: Number.parseFloat((Math.random() * 0.6 + 0.1).toFixed(1)),
			dx: (Math.random() - 0.5) * 0.1,
			dy: (Math.random() - 0.5) * 0.1,
			magnetism: 0.1 + Math.random() * 4
		};
	}

	function seedParticles(
		particleQuantity: number = normalizedQuantity,
		particleSize: number = normalizedSize
	): void {
		circles = Array.from({ length: particleQuantity }, () => createCircle(particleSize));
	}

	function resizeCanvas(): void {
		if (!canvasContainerRef || !canvasRef || !context) {
			return;
		}

		canvasSize = {
			w: canvasContainerRef.offsetWidth,
			h: canvasContainerRef.offsetHeight
		};

		const devicePixelRatio = window.devicePixelRatio || 1;

		canvasRef.width = canvasSize.w * devicePixelRatio;
		canvasRef.height = canvasSize.h * devicePixelRatio;
		canvasRef.style.width = `${canvasSize.w}px`;
		canvasRef.style.height = `${canvasSize.h}px`;
		context.setTransform(devicePixelRatio, 0, 0, devicePixelRatio, 0, 0);

		seedParticles();
		renderParticles();
	}

	function clearContext(): void {
		if (!context) {
			return;
		}

		context.clearRect(0, 0, canvasSize.w, canvasSize.h);
	}

	function drawCircle(circle: Circle, colorValue: RgbColor = rgb): void {
		if (!context) {
			return;
		}

		const [red, green, blue] = colorValue;

		context.beginPath();
		context.arc(
			circle.x + circle.translateX,
			circle.y + circle.translateY,
			circle.size,
			0,
			Math.PI * 2
		);
		context.fillStyle = `rgba(${red}, ${green}, ${blue}, ${circle.alpha})`;
		context.fill();
	}

	function renderParticles(colorValue: RgbColor = rgb): void {
		clearContext();

		for (const circle of circles) {
			drawCircle(circle, colorValue);
		}
	}

	function remapValue(
		value: number,
		start1: number,
		end1: number,
		start2: number,
		end2: number
	): number {
		const remapped = ((value - start1) * (end2 - start2)) / (end1 - start1) + start2;
		return Math.max(remapped, 0);
	}

	function updateMousePosition(event: MouseEvent): void {
		if (!canvasRef) {
			return;
		}

		const rect = canvasRef.getBoundingClientRect();
		const x = event.clientX - rect.left - canvasSize.w / 2;
		const y = event.clientY - rect.top - canvasSize.h / 2;
		const inside =
			x < canvasSize.w / 2 &&
			x > -canvasSize.w / 2 &&
			y < canvasSize.h / 2 &&
			y > -canvasSize.h / 2;

		mouse = inside ? { x, y } : { x: 0, y: 0 };
	}

	function resetMousePosition(): void {
		mouse = { x: 0, y: 0 };
	}

	function animate(): void {
		clearContext();

		for (let index = 0; index < circles.length; index += 1) {
			const circle = circles[index];
			const edgeDistances = [
				circle.x + circle.translateX - circle.size,
				canvasSize.w - circle.x - circle.translateX - circle.size,
				circle.y + circle.translateY - circle.size,
				canvasSize.h - circle.y - circle.translateY - circle.size
			];
			const closestEdge = Math.min(...edgeDistances);
			const edgeAlpha = Number.parseFloat(remapValue(closestEdge, 0, 20, 0, 1).toFixed(2));

			if (edgeAlpha > 1) {
				circle.alpha = Math.min(circle.alpha + 0.02, circle.targetAlpha);
			} else {
				circle.alpha = circle.targetAlpha * edgeAlpha;
			}

			circle.x += circle.dx + vx;
			circle.y += circle.dy + vy;
			circle.translateX +=
				(mouse.x / (normalizedStaticity / circle.magnetism) - circle.translateX) / normalizedEase;
			circle.translateY +=
				(mouse.y / (normalizedStaticity / circle.magnetism) - circle.translateY) / normalizedEase;

			if (
				circle.x < -circle.size ||
				circle.x > canvasSize.w + circle.size ||
				circle.y < -circle.size ||
				circle.y > canvasSize.h + circle.size
			) {
				circles[index] = createCircle();
			}

			drawCircle(circles[index]);
		}

		frameId = window.requestAnimationFrame(animate);
	}

	$effect(() => {
		if (!canvasRef || !canvasContainerRef) {
			return;
		}

		const nextContext = canvasRef.getContext('2d');

		if (!nextContext) {
			return;
		}

		context = nextContext;

		const resizeObserver = new ResizeObserver(() => {
			untrack(() => {
				resizeCanvas();
			});
		});

		resizeObserver.observe(canvasContainerRef);
		window.addEventListener('mousemove', updateMousePosition);
		window.addEventListener('blur', resetMousePosition);

		untrack(() => {
			resizeCanvas();
			frameId = window.requestAnimationFrame(animate);
		});

		return () => {
			resizeObserver.disconnect();
			window.removeEventListener('mousemove', updateMousePosition);
			window.removeEventListener('blur', resetMousePosition);

			if (frameId !== null) {
				window.cancelAnimationFrame(frameId);
				frameId = null;
			}

			clearContext();
			circles = [];
			context = null;
		};
	});

	$effect(() => {
		const particleQuantity = normalizedQuantity;
		const particleSize = normalizedSize;
		refresh;

		if (!context) {
			return;
		}

		untrack(() => {
			seedParticles(particleQuantity, particleSize);
			renderParticles();
		});
	});

	$effect(() => {
		const currentRgb = rgb;

		if (!context) {
			return;
		}

		untrack(() => {
			renderParticles(currentRgb);
		});
	});
</script>

<div
	bind:this={canvasContainerRef}
	aria-hidden="true"
	class={cn(classProp, className)}
	{...restProps}
>
	<canvas bind:this={canvasRef} class="size-full"></canvas>
</div>

<style>
	.size-full {
		width: 100%;
		height: 100%;
	}
</style>
