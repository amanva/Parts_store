import React, { useContext } from "react";
import { ShopContext } from "./shop-context";
import { PRODUCTS } from "./products";
import { CartItem } from "./cart-item";
import './cart.css';

export const List = () => {
  const { cartItems, getTotalCartAmount, checkout } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();


  return (
    <div className="cart">
      <div>
      </div>
      <div className="cart">
        {PRODUCTS.map((product) => {
          if (cartItems[product.id] !== 0) {
            return <CartItem data={product} />;
          }
        })}
      </div>
      {totalAmount > 0 ? (
        <div className="checkout">
          <p> Subtotal: ${totalAmount} </p>
          <button
            onClick={() => {
              checkout();
            }}
          >
            {" "}
            Checkout{" "}
          </button>
        </div>
      ) : (
        <h1> Your Shopping Cart is Empty</h1>
      )}
    </div>
  );
};
