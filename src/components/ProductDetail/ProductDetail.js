import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Grid,
  Container,
  Button,
  Card,
  CardMedia,
  CardContent,
  IconButton,
  FormControlLabel,
  Switch,
  Collapse,
} from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import ButtonBase from "@material-ui/core/ButtonBase";
import {
  AttachMoneyTwoTone,
  CancelOutlined,
  NearMeTwoTone,
  ShoppingCartOutlined,
} from "@material-ui/icons";
import { useParams } from "react-router";
import axios from "axios";
import { URL_API } from "../../config";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(5),
    margin: "auto",
    maxWidth: "85%",
    marginTop: 15,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  img: {
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%",
  },
  button: {
    margin: 10,
  },
  tb: {
    border: "1px solid #3f50b5",
  },
  title: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    backgroundColor: "#3f50b5",
    fontSize: 20,
    padding: 5,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  pro: {
    fontWeight: 700,
    fontSize: 25,
    color: "red",
    margin: "55px auto 10px",
    borderBottom: "1px solid red",
  },
}));

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

export default function ProductDetail() {
  const classes = useStyles();
  const [checked, setChecked] = React.useState(false);

  const { id } = useParams()

  const [product, setProduct] = React.useState({})

  const fetchData = async () => {
    const { data } =  await axios.get(`${URL_API}/productList/${id}`)
    setProduct(data)
  }

  React.useEffect(() => {
    fetchData()
  }, [id])

  const handleChange = () => {
    setChecked((prev) => !prev);
  };

  return (
    <Container className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container spacing={5} style={{ marginBottom: 25 }}>
          <Grid item style={{ border: "1px solid #f3e5e554" }}>
            <ButtonBase className={classes.image}>
              <img
                className={classes.img}
                alt="complex"
                src="https://vinfastdanang.net/wp-content/uploads/2020/08/vf-3.png"
              />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container spacing={2}>
            <Grid item xs container spacing={2}>
              <Grid item>
                <Typography
                  gutterBottom
                  variant="h2"
                  style={{ cursor: "pointer", fontWeight: 700 }}
                >
                  Standard license
                </Typography>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  style={{ fontSize: 20 }}
                >
                  {product.price}
                </Typography>
              </Grid>
              <Grid
                item
                md={12}
                style={{ display: "flex", alignItems: "flex-start" }}
              >
                <Button
                  className={classes.button}
                  variant="contained"
                  color="secondary"
                  startIcon={<CancelOutlined />}
                  size="large"
                >
                  Trở lại
                </Button>
                <Button
                  className={classes.button}
                  variant="contained"
                  color="primary"
                  endIcon={<NearMeTwoTone />}
                  size="large"
                >
                  Đặt mua
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <div className="form-group">
          <label className={classes.title}>Chi tiết sản phẩm</label>
          <FormControlLabel
            control={<Switch checked={checked} onChange={handleChange} />}
            label="Show"
          />
          <div className={classes.tb}>
            <Collapse in={checked} collapsedSize={105}>
              <table className="table table-striped">
                <tbody>
                  <tr>
                    <td scope="row">1</td>
                    <td>lamborghini</td>
                  </tr>
                  <tr>
                    <td scope="row">1</td>
                    <td>lamborghini</td>
                  </tr>
                  <tr>
                    <td scope="row">1</td>
                    <td>lamborghini</td>
                  </tr>
                  <tr>
                    <td scope="row">1</td>
                    <td>lamborghini</td>
                  </tr>
                </tbody>
              </table>
            </Collapse>
          </div>
        </div>
        <div>
          <Typography
            variant="h4"
            children="Sản phẩm khác"
            className={classes.pro}
          />
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
        </div>
      </Paper>
    </Container>
  );
}
