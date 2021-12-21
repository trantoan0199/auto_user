// import React from "react";
// import {
//   Button,
//   Card,
//   Container,
//   Grid,
//   TextField,
//   Typography,
// } from "@material-ui/core";
// import Icon from "@material-ui/core/Icon";
// import { makeStyles } from "@material-ui/styles";

// const useStyles = makeStyles((theme) => ({
//   root: {
//     backgroundColor: "#d7a8a8",
//   },
//   container: {
//     display: "flex",
//     alignItems: "center",
//   },
//   input: {
//     width: 270,
//     marginTop: 10,
//   },
//   bg: {
//     display: "grid",
//     gridTemplateColumns: "auto auto",
//     justifyContent: "space-around",
//   },
//   button: {
//     margin: theme.spacing(1),
//     width: "90%",
//   },
// }));

// export default function Dathang() {
//   const classes = useStyles();
//   return (
//     <div>DDawjt hangf</div>
// <Container>
//   <Grid container spacing={3}>
//     <Grid item xs={12} sm={6} md={6}>
//       <Card>
//         <img
//           src="https://img.tinbanxe.vn/images/Lamborghini/Lamborghini%20Huracan%20Evo/ANHDAIDIEN-Lamborghini-Huracan_EVO-.png"
//           alt="autoshop"
//         />
//         <Typography
//           variant="h4"
//           children="Lamborghini"
//           color="textPrimary"
//         />
//         <Typography variant="h5" children="123456" color="textSecondary" />
//       </Card>
//     </Grid>
//     <Grid item xs={12} sm={6} md={6}>
//       <Card>
//         <form noValidate autoComplete="off" className={classes.bg}>
//           <TextField
//             className={classes.input}
//             label="Nhập họ và tên của Anh/Chị"
//             variant="outlined"
//           />
//           <TextField
//             className={classes.input}
//             select
//             label="Giới tính"
//             variant="outlined"
//           >
//             <option value="Nam">Nam</option>
//             <option value="Nữ">Nữ</option>
//           </TextField>
//           <TextField
//             className={classes.input}
//             id="date"
//             label="Ngày sinh"
//             type="date"
//             defaultValue="1999-01-20"
//           />
//           <TextField
//             label="CMDD/CCCD"
//             variant="outlined"
//             type="text"
//             className={classes.input}
//           />
//           <TextField
//             label="Số điện thoại"
//             variant="outlined"
//             className={classes.input}
//           />
//           <TextField
//             label="Mail"
//             variant="outlined"
//             type="text"
//             className={classes.input}
//           />
//           <TextField
//             label="Số nhà/Tên đường"
//             variant="outlined"
//             className={classes.input}
//           />
//           <TextField
//             label="Xã/Phường"
//             variant="outlined"
//             type="text"
//             className={classes.input}
//           />
//           <TextField
//             label="Quận/Huyện"
//             variant="outlined"
//             type="text"
//             className={classes.input}
//           />
//           <TextField
//             label="Tỉnh/Thành phố"
//             variant="outlined"
//             className={classes.input}
//           />
//           <TextField
//             className={classes.input}
//             id="datetime-local"
//             label="Ngày giờ nhận xe"
//             type="datetime-local"
//             defaultValue="2017-05-24T10:30"
//           />
//         </form>
//         <Button
//           type="submit"
//           variant="contained"
//           color="primary"
//           className={classes.button}
//           endIcon={<Icon>send</Icon>}
//         >
//           Send
//         </Button>
//       </Card>
//     </Grid>
//   </Grid>
// </Container>
//   );
// }

import {
  Container,
  Grid,
  Card,
  Typography,
  TextField,
  Button,
  Box
} from "@material-ui/core";
import Icon from "@material-ui/core/Icon";
import { makeStyles } from "@material-ui/styles";
import React from "react";

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

  const [state, setState] = React.useState({})

  const handleChange = (key, value) => {
    setState({...state, [key]: value })
  }

  const handleSubmit = () => {
    console.log(state);
  }

  return (
    <Container style={{ marginTop: 40 }}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={6}>
          <Card style={{ padding: 12 }}>
            <img
              src="https://img.tinbanxe.vn/images/Lamborghini/Lamborghini%20Huracan%20Evo/ANHDAIDIEN-Lamborghini-Huracan_EVO-.png"
              alt="autoshop"
            />
            <Typography
              variant="h4"
              children="Lamborghini"
              color="textPrimary"
            />
            <Typography variant="h5" children="123456" color="textSecondary" />
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          <Card style={{ padding: 12 }}>
            <form noValidate autoComplete="off" className={classes.bg}>
              <TextField
                className={classes.input}
                label="Nhập họ và tên của Anh/Chị"
                variant="outlined"
                onChange={({ target }) => handleChange('name', target.value )}
              />
              <TextField
                label="CMDD/CCCD"
                variant="outlined"
                type="text"
                className={classes.input}
                onChange={({ target }) => handleChange('cmdd', target.value )}
              />
              <TextField
                label="Số điện thoại"
                variant="outlined"
                className={classes.input}
                onChange={({ target }) => handleChange('phoneNumber', target.value )}
              />
              <TextField
                label="Mail"
                variant="outlined"
                type="text"
                className={classes.input}
                onChange={({ target }) => handleChange('email', target.value )}
              />
              <TextField
                label="Số nhà/Tên đường"
                variant="outlined"
                className={classes.input}
                onChange={({ target }) => handleChange('address', target.value )}
              />
              <TextField
                label="Xã/Phường"
                variant="outlined"
                type="text"
                className={classes.input}
                onChange={({ target }) => handleChange('address2', target.value )}
              />
              <TextField
                label="Quận/Huyện"
                variant="outlined"
                type="text"
                className={classes.input}
                onChange={({ target }) => handleChange('address3', target.value )}
              />
              <TextField
                label="Tỉnh/Thành phố"
                variant="outlined"
                className={classes.input}
                onChange={({ target }) => handleChange('address4', target.value )}
              />
              <TextField
                className={classes.input}
                id="datetime-local"
                variant="outlined"
                label="Ngày giờ nhận xe"
                type="datetime-local"
                defaultValue="2017-05-24T10:30"
                onChange={({ target }) => handleChange('date', target.value )}
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
