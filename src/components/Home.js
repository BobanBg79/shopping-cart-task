import React, { Fragment, useContext } from "react";
import ProductDisplay from "./ProductDisplay";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, CircularProgress } from "@material-ui/core";
import CartContext from '../CartContext';

const useStyles = makeStyles(theme => ({
  gridItem: {
    padding: 8
  }
}));

function Home({ allProducts, ...rest }) {
  const classes = useStyles();
  const cartContext = useContext(CartContext)
  console.log('cartContext na nivou Home-a: ', cartContext);
  return (
    <Fragment>
      <Grid container alignContent="center">
        {allProducts ? (
          <Fragment>
            {allProducts.map(product => (
              <Grid
                key={product.id}
                item
                xs={6}
                md={3}
                className={classes.gridItem}
              >
                <ProductDisplay product={product} />
              </Grid>
            ))}
          </Fragment>
        ) : (
          <CircularProgress />
        )}
      </Grid>
    </Fragment>
  );
}
export default Home;
