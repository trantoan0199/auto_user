import React from "react";
import {
  Box,
  TextField,
  InputAdornment,
  Select,
  MenuItem,
  Typography,
  Button,
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import { withStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import NativeSelect from "@material-ui/core/NativeSelect";
import InputBase from "@material-ui/core/InputBase";
import FormControl from "@material-ui/core/FormControl";
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
    value: "asc",
    name: "tăng dần",
  },
  {
    value: "desc",
    name: "giảm dần",
  },
];

const BootstrapInput = withStyles((theme) => ({
  root: {
    "label + &": {
      marginTop: theme.spacing(1),
    },
  },
  input: {
    borderRadius: 4,
    position: "relative",
    backgroundColor: theme.palette.background.paper,
    border: "1px solid #ced4da",
    fontSize: 16,
    padding: "10px 26px 10px 12px",
    transition: theme.transitions.create(["border-color", "box-shadow"]),
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    "&:focus": {
      borderRadius: 4,
      borderColor: "#80bdff",
      boxShadow: "0 0 0 0.2rem rgba(0,123,255,.25)",
    },
  },
}))(InputBase);

export default function Filter() {
  const [sortPrice, setSortPrice] = React.useState("desc");
  const [type, setType] = React.useState("Toyota");

  const [age, setAge] = React.useState("");
  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <Box display="flex" justifyContent="space-between" mb={2}>
      <TextField
        size="small"
        variant="outlined"
        label="Search"
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />
      <Box style={{ display: "flex" }}>
        <Typography color="primary" style={{ fontSize: 15, margin: "0 10px" }}>
          Hãng xe
        </Typography>
        <FormControl>
          <InputLabel htmlFor="demo-customized-select-native">
            Hãng xe
          </InputLabel>
          <NativeSelect
            id="demo-customized-select-native"
            value={age}
            label="Age"
            onChange={handleChange}
            style={{ height: 20 }}
            input={<BootstrapInput />}
          >
            <option aria-label="None" value="" />
            <option value={10}>Vinfast</option>
            <option value={20}>Audi</option>
            <option value={30}>Mercedes</option>
            <option value={30}>Toyota</option>
            <option value={30}>Lamborghini</option>
          </NativeSelect>
        </FormControl>
        <Typography color="primary" style={{ fontSize: 15, margin: "0 10px" }}>
          Giá xe
        </Typography>
        <FormControl>
          <InputLabel htmlFor="demo-customized-select-native">
            Giá xe
          </InputLabel>
          <NativeSelect
            id="demo-customized-select-native"
            value={age}
            label="Age"
            onChange={handleChange}
            style={{ height: 20 }}
            input={<BootstrapInput />}
          >
            <option aria-label="None" value="" />
            <option value={10}>Tăng dần</option>
            <option value={20}>Giảm dần</option>
          </NativeSelect>
        </FormControl>
        <Button
          variant="outlined"
          color="secondary"
          style={{ borderRadius: "30%", height: 30, marginLeft: 10 }}
        >
          Áp Dụng
        </Button>
      </Box>
    </Box>
  );
}