import React, { Fragment } from 'react';
import ProductDisplay from './ProductDisplay';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, CircularProgress } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  gridContainer: {
    minHeight: 'calc(100vh - 68px)',
    display: 'flex',
  },
  gridItem: {
    padding: 8,
  },
  spinner: {
    position: 'absolute',
    left: 'calc(50% - 20px)',
  },
}));

function Home({ allProducts }) {
  const classes = useStyles();

  return (
    <Grid container className={classes.gridContainer} alignItems="center">
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
        <CircularProgress className={classes.spinner} />
      )}
    </Grid>
  );
}
export default Home;
