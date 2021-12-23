import {
  Container,
  Grid,
  Card,
  Typography,
  TextField,
  Button,
  Box,
} from "@material-ui/core";
import Icon from "@material-ui/core/Icon";
import { MonetizationOnOutlined } from "@material-ui/icons";
import { makeStyles } from "@material-ui/styles";
import axios from "axios";
import React from "react";
import { useParams } from "react-router-dom";
import { URL_API } from "../config";

const useStyles = makeStyles((theme) => ({
  input: {
    width: 250,
    marginTop: 10,
  },
  bg: {
    display: "grid",
    gridTemplateColumns: "auto auto",
    justifyContent: "space-around",
  },
  button: {
    width: "50%",
    margin: "5px auto",
  },
}));

function Dathang() {
  const classes = useStyles();

  const { id } = useParams();

  const [product, setProduct] = React.useState({});

  const fetchData = async () => {
    const { data } = await axios.get(`${URL_API}/products/${id}`);
    setProduct(data);
  };

  React.useEffect(() => {
    fetchData();
  }, [id]);

  const [state, setState] = React.useState({});

  const handleChange = (key, value) => {
    setState({ ...state, [key]: value });
  };

  const handleSubmit = () => {
    console.log(state);
  };

  return (
    <Container style={{ marginTop: 40 }}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={6}>
          <Card style={{ padding: 12 }}>
            <img src={product.img} alt={product.name} />
            <Typography
              variant="h3"
              children={product.name}
              color="textPrimary"
              style={{margin: 10, color: "yellow"}}
            />
            <Typography variant="h5" color="textSecondary">{product.price}<MonetizationOnOutlined htmlColor="yellow" /></Typography>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          <Card style={{ padding: 12 }}>
            <form noValidate autoComplete="off" className={classes.bg}>
              <TextField
                className={classes.input}
                label="Nhập họ và tên của Anh/Chị"
                variant="outlined"
                onChange={({ target }) => handleChange("name", target.value)}
              />
              <TextField
                label="CMDD/CCCD"
                variant="outlined"
                type="text"
                className={classes.input}
                onChange={({ target }) => handleChange("cmdd", target.value)}
              />
              <TextField
                label="Số điện thoại"
                variant="outlined"
                className={classes.input}
                onChange={({ target }) =>
                  handleChange("phoneNumber", target.value)
                }
              />
              <TextField
                label="Mail"
                variant="outlined"
                type="text"
                className={classes.input}
                onChange={({ target }) => handleChange("email", target.value)}
              />
              <TextField
                label="Số nhà/Tên đường"
                variant="outlined"
                className={classes.input}
                onChange={({ target }) => handleChange("address", target.value)}
              />
              <TextField
                label="Xã/Phường"
                variant="outlined"
                type="text"
                className={classes.input}
                onChange={({ target }) =>
                  handleChange("address2", target.value)
                }
              />
              <TextField
                label="Quận/Huyện"
                variant="outlined"
                type="text"
                className={classes.input}
                onChange={({ target }) =>
                  handleChange("address3", target.value)
                }
              />
              <TextField
                label="Tỉnh/Thành phố"
                variant="outlined"
                className={classes.input}
                onChange={({ target }) =>
                  handleChange("address4", target.value)
                }
              />
              <TextField
                className={classes.input}
                id="datetime-local"
                variant="outlined"
                label="Ngày giờ nhận xe"
                type="datetime-local"
                defaultValue="2017-05-24T10:30"
                onChange={({ target }) => handleChange("date", target.value)}
              />
            </form>
            <Box display="flex" justifyContent="center" mt={3}>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                className={classes.button}
                endIcon={<Icon>send</Icon>}
                onClick={handleSubmit}
              >
                Send
              </Button>
            </Box>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Dathang;
