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
  InputBase,
  Divider,
  FormControl,
  TextField,
  MenuItem,
  OutlinedInput,
  InputAdornment,
} from "@material-ui/core";
import {
  AttachMoneyTwoTone,
  ShoppingCart,
  SearchOutlined,
  MonetizationOnOutlined,
} from "@material-ui/icons";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";

const products = [
  {
    id: 1,
    name: "Bambi Print Mini Backpack",
    img: "https://img.tinbanxe.vn/images/Lamborghini/Lamborghini%20Huracan%20Evo/ANHDAIDIEN-Lamborghini-Huracan_EVO-.png",
    price: "150",
  },
  {
    id: 2,
    name: "Bambi Print Mini Backpack",
    img: "https://img.tinbanxe.vn/images/Lamborghini/Lamborghini%20Huracan%20Evo/ANHDAIDIEN-Lamborghini-Huracan_EVO-.png",
    price: "150",
  },
  {
    id: 3,
    name: "Bambi Print Mini Backpack",
    img: "https://img.tinbanxe.vn/images/Lamborghini/Lamborghini%20Huracan%20Evo/ANHDAIDIEN-Lamborghini-Huracan_EVO-.png",
    price: "150",
  },
  {
    id: 4,
    name: "Bambi Print Mini Backpack",
    img: "https://img.tinbanxe.vn/images/Lamborghini/Lamborghini%20Huracan%20Evo/ANHDAIDIEN-Lamborghini-Huracan_EVO-.png",
    price: "150",
  },
  {
    id: 5,
    name: "Bambi Print Mini Backpack",
    img: "https://img.tinbanxe.vn/images/Lamborghini/Lamborghini%20Huracan%20Evo/ANHDAIDIEN-Lamborghini-Huracan_EVO-.png",
    price: "150",
  },
  {
    id: 6,
    name: "Bambi Print Mini Backpack",
    img: "https://img.tinbanxe.vn/images/Lamborghini/Lamborghini%20Huracan%20Evo/ANHDAIDIEN-Lamborghini-Huracan_EVO-.png",
    price: "150",
  },
  {
    id: 7,
    name: "Bambi Print Mini Backpack",
    img: "https://img.tinbanxe.vn/images/Lamborghini/Lamborghini%20Huracan%20Evo/ANHDAIDIEN-Lamborghini-Huracan_EVO-.png",
    price: "150",
  },
  {
    id: 8,
    name: "Bambi Print Mini Backpack",
    img: "https://img.tinbanxe.vn/images/Lamborghini/Lamborghini%20Huracan%20Evo/ANHDAIDIEN-Lamborghini-Huracan_EVO-.png",
    price: "150",
  },
];
const useStyles = makeStyles((theme) => ({
  root: {
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
    width: 300,
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
    color: "red",
    borderColor: "red",
  },
  inputt: {
    width: 200,
    color: "red",
    borderColor: "red",
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
  nav: {
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
    margin: "40px 0",
  },
  bb: {
    display: "flex",
    alignItems: "center",
  },
}));
const currencies = [
  {
    value: "Lamborghini",
  },
  {
    value: "Vinfast",
  },
  {
    value: "Merceder",
  },
  {
    value: "Toyota",
  },
  {
    value: "Audi",
  },
];
const prices = [
  {
    value: "tăng dần",
  },
  {
    value: "giảm dần",
  },
];

function Products() {
  const classes = useStyles();
  const [currency, setCurrency] = React.useState("");
  const handleChange1 = (event) => {
    setCurrency(event.target.value);
  };
  return (
    <Box>
      <Container className={classes.nav}>
        <Paper component="form" className={classes.root}>
          <InputBase className={classes.input} placeholder="Search..." />
          <Divider className={classes.divider} orientation="vertical" />
          <IconButton
            type="submit"
            className={classes.iconButton}
            aria-label="search"
          >
            <SearchOutlined />
          </IconButton>
        </Paper>
        <Box className={classes.bb}>
          <Typography variant="h4">Hãng Xe</Typography>
          <TextField
            select
            variant="outlined"
            label="Nhập hãng xe"
            onchange={handleChange1}
            className={classes.inputt}
          >
            {currencies.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.value}
              </MenuItem>
            ))}
          </TextField>
          <Typography variant="h4">Price</Typography>
          <TextField
            select
            variant="outlined"
            label="Nhập giá xe"
            onchange={handleChange1}
            className={classes.inputt}
          >
            {prices.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.value}
              </MenuItem>
            ))}
          </TextField>
        </Box>
      </Container>
      <Container>
        <Grid container spacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          {products.map((product, index) => {
            return (
              <Grid item xs={12} sm={6} md={3} key={index}>
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
                      </IconButton>
                      {product.price}
                    </Typography>
                    <Button
                      variant="contained"
                      color="primary"
                      size="medium"
                      fullWidth
                      startIcon={<ShoppingCart />}
                      href="/"
                      children="CHI TIẾT"
                    />
                  </CardContent>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Container>
      <nav
        aria-label="Page navigation"
        style={{ display: "flex", alignItems: "center" }}
      >
        <ul className="pagination justify-content-center">
          <li className="page-item">
            <a className="page-link" href="#" aria-label="Previous">
              <span aria-hidden="true">&laquo;</span>
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#" aria-label="Next">
              <span aria-hidden="true">&raquo;</span>
            </a>
          </li>
        </ul>
      </nav>
    </Box>
  );
}

export default Products;
