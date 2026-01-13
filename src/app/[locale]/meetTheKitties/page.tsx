"use client"

import CatCard from "@/ui/CatCard";
import {useState} from "react";
import CatBio from "@/ui/CatBio";
import {useTranslations} from "next-intl";
import {CatCardProps} from "@/lib/types";

export default function KittiesPage() {
    const t = useTranslations()
    const cats: CatCardProps[] = [
        {catName: "Laritza", imageLink:"/cats/laritza.png", description: 'Will bite you on the nose if she could'},
        {catName: "Timoteo", imageLink:"/cats/timoteo.png", description: 'Sweetest boy alive'},
        {catName: "Victor", imageLink:"/cats/victor.jpeg", description: 'More refreshing than oranges'},
    ]

    const [selectedCatIndex, setSelectedCatIndex] = useState<number>(0)

    const getRotationStyle = (index: number) => {
        const rotations = [
            "rotate-[8deg] -translate-y-3",
            "-rotate-[2deg]",
            "rotate-[3deg] -translate-y-3",
        ];
        const onTop = index === selectedCatIndex ? " z-50 scale-[1.1]" : " hover:scale-[1.03]"
        return rotations[index % rotations.length] + onTop;
    };
    
    return (
        <main className="flex-1 flex flex-col w-full gap-6 p-10 items-center">
            <h1 className="text-3xl mt-5 font-semibold">{t('CatPage.header')}</h1>
            <div
                className="flex flex-wrap w-full py-10 justify-center"
            >
                {
                    cats.map((cat, index) => (
                            <CatCard
                                key={`catCard${index}`}
                                catName={cat.catName}
                                styles={getRotationStyle(index)}
                                imageLink={cat.imageLink}
                                onClick={() => setSelectedCatIndex(index)}
                            />
                        )
                    )
                }
            </div>
            <CatBio
                cat={cats[selectedCatIndex]}
            />
        </main>
    );
}
