import Image from "next/image";
import {CatCardProps} from "@/lib/types";


export default function CatCard({imageLink, catName, styles, onClick}: CatCardProps) {
    return (
        <div
            className={`bg-white p-3 pb-10 shadow-xl shadow-black/80 transform-gpu transition-transform duration-300 ${styles || ''}`}
            onClick={onClick}
        >
            {/* Photo window */}
            <div className="relative w-72 h-72 mt-2 overflow-hidden pointer-events-none">
                <Image
                    src={imageLink}
                    alt={`${catName} picture`}
                    fill
                    className="object-cover"
                    sizes="256px"
                    priority
                />
            </div>

            <p className="mt-4 text-center text-lg text-slate-700 font-medium">
                {catName}
            </p>
        </div>

    );
}
