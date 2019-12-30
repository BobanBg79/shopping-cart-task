import React from "react";
export default React.createContext({
  allProducts: [],
  shoppingCart: [],
  addToCart: () => console.log('add to cart'),
  removeFromCart: () => console.log('remove to cart'),
});
