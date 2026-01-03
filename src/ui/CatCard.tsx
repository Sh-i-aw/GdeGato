import Image from "next/image";
import {CatCardProps} from "@/lib/types";


export default function CatCard({imageLink, catName, description}: CatCardProps) {
    return (
        <div className="flex flex-col items-center bg-white/12 shadow-2xl w-1/4 p-4 rounded-xl">
            {/* Polaroid frame */}
            <div className="bg-white p-3 pb-8 rounded-md shadow-xl">
                {/* Photo window */}
                <div className="relative w-64 h-64 overflow-hidden rounded-sm">
                    <Image
                        src={imageLink}
                        alt={`${catName} picture`}
                        fill
                        className="object-cover"
                        sizes="256px"
                        priority
                    />
                </div>

                <p className="mt-4 text-center text-slate-600 font-medium">
                    {catName}
                </p>
            </div>

            <p className="mt-4 text-center">{description}</p>
        </div>
    );
}
