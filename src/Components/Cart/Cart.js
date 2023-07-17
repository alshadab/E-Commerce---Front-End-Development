import React from "react";
import { ContextProvider } from "../Context/GetContext";
import { AiFillDelete } from "react-icons/ai";
import "./Cart.css";
import { Col, Container, Row, Spinner } from "react-bootstrap";

const Cart = () => {
  const { cartProducts, DeleteData, addCartData, isLoading, MinusCartData } =
    ContextProvider();
  console.log(cartProducts);

  const discountPriceCalculate = (element) => {
    const price =
      element.price -
      Math.round((element.discountPercentage * element.price) / 100);
    return price;
  };

  if (cartProducts?.length === 0) {
    return (
      <h1 style={{ textAlign: "center", marginTop: "30px" }}>Cart is empty</h1>
    );
  }
  if (isLoading) {
    return (
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <Spinner animation="grow" variant="success" />
      </div>
    );
  }
  return (
    <Container>
      <Row>
        <Col md={8}>
          <div className="main-cart-div">
            <h1 style={{ marginTop: "30px" }}>Cart</h1>
            <div className="info-cart-div">
              {cartProducts.map((elem) => (
                <div className="cart-div">
                  <div className="image-div">
                    <img src={elem.thumbnail} alt={elem.title} />
                    <div>
                      <p>{elem.title}</p>
                      <p>In Stock: {elem.stock}</p>
                      <p>Brand: {elem.brand}</p>
                    </div>
                  </div>
                  <div className="quantity-div">
                    <p>
                      <button
                        onClick={() => MinusCartData(elem)}
                        disabled={elem.qty < 2 ? true : false}
                      >
                        <h4>-</h4>
                      </button>
                    </p>
                    <h5>{elem.qty}</h5>

                    <p>
                      <button
                        onClick={() => addCartData(elem)}
                        disabled={elem.stock < 1 ? true : false}
                      >
                        <h4>+</h4>
                      </button>
                    </p>
                  </div>
                  <div className="price-div">
                    ${discountPriceCalculate(elem) * elem.qty}
                  </div>
                  <div className="delete-div">
                    <AiFillDelete
                      onClick={() => DeleteData(elem.id, elem.qty)}
                      style={{
                        fontSize: "30px",
                        color: "red",
                        cursor: "pointer",
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Col>
        <Col md={4}></Col>
      </Row>
    </Container>
  );
};

export default Cart;
