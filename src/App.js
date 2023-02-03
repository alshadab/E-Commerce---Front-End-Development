import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "./Components/About/About";

import Home from "./Components/Home/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import NavBar from "./Components/Navbar/Navbar";

import SingleProduct from "./Components/SingleProduct/singleProduct";
import Cart from "./Components/Cart/Cart";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route path="/singleProduct/:id" element={<SingleProduct />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </>
  );
}

export default App;
