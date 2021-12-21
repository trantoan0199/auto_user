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
import Products from "../../Products";

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
      <Products limit={10} showFilter={false} />
    </Box>
  );
}

export default ProductHome;
