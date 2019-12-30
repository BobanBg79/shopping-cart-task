import React from "react";
export default React.createContext({
  cartProducts: [],
  addToCart: () => console.log('add to cart'),
  currentLocation: "",
  changeLocation: () => {}
});
