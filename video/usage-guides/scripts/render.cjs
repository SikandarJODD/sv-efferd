// Renders index.html frame by frame with headless Chromium and encodes with ffmpeg.
//
//   node render.cjs stills 3,8          → out/still-3.png, out/still-8.png (times in seconds)
//   node render.cjs video               → out/video.mp4 (60fps)
//   node render.cjs video out/x.mp4 30  → custom path / fps
//
// Page contract: index.html in the working directory sets every style from t alone
// in window.render(t) and exports window.DURATION (seconds).
//
// Canvas is W×H CSS px at DSF× (default 1080×1080 at 2 → 2160×2160).
// e.g. W=1920 H=1080 node render.cjs video   → 3840×2160
const { chromium } = require("playwright-core");
const { spawn } = require("child_process");
const fs = require("fs");
const path = require("path");

const OUT = path.join(process.cwd(), "out");
fs.mkdirSync(OUT, { recursive: true });

(async () => {
	const [mode, arg, fpsArg] = process.argv.slice(2);
	const W = Number(process.env.W || 1080);
	const H = Number(process.env.H || 1080);

	const browser = await chromium.launch({
		channel: process.env.CHROME_PATH ? undefined : "chrome", // uses your installed Google Chrome
		executablePath: process.env.CHROME_PATH || undefined,
		args: ["--force-color-profile=srgb", "--allow-file-access-from-files"]
	});
	const page = await browser.newPage({
		viewport: { width: W, height: H },
		deviceScaleFactor: Number(process.env.DSF || 2)
	});
	await page.goto("file://" + path.join(process.cwd(), "index.html"));
	await page.evaluate(() => document.fonts.ready);
	await page.waitForTimeout(300);

	if (mode === "stills") {
		for (const t of (arg || "0").split(",").map(Number)) {
			await page.evaluate((t) => window.render(t), t);
			const file = path.join(OUT, `still-${t}.png`);
			await page.screenshot({ path: file });
			console.log(file);
		}
	} else if (mode === "video") {
		const file = path.resolve(arg || path.join(OUT, "video.mp4"));
		const fps = Number(fpsArg || 60);
		const duration = await page.evaluate(() => window.DURATION);
		const frames = Math.round(duration * fps);
		const ff = spawn(
			process.env.FFMPEG_PATH || "ffmpeg",
			[
				"-v",
				"error",
				"-y",
				"-f",
				"image2pipe",
				"-framerate",
				String(fps),
				"-c:v",
				"png",
				"-i",
				"-",
				"-c:v",
				"libx264",
				"-preset",
				"slow",
				"-crf",
				"14",
				"-pix_fmt",
				"yuv420p",
				"-profile:v",
				"high",
				"-level",
				"5.2",
				"-colorspace",
				"bt709",
				"-color_primaries",
				"bt709",
				"-color_trc",
				"bt709",
				"-movflags",
				"+faststart",
				file
			],
			{ stdio: ["pipe", "ignore", "inherit"] }
		);
		for (let i = 0; i < frames; i++) {
			await page.evaluate((t) => window.render(t), i / fps);
			const buf = await page.screenshot({ type: "png" });
			if (!ff.stdin.write(buf)) await new Promise((r) => ff.stdin.once("drain", r));
			if (i % 120 === 0) console.log(`frame ${i}/${frames}`);
		}
		ff.stdin.end();
		const code = await new Promise((r) => ff.on("close", r));
		if (code !== 0) throw new Error(`ffmpeg exited ${code}`);
		console.log(file);
	} else {
		console.log("usage: node render.cjs stills <t1,t2,...> | video [out.mp4] [fps]");
	}
	await browser.close();
})();
