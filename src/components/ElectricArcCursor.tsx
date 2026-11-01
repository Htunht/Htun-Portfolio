import { useEffect, useRef } from "react";

interface Point {
  x: number;
  y: number;
  time: number;
}

const TRAIL_DURATION = 110;
const FADE_DURATION = 190;
const PATH_STEPS = 16;

const clamp = (value: number, min: number, max: number) =>
  Math.min(max, Math.max(min, value));

export default function ElectricArcCursor() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d");
    const container = canvas?.parentElement;
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (!canvas || !context || !container || reducedMotion) return;

    const points: Point[] = [];
    let width = 0;
    let height = 0;
    let lastMoveAt = 0;
    let animationFrame = 0;
    let pixelRatio = 1;

    const resize = () => {
      const bounds = container.getBoundingClientRect();
      width = bounds.width;
      height = bounds.height;
      pixelRatio = Math.min(window.devicePixelRatio || 1, 1.5);
      canvas.width = Math.round(width * pixelRatio);
      canvas.height = Math.round(height * pixelRatio);
      context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
      points.length = 0;
      context.clearRect(0, 0, width, height);
    };

    const pointAt = (time: number): Point => {
      if (time <= points[0].time) return points[0];
      if (time >= points[points.length - 1].time) {
        return points[points.length - 1];
      }

      for (let index = 1; index < points.length; index += 1) {
        const next = points[index];
        if (time > next.time) continue;

        const previous = points[index - 1];
        const progress =
          (time - previous.time) / Math.max(1, next.time - previous.time);

        return {
          x: previous.x + (next.x - previous.x) * progress,
          y: previous.y + (next.y - previous.y) * progress,
          time,
        };
      }

      return points[points.length - 1];
    };

    const drawBolt = (
      path: Point[],
      now: number,
      alpha: number,
      fork = false,
    ) => {
      if (path.length < 2) return;

      const jagged = path.map((point, index) => {
        if (index === 0 || index === path.length - 1) return point;

        const before = path[index - 1];
        const after = path[index + 1];
        const dx = after.x - before.x;
        const dy = after.y - before.y;
        const length = Math.max(1, Math.hypot(dx, dy));
        const envelope = Math.sin((index / (path.length - 1)) * Math.PI);
        const jitter =
          Math.sin(index * 17.31 + now * 0.075) *
          (fork ? 1.5 : 3) *
          envelope;

        return {
          x: point.x - (dy / length) * jitter,
          y: point.y + (dx / length) * jitter,
          time: point.time,
        };
      });

      context.globalAlpha = alpha * 0.8;
      context.beginPath();
      context.moveTo(jagged[0].x, jagged[0].y);
      for (let index = 1; index < jagged.length; index += 1) {
        context.lineTo(jagged[index].x, jagged[index].y);
      }

      context.strokeStyle = fork ? "#67e8f9" : "#818cf8";
      context.lineWidth = fork ? 0.8 : 4.5;
      context.shadowColor = fork ? "#22d3ee" : "#6366f1";
      context.shadowBlur = fork ? 5 : 12;
      context.stroke();

      context.strokeStyle = "#ffffff";
      context.lineWidth = fork ? 0.6 : 1;
      context.shadowColor = "#e0f2fe";
      context.shadowBlur = 4;
      context.stroke();
    };

    const render = (now: number) => {
      animationFrame = 0;
      context.clearRect(0, 0, width, height);

      while (points.length > 2 && points[1].time < now - TRAIL_DURATION) {
        points.shift();
      }

      const idleTime = now - lastMoveAt;
      if (points.length >= 2 && idleTime < FADE_DURATION) {
        const trailEnd = Math.min(lastMoveAt, now);
        const trailStart = Math.max(points[0].time, trailEnd - TRAIL_DURATION);
        const alpha = clamp(1 - idleTime / FADE_DURATION, 0, 1);
        const path = Array.from({ length: PATH_STEPS }, (_, index) =>
          pointAt(
            trailStart +
              ((trailEnd - trailStart) * index) / (PATH_STEPS - 1),
          ),
        );

        context.globalCompositeOperation = "lighter";
        drawBolt(path, now, alpha);

        const forkIndex = 5 + Math.floor(Math.abs(Math.sin(now * 0.013)) * 9);
        const forkStart = path[forkIndex];
        if (forkStart) {
          const direction = Math.sin(now * 0.009) < 0 ? -1 : 1;
          const forkPath = Array.from({ length: 5 }, (_, index) => {
            const progress = index / 4;
            return {
              x: forkStart.x + direction * progress * (12 + index * 2),
              y: forkStart.y - progress * (8 + index * 3),
              time: now,
            };
          });
          drawBolt(forkPath, now + 31, alpha * 0.75, true);
        }

        context.globalAlpha = 1;
        context.globalCompositeOperation = "source-over";
        context.shadowBlur = 0;
      }

      if (idleTime < FADE_DURATION && !document.hidden) {
        animationFrame = window.requestAnimationFrame(render);
      }
    };

    const onPointerMove = (event: PointerEvent) => {
      if (event.pointerType !== "mouse") return;

      const bounds = container.getBoundingClientRect();
      const x = event.clientX - bounds.left;
      const y = event.clientY - bounds.top;
      if (x < 0 || y < 0 || x > bounds.width || y > bounds.height) return;

      const now = performance.now();
      const previous = points[points.length - 1];
      if (
        !previous ||
        Math.hypot(x - previous.x, y - previous.y) > 1
      ) {
        points.push({ x, y, time: now });
      }
      lastMoveAt = now;

      if (!animationFrame) {
        animationFrame = window.requestAnimationFrame(render);
      }
    };

    const onVisibilityChange = () => {
      if (document.hidden) {
        window.cancelAnimationFrame(animationFrame);
        animationFrame = 0;
        context.clearRect(0, 0, width, height);
      }
    };

    resize();
    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(container);
    container.addEventListener("pointermove", onPointerMove, { passive: true });
    document.addEventListener("visibilitychange", onVisibilityChange);

    return () => {
      window.cancelAnimationFrame(animationFrame);
      resizeObserver.disconnect();
      container.removeEventListener("pointermove", onPointerMove);
      document.removeEventListener("visibilitychange", onVisibilityChange);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none absolute inset-0 z-40 h-full w-full"
      aria-hidden="true"
    />
  );
}
