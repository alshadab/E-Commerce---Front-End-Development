import React from "react";
import { Button, Card, Col, Container, Row, Spinner } from "react-bootstrap";
import { ContextProvider } from "../Context/GetContext";
import Stars from "../Stars/Stars";
import { Link } from "react-router-dom";

const Product = () => {
  const { products, isLoading, addCartData } = ContextProvider();
  if (isLoading) {
    return (
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <Spinner animation="grow" variant="success" />
      </div>
    );
  }
  return (
    <Container className="div-margin">
      <h1 className="title">All Products</h1>

      <Row className="all">
        {products.map((elem) => (
          <Col md={6} lg={4}>
            <div className="category">
              <Card style={{ width: "19rem" }}>
                <Card.Img
                  style={{ height: "180px" }}
                  variant="top"
                  src={elem.thumbnail}
                />
                <Card.Body>
                  <Card.Title>{elem.title.toUpperCase()}</Card.Title>
                  <Card.Text style={{ opacity: "0.5" }}>
                    {elem.category.toUpperCase()}
                  </Card.Text>
                  <Card.Text style={{ opacity: "0.5" }}>
                    In Stock {elem.stock}
                  </Card.Text>

                  <p style={{ color: "red" }}>
                    Discount: $
                    {elem?.price -
                      Math.round(
                        (elem?.discountPercentage * elem?.price) / 100
                      )}
                  </p>

                  <p>
                    <del>${elem.price}</del>{" "}
                  </p>
                  <Stars stars={elem.rating} />

                  <Button
                    onClick={() => addCartData(elem)}
                    disabled={elem.stock < 1 ? true : false}
                    className="card-product-button"
                  >
                    Add to cart
                  </Button>

                  <Link to={`/singleProduct/${elem.id}`}>
                    <Button className="card-product-button">
                      Show Details
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

export default Product;
