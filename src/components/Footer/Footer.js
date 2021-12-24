import React from "react";

function Footer() {
  return (
    <div className="subscribe">
      <div className="footer-agileits-w3layouts" id="footer">
        <div className="container">
          <div className="col-md-4 footer-left-agile">
            <h1>
              <a href="/">Autoshop</a>
            </h1>
            <p>
              Để tạo ra những nét độc đáo mới cho những thế hệ xe của mình,
              Autoshop đã quyết định sử dụng phương châm mới là "The best or
              nothing - Tốt nhất hoặc không có gì"
            </p>
          </div>
          <div className="col-md-4 footer-middle-w3-agileits" style={{ textAlign: 'left', paddingLeft: 12 }}>
            <h3>Address</h3>
            <ul>
              <li>
                <span
                  className="glyphicon glyphicon-map-marker"
                  aria-hidden="true"
                ></span>
              </li>
              <li>362 Tôn Đức Thắng, Liên Chiểu, Đà Nẵng</li>
            </ul>
            <ul className="gap">
              <li>
                <span
                  className="glyphicon glyphicon-earphone"
                  aria-hidden="true"
                ></span>
              </li>
              <li>0967830046</li>
            </ul>
            <ul>
              <li>
                <span
                  className="glyphicon glyphicon-envelope"
                  aria-hidden="true"
                ></span>
              </li>
              <li>
                <a href="mailto:trantrungtoan9x@gmail.com">trantrungtoan9x@gmail.com</a>
              </li>
            </ul>
          </div>
          <div className="col-md-4 footer-right-w3layouts">
            <h3>Contact</h3>
            <form action="#" method="post">
              <input
                type="text"
                name="Name"
                value="Name"
                onfocus="this.value = '';"
                onblur="if (this.value == '') {this.value = 'Name';}"
                required=""
              />
              <input
                type="text"
                name="Email"
                value="Email"
                onfocus="this.value = '';"
                onblur="if (this.value == '') {this.value = 'Email';}"
                required=""
              />
              <input type="submit" value="Submit" />
            </form>
          </div>
          <div className="clearfix"></div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
