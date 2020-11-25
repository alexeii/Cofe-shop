import React from 'react';
import nextId from "react-id-generator";

export const ItemPage = ({openItem}) => {
    return (
        <>
            {openItem.map(item => {
                return(
                <div key={nextId()}  className="shop__item">
                    <img src={item.url} alt="coffee"/>
                    <div className="shop__item-title">
                        {item.name}
                    </div>
                    <div className="shop__item-country">{item.country}</div>
                    <div className="shop__item-price">{item.price}</div>
            </div>
            )})
            }
        </>
    )
}







                        