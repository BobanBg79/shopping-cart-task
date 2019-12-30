import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import Home from './Home';
import Cart from './Cart';
import Header from './Header';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import { getAllProducts } from '../utils';
import CartContext from '../CartContext';

const useStyles = makeStyles(theme => ({
  root: {
    minHeight: '100vh',
  },
}));

function App() {
  const [allProducts, setAllProducts] = useState(null);
  const [shoppingCart, setShoppingCart] = useState([]);
  const classes = useStyles();

  useEffect(() => {
    getAllProducts().then(res => {
      setAllProducts(res.data.products);
    });
  }, []);

  const addToCart = productId => () => {
    if (shoppingCart.findIndex(product => product.id === productId) === -1) {
      const product = allProducts.find(product => product.id === productId);
      setShoppingCart([...shoppingCart, product]);
    }
  };

  const removeFromCart = productId => () => {
    const newShoppingCart = shoppingCart.filter(
      product => product.id !== productId
    );
    setShoppingCart(newShoppingCart);
  };

  return (
    <CartContext.Provider value={{ shoppingCart, addToCart, removeFromCart }}>
      <Container maxWidth="lg" className={classes.root}>
        <Router>
          <Header />
          <Switch>
            <Route path="/home">
              {routeProps => <Home {...routeProps} allProducts={allProducts} />}
            </Route>
            <Route path="/cart">{routeProps => <Cart {...routeProps} />}</Route>
            <Redirect to="/home" />
          </Switch>
        </Router>
      </Container>
    </CartContext.Provider>
  );
}

export default App;
