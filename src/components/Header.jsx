import React from "react";
import { Link } from "react-router-dom";
import "../Header.css";
const Header = () => {
  return (
    <header className="header mb-4 py-1">
      <nav class="navbar bg-dark navbar-expand-lg fixed-top">
        <div class="container-fluid d-flex justify-content-start">
          <a class="navbar-brand" href="#" style={{ textDecoration: "none" }}>
            <img
              src="poems-by-olwethu/src/assets/poetry-art.jpg"
              alt=""
              className="img-fluid"
              style={{
                width: "35px",
                height: "30px",
                borderRadius: "50%",
                border: "1px solid black",
              }}
            />
          </a>
          <p className="nav-item text-warning my-2 ">Our Poems SA</p>
        </div>
      </nav>
    </header>
  );
};

export default Header;
