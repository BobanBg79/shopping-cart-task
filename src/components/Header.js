import React, {useContext} from "react";
import { Link, withRouter } from "react-router-dom";
import {
  Container,
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Badge
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

const useStyles = makeStyles({
  navLinkWrapper: {
    flexGrow: 1,
    display: "flex"
  },
  navLink: {
    color: "#ffffff",
    padding: 10,
  },
  homeLink: {
      textDecoration: location => location.pathname === '/home' ? 'underline' : 'none' 
  },
   cartLink: {
      textDecoration: location => location.pathname === '/cart' ? 'underline' : 'none' 
  }
  
});

function Header(props) {
const {location} = props;
  const classes = useStyles(location);
  return (
    <AppBar position="static">
      <Container maxWidth="lg">
        <Toolbar>
          <div className={classes.navLinkWrapper}>
            <Link to="/home" className={`${classes.navLink} ${classes.homeLink}`}>
              <Typography variant="h6" color="inherit">
                Home
              </Typography>
            </Link>
            <Link to="/cart" className={`${classes.navLink} ${classes.cartLink}`}>
              <Typography variant="h6" color="inherit">
                Cart
              </Typography>
            </Link>
          </div>
          <Link to="/cart" className={classes.navLink}>
            <IconButton aria-label="show 4 new mails" color="inherit">
              <Badge badgeContent={4} color="secondary">
                <ShoppingCartIcon />
              </Badge>
            </IconButton>
          </Link>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default withRouter(Header);
