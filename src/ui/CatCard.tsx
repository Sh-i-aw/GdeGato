"use client";

import Image from "next/image";
import { useState } from "react";
import { CatCardProps } from "@/lib/types";

type Side = "front" | "back";

export default function CatCard({
  catName,
  imageLink,
  description,
  styles,
  onClick,
}: CatCardProps) {
  const [side, setSide] = useState<Side>("front");

  const handleClick = () => {
    setSide((s) => (s === "front" ? "back" : "front"));
    onClick?.();
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className={`outline-none perspective-distant w-full max-w-78 min-h-95 cursor-pointer ${styles ?? ""}`}
      aria-label={side === "front" ? `View ${catName} bio` : `Flip back to ${catName} photo`}
    >
      <div
        className={`relative w-full h-full min-h-95 transition-transform duration-500 transform-3d ${side === "back" ? "transform-[rotateY(180deg)]" : ""}`}
      >
        {/* Front: polaroid */}
        <div className="absolute inset-0 w-full min-h-95 backface-hidden overflow-hidden">
          <div
            className="bg-white p-3 pb-10 shadow-xl shadow-black/80 h-full w-full min-w-0 transform-gpu overflow-hidden"
          >
            <div className="relative w-full aspect-square max-w-[288px] max-h-72 mt-2 mx-auto overflow-hidden rounded-none pointer-events-none">
              <Image
                src={imageLink}
                alt={`${catName} picture`}
                fill
                className="object-cover"
                sizes="(max-width: 384px) 100vw, 256px"
                priority
              />
            </div>
            <p className="mt-4 text-center text-lg text-slate-700 font-medium">
              {catName}
            </p>
          </div>
        </div>

        {/* Back: bio */}
        <div className="absolute inset-0 w-full min-h-95 backface-hidden transform-[rotateY(180deg)]">
          <div className="bg-white p-6 pb-10 shadow-xl shadow-black/80 h-full w-full flex flex-col justify-center text-slate-700 overflow-auto">
            <p className="text-xl font-semibold">{catName}</p>
            <p className="text-sm text-slate-500 mt-1">Birthday: Dec 2025</p>
            <p className="mt-3 text-base">{description ?? "—"}</p>
          </div>
        </div>
      </div>
    </button>
  );
}
