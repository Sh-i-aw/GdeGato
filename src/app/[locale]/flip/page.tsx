"use client";

import { useState } from "react";

type Side = "front" | "back";
export default function KittiesPage() {
  const [side, setSide] = useState<Side>("front"); //back
  const flip = () => {
    setSide(side === "front" ? "back" : "front");
  };

  return (
    <div className="flex flex-wrap justify-center gap-10 p-6">
      <button
        type="button"
        onClick={flip}
        className="size-96 outline-none perspective-[1200px]"
      >
        {/* the parent bit reserves 3D space */}
        <div
          className={`relative size-full transition duration-1000 [transform-style:preserve-3d] ${side === "back" ? "transform-[rotateY(180deg)]" : ""}`}
        >
          {/* each side of the div has backface-hidden, since browser by default will draw the back side */}
          <div className="absolute inset-0 size-full [backface-visibility:hidden]">
            <div className="flex h-full w-full flex-col items-center justify-center rounded-xl border bg-red-300 text-white">
              Front
            </div>
          </div>
          <div className="absolute inset-0 size-full [backface-visibility:hidden] transform-[rotateY(180deg)]">
            <div className="flex h-full w-full flex-col items-center justify-center rounded-xl border bg-blue-700 text-white">
              Bak
            </div>
          </div>
        </div>
      </button>
    </div>
  );
}
