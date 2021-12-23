import {
  Box,
  Typography,
} from "@material-ui/core";
import React from "react";
import Products from "../../Products";

function ProductHome() {
  return (
    <Box mb={10}>
      <Box mb={5}>
        <Typography variant="h3" children="SẢN PHẨM MỚI" />
      </Box>
      <Products limit={6} showFilter={false} />
    </Box>
  );
}

export default ProductHome;
