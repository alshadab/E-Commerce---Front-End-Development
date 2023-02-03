import React from "react";
import { Container } from "react-bootstrap";
import { MdProductionQuantityLimits } from "react-icons/md";
import { NavLink } from "react-router-dom";
import "./Header.css";
const Header = () => {
  return (
    <Container>
      <div className="main-div">
        <div className="hero-text">
          <p>THE NEXT GENERATION</p>
          <h1>
            Innovation That
            <br />
            Changed The World
          </h1>
          <p>
            Get instant alerts for anyone who approaches,
            <br /> even if they don’t press the new accessories.
          </p>
          <div className="products">
            <NavLink exact to="/products">
              <MdProductionQuantityLimits /> See All Products
            </NavLink>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Header;
