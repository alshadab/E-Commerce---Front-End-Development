import React from "react";
import Categories from "../Categories/Categories";
import Header from "../Header/Header";
import Trending from "../Trending/Trending";

const Home = () => {
  return (
    <div>
      <Header />
      <Categories />
      <Trending />
    </div>
  );
};

export default Home;
