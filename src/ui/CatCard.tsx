import Image from "next/image";
import {CatCardProps} from "@/lib/types";


export default function CatCard({imageLink, catName, description}: CatCardProps) {
    return (
        <div className="bg-white p-3 pb-8 shadow-xl">
            {/* Photo window */}
            <div className="relative w-64 h-64 overflow-hidden">
                <Image
                    src={imageLink}
                    alt={`${catName} picture`}
                    fill
                    className="object-cover"
                    sizes="256px"
                    priority
                />
            </div>

            <p className="mt-4 text-center text-slate-700 font-medium">
                {catName}
            </p>
        </div>

    );
}
