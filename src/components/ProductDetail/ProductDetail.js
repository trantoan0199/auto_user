import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Grid,
  Container,
  Button,
} from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import {
  NearMeTwoTone,
  MonetizationOnOutlined,
} from "@material-ui/icons";
import { useParams } from "react-router";
import axios from "axios";
import { URL_API } from "../../config";
import { useNavigate } from "react-router";
import Products from "../Products";

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
  ts: {
    display: "flex",
    textDecoration: "underline",
    margin: "15px 0",
  },
}));

export default function ProductDetail() {
  const classes = useStyles();

  const { id } = useParams();

  const [product, setProduct] = React.useState({});

  const fetchData = async () => {
    const { data } = await axios.get(`${URL_API}/products/${id}`);
    setProduct(data);
  };

  React.useEffect(() => {
    fetchData();
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }, [id]);

  const navigate = useNavigate();

  const Order = (id) => {
    navigate(`/order/${id}`);
  };
  return (
    <Container className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container md spacing={2}>
          <Grid item xs={12} sm={6} md={6}>
            <Typography
              variant="h2"
              style={{ fontWeight: 500, marginBottom: 20 }}
            >
              TH??NG S??? K?? THU???T
            </Typography>
            <Grid container sm>
              <Grid item xs={12} md={6}>
                <Typography variant="h6" className={classes.ts}>
                  H???p s???:
                </Typography>
                <Typography variant="body1" style={{ color: "#bab4b4" }}>
                  {product.hopSo}
                </Typography>
              </Grid>
              <Grid item xs={12} md={6}>
                <Typography variant="h6" className={classes.ts}>
                  C??ng su???t t???i ??a(Hp/rpm):
                </Typography>
                <Typography variant="body1" style={{ color: "#bab4b4" }}>
                  {product.congSuat}
                </Typography>
              </Grid>
              <Grid item xs={12} md={6}>
                <Typography variant="h6" className={classes.ts}>
                  M???c ti??u th??? nhi??n li???u(l??t/100km):
                </Typography>
                <Typography variant="body1" style={{ color: "#bab4b4" }}>
                  {product.nhienLieu}
                </Typography>
              </Grid>
              <Grid item xs={12} md={6}>
                <Typography variant="h6" className={classes.ts}>
                  S??? ch??? ng???i:
                </Typography>
                <Typography variant="body1" style={{ color: "#bab4b4" }}>
                  {product.soChoNgoi}
                </Typography>
              </Grid>
              <Grid item xs={12} md={6}>
                <Typography variant="h6" className={classes.ts}>
                  H??? th???ng gi???i tr??:
                </Typography>
                <Typography variant="body1" style={{ color: "#bab4b4" }}>
                  {product.giaiTri}
                </Typography>
              </Grid>
              <Grid item xs={12} md={6}>
                <Typography variant="h6" className={classes.ts}>
                  Lo???i ?????ng c??:
                </Typography>
                <Typography variant="body1" style={{ color: "#bab4b4" }}>
                  {product.loaiDongCo}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <img src={product.img} alt={product.name} maxWidth />
            <Typography
              variant="h4"
              children={product.name}
              style={{ color: "#efef47", margin: 10 }}
            />
            <Typography
              variant="body1"
              style={{ color: "#bab4b4", fontSize: 20 }}
            >
              Gi?? c???: {product.price}
              <MonetizationOnOutlined htmlColor="yellow" />
            </Typography>
            <Button
              className={classes.button}
              variant="contained"
              color="secondary"
              endIcon={<NearMeTwoTone />}
              size="large"
              onClick={() => Order(product.id)}
            >
              ?????t mua
            </Button>
          </Grid>
        </Grid>
        <div>
          <Typography
            variant="h4"
            children="S???n ph???m kh??c"
            className={classes.pro}
          />
          <Products limit={9} showFilter={false} />
        </div>
      </Paper>
    </Container>
  );
}
