import { createContext, useEffect, useState } from "react";
// import { PRODUCTS } from "./products";
import axios from "axios";

export const ShopContext = createContext();


export const ShopContextProvider = (props) => {
  const [totalItems, setTotalItems] = useState(0);
  const [itemData, setItemData] = useState([]);
  const getDefaultCart = () => {
    let cart = {};
    console.log(itemData);
    
    itemData.map((data) => {
      cart[data.Part_Name] = 0;
    })
    console.log(cart);
    return cart;
  };
  const [cartItems, setCartItems] = useState(getDefaultCart());
  console.log(getDefaultCart());


  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      console.log(item);
      if (cartItems[item] > 0) {
        let itemInfo = itemData.find((product) => product.Part_Name === item);
        totalAmount += cartItems[item] * itemInfo.R_Price;
      }
    }
    return totalAmount;
  };
  const getData = () => {
    return itemData;
  }
  // const setData = (data) => {
  //   setItemData(data);
  // }
  const addToCart = (itemId) => {
    console.log("CART");
    console.log(itemId);
    
    setCartItems((prev) => ({
      ...prev,
      [itemId]: parseInt(prev[itemId], 10) + 1, // Parse as integer
    }));
    console.log(totalItems);
    setTotalItems(totalItems+1);
    console.log(cartItems);

  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
    setTotalItems(totalItems-1);
  };

  const updateCartItemCount = (newAmount, itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: newAmount }));
  };

  const checkout = () => {
    setCartItems(getDefaultCart());
    setTotalItems(0);
  };

  const contextValue = {
    cartItems,
    totalItems,
    addToCart,
    updateCartItemCount,
    removeFromCart,
    getTotalCartAmount,
    checkout,
    // setData,
    getData,
  };

  const handleSubmit = async () => {
    
    try{
    await fetch('http://localhost:3001/Shop/searchWord', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          searchWord: "",
        }),
      })
      // name = null;
    fetchAllBooks()}
      catch(error){
        console.log("ERRRORO");
      }
};

const fetchAllBooks = async () => {
  try {
    await axios.get("http://localhost:3001/Shop/searchWord").then(response => {
      // console.log(response.data);
      setItemData(response.data);
    })
  } catch (err) {
    console.log(err);
  }
};




// Set the initial value of searchInput
useEffect(() => {
  handleSubmit();
}, []);
  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};
