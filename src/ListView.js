import React from "react";
import ShopItem from "./ShopItem";

function ListView({ cards }) {
    return (

        <div className="wprList">
            {cards.map((card, index) => (
                <div key={index}>
                    <ShopItem card={card} />
                </div>
            ))}
        </div>
    )
}

export default ListView;