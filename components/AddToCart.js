"use client";

import React from "react";

const AddToCart = ({ name }) => {
  return (
    <button
      className="btn btn-secondary m-4"
      onClick={() => {
        alert(`Added ${name} to cart`);
      }}
    >
      Add to Cart
    </button>
  );
};

export default AddToCart;
