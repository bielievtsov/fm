import React from "react";
import styles from "./ProductItem.module.css";

const ProductItem = ({ product, filter }) => {
  console.log(product);
  const handleDelete = () => {
    console.log(product);
    fetch("http://localhost:8080/v1/products/" + product.Id, {
      method: "DELETE",
    }).then(() => {
      filter(product.Id);
    });
  };

  return (
    <div className={styles.main}>
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
      <div>
        {" "}
        <button onClick={handleDelete}>Delete</button>
      </div>
    </div>
  );
};

export default ProductItem;
