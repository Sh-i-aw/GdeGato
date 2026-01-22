"use client";

import { useEffect, useMemo, useRef, useState } from "react";

const FPS = 12;
const F_COUNT = 8;
const FADE_MS = 500;

export interface CatLoaderProps {
  autoFadeAfter?: number; // milliseconds before auto-fading
  onFadeComplete?: () => void; // callback when fade completes
}

export default function CatLoader({
  autoFadeAfter,
  onFadeComplete,
}: CatLoaderProps) {
  type Phase = "show" | "fade" | "hidden";

  const [phase, setPhase] = useState<Phase>("show");
  const [frame, setFrame] = useState(0);

  const rafId = useRef<number | null>(null);
  const lastTs = useRef<number>(0);

  const frames = useMemo(
    () => Array.from({ length: F_COUNT }, (_, i) => `/loader/k${i + 1}.png`),
    []
  );

  useEffect(() => {
    frames.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, [frames]);

  // Animate frames with requestAnimationFrame (smooth + stable)
  useEffect(() => {
    if (phase !== "show") return;

    const frameDuration = 1000 / FPS;

    const tick = (ts: number) => {
      if (!lastTs.current) lastTs.current = ts;

      const elapsed = ts - lastTs.current;
      if (elapsed >= frameDuration) {
        const steps = Math.floor(elapsed / frameDuration);
        setFrame((f) => (f + steps) % F_COUNT);
        lastTs.current = ts;
      }

      rafId.current = requestAnimationFrame(tick);
    };

    rafId.current = requestAnimationFrame(tick);

    return () => {
      if (rafId.current) cancelAnimationFrame(rafId.current);
      rafId.current = null;
      lastTs.current = 0;
    };
  }, [phase]);

  // Auto-fade after specified duration
  useEffect(() => {
    if (autoFadeAfter && phase === "show") {
      const timer = setTimeout(() => {
        setPhase("fade");
      }, autoFadeAfter);

      return () => clearTimeout(timer);
    }
  }, [autoFadeAfter, phase]);

  // Call onFadeComplete when fade transition finishes
  useEffect(() => {
    if (phase === "fade") {
      const timer = setTimeout(() => {
        setPhase("hidden");
        onFadeComplete?.();
      }, FADE_MS);

      return () => clearTimeout(timer);
    }
  }, [phase, onFadeComplete]);

  // Don't render if hidden
  if (phase === "hidden") {
    return null;
  }

  return (
    <div
      className={[
        "fixed inset-0 z-9999",
        "flex flex-col items-center justify-center gap-4 sm:gap-6",
        "bg-[#0D3E20]",
        "transition-opacity duration-500",
        phase === "fade" ? "opacity-0 pointer-events-none" : "opacity-100",
      ].join(" ")}
      aria-label="Loading"
    >
      <img
        src={frames[frame]}
        alt="Loading"
        className="w-48 sm:w-56 select-none ml-14"
        decoding="async"
        draggable={false}
      />
      <p className="text-base sm:text-lg font-medium text-[#f6e0ae]">We'll be right with you!</p>
    </div>
  );
}
