import React from "react";
import {
  Box,
  TextField,
  InputAdornment,
  Select,
  MenuItem,
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
      <Box>
        {/* <Select
          variant="outlined"
          margin="dense"
          style={{ marginRight: 12, width: 100 }}
          value={sortPrice}
          onChange={handleChange}
        >
          {prices.map((item) => (
            <MenuItem value={item.value}>{item.value}</MenuItem>
          ))}
        </Select>
        <Select
          variant="outlined"
          margin="dense"
          value={type}
          onChange={handleChange}
        >
          {currencies.map((item) => (
            <MenuItem value={item.value}>{item.value}</MenuItem>
          ))}
        </Select> */}
        <FormControl>
          <InputLabel htmlFor="demo-customized-select-native">Age</InputLabel>
          <NativeSelect
            id="demo-customized-select-native"
            value={age}
            label="Age"
            onChange={handleChange}
            input={<BootstrapInput />}
          >
            <option aria-label="None" value="" />
            <option value={10}>Ten</option>
            <option value={20}>Twenty</option>
            <option value={30}>Thirty</option>
          </NativeSelect>
        </FormControl>
        <FormControl>
          <InputLabel htmlFor="demo-customized-select-native">Age</InputLabel>
          <NativeSelect
            id="demo-customized-select-native"
            value={age}
            label="Age"
            onChange={handleChange}
            input={<BootstrapInput />}
          >
            <option aria-label="None" value="" />
            <option value={10}>Ten</option>
            <option value={20}>Twenty</option>
            <option value={30}>Thirty</option>
          </NativeSelect>
        </FormControl>
      </Box>
    </Box>
  );
}
