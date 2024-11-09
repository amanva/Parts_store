import React, { useContext,  useState, useEffect  } from "react";
import { ShopContext } from "./shop-context";
import { PRODUCTS } from "./products";
import { CartItem } from "./cart-item";
import './cart.css';

export const List = () => {
  const { cartItems, getTotalCartAmount, checkout, getData } = useContext(ShopContext);
  const totalAmount = Math.round(getTotalCartAmount()*100)/100  ;
  const [data, setData ] = useState(getData());

  
  
  useEffect(() => {
    // Fetch data from the context when the component mounts or when the data changes

    setData(getData());
  }, [getData]);
  return (
    <div className="cart">
      <div>
      {Object.keys(cartItems).map((key) => {
        const quantity = cartItems[key];
        const product = data.find((p) => p.Part_Name === key);

        if (quantity !== 0 && product) {
          return <CartItem data={product} />;
        }

        return null; // or an empty fragment <></> if you want to skip rendering
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