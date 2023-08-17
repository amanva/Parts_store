import React from "react";
import "./product.scss";

export const simpleProduct =(props) =>{
    const{id, productName, price, image} = props.data;
    return (
        <div className="product">
            <img src={image}/>
            <div className="description">
                <div className="bot"> 
                    <p> <b>{productName}</b></p>
                    <p>${price}</p>
                </div>
            </div>
        </div>
    )
}

export default simpleProduct;