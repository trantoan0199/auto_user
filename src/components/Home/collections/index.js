import React from "react";
import "./collection.css";

const products = [
  {
    img: "https://vinfastdanang.com.vn/wp-content/uploads/2020/06/LUX-A-M2-Silver-min.png",
    title: "VINFAST",
  },
  {
    img: "https://sinhvienlaixeantoan.com/wp-content/uploads/2020/04/lamborghini-2.png",
    title: "LAMBORGHINI",
  },
  {
    img: "https://toyotatayninhvn.com/wp-content/uploads/2019/02/toyota-wigo-2020-t%C3%A2y-ninh.png",
    title: "TOYOTA",
  },
  {
    img: "https://img.tinxe.vn/2020/11/16/8EVDUW1z/mercedes-benz-glc-300-hyacinth-red-4c60-0acd.jpg",
    title: "MERCEDER",
  },
  {
    img: "https://i.xeoto.com.vn/auto/audi/a8/audi-a8-2020-49853.png",
    title: "AUDI",
  },
  {
    img: "https://giaxetot.vn/uploads/toyota-vios-2021.png",
    title: "TOYOTA",
  },
];

const showData = (products) => {
  var result = null;
  result = products.map((product, index) => {
    return (
      <div className="promotion-item" key={index}>
        <img src={product.img} alt="" />
        <div className="promotion-content">
          <h3>{product.title}</h3>
          <a href="/">SHOP NOW</a>
        </div>
      </div>
    );
  });

  return result;
};

const Collections = () => {
  return (
    <section className="section promotion">
      <div className="title">
        <h2>Bộ sưu tập</h2>
        <span>Chọn từ sản phẩm cao cấp và tiết kiệm nhiều tiền</span>
      </div>

      <div className="promotion-layout" style={{ padding: 20 }}>{showData(products)}</div>
    </section>
  );
};

export default Collections;
