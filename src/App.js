import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "./Components/About/About";

import Home from "./Components/Home/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import NavBar from "./Components/Navbar/Navbar";

import SingleProduct from "./Components/SingleProduct/singleProduct";
import Cart from "./Components/Cart/Cart";
import Blog from "./Components/Blog/Blog";
import Footer from "./Components/Footer/Footer";
import Product from "./Components/Categories/Product";
import CategoryProducts from "./Components/Categories/CategoryProducts";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route path="/singleProduct/:id" element={<SingleProduct />} />
        <Route path="/categoryProducts/:title" element={<CategoryProducts />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/products" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
