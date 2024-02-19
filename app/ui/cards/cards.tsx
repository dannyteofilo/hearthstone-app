import { CardData } from '@/interfaces/card';
import React from 'react';
import Image from 'next/image';

const Card: React.FC<CardData> = (card) => (
    <div className="max-w-sm rounded overflow-hidden shadow-lg m-4 h-full">
        <div className="relative h-60 w-full">
            <Image
                src={`https://art.hearthstonejson.com/v1/orig/${card.id}.png`}
                alt={card.name}
                layout="fill"
                objectFit="cover"
                unoptimized={true}
            />
        </div>
        <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{card.name}</div>
            <p className="text-gray-700 text-base">{card.text}</p>
            <p className="text-red-500 text-sm mt-2 mb-1">{card.flavor}</p>
            <p className="text-blue-600 text-lg mb-2">{card.cardClass}</p>
        </div>
    </div>
);

export default Card;