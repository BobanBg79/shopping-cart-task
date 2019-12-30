import React from "react";
export default React.createContext({
  shoppingCart: [],
  addToCart: () => console.log('add to cart'),
  removeFromCart: () => console.log('remove to cart'),
});
