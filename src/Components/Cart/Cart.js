import React, { useState } from "react";
import { ContextProvider } from "../Context/GetContext";
import { AiFillDelete } from "react-icons/ai";
import Modal from "react-bootstrap/Modal";
import "./Cart.css";
import { Button, Col, Container, Row, Spinner } from "react-bootstrap";
import order from "../images/order.png";
const Cart = () => {
  function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <img
            src={order}
            alt="order"
            style={{ marginLeft: "25%", marginBottom: "30px" }}
          />
          <h4 align="center">Your Order is completed</h4>
          <p align="center">
            You will be receiving a confirmation email with order details.
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide} variant="warning">
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }

  const [modalShow, setModalShow] = useState(false);
  const { cartProducts, DeleteData, addCartData, isLoading, MinusCartData } =
    ContextProvider();

  const totalPrice = cartProducts.reduce((prev, next) => {
    return prev + next.qty * next.price;
  }, 0);
  const discountPrice = cartProducts.reduce((prev, next) => {
    return (
      prev + next.qty * Math.round((next.discountPercentage * next.price) / 100)
    );
  }, 0);

  const grandTotal = totalPrice - discountPrice;

  // const discountPriceCalculate = (element) => {
  //   const price =
  //     element.price -
  //     Math.round((element.discountPercentage * element.price) / 100);
  //   return price;
  // };

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
                  <div className="price-div">${elem.price * elem.qty}</div>
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
        <Col md={4}>
          <div className="checkout-div">
            <div className="check-div">
              <h4 style={{ color: "rgb(116, 110, 110)" }}>Sub Total</h4>
              <h4>${totalPrice}</h4>
            </div>
            <div
              className="check-div"
              style={{ borderBottom: "1px solid rgb(227, 223, 223)" }}
            >
              <h4 style={{ color: "rgb(116, 110, 110)" }}>Discount</h4>
              <h4>${discountPrice}</h4>
            </div>
            <div className="check-div">
              <h3>Grand Total</h3>
              <h3>${grandTotal}</h3>
            </div>
            <Button className="check-button" onClick={() => setModalShow(true)}>
              Checkout Now
            </Button>
            <MyVerticallyCenteredModal
              show={modalShow}
              onHide={() => setModalShow(false)}
            />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Cart;
