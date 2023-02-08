import React from "react";
import Brand from "../Brand/Brand";
import Categories from "../Categories/Categories";
import Header from "../Header/Header";
import Arival from "../NewAraival/Arival";
import Trending from "../Trending/Trending";

const Home = () => {
  return (
    <div>
      <Header />
      <Categories />
      <Trending />
      <Arival />
      <Brand />
    </div>
  );
};

export default Home;
