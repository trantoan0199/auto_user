import { Container } from "@material-ui/core";
import React from "react";
import "./styles.css";

function Logo() {
  return (
    <Container style={{ margin: "65px 0" }}>
      <div className="pram">
        <h3>Nhãn hiệu của cửa hàng</h3>
        <p>Việt Nam - Phong Cách - An Toàn - Sáng Tạo - Tiên Phong</p>
      </div>
      <div className="swiper-wrapper">
        <div className="swiper-slide">
          <img
            src="https://oto101.net/wp-content/uploads/2021/01/Y-nghia-Vinfast-logo.jpg"
            alt="Vinfast"
          />
        </div>
        <div className="swiper-slide">
          <img
            src="https://www.automobili.ba/wp-content/uploads/2021/03/916644.jpg"
            alt="Audi"
          />
        </div>
        <div className="swiper-slide">
          <img
            src="https://img1.oto.com.vn/resize/400x9999/2020/01/30/1OANJGk2/logo-mercedes-5-dff9.jpg"
            alt="Mercedes"
          />
        </div>
        <div className="swiper-slide">
          <img
            src="https://anphucar.vn/wp-content/uploads/2020/07/Logo-Lamborghini-moi-nhat.jpg"
            alt="Lamborghini"
          />
        </div>
        <div className="swiper-slide">
          <img
            src="https://image.voso.vn/users/vosoimage/images/25d918a69db79b4524ab1fcba3ae98a7?t%5B0%5D=compress%3Alevel%3D100&accessToken=0ebd400844748df08a8d78e19427c8411b9ad2fd2fbef9ab80d0c1a3b01f7e9d"
            alt="Toyota"
          />
        </div>
      </div>
    </Container>
  );
}

export default Logo;
