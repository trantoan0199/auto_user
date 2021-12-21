import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header";
import routes from "./routes";

const showContentMenus = (routes) => {
  var result = null;
  if (routes.length > 0) {
    result = routes.map((route, index) => {
      return (
        <Route
          key={index}
          path={route.path}
          exact={route.exact}
          element={route.element}
        />
      );
    });
  }
  return <Routes>{result}</Routes>;
};

function App() {
  return (
    <Router>
      <Header />
      <div className="page-container">{showContentMenus(routes)}</div>
      <Footer />
    </Router>
  );
}

export default App;
