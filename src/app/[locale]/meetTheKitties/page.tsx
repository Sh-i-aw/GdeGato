"use client"

import CatCard from "@/ui/CatCard";
import {CatCardProps} from "@/lib/types";
import {useState} from "react";

export default function KittiesPage() {
    const cats: CatCardProps[] = [
        {catName: "Laritza", imageLink:"/cats/laritza.png", description: 'Will bite you on the nose if she could'},
        {catName: "Timoteo", imageLink:"/cats/timoteo.png", description: 'Sweetest boy alive'},
        {catName: "Victor", imageLink:"/cats/victor.jpeg", description: 'More refreshing than oranges'},
    ]
    const [selectedCat, setSelectedCat] = useState<CatCardProps>(cats[0])
    return (
        <main className="flex-1 flex flex-col w-full gap-6 p-10 items-center">
            <h1 className="text-3xl mt-5 font-semibold">Los Gatos</h1>
            <div className="flex flex-wrap w-full justify-evenly">
                {
                    cats.map((cat, index) => (
                        <CatCard
                            key={`catCard${index}`}
                            catName={cat.catName}
                            imageLink={cat.imageLink}
                            description={cat.description}/>
                        )
                    )
                }
            </div>
            <div
             className="bg-white/50 w-full h-80 rounded-md"
            >
                <p>
                    Name: {selectedCat.catName}
                </p>
                <p>
                    {selectedCat.description}
                </p>

            </div>
        </main>
    );
}
