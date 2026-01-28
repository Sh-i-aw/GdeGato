"use client";
import Image from "next/image";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";

const FADE_MS = 600;

export interface CatLoaderProps {
  autoFadeAfter?: number; // milliseconds before auto-fading
  onFadeComplete?: () => void; // callback when fade completes
}

export default function CatLoader({
  autoFadeAfter,
  onFadeComplete,
}: CatLoaderProps) {
  const t = useTranslations();
  type Phase = "show" | "fade" | "hidden";

  const [phase, setPhase] = useState<Phase>("show");
  const [imageReady, setImageReady] = useState(false);

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
        "fixed inset-0 z-9999 bg-[#0D3E20]",
        "flex flex-col items-center justify-center gap-4 sm:gap-6",
        "transition-opacity duration-500",
        phase === "fade" ? "opacity-0 pointer-events-none" : "opacity-100",
      ].join(" ")}
      aria-label="Loading"
    >
      {/* Explicit size reserves layout; content fades in when image is ready to avoid jump */}
      <div
        className={[
          "flex flex-col items-center justify-center gap-4 sm:gap-6 transition-opacity duration-400",
          imageReady ? "opacity-100" : "opacity-0",
        ].join(" ")}
      >
        <Image
          src="/loader/catWalks.gif"
          alt="Loading walking cat"
          width={224}
          height={224}
          className="w-48 sm:w-56 h-auto select-none ml-14"
          priority
          onLoad={() => setImageReady(true)}
        />
        <p className="text-base sm:text-lg font-medium text-[#f6e0ae]">
          {t("Home.loadingText")}
        </p>
      </div>
    </div>
  );
}
