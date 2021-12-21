import React from 'react'
import { Box, TextField, InputAdornment, Select, MenuItem } from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search';

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

export default function Filter() {
  const [sortPrice, setSortPrice] = React.useState('desc')
  const [type, setType] = React.useState('Toyota')
  return (
    <Box display="flex" justifyContent="space-between" mb={2}>
      <TextField size="small" variant="outlined" label="Search" InputProps={{
        endAdornment: <InputAdornment position="end">
          <SearchIcon />
        </InputAdornment>
      }} />
      <Box>
        <Select variant="outlined" margin="dense" style={{ marginRight: 12, width: 100 }} value={sortPrice}>
          {prices.map((item) => <MenuItem value={item.value}>{item.name}</MenuItem>)}
        </Select>
        <Select variant="outlined" margin="dense" value={type}>
          {currencies.map((item) => <MenuItem value={item.value}>{item.value}</MenuItem>)}
        </Select>
      </Box>
    </Box>
  )
}
