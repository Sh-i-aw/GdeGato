"use client"

import {useEffect, useMemo, useRef, useState} from "react";

const FPS = 12
const F_COUNT =  8
const FADE_MS = 500

export default function CatLoader () {
    type Phase = "show" | "fade" | "hidden";

    const [phase, setPhase] = useState<Phase>("show");
    const [frame, setFrame] = useState(0);

    const rafId = useRef<number | null>(null);
    const lastTs = useRef<number>(0);

    const frames = useMemo(
        () => Array.from(
            {length: F_COUNT},
            (_, i) => `/loader/k${i + 1}.png`),
        []
    )

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


    return (
        <div
            className={[
                "fixed flex flex-col gap-4 inset-0 z-[9999] grid place-items-center",
                // pick whatever backdrop looks nicest with your cat frames:
                "bg-[#003312]/90", // your site green
                "transition-opacity duration-500",
                phase === "fade" ? "opacity-0 pointer-events-none" : "opacity-100",
            ].join(" ")}
            aria-label="Loading"
        >
            <img
                src={frames[frame]}
                alt="Loading"
                className="w-80 sm:w-[320px] select-none"
                decoding="async"
                draggable={false}
            />
            <p> loading ... </p>
        </div>
    );
}




