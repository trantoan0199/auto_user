import React from "react";

function Banner() {
  return (
    <div className="banner-w3l" style={{ position: "relative" }}>
      <label className="line"></label>
      <div style={{ position: 'absolute', bottom: 40, left: 0, right: 0 }}>
        <h2>ĐẲNG CẤP THƯƠNG GIA TIỆN NGHI HẠNG NHẤT</h2>
      </div>
      <div className="arrow">
        <a href="#footer" className="scroll">
          <i className="fa fa-arrow-down" aria-hidden="true"></i>
        </a>
      </div>
    </div>
  );
}

export default Banner;
