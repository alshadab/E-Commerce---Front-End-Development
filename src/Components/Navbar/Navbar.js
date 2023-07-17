import React, { useState } from "react";
import "./Navbar.css";
import { BsCart4 } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import { ContextProvider } from "../Context/GetContext";

function NavBar() {
  const [click, setClick] = useState(false);
  const { quantity } = ContextProvider();

  const handleClick = () => setClick(!click);
  return (
    <>
      <nav className="navbar ">
        <div className="navbar-container container">
          <div className="brand">
            <NavLink exact to="/" className="nav-logo">
              Arnab
            </NavLink>
          </div>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                exact
                to="/"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/products"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Products
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/about"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/blog"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Blog
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/contact"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Contact
              </NavLink>
            </li>
            <li>
              <div className="login-button-cart ">
                <NavLink
                  exact
                  to="/login"
                  activeClassName="active"
                  className="nav-links"
                  onClick={handleClick}
                >
                  Login
                </NavLink>
                <NavLink
                  exact
                  to="/contact"
                  activeClassName="active"
                  className="nav-links"
                  onClick={handleClick}
                >
                  Register
                </NavLink>
                <NavLink
                  exact
                  to="/cart"
                  activeClassName="active"
                  className="nav-links "
                  onClick={handleClick}
                >
                  <div className="cart">
                    Cart
                    <div className="cart-icon">
                      <BsCart4 />
                      <p>{quantity}</p>
                    </div>
                  </div>
                </NavLink>
              </div>
            </li>
          </ul>

          <div className="nav-icon" onClick={handleClick}>
            {click ? <IoMdClose /> : <GiHamburgerMenu />}
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
