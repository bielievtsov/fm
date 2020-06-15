import React from "react";

const ProductItem = ({ product, filter, strings }) => {
  const handleDelete = () => {
    console.log(product);
    fetch("http://localhost:8080/v1/products/" + product.Id, {
      method: "DELETE",
    }).then(() => {
      filter(product.Id);
    });
  };

  return (
    <div>
      <div>
        <div>
          {" "}
          {strings.productName} {product.Name}
        </div>
        <div>
          {" "}
          {strings.productDescription} {product.Description || "no Description"}
        </div>
        <div>
          {" "}
          {strings.productQuantity} {product.Quantity}
        </div>
        <div>
          {" "}
          {strings.productPrice} {product.Price}
        </div>
        <div>
          {" "}
          {strings.productDate} :{" "}
          {new Date(product.Date).getFullYear() +
            " month " +
            new Date(product.Date).getMonth() +
            " day " +
            new Date(product.Date).getDate()}
        </div>
      </div>{" "}
      <div>
        {" "}
        <button onClick={handleDelete}>{strings.Delete}</button>
      </div>
    </div>
  );
};

export default ProductItem;
