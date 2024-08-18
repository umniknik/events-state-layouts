import React from "react";

function ShopItem({ card }) {
    return (

        <div className="item">
            <div><img src={card.img} alt={card.name} className="imgItem" /></div>
            <h3>{card.name}</h3>
            <div>{card.color}</div>
            <div className="price">${card.price}</div>
            <button className='button'>Add to Cart</button>
        </div>

    )
}

export default ShopItem;