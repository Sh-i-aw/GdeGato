"use client";

import { usePathname } from "next/navigation";

export default function PageTransition({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();

    return (
        <div
            key={pathname}
            className="pageFadeInUp flex-1 flex"
        >
            {children}
        </div>
    );
}