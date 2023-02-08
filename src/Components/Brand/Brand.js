import React from "react";
import { Container } from "react-bootstrap";
import { BsApple } from "react-icons/bs";
import { SiSamsung, SiHuawei, SiAsus, SiNokia } from "react-icons/si";
import "./Brand.css";
const Brand = () => {
  return (
    <Container>
      <div className="brand-box">
        <h1>
          <BsApple />
        </h1>
        <h1>
          <SiSamsung />
        </h1>
        <h1>
          <SiHuawei />
        </h1>
        <h1>
          <SiAsus />
        </h1>
        <h1>
          <SiNokia />
        </h1>
      </div>
    </Container>
  );
};

export default Brand;
