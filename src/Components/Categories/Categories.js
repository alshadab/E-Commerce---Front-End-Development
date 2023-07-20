import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

import "./Categories.css";

const Categories = () => {
  const CategoryData = [
    {
      title: "Smartphones",
      image: "https://i.dummyjson.com/data/products/2/thumbnail.jpg",
    },
    {
      title: "Laptops",
      image: "https://i.dummyjson.com/data/products/6/thumbnail.png",
    },
    {
      title: "Fragrances",
      image: "https://i.dummyjson.com/data/products/11/thumbnail.jpg",
    },
    {
      title: "Skincare",
      image: "https://i.dummyjson.com/data/products/16/thumbnail.jpg",
    },
    {
      title: "Groceries",
      image: "https://i.dummyjson.com/data/products/23/thumbnail.jpg",
    },
    {
      title: "Home-decoration",
      image: "https://i.dummyjson.com/data/products/26/thumbnail.jpg",
    },
  ];

  return (
    <Container>
      <h1 className="title">Categories</h1>

      <Row className="all">
        {CategoryData.map((category) => (
          <Col md={4} lg={3}>
            <div className="category">
              <Card className="cate" style={{ width: "15rem" }}>
                <Card.Img
                  variant="top"
                  style={{ height: "180px" }}
                  src={category.image}
                />
                <Card.Body>
                  <Card.Title>{category.title}</Card.Title>
                  <Card.Text></Card.Text>
                  <Link to={`/categoryProducts/${category.title}`}>
                    <Button className="category-button-products">
                      Show Products
                    </Button>
                  </Link>
                </Card.Body>
              </Card>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Categories;
