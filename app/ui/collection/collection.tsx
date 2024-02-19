import { getData } from "@/app/lib/data";
import { CardData } from "@/interfaces/card";
import Card from "../cards/cards";

export default async function Collection() {
    const cards: CardData[] = await getData() as CardData[];
    return (
        <>
            <h1 className="text-custom-gray text-2xl font-extrabold mt-12 mb-12">Browse this collection of dinamyc items</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {cards.map((card: CardData) => (
                    <Card key={card.id} {...card} />
                ))}
            </div>
        </>
    );
};

