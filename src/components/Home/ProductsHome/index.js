import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  IconButton,
  Typography,
} from "@material-ui/core";
import { AttachMoneyTwoTone, ShoppingCartOutlined } from "@material-ui/icons";
import React from "react";

const products = [
  {
    id: 1,
    name: "Bambi Print Mini Backpack",
    img: "https://img.tinbanxe.vn/images/Lamborghini/Lamborghini%20Huracan%20Evo/ANHDAIDIEN-Lamborghini-Huracan_EVO-.png",
    price: "150",
    priceDetail: "",
  },
  {
    id: 2,
    name: "Bambi Print Mini Backpack",
    img: "https://img.tinbanxe.vn/images/Lamborghini/Lamborghini%20Huracan%20Evo/ANHDAIDIEN-Lamborghini-Huracan_EVO-.png",
    price: "150",
    priceDetail: "160",
  },
  {
    id: 3,
    name: "Bambi Print Mini Backpack",
    img: "https://img.tinbanxe.vn/images/Lamborghini/Lamborghini%20Huracan%20Evo/ANHDAIDIEN-Lamborghini-Huracan_EVO-.png",
    price: "150",
    priceDetail: "160",
  },
  {
    id: 4,
    name: "Bambi Print Mini Backpack",
    img: "https://img.tinbanxe.vn/images/Lamborghini/Lamborghini%20Huracan%20Evo/ANHDAIDIEN-Lamborghini-Huracan_EVO-.png",
    price: "150",
    priceDetail: "160",
  },
  {
    id: 5,
    name: "Bambi Print Mini Backpack",
    img: "https://img.tinbanxe.vn/images/Lamborghini/Lamborghini%20Huracan%20Evo/ANHDAIDIEN-Lamborghini-Huracan_EVO-.png",
    price: "150",
    priceDetail: "160",
  },
  {
    id: 6,
    name: "Bambi Print Mini Backpack",
    img: "https://img.tinbanxe.vn/images/Lamborghini/Lamborghini%20Huracan%20Evo/ANHDAIDIEN-Lamborghini-Huracan_EVO-.png",
    price: "150",
    priceDetail: "160",
  },
];
function ProductHome() {
  return (
    <Box>
      <Container>
        <Typography
          variant="h2"
          children="Sản phẩm mới"
          style={{ fontWeight: 700 }}
        />
      </Container>
      <Container style={{ margin: "32px 0" }}>
        <Grid
          container
          rowSpacing={5}
          columnSpacing={{ xs: 5, sm: 2, md: 3 }}
          spacing={3}
        >
          {products.map((product, index) => {
            return (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card sx={{ maxWidth: 345 }}>
                  <CardMedia
                    component="img"
                    height="250"
                    image={product.img}
                    alt={product.name}
                  />
                  <CardContent>
                    <Typography
                      variant="h4"
                      component="h4"
                      color="red"
                      children={product.name}
                      align="left"
                    />
                    <Typography variant="body1" color="text.secondary">
                      <IconButton>
                        <AttachMoneyTwoTone />
                        {product.price}
                      </IconButton>
                    </Typography>
                    <Button
                      variant="contained"
                      color="primary"
                      size="medium"
                      fullWidth
                      startIcon={<ShoppingCartOutlined />}
                      href="/"
                      children="ADD CART"
                    />
                  </CardContent>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </Box>
  );
}

export default ProductHome;
