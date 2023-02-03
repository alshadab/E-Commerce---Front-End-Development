import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const SingleProduct = () => {
  const [singleData, setSingleData] = useState({});
  const [isLoading, setisLoading] = useState(false);

  const { id } = useParams();
  const API = `https://dummyjson.com/products/${id}`;

  const getSingleProduct = async (url) => {
    setisLoading(true);
    try {
      const res = await axios.get(url);
      const data = await res.data;

      setSingleData(data);
      setisLoading(false);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getSingleProduct(API);
  }, []);

  return (
    <div>
      {isLoading ? <p>Title: Loading...</p> : <p>Title: {singleData.title}</p>}
    </div>
  );
};

export default SingleProduct;
