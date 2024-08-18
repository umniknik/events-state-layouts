import React from "react";

function ShopCard({ card }) {
    return (
        <div style={{ backgroundImage: `url(${card.img})`, }}
            className="card">

            <div className="name">
                <h3>{card.name}</h3>
                <div>{card.color}</div>
            </div>
            <div className="footer">
                <div>${card.price}</div>
                <button className='button'>Add to Cart</button>
            </div>

        </div>

    )
}

export default ShopCard;