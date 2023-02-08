import React from "react";
import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";
import "./Stars.css";
const Stars = ({ stars }) => {
  const ratingStar = Array.from({ length: 5 }, (elem, i) => {
    let number = i + 0.5;

    return (
      <span key={i}>
        {stars >= i + 1 ? (
          <BsStarFill className="icon" />
        ) : stars >= number ? (
          <BsStarHalf className="icon" />
        ) : (
          <BsStar className="icon" />
        )}
      </span>
    );
  });
  return <div>{ratingStar}</div>;
};

export default Stars;
