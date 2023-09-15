import React, { useContext,  useState, useEffect  } from "react";
import { ShopContext } from "./shop-context";
import { PRODUCTS } from "./products";
import { CartItem } from "./cart-item";
import './cart.css';

export const List = () => {
  const { cartItems, getTotalCartAmount, checkout, getData } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();
  const [data, setData ] = useState(getData());
  
  useEffect(() => {
    // Fetch data from the context when the component mounts or when the data changes
    setData(getData());
  }, [getData]);
  console.log(data);
  return (
    <div className="cart">
      <div>
      </div>
      <div className="cart">
        {data.map((product) => {
          if (cartItems[product.ID] !== 0) {
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
