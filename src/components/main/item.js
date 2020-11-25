import React from 'react';
import nextId from "react-id-generator";

export const Item = ({itemList}) => {
    
    return (
        <>{itemList.map(item => (
            <div key={nextId()} className="best__item">
            <img src={item.url} alt="coffee"/>
            <div className="best__item-title">
                {item.name}
            </div>
            <div className="best__item-price">{item.price}</div>
        </div>
        ))
            }
        </>
    )
}