import React, {useContext} from "react";
import {
  Card,
  CardActions,
  CardMedia,
  CardContent,
  Button,
  Typography
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import CartContext from '../CartContext';

const useStyles = makeStyles(theme => ({
  productImage: {
    height: 270
  }
}));

function ProductDisplay({ product }) {
  const classes = useStyles();
  const { id, name, image, description } = product;
   const { addToCart, removeFromCart, shoppingCart } = useContext(CartContext)
  return (
    <Card>
      <CardMedia image={image} className={classes.productImage} />
      <CardContent>
        <Typography variant="h5" component="h2">
          {name}
        </Typography>
        <Typography color="textSecondary">Product description</Typography>
        <Typography variant="body2" component="p">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={addToCart(id)} disabled={shoppingCart.includes(id)}>Add to cart</Button>
        <Button size="small" onClick={removeFromCart(id)} disabled={!shoppingCart.includes(id)}>Remove from cart</Button>
      </CardActions>
    </Card>
  );
}

export default ProductDisplay;
