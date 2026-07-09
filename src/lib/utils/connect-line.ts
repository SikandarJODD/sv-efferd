import type { Action } from 'svelte/action';

type Point = {
    x: number;
    y: number;
};

type Direction = Point;

export type ConnectLinePosition = 'left' | 'right' | 'top' | 'bottom';

export type ConnectLineAnchor = {
    id: string;
    position?: ConnectLinePosition;
    offset?: number;
    outset?: number;
};

export type ConnectLineParams = {
    container: string;
    from: ConnectLineAnchor;
    to: ConnectLineAnchor;
    radius?: number;
    stroke?: string;
    strokeWidth?: number;
    autoUpdate?: boolean;
};

const POSITION_DIRECTIONS: Record<ConnectLinePosition, Direction> = {
    left: { x: -1, y: 0 },
    right: { x: 1, y: 0 },
    top: { x: 0, y: -1 },
    bottom: { x: 0, y: 1 }
};

function roundedPath(points: Point[], radius: number): string {
    if (points.length < 2) return '';

    let d = `M ${points[0].x} ${points[0].y}`;

    for (let i = 1; i < points.length - 1; i++) {
        const prev = points[i - 1];
        const curr = points[i];
        const next = points[i + 1];

        const toPrev = { x: prev.x - curr.x, y: prev.y - curr.y };
        const toNext = { x: next.x - curr.x, y: next.y - curr.y };

        const distPrev = Math.hypot(toPrev.x, toPrev.y);
        const distNext = Math.hypot(toNext.x, toNext.y);

        const r = Math.min(radius, distPrev / 2, distNext / 2);

        const startCurve = {
            x: curr.x + (toPrev.x / distPrev) * r,
            y: curr.y + (toPrev.y / distPrev) * r
        };
        const endCurve = {
            x: curr.x + (toNext.x / distNext) * r,
            y: curr.y + (toNext.y / distNext) * r
        };

        d += ` L ${startCurve.x} ${startCurve.y}`;
        d += ` Q ${curr.x} ${curr.y} ${endCurve.x} ${endCurve.y}`;
    }

    const last = points[points.length - 1];
    d += ` L ${last.x} ${last.y}`;

    return d;
}

function clamp(value: number, min: number, max: number): number {
    return Math.min(Math.max(value, min), max);
}

function movePoint(point: Point, direction: Direction, distance: number): Point {
    return {
        x: point.x + direction.x * distance,
        y: point.y + direction.y * distance
    };
}

function pointsEqual(a: Point | undefined, b: Point | undefined): boolean {
    return !!a && !!b && a.x === b.x && a.y === b.y;
}

function compactPoints(points: Point[]): Point[] {
    return points.filter((point, index) => !pointsEqual(point, points[index - 1]));
}

function getAnchorPoint(
    rect: DOMRect,
    containerRect: DOMRect,
    position: ConnectLinePosition,
    offset?: number
): Point {
    const x = rect.left - containerRect.left;
    const y = rect.top - containerRect.top;

    switch (position) {
        case 'left':
            return {
                x,
                y: y + clamp(offset ?? rect.height / 2, 0, rect.height)
            };
        case 'right':
            return {
                x: x + rect.width,
                y: y + clamp(offset ?? rect.height / 2, 0, rect.height)
            };
        case 'top':
            return {
                x: x + clamp(offset ?? rect.width / 2, 0, rect.width),
                y
            };
        case 'bottom':
            return {
                x: x + clamp(offset ?? rect.width / 2, 0, rect.width),
                y: y + rect.height
            };
    }
}

function routeBetween(
    start: Point,
    startOut: Point,
    endIn: Point,
    end: Point,
    fromPosition: ConnectLinePosition
): Point[] {
    if (startOut.x === endIn.x || startOut.y === endIn.y) {
        return compactPoints([start, startOut, endIn, end]);
    }

    const middle =
        fromPosition === 'left' || fromPosition === 'right'
            ? { x: endIn.x, y: startOut.y }
            : { x: startOut.x, y: endIn.y };

    return compactPoints([start, startOut, middle, endIn, end]);
}

export const connectLine: Action<SVGPathElement, ConnectLineParams> = (node, params) => {
    let observer: ResizeObserver | undefined;
    let currentParams = params;

    function draw(): void {
        const {
            container,
            from,
            to,
            radius = 8,
            stroke = 'black',
            strokeWidth = 1
        } = currentParams;

        const fromEl = document.getElementById(from.id);
        const toEl = document.getElementById(to.id);
        const containerEl = document.getElementById(container);

        if (!fromEl || !toEl || !containerEl) return;

        const containerRect = containerEl.getBoundingClientRect();
        const fromRect = fromEl.getBoundingClientRect();
        const toRect = toEl.getBoundingClientRect();

        const fromPosition = from.position ?? 'right';
        const toPosition = to.position ?? 'left';

        const start = getAnchorPoint(fromRect, containerRect, fromPosition, from.offset);
        const end = getAnchorPoint(toRect, containerRect, toPosition, to.offset);

        const startOut = movePoint(start, POSITION_DIRECTIONS[fromPosition], from.outset ?? 24);
        const endIn = movePoint(end, POSITION_DIRECTIONS[toPosition], to.outset ?? 24);

        const points = routeBetween(start, startOut, endIn, end, fromPosition);

        node.setAttribute('d', roundedPath(points, radius));
        node.setAttribute('stroke', stroke);
        node.setAttribute('stroke-width', String(strokeWidth));
        node.setAttribute('fill', 'none');
    }

    function setup(nextParams: ConnectLineParams): void {
        currentParams = nextParams;
        draw();

        if (nextParams.autoUpdate === false) return;

        window.addEventListener('resize', draw);

        const fromEl = document.getElementById(nextParams.from.id);
        const toEl = document.getElementById(nextParams.to.id);
        const containerEl = document.getElementById(nextParams.container);
        observer = new ResizeObserver(draw);
        if (fromEl) observer.observe(fromEl);
        if (toEl) observer.observe(toEl);
        if (containerEl) observer.observe(containerEl);
    }

    function teardown(): void {
        window.removeEventListener('resize', draw);
        observer?.disconnect();
        observer = undefined;
    }

    setup(params);

    return {
        update(newParams: ConnectLineParams): void {
            teardown();
            setup(newParams);
        },
        destroy(): void {
            teardown();
        }
    };
};