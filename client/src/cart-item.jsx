import React, { useContext } from "react";
import { ShopContext } from "./shop-context";

export const CartItem = (props) => {
  const { ID, Part_Name, R_Price, R_Image } = props.data;
  const { cartItems, addToCart, removeFromCart, updateCartItemCount } =
    useContext(ShopContext);

  const cartItemCount = cartItems[String(Part_Name)]; // Convert Part_Name to string
  console.log(cartItems);
  
  return (
    <div className="cartItem">
      <img src={R_Image} alt={`Image of ${Part_Name}`} />
      <div className="description">
        <p>
          <b>{Part_Name}</b>
        </p>
        <p>Price: ${R_Price}</p>
        <div className="countHandler">
          <button className="text-2xl mr-1" onClick={() => removeFromCart(Part_Name)}>
            -
          </button>
          <input
            type="number"
            min="0"
            value={cartItemCount}
            onChange={(e) => updateCartItemCount(Number(e.target.value), Part_Name)}
          />
          <button className="text-2xl ml-1" onClick={() => addToCart(Part_Name)}>
            +
          </button>
        </div>
      </div>
    </div>
  );
};