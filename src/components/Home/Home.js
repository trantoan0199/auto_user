import React from "react";
import Banner from "./banner";
import Banner2 from "./banner2";
import Collections from "./collections/index";
import Logo from "./logo";
import ProductHome from "./ProductsHome";
import ServicesWthree from "./servicesWthree/ServicesWthree";

function Home() {
  return (
    <div>
      <Banner />
      <Collections />
      <Banner2 />
      <ProductHome />
      <ServicesWthree />
      <Logo />
    </div>
  );
}

export default Home;
