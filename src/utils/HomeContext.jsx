import React, { useEffect, useState } from "react";
import { createContext } from "react";
// import all_Products from "../assets/allProducts";

export const HContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};
  for (let index = 0; index < 300+1; index++) {
    cart[index] = 0;
  }
  return cart;
};

const HomeContext = (props) => {
  const [all_Products ,setall_products] = useState([]);
  const [cartItem, setCartItem] = useState(getDefaultCart);

  useEffect(() => {
    fetch("https://silvanestbackend-2mrtrrexv-murtazakhannns-projects.vercel.app/allproducts")
     .then((res) => res.json())
     .then((data) => {
        setall_products(data.products);
      })
     .catch((err) => {
        console.log(err);
      });

      if(localStorage.getItem("auth-token")){
        fetch("https://silvanestbackend-2mrtrrexv-murtazakhannns-projects.vercel.app/getcart" , {
          method: 'POST',
          headers: {
            Accept:'application/json' ,
            'auth-token': `${localStorage.getItem('auth-token')}` ,
            'Content-Type': 'application/json'
          },
          body: ""
        }).then((res)=>res.json())
        .then((data) => setCartItem(data))
      }
  } , [])

  const addToCart = (itemId) => {
    setCartItem((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    if(localStorage.getItem('auth-token')){
      fetch('https://silvanestbackend-2mrtrrexv-murtazakhannns-projects.vercel.app/addtocart' , {
        method: 'POST',
        headers: {
          Accept:'application/json' ,
          'auth-token': `${localStorage.getItem('auth-token')}` ,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          "itemId": itemId
        })
      }).then((resp) => resp.json()).then((data) => {
        console.log(data);
      })
    }
  };

  const removeFromCart = (itemId) => {
    setCartItem((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
    if(localStorage.getItem("auth-token")){
      fetch('https://silvanestbackend-2mrtrrexv-murtazakhannns-projects.vercel.app/removefromcart' , {
        method: 'POST',
        headers: {
          Accept:'application/json' ,
          'auth-token': `${localStorage.getItem('auth-token')}` ,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          "itemId": itemId
        })
      }).then((resp) => resp.json()).then((data) => {
        console.log(data);
      })
    }
  };

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItem) {
      if (cartItem[item] > 0) {
        let itemInfo = all_Products.find(
          (product) => product.id === Number(item),
        );
        totalAmount += itemInfo.new_price * cartItem[item];
      }
    }
    return totalAmount;

    // return totalAmount;
  };

  const getTotalCartItems = () => {
    let totalItems = 0;
    for (const item in cartItem) {
      if (cartItem[item] > 0) {
        totalItems += cartItem[item];
      }
    }
    return totalItems;
  };

  console.log(cartItem);

  const contextValue = {
    getTotalCartItems,
    getTotalCartAmount,
    all_Products,
    cartItem,
    addToCart,
    removeFromCart,
  };

  return (
    <HContext.Provider value={contextValue}>{props.children}</HContext.Provider>
  );
};

export default HomeContext;
