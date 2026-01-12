import {CatCardProps} from "@/lib/types";

export default function CatBio({ cat }: { cat: CatCardProps }) {
    return (
        <div
            className="bg-white/50 w-full h-80 rounded-md"
        >
            <p>
                Name: {cat.catName}
            </p>
            <p>
                {cat.description}
            </p>
        </div>
    );
}
