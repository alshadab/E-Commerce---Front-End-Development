import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Arival.css";

const Arival = () => {
  const bg1 =
    "https://images.pexels.com/photos/691640/pexels-photo-691640.jpeg";

  const bg2 =
    "https://images.pexels.com/photos/5249311/pexels-photo-5249311.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";

  return (
    <Container>
      <Row className="content">
        <Col lg={6} md={12} sm={12}>
          <div className="box-cart bg-set">
            <img src={bg1} alt="cart-img" />
            <div className="box-info">
              <p>New Wearable Gadget</p>
              <h3>
                Round Silver-colored
                <br />
                Analog Watch
              </h3>
              <div className="btn-info">
                <Link to="/products">
                  <Button
                    style={{
                      backgroundColor: "#aed425",
                      border: "none",
                      color: "black",
                    }}
                  >
                    See Products
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </Col>
        <Col lg={6} md={12} sm={12}>
          <div className="box-cart bg-set2">
            <img src={bg2} alt="cart-img" />
            <div className="box-info">
              <p>FREE SHIPPING AVAILABLE</p>
              <h3>
                Smart Home Gadget with
                <br />
                50% Discount
              </h3>
              <div className="btn-info">
                <Link to="/products">
                  <Button
                    style={{
                      backgroundColor: "#aed425",
                      border: "none",
                      color: "black",
                    }}
                  >
                    See Products
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Arival;
