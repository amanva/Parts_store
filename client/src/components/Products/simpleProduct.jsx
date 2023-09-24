import React, { useContext } from "react";
import "./product.scss";
import { ShopContext } from "../../shop-context";


export const simpleProduct =(props, sort) =>{
    const{id, Part_Name, R_Price, R_Image, Sale, R_Sale_Amount, R_Quantity, Width} = props.data;
    const pricing =  Sale === 1 ? 'salePrice' : 'noSalePrice';
    const saleImage =  Sale === 1 ? 'sale' : 'noSalePrice';
    
    const { addToCart, cartItems } = useContext(ShopContext);

    const cartItemCount = cartItems[id];
    const newWidth = `w-${Width}`;
    return (
        <div className="product">
            <div className="images">
            <div style={{ width: `${Width}px` }}>
                <img className="w-4 h-auto" src={R_Image} alt="Product Image" />  
                </div>
            </div>
            <div className={saleImage}>
                {Sale ===1 ?<img src = "https://static.vecteezy.com/system/resources/previews/014/455/877/non_2x/illustration-of-sale-icon-on-transparent-background-free-png.png"></img>  : null}
                </div>
            <div className="description">
                <div className="bot"> 
                    <p> <b>{Part_Name}</b></p>
                    <div className="price">
                        {Sale === 1 ? <div className="twoPrice"><p className={pricing}>${R_Sale_Amount}</p><p className={'noSalePrice'}>${R_Price}</p></div> :  <p className={pricing}>${R_Price}</p>}
                        <p>Quantity: {R_Quantity}</p>
                    </div>
                </div>
            </div>
            <button className="addToCartBttn" onClick={() => addToCart(id)}>
                Add To Cart {cartItemCount > 0 && <> ({cartItemCount})</>}
            </button>
        </div>
    )
}

export default simpleProduct;