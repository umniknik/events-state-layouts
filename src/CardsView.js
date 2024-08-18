import React from "react";
import ShopCard from "./ShopCard";

function CardsView({ cards }) {
    return (
        <div className="wprCards">
            {cards.map((card, index) => (
                <div key={index} className="wrpCard">
                    <ShopCard card={card} />
                </div>
            ))}
        </div>
    )
}

export default CardsView;