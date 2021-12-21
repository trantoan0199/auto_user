import React from "react";
import "./notfound.css";

function NotFound() {
  return (
    <div class="error">
      <div class="container">
        <div class="error-top">
          <h3>404</h3>
          <h4>PAGE NOT FOUND</h4>
          <h5>WE ARE SORRY</h5>
          <p>We seem to have lost this page, try one of these instead.</p>
          <div class="e-btn">
            <a href="/" class="error">
              Bak to home
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
