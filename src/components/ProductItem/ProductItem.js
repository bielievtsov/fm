import React from "react";

const ProductItem = ({ product }) => {
  console.log(product);

  return (
    <div>
      <div> Name {product.Name}</div>
      <div> Description {product.Description || "no Description"}</div>
      <div> Quantity {product.Quantity}</div>
      <div> Price {product.Price}</div>
      <div>
        {" "}
        Date of product creation :{" "}
        {new Date(product.Date).getFullYear() +
          " month " +
          new Date(product.Date).getMonth() +
          " day " +
          new Date(product.Date).getDate()}
      </div>
    </div>
  );
};

export default ProductItem;
