import React, { useEffect, useState } from "react";
import {
  Button,
  Card,
  Col,
  Container,
  NavLink,
  Row,
  Spinner,
} from "react-bootstrap";
import { Link, Navigate } from "react-router-dom";
import { ContextProvider } from "../Context/GetContext";
import "./Categories.css";

const Categories = () => {
  const { isLoading, products, categoryProducts, getUniqueData } =
    ContextProvider();
  useEffect(() => {
    getUniqueData("category");
  }, []);

  if (isLoading) {
    return (
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <Spinner animation="grow" variant="success" />
      </div>
    );
  }

  return (
    <Container>
      <h1 className="title">Categories</h1>

      <Row className="all">
        <Col md={4} lg={2}>
          <div className="category">
            <Card className="cate" style={{ width: "13rem" }}>
              <Card.Img
                variant="top"
                style={{ height: "180px" }}
                src="https://i.dummyjson.com/data/products/2/thumbnail.jpg"
              />
              <Card.Body>
                <Card.Title>Smartphones</Card.Title>
                <Card.Text></Card.Text>
                <Link to="/about">
                  <Button
                    style={{
                      backgroundColor: "#aed425",
                      border: "none",
                      color: "black",
                    }}
                  >
                    Show Products
                  </Button>
                </Link>
              </Card.Body>
            </Card>
          </div>
        </Col>
        <Col md={4} lg={2}>
          <div className="category">
            <Card style={{ width: "13rem" }}>
              <Card.Img
                variant="top"
                style={{ height: "180px" }}
                src="https://i.dummyjson.com/data/products/6/thumbnail.png"
              />
              <Card.Body>
                <Card.Title>Laptops</Card.Title>
                <Card.Text></Card.Text>
                <Link to="/about">
                  <Button
                    style={{
                      backgroundColor: "#aed425",
                      border: "none",
                      color: "black",
                    }}
                  >
                    Show Products
                  </Button>
                </Link>
              </Card.Body>
            </Card>
          </div>
        </Col>
        <Col md={4} lg={2}>
          <div className="category">
            <Card style={{ width: "13rem" }}>
              <Card.Img
                variant="top"
                style={{ height: "180px" }}
                src="https://i.dummyjson.com/data/products/11/thumbnail.jpg"
              />
              <Card.Body>
                <Card.Title>Fragrances</Card.Title>
                <Card.Text></Card.Text>
                <Link to="/about">
                  <Button
                    style={{
                      backgroundColor: "#aed425",
                      border: "none",
                      color: "black",
                    }}
                  >
                    Show Products
                  </Button>
                </Link>
              </Card.Body>
            </Card>
          </div>
        </Col>
        <Col md={4} lg={2}>
          <div className="category">
            <Card style={{ width: "13rem" }}>
              <Card.Img
                variant="top"
                style={{ height: "180px" }}
                src="https://i.dummyjson.com/data/products/16/thumbnail.jpg"
              />
              <Card.Body>
                <Card.Title>Skincare</Card.Title>
                <Card.Text></Card.Text>
                <Link to="/about">
                  <Button
                    style={{
                      backgroundColor: "#aed425",
                      border: "none",
                      color: "black",
                    }}
                  >
                    Show Products
                  </Button>
                </Link>
              </Card.Body>
            </Card>
          </div>
        </Col>
        <Col md={4} lg={2}>
          <div className="category">
            <Card style={{ width: "13rem" }}>
              <Card.Img
                variant="top"
                style={{ height: "180px" }}
                src="https://i.dummyjson.com/data/products/23/thumbnail.jpg"
              />
              <Card.Body>
                <Card.Title>Groceries</Card.Title>
                <Card.Text></Card.Text>
                <Link to="/about">
                  <Button
                    style={{
                      backgroundColor: "#aed425",
                      border: "none",
                      color: "black",
                    }}
                  >
                    Show Products
                  </Button>
                </Link>
              </Card.Body>
            </Card>
          </div>
        </Col>
        <Col md={4} lg={2}>
          <div className="category">
            <Card style={{ width: "13rem" }}>
              <Card.Img
                variant="top"
                style={{ height: "180px" }}
                src="https://i.dummyjson.com/data/products/26/thumbnail.jpg"
              />
              <Card.Body>
                <Card.Title>Home-decoration</Card.Title>
                <Card.Text></Card.Text>
                <Link to="/about">
                  <Button
                    style={{
                      backgroundColor: "#aed425",
                      border: "none",
                      color: "black",
                    }}
                  >
                    Show Products
                  </Button>
                </Link>
              </Card.Body>
            </Card>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Categories;
