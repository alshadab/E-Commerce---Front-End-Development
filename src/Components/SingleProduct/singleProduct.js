import React, { useEffect, useState } from "react";
import { Col, Container, Row, Spinner } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Stars from "../Stars/Stars";
import "./singleProduct.css";
import { ContextProvider } from "../Context/GetContext";
const SingleProduct = () => {
  const { isLoading, addCartData, singleData, getSingleData } =
    ContextProvider();

  const { id } = useParams();
  const API = `https://dummyjson.com/products/${id}`;

  useEffect(() => {
    getSingleData(API);
  }, [API]);

  const thumbnail = singleData?.thumbnail;
  const [mainImage, setMainImage] = useState(thumbnail);

  const titleImage = mainImage === undefined ? thumbnail : mainImage;

  if (isLoading) {
    return (
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <Spinner animation="grow" variant="success" />
      </div>
    );
  }
  const discountPrice =
    singleData?.price -
    Math.round((singleData?.discountPercentage * singleData?.price) / 100);

  return (
    <Container>
      <Row>
        <Col md={5} lg={5} sm={12}>
          <div className="main-image-div">
            <div className="title-image-div">
              <img src={titleImage} alt="title" />
            </div>
            <div className="thumbnail-main-div">
              {singleData?.images?.map((elm) => (
                <div
                  className="thumbnail-image-div"
                  onClick={() => setMainImage(elm)}
                >
                  <img src={elm} alt="thumbnail" />
                </div>
              ))}
            </div>
          </div>
        </Col>
        <Col md={7} lg={7} sm={12}>
          <div className="info-div">
            <h1 style={{ fontWeight: "bold" }}>{singleData?.title}</h1>
            <Stars stars={singleData?.rating} />
            <div className="main-size-info">
              {/* <h5>Choose Size:</h5>
               <div className="main-size-div">
                <button className="butt">S</button>
                <button className="butt">M</button>
                <button className="butt">L</button>
                <button className="butt">XL</button>
              </div>  */}
              <h5 className="font-style">About Item</h5>
              <div className="item-div">
                <p>Brand: {singleData?.brand}</p>
                <p>Category: {singleData?.category}</p>
                <p>In Stock: {singleData?.stock} </p>
              </div>
              <h5 className="font-style">Description:</h5>
              <p style={{ color: "rgb(121, 121, 121)" }}>
                {singleData?.description}
              </p>
              <h4 className="font-style">
                <del>Price: ${singleData?.price}</del>
              </h4>
              <h4 style={{ color: "red" }}>Discount Price: {discountPrice}</h4>

              <button
                disabled={singleData.stock < 1 ? true : false}
                onClick={() => addCartData(singleData)}
                className="button-cart"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default SingleProduct;
