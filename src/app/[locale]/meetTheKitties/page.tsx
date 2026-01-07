import CatCard from "@/ui/CatCard";
import {CatCardProps} from "@/lib/types";

export default function KittiesPage() {
    const cats: CatCardProps[] = [
        {catName: "Laritza", imageLink:"/cats/laritza.png", description: 'Will bite you on the nose if she could'},
        {catName: "Timoteo", imageLink:"/cats/timoteo.png", description: 'Sweetest boy alive'},
        {catName: "Victor", imageLink:"/cats/victor.jpeg", description: 'More refreshing than oranges'},
    ]
    return (
        <main className="flex-1 flex flex-col gap-6 items-center">
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
        </main>
    );
}
