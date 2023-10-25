import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const ShopContext = createContext();

export const ShopContextProvider = (props) => {
  const [totalItems, setTotalItems] = useState(0);
  const [itemData, setItemData] = useState([]);
  const [cartItems, setCartItems] = useState({}); // Initialize cartItems as an empty object

  useEffect(() => {
    // Fetch and set itemData here
    const fetchItemData = async () => {
      try {
        const response = await axios.get("https://gearheadgarage.azurewebsites.net/Shop/searchWord");
        setItemData(response.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchItemData();
  }, []);

  useEffect(() => {
    // Define the getDefaultCart function
    const getDefaultCart = () => {
      let cart = {};

      itemData.forEach((data) => {
        cart[data.Part_Name] = 0;
      });

      return cart;
    };

    // Initialize cartItems based on itemData
    setCartItems(getDefaultCart());
  }, [itemData]);

  console.log(cartItems);

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = itemData.find((product) => product.Part_Name === item);
        totalAmount += cartItems[item] * itemInfo.R_Price;
      }
    }
    return totalAmount;
  };

  const getData = () => {
    return itemData;
  };

  const addToCart = (itemId) => {
    const itemIdString = String(itemId); // Convert to string

    setCartItems((prev) => ({
      ...prev,
      [itemIdString]: parseInt(prev[itemIdString], 10) + 1, // Parse as an integer
    }));

    setTotalItems(totalItems + 1);
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
    setTotalItems(totalItems - 1);
  };

  const updateCartItemCount = (newAmount, itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: newAmount }));
  };

  const checkout = () => {
    const updatedCart = {};
    for (const item in cartItems) {
      updatedCart[item] = 0;
    }
  
    setCartItems(updatedCart);
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
    getData,
  };

  const handleSubmit = async () => {
    try {
      const response = await fetch("https://gearheadgarage.azurewebsites.net/Shop/searchWord", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          searchWord: "",
        }),
      });
  
      if (response.ok) {
        // If the response status is in the range 200-299, it's a successful response.
        // You can perform further actions here.
        await fetchAllBooks(); // Call your fetchAllBooks function if needed.
      } else {
        // Handle the error here if it's not a successful response.
        console.log("Request failed with status code " + response.status);
      }
    } catch (error) {
      console.log("Error:", error);
    }
  };

  const fetchAllBooks = async () => {
    try {
      const response = await axios.get("https://gearheadgarage.azurewebsites.net/Shop/searchWord");
      setItemData(response.data);
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
