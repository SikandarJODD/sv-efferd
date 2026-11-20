function clamp(value, min = 0, max = 1) {
	return Math.min(max, Math.max(min, value));
}

function lerp(from, to, progress) {
	return from + (to - from) * progress;
}

function bezier(x1, y1, x2, y2) {
	const cx = 3 * x1;
	const bx = 3 * (x2 - x1) - cx;
	const ax = 1 - cx - bx;
	const cy = 3 * y1;
	const by = 3 * (y2 - y1) - cy;
	const ay = 1 - cy - by;
	const sampleX = (time) => ((ax * time + bx) * time + cx) * time;
	const sampleY = (time) => ((ay * time + by) * time + cy) * time;
	const sampleDerivativeX = (time) => (3 * ax * time + 2 * bx) * time + cx;

	return (progress) => {
		if (progress <= 0) return 0;
		if (progress >= 1) return 1;

		let time = progress;
		for (let index = 0; index < 8; index += 1) {
			const error = sampleX(time) - progress;
			const derivative = sampleDerivativeX(time);
			if (Math.abs(error) < 1e-7) return sampleY(time);
			if (Math.abs(derivative) < 1e-6) break;
			time -= error / derivative;
		}

		let low = 0;
		let high = 1;
		time = progress;
		for (let index = 0; index < 40; index += 1) {
			const value = sampleX(time);
			if (Math.abs(value - progress) < 1e-7) break;
			if (progress > value) low = time;
			else high = time;
			time = (low + high) / 2;
		}

		return sampleY(time);
	};
}

const easeInOut = bezier(0.65, 0, 0.35, 1);
const easeOut = bezier(0.23, 1, 0.32, 1);

function interval(time, start, duration, ease = easeInOut) {
	return ease(clamp((time - start) / duration));
}

function pressAmount(time, clickAt) {
	const down = interval(time, clickAt - 0.09, 0.09, easeOut);
	const up = interval(time, clickAt, 0.16, easeOut);
	return down * (1 - up);
}

function quadraticPoint(from, control, to, progress) {
	const inverse = 1 - progress;
	return {
		x: inverse * inverse * from.x + 2 * inverse * progress * control.x + progress * progress * to.x,
		y: inverse * inverse * from.y + 2 * inverse * progress * control.y + progress * progress * to.y
	};
}

function setCursor(element, point, opacity = 1, scale = 1) {
	element.style.opacity = opacity;
	element.style.transform = `translate(${point.x}px, ${point.y}px) scale(${scale})`;
}
