"use client"

import {useState} from "react";
import {type ClassValue, clsx} from "clsx";
import {twMerge} from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

type Side = 'front' | 'back'
export default function KittiesPage() {
    const [side, setSide] = useState<Side>('front'); //back
    const flip = () => {
        setSide(side === 'front' ? 'back' : 'front');
    }

    return (
        <div className="flex flex-wrap justify-center gap-10 p-6">
            <button type="button" onClick={flip} className="size-96 outline-none perspective-midrange">
                <div
                    className={cn(
                        'relative size-full transition duration-1000 transform-3d',
                        side === 'front' && 'transform-[rotateY(180deg)]'
                    )}
                >
                    <div className="absolute inset-0 size-full backface-hidden">
                        <div
                            className="flex h-full w-full flex-col items-center justify-center rounded-xl border bg-red-300 text-white"
                        >
                            Front
                        </div>
                    </div>
                    <div
                        className="absolute inset-0 size-full backface-hidden transform-[rotateY(180deg)]"
                    >
                        <div
                            className="flex h-full w-full flex-col items-center justify-center rounded-xl border bg-blue-700 text-white"
                        >
                            Bak
                        </div>
                    </div>
                </div>
            </button>
        </div>
    );
}
