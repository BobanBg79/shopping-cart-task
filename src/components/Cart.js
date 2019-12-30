import React, { useContext } from 'react';
import {
  Grid,
  Typography,
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';
import CartContext from '../CartContext';

const useStyles = makeStyles(theme => ({
  productImage: {
    width: 100,
  },
}));

function Cart() {
  const { shoppingCart, removeFromCart } = useContext(CartContext);
  const classes = useStyles();

  return (
    <Grid container alignContent="center">
      {shoppingCart.length ? (
        <TableContainer component={Paper}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Product ID</TableCell>
                <TableCell>Product image</TableCell>
                <TableCell>Product name</TableCell>
                <TableCell>Product description</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {shoppingCart.map(({ id, name, image, description }) => (
                <TableRow key={id}>
                  <TableCell component="th" scope="row">
                    {id}
                  </TableCell>
                  <TableCell>
                    <img
                      className={classes.productImage}
                      src={image}
                      alt="product_image"
                    />
                  </TableCell>
                  <TableCell>{name}</TableCell>
                  <TableCell>{description}</TableCell>
                  <TableCell>
                    <Button size="small" onClick={removeFromCart(id)}>
                      <DeleteIcon />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      ) : (
        <Typography variant="h5" component="h2">
          Your shopping cart is empty
        </Typography>
      )}
    </Grid>
  );
}
export default Cart;
