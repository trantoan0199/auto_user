import React from "react";
import { Link } from "react-router-dom";

const icons = [
  {
    class: "fa fa-linkedin",
  },
  {
    class: "fa fa-google-plus",
  },
  {
    class: "fa fa-twitter",
  },
  {
    class: "fa fa-facebook",
  },
];

const menus = [
  {
    name: "Home",
    to: "/",
    exact: true,
    dataHover: "Home",
  },
  {
    name: "Products",
    to: "/products",
    exact: false,
    dataHover: "Products",
  },
  {
    name: "News",
    to: "/news",
    exact: false,
    dataHover: "News",
  },
  {
    name: "Contact",
    to: "/contact",
    exact: false,
    dataHover: "Contact",
  },
];

const showMenus = (menus) => {
  var result = null;
  if (menus.length > 0) {
    result = menus.map((menu, index) => {
      return (
        <li key={index}>
          <Link to={menu.to} exact={menu.exact} data-hover={menu.dataHover}>
            {menu.name}
          </Link>
        </li>
      );
    });
  }
  return result;
};

function Header() {
  return (
    <div className="header-w3">
      <div className="header-top-agile">
        <div className="container">
          <div className="col-md-3 logo-agileinfo">
            <h1>
              <a href="/">Autoshop</a>
            </h1>
          </div>
          <div className="col-md-9 social-icons-agileits">
            <ul>
              {icons.map((icon, index) => {
                return (
                  <li key={index}>
                    <a href="/">
                      <i className={icon.class}></i>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="clearfix"></div>
        </div>
      </div>
      <div className="header-bottom-agile">
        <div className="container">
          <div className="col-md-9 navigation">
            <nav
              className="navbar navbar-default cl-effect-16"
              id="cl-effect-16"
            >
              <button
                type="button"
                className="navbar-toggle collapsed"
                data-toggle="collapse"
                data-target="#navbar"
                aria-expanded="false"
              >
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <div
                id="navbar"
                className="navbar-collapse navbar-right collapse hover-effect"
              >
                <ul className="nav navbar-nav">
                  {showMenus(menus)}
                </ul>
              </div>
            </nav>
          </div>
          <div class="col-md-3 search">
            <div id="sb-search" class="sb-search sb-search-open">
              <form action="#" method="post">
                <input
                  class="sb-search-input"
                  name="search"
                  placeholder="Enter your search term..."
                  id="search"
                  required=""
                />
                <input class="sb-search-submit" type="submit" value="" />
                <span class="sb-icon-search"></span>
              </form>
              <div class="clearfix"> </div>
            </div>
          </div>
          <div class="clearfix"></div>
        </div>
      </div>
    </div>
  );
}

export default Header;
