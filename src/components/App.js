import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import Home from "./Home";
import Cart from "./Cart";
import Header from "./Header";
import Container from "@material-ui/core/Container";
import { getAllProducts } from "../utils";
import CartContext from '../CartContext';

function App() {
  const [allProducts, setAllProducts] = useState(null);
  const [cartProducts, setCartProducts] = useState(null);
  const [currentLocation, setCurrentLocation] = useState(null);

  useEffect(() => {
    getAllProducts().then(res => {
      setAllProducts(res.data.products);
    });
  }, []);

  const addToCart = () => {
    console.log('add to cart this: ', this)
  }

  return (
    // <CartContext.Provider value={{cartProducts, currentLocation}}>
      <Container maxWidth="lg">
        <Router>
          <Header/>
          <Switch>
            <Route path="/home">
              {routeProps => <Home {...routeProps} allProducts={allProducts} />}
            </Route>
            <Route path="/cart">{routeProps => <Cart {...routeProps} />}</Route>
            <Redirect to="/home" />
          </Switch>
        </Router>
      </Container>
    // </CartContext.Provider>
  );
}

export default App;
