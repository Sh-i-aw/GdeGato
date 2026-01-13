import {CatCardProps} from "@/lib/types";

export default function CatBio({ cat }: { cat: CatCardProps }) {
    return (
        <div
            className="bg-white/30 w-full h-80 p-20 rounded-md text-xl flex flex-col gap-3"
        >
            <p>Name: {cat.catName}</p>
            <p>Birthday: Dec 2025</p>
            <p>{cat.description}</p>
        </div>
    );
}
