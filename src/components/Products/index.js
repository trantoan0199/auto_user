import { Box, Container, Grid } from "@material-ui/core";

import React from "react";
import axios from "axios";
import { URL_API } from "../../config";
import ProductItem from "./ProductItem";
import Filter from "./Filter";

function Products({ showFilter = true, limit = 100 }) {
  const [data, setData] = React.useState([]);

  const fetchData = async () => {
    const { data } = await axios.get(
      `${URL_API}/products?page=1&limit=${limit}`
    );
    setData(data.data);
  };

  React.useEffect(() => {
    fetchData();
  }, []);

  return (
    <Box>
      <Container>
        {showFilter && <Filter />}
        <Grid container spacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          {data.map((product, index) => {
            return (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <ProductItem product={product} />
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </Box>
  );
}

export default Products;
