import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { FaShippingFast, FaCcPaypal, FaCcMastercard } from "react-icons/fa";
import { TbTruckReturn } from "react-icons/tb";
import { BiSupport } from "react-icons/bi";
import { RiSecurePaymentLine, RiVisaFill } from "react-icons/ri";
import "./Footer.css";
const Footer = () => {
  const data = [
    {
      logo: <FaShippingFast />,
      title: "Free Shipping Order $60",
      details: "Delivery Moves So Quickly",
    },
    {
      logo: <TbTruckReturn />,
      title: "Easy & Fast Returns",
      details: "30 Days Free Return Policy",
    },
    {
      logo: <BiSupport />,
      title: "24/7 Customer Support",
      details: "Online Help By Our Agents",
    },
    {
      logo: <RiSecurePaymentLine />,
      title: "100% Secure Payments",
      details: "PayPal / MasterCard / Visa",
    },
  ];
  return (
    <footer>
      <Container>
        <div className="first-para">
          <Row>
            {data.map((elem, index) => {
              return (
                <Col lg={3} md={6}>
                  <div id={index} className="info">
                    <h1>{elem.logo}</h1>
                    <div className="info-2">
                      <p>{elem.title}</p>
                      <p className="p-tag">{elem.details}</p>
                    </div>
                  </div>
                </Col>
              );
            })}
          </Row>
        </div>

        <div className="second-para">
          <Row>
            <Col md={4}>
              <h3>Company</h3>
              <div className="details">
                <p>About Us</p>
                <p>Carriers</p>
                <p>Blog</p>
              </div>
            </Col>
            <Col md={4}>
              <h3>Shop</h3>
              <div className="details">
                <p>Appliances</p>
                <p>Gadgets</p>
                <p>Wearable</p>
              </div>
            </Col>
            <Col md={4}>
              <h3>Support</h3>
              <div className="details">
                <p>Contact US</p>
                <p>Returns</p>
                <p>Frequently Asked Questions</p>
                <p>Privacy</p>
              </div>
            </Col>
          </Row>
        </div>
        <div className="last-para">
          <div className="last-para-info">
            <div className="information">
              <p>
                Phone: <span className="info-color">+880-1832296784</span>
              </p>
              <p>
                Email:{" "}
                <span className="info-color">alshadabarnab@gmail.com</span>{" "}
              </p>
            </div>
            <div className="copyright">
              <p>
                All rights reserved by Al Shadab Arnab ©{" "}
                {new Date().getFullYear()}
              </p>
            </div>
          </div>
          <div className="payment-info">
            <h1>
              <FaCcMastercard />
            </h1>
            <h1>
              <FaCcPaypal />
            </h1>
            <h1>
              <RiVisaFill />
            </h1>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
