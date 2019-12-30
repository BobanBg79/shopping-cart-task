import React from "react";
import {
  Card,
  CardActions,
  CardMedia,
  CardContent,
  Button,
  Typography
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  productImage: {
    height: 270
  }
}));

function ProductDisplay({ product }) {
  const classes = useStyles();
  const { name, image, description } = product;
  return (
    <Card>
      <CardMedia image={image} className={classes.productImage} />
      <CardContent>
        {/* <Typography color="textSecondary" gutterBottom>
          Product of the Day
        </Typography> */}

        <Typography variant="h5" component="h2">
          {name}
        </Typography>
        <Typography color="textSecondary">adjective</Typography>
        <Typography variant="body2" component="p">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}

export default ProductDisplay;
