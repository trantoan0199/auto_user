import Home from "./components/Home/Home";
import Products from "./components/Products";
import News from "./components/News";
import Contact from "./components/Contact";
import NotFound from "./components/NotFound";
import ProductDetail from "./components/ProductDetail/ProductDetail";
import Dathang from "./components/dathang";

const routes = [
  {
    path: "/",
    exact: true,
    element: <Home />,
  },
  {
    path: "/products",
    exact: false,
    element: <Products />,
  },
  {
    path: "/news",
    exact: false,
    element: <News />,
  },
  {
    path: "/contact",
    exact: false,
    element: <Contact />,
  },
  {
    path: "/products/:id",
    exact: false,
    element: <ProductDetail />,
  },
  {
    path: "/order/:id",
    exact: false,
    element: <Dathang />,
  },
  {
    path: "/notFound",
    exact: false,
    element: <NotFound />,
  },
];

export default routes;
