import React, { useContext } from 'react';
import { Link, withRouter } from 'react-router-dom';
import {
  Container,
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Badge,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import CartContext from '../CartContext';

const useStyles = makeStyles({
  navLinkWrapper: {
    flexGrow: 1,
    display: 'flex',
  },
  navLink: {
    color: '#ffffff',
    padding: 10,
  },
  homeLink: {
    textDecoration: location =>
      location.pathname === '/home' ? 'underline' : 'none',
  },
  cartLink: {
    textDecoration: location =>
      location.pathname === '/cart' ? 'underline' : 'none',
  },
});

function Header(props) {
  const { location } = props;
  const classes = useStyles(location);
  const { shoppingCart } = useContext(CartContext);

  return (
    <AppBar position="static">
      <Container maxWidth="lg">
        <Toolbar>
          <div className={classes.navLinkWrapper}>
            <Link
              to="/home"
              className={`${classes.navLink} ${classes.homeLink}`}
            >
              <Typography variant="h6" color="inherit">
                Home
              </Typography>
            </Link>
            <Link
              to="/cart"
              className={`${classes.navLink} ${classes.cartLink}`}
            >
              <Typography variant="h6" color="inherit">
                Cart
              </Typography>
            </Link>
          </div>
          <Link to="/cart" className={classes.navLink}>
            <IconButton aria-label="cart product count" color="inherit">
              {shoppingCart.length ? (
                <Badge badgeContent={shoppingCart.length} color="secondary">
                  <ShoppingCartIcon />
                </Badge>
              ) : (
                <ShoppingCartIcon />
              )}
            </IconButton>
          </Link>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default withRouter(Header);
