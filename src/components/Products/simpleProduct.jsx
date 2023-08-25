import React from "react";
import "./product.scss";

export const simpleProduct =(props) =>{
    const{id, Part_Name, R_Price, R_Image, Sale, R_Sale_Amount} = props.data;
    const pricing =  Sale === 1 ? 'salePrice' : 'noSalePrice';
    const saleImage =  Sale === 1 ? 'sale' : 'noSalePrice';
    
    return (
        <div className="product">
            <div className="images">
                <img src={R_Image}/>   
                
                <div className={saleImage}>
                {Sale ===1 ?<img src = "https://static.vecteezy.com/system/resources/previews/014/455/877/non_2x/illustration-of-sale-icon-on-transparent-background-free-png.png"></img>  : null}
                    {/* <img src = "https://static.vecteezy.com/system/resources/previews/014/455/877/non_2x/illustration-of-sale-icon-on-transparent-background-free-png.png"></img>  */}
                </div>
            
            </div>
            <div className="description">
                <div className="bot"> 
                    <p> <b>{Part_Name}</b></p>
                    <div className="price">
                        {Sale === 1 ? <div className="twoPrice"><p className={pricing}>${R_Sale_Amount}</p><p className={'noSalePrice'}>${R_Price}</p></div> :  <p className={pricing}>${R_Price}</p>}
                        {/* <p className={pricing}>${R_Price}</p> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default simpleProduct;