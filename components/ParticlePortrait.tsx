import { forwardRef, useEffect, useImperativeHandle, useRef } from "react";
import { akkurat } from "../lib/fonts";

export type ParticlePortraitHandle = {
  /** Re-form the particles into a word ("\n" for line breaks), or back into the portrait with null. */
  morph: (shape: string | null) => void;
  /** Blow the particles outward; they re-form into the portrait afterwards. */
  explode: () => void;
};

type Box = { x: number; y: number; w: number; h: number };

const MOBILE = 820;
const PORTRAIT_SRC = "/assets/portrait.svg";

/**
 * The homepage portrait, drawn with ~15k particles sampled from the line-art SVG.
 * The cursor pushes and swirls them; hovering a nav item morphs them into a word.
 * Colours come from the --p-* CSS variables so it follows the light/dark theme.
 */
export const ParticlePortrait = forwardRef<ParticlePortraitHandle, { theme: string }>(function ParticlePortrait(
  { theme },
  ref,
) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const api = useRef<ParticlePortraitHandle>({ morph: () => {}, explode: () => {} });
  const themeRef = useRef<() => void>(() => {});

  useImperativeHandle(ref, () => ({
    morph: s => api.current.morph(s),
    explode: () => api.current.explode(),
  }));

  useEffect(() => {
    themeRef.current();
  }, [theme]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const fontFamily = akkurat.style.fontFamily;

    let W = 0,
      H = 0,
      N = 0,
      raf = 0,
      alive = true;
    let px = new Float32Array(0),
      py = new Float32Array(0),
      vx = new Float32Array(0),
      vy = new Float32Array(0),
      tx = new Float32Array(0),
      ty = new Float32Array(0),
      hx = new Float32Array(0),
      hy = new Float32Array(0),
      seed = new Float32Array(0);
    let mode: "portrait" | "word" | "explode" = "portrait";
    let explodeT = 0;
    let current: string | null = null;
    const mouse = { x: -9999, y: -9999 };
    const colors = { base: "158,215,234", alt: "34,96,238", hot: "235,248,255", bg: "#0b0d12", blend: "lighter" };

    const readColors = () => {
      const cs = getComputedStyle(document.documentElement);
      colors.base = cs.getPropertyValue("--p-base").trim() || colors.base;
      colors.alt = cs.getPropertyValue("--p-alt").trim() || colors.alt;
      colors.hot = cs.getPropertyValue("--p-hot").trim() || colors.hot;
      colors.blend = cs.getPropertyValue("--p-blend").trim() || colors.blend;
      colors.bg = cs.getPropertyValue("--bg").trim() || colors.bg;
    };
    themeRef.current = () => {
      // the toggle swaps data-theme first; read on the next frame
      requestAnimationFrame(() => {
        readColors();
        if (reduce) drawStatic();
      });
    };

    const portraitBox = (): Box => {
      if (W < MOBILE) {
        const h = Math.min(H * 0.46, W * 0.95);
        return { x: (W - h * 1.1) / 2, y: 64, w: h * 1.1, h };
      }
      const h = H * 0.92;
      const w = h * 1.1;
      return { x: W - w * 0.92, y: (H - h) / 2 + H * 0.02, w, h };
    };
    const wordBox = (): Box => {
      if (W < MOBILE) {
        const b = portraitBox();
        return { x: 16, y: b.y, w: W - 32, h: b.h };
      }
      return { x: W * 0.52, y: H * 0.18, w: W * 0.44, h: H * 0.64 };
    };

    const sample = (draw: (o: CanvasRenderingContext2D, w: number, h: number) => void, box: Box, step: number) => {
      const off = document.createElement("canvas");
      off.width = Math.max(1, Math.ceil(box.w));
      off.height = Math.max(1, Math.ceil(box.h));
      const o = off.getContext("2d", { willReadFrequently: true })!;
      draw(o, off.width, off.height);
      const data = o.getImageData(0, 0, off.width, off.height).data;
      const pts: number[] = [];
      for (let y = 0; y < off.height; y += step)
        for (let x = 0; x < off.width; x += step)
          if (data[(y * off.width + x) * 4 + 3] > 120)
            pts.push(box.x + x + (Math.random() - 0.5) * step * 0.6, box.y + y + (Math.random() - 0.5) * step * 0.6);
      return pts;
    };

    const img = new Image();
    img.src = PORTRAIT_SRC;

    const portraitPoints = () =>
      sample((o, w, h) => o.drawImage(img, 0, 0, w, h), portraitBox(), W < MOBILE ? 2 : 3);

    const wordPoints = (word: string) =>
      sample(
        (o, w, h) => {
          const lines = word.split("\n");
          const longest = Math.max(...lines.map(l => l.length));
          const size = Math.min(
            (h * 0.8) / lines.length,
            w * (longest <= 3 ? 0.42 : 1.5 / longest),
          );
          o.font = `700 ${size}px ${fontFamily}, system-ui, sans-serif`;
          o.textAlign = "center";
          o.textBaseline = "middle";
          o.fillStyle = "#000";
          const lh = size * 1.0;
          lines.forEach((l, i) => o.fillText(l, w / 2, h / 2 + (i - (lines.length - 1) / 2) * lh));
        },
        wordBox(),
        W < MOBILE ? 2 : 3,
      );

    const build = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      W = window.innerWidth;
      H = window.innerHeight;
      canvas.width = W * dpr;
      canvas.height = H * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const pts = portraitPoints();
      N = pts.length / 2;
      px = new Float32Array(N);
      py = new Float32Array(N);
      vx = new Float32Array(N);
      vy = new Float32Array(N);
      tx = new Float32Array(N);
      ty = new Float32Array(N);
      hx = new Float32Array(N);
      hy = new Float32Array(N);
      seed = new Float32Array(N);
      for (let i = 0; i < N; i++) {
        hx[i] = tx[i] = pts[i * 2];
        hy[i] = ty[i] = pts[i * 2 + 1];
        seed[i] = Math.random();
        if (reduce) {
          px[i] = tx[i];
          py[i] = ty[i];
        } else {
          // stream in from far away, like ink being called home
          const a = Math.random() * Math.PI * 2;
          const r = Math.max(W, H) * (0.6 + Math.random() * 0.6);
          px[i] = W / 2 + Math.cos(a) * r;
          py[i] = H / 2 + Math.sin(a) * r;
        }
      }
      if (current) setTargets(wordPoints(current));
    };

    const setTargets = (pts: number[]) => {
      const M = pts.length / 2;
      const order = Array.from({ length: N }, (_, i) => i).sort(() => Math.random() - 0.5);
      const box = wordBox();
      for (let k = 0; k < N; k++) {
        const i = order[k];
        if (k < M) {
          tx[i] = pts[k * 2];
          ty[i] = pts[k * 2 + 1];
        } else {
          // spare particles become a loose halo of dust around the word
          const a = Math.random() * Math.PI * 2;
          const r = Math.max(box.w, box.h) * (0.35 + Math.pow(Math.random(), 0.6) * 0.5);
          tx[i] = box.x + box.w / 2 + Math.cos(a) * r;
          ty[i] = box.y + box.h / 2 + Math.sin(a) * r * 0.75;
        }
      }
    };
    const goHome = () => {
      mode = "portrait";
      tx.set(hx);
      ty.set(hy);
    };
    const snap = () => {
      px.set(tx);
      py.set(ty);
      drawStatic();
    };

    function drawStatic() {
      ctx!.globalCompositeOperation = "source-over";
      ctx!.fillStyle = colors.bg;
      ctx!.fillRect(0, 0, W, H);
      ctx!.fillStyle = `rgba(${colors.base},0.85)`;
      for (let i = 0; i < N; i++) ctx!.fillRect(px[i], py[i], 1.4, 1.4);
    }

    let t = 0;
    const frame = () => {
      if (!alive) return;
      t += 1 / 60;
      ctx.globalCompositeOperation = "source-over";
      ctx.globalAlpha = 0.34;
      ctx.fillStyle = colors.bg;
      ctx.fillRect(0, 0, W, H);
      ctx.globalAlpha = 1;
      const R = W < MOBILE ? 70 : 120,
        R2 = R * R;
      const k = mode === "explode" ? 0 : 0.045;
      const damp = mode === "explode" ? 0.985 : 0.84;
      const mx = mouse.x,
        my = mouse.y;
      ctx.globalCompositeOperation = colors.blend as GlobalCompositeOperation;
      const base = `rgba(${colors.base},0.75)`,
        alt = `rgba(${colors.alt},0.85)`,
        hot = `rgba(${colors.hot},0.9)`;
      for (let i = 0; i < N; i++) {
        let ax = (tx[i] - px[i]) * k,
          ay = (ty[i] - py[i]) * k;
        const s = seed[i];
        // a breathing curl field keeps the portrait alive
        ax += Math.sin(py[i] * 0.012 + t * 1.3 + s * 6) * 0.08;
        ay += Math.cos(px[i] * 0.012 + t * 1.1 + s * 6) * 0.08;
        const dx = px[i] - mx,
          dy = py[i] - my,
          d2 = dx * dx + dy * dy;
        if (d2 < R2) {
          // push outward and swirl, like a hand through smoke
          const d = Math.sqrt(d2) + 0.001,
            f = (1 - d / R) * 3.2;
          ax += (dx / d) * f - (dy / d) * f * 0.9;
          ay += (dy / d) * f + (dx / d) * f * 0.9;
        }
        vx[i] = (vx[i] + ax) * damp;
        vy[i] = (vy[i] + ay) * damp;
        px[i] += vx[i];
        py[i] += vy[i];
        const sp = Math.min(1, Math.abs(vx[i]) + Math.abs(vy[i]) * 0.25);
        ctx.fillStyle = sp > 0.6 ? hot : s < 0.18 ? alt : base;
        const size = (W < MOBILE ? 1.5 : 1.1) + sp * 1.2;
        ctx.fillRect(px[i], py[i], size, size);
      }
      ctx.globalCompositeOperation = "source-over";
      if (mode === "explode" && (explodeT -= 1 / 60) <= 0) goHome();
      raf = requestAnimationFrame(frame);
    };

    api.current = {
      morph: shape => {
        if (!N || mode === "explode") return;
        current = shape;
        if (shape) {
          mode = "word";
          setTargets(wordPoints(shape));
        } else goHome();
        if (reduce) snap();
      },
      explode: () => {
        if (!N || reduce) return;
        mode = "explode";
        explodeT = 1.4;
        current = null;
        const cx = W / 2,
          cy = H / 2;
        for (let i = 0; i < N; i++) {
          const dx = px[i] - cx,
            dy = py[i] - cy,
            d = Math.hypot(dx, dy) + 1;
          vx[i] += (dx / d) * (6 + seed[i] * 18);
          vy[i] += (dy / d) * (6 + seed[i] * 18);
        }
      },
    };

    const onMove = (e: PointerEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };
    const onLeave = () => {
      mouse.x = mouse.y = -9999;
    };
    let rt: ReturnType<typeof setTimeout>;
    const onResize = () => {
      clearTimeout(rt);
      rt = setTimeout(() => {
        build();
        if (reduce) drawStatic();
      }, 150);
    };
    window.addEventListener("pointermove", onMove);
    document.addEventListener("pointerleave", onLeave);
    window.addEventListener("touchend", onLeave);
    window.addEventListener("resize", onResize);

    const start = () => {
      if (!alive) return;
      readColors();
      build();
      if (reduce) drawStatic();
      else {
        ctx.fillStyle = colors.bg;
        ctx.fillRect(0, 0, W, H);
        raf = requestAnimationFrame(frame);
      }
    };
    const ready = document.fonts ? document.fonts.ready : Promise.resolve();
    if (img.complete && img.naturalWidth) ready.then(start);
    else img.onload = () => ready.then(start);

    return () => {
      alive = false;
      cancelAnimationFrame(raf);
      clearTimeout(rt);
      window.removeEventListener("pointermove", onMove);
      document.removeEventListener("pointerleave", onLeave);
      window.removeEventListener("touchend", onLeave);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return <canvas ref={canvasRef} aria-hidden="true" className="fixed inset-0 w-screen h-screen block" />;
});
