import Home from "./components/Home/Home";
import Products from "./components/Products";
import Blog from "./components/Blog";
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
    path: "/blog",
    exact: false,
    element: <Blog />,
  },
  {
    path: "/contact",
    exact: false,
    element: <Contact />,
  },
  {
    path: "/blog",
    exact: false,
    element: <Blog />,
  },
  {
    path: "/productdetail",
    exact: false,
    element: <ProductDetail />,
  },
  {
    path: "/dathang",
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
