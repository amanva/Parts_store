import React, { useContext } from "react";
import { ShopContext } from "./shop-context";

export const CartItem = (props) => {
  const { ID, Part_Name, R_Price, R_Image } = props.data;
  const { cartItems, addToCart, removeFromCart, updateCartItemCount } =
    useContext(ShopContext);

  return (
    <div className="cartItem">
      <img src={R_Image} />
      <div className="description">
        <p>
          <b>{Part_Name}</b>
        </p>
        <p> Price: ${R_Price}</p>
        <div className="countHandler">
          <button className = "text-2xl mr-1" onClick={() => removeFromCart(ID)}> - </button>
          <input
            value={cartItems[ID]}
            onChange={(e) => updateCartItemCount(Number(e.target.value), ID)}
          />
          <button className = "text-2xl ml-1" onClick={() => addToCart(ID)}> + </button>
        </div>
      </div>
    </div>
  );
};
