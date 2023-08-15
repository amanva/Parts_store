import React from "react";
import "./product.scss";

export const simpleProduct =(props) =>{
    const{id, productName, price, image} = props.data;
    return (
        <div className="product">
            <img src={image}/>
            <div className="description">
                
                <p> <b>{productName}</b></p>
                <p>${price}</p>
            </div>
        </div>
    )
}

export default simpleProduct;