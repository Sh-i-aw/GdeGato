"use client"

import {instagramTiles} from "@/lib/instagramTiles";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import {useEffect, useRef, useState} from "react";
import { useTranslations } from "next-intl";

export default function InstagramCarousel () {
    const t = useTranslations()

    const scrollerRef = useRef<HTMLDivElement | null> (null)
    const [canLeft, setCanLeft] = useState(false)
    const [canRight, setCanRight] = useState(true)

    const updateButtons = () => {
        const el = scrollerRef.current;
        if (!el) return;

        const maxScrollLeft = el.scrollWidth - el.clientWidth;
        // small epsilon to avoid off-by-1 issues
        setCanLeft(el.scrollLeft > 2);
        setCanRight(el.scrollLeft < maxScrollLeft - 2);
    };

    useEffect(() => {
        updateButtons();
        const el = scrollerRef.current;
        if (!el) return;

        el.addEventListener("scroll", updateButtons, { passive: true });
        window.addEventListener("resize", updateButtons);

        return () => {
            el.removeEventListener("scroll", updateButtons);
            window.removeEventListener("resize", updateButtons);
        };
    }, []);

    const scrollByAmount = (dir: "left" | "right") => {
        const el = scrollerRef.current;
        if (!el) return;

        const amount = Math.round(el.clientWidth * 0.8); // feels nice
        el.scrollBy({
            left: dir === "left" ? -amount : amount,
            behavior: "smooth",
        });
    };

    return (
        <div className="w-full max-w-full min-w-0 flex flex-col gap-4 font-semibold tracking-tight bg-[#003312aa] p-10 ring-1 ring-white/30 ">

            <a
                className="block pb-2 text-2xl"
                href="https://www.instagram.com/g_de_gato_/"
                target="_blank"
                rel="noopener noreferrer"
            >
                {t('Home.instaFollowText')} @g_de_gato
            </a>


            <div
                className="relative"
            >
                {/* buttons */}
                <button
                    type="button"
                    onClick={() => scrollByAmount("left")}
                    disabled={!canLeft}
                    aria-label="Scroll left"
                    className="absolute left-2 top-1/2 -translate-y-1/2 z-10 h-9 w-9 rounded-full bg-white/10 backdrop-blur-md ring-1 ring-white/20 hover:bg-white/20 transition disabled:opacity-30 disabled:cursor-not-allowed"
                >
                    <ChevronLeft className="mx-auto h-5 w-5" />
                </button>
                <button
                    type="button"
                    onClick={() => scrollByAmount("right")}
                    disabled={!canRight}
                    aria-label="Scroll right"
                    className="absolute right-2 top-1/2 -translate-y-1/2 z-10 h-9 w-9 rounded-full bg-white/10 backdrop-blur-md ring-1 ring-white/20 hover:bg-white/20 transition disabled:opacity-30 disabled:cursor-not-allowed"
                >
                    <ChevronRight className="mx-auto h-5 w-5" />
                </button>

                <div
                    ref={scrollerRef}
                    className="flex gap-5 overflow-x-auto scroll-smooth pb-2 px-5 py-5 snap-x snap-mandatory [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
                >
                    {
                        instagramTiles.map((image, index) => (
                            <div
                                key={`instaTile${index}`}
                            >
                                <a
                                    href={image.imageLink}
                                    rel='noreferrer'
                                    aria-label="Open Instagram Post"
                                    className="relative block h-44 w-44 sm:h-44 sm:w-44 flex-none overflow-hidden rounded-md ring-1 ring-white/10 hover:ring-white/30 hover:scale-[1.03] transition"
                                >
                                    <Image
                                        src={image.src}
                                        alt={image.description}
                                        fill
                                        className="object-cover transition-transform duration-300 "
                                        sizes="(max-width: 720px) 160px, 176px"
                                    />
                                </a>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}