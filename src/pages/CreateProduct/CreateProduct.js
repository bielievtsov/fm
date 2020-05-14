import React, { useState } from "react";
import queryString from "query-string";
import { withRouter, Redirect } from "react-router-dom";

const CreateProduct = (props) => {
  const [description, setDescription] = useState("");
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [price, setPrice] = useState(0);
  const [isRedirect, setIsRedirect] = useState(false);

  queryString.parse(props.location.search);

  const handleChange = (e) => {
    if ((e.target.name = "desc")) {
      setDescription(e.target.value);
    }
    if ((e.target.name = "name")) {
      setName(e.target.value);
    }
    if ((e.target.name = "Quantity")) {
      setQuantity(e.target.value);
    }
    if ((e.target.name = "Price")) {
      setPrice(e.target.value);
    }
  };

  const handleCreation = () => {
    console.log(quantity, price);
    var bodyData = {
      FarmId: {
        Id: 4,
      },
      PlanId: { Id: 1 },
      Name: name,
      Description: description,
      Quantity: +quantity,
      Price: +price,
      Date: new Date().toJSON(),
    };
    console.log(bodyData);
    fetch("http://localhost:8080/v1/products/", {
      method: "POST",
      body: JSON.stringify(bodyData),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => setIsRedirect(!isRedirect));
  };

  if (isRedirect) {
    return <Redirect to={{ pathname: "/" }}></Redirect>;
  } else {
    return (
      <div onChange={handleChange}>
        <div>
          <div> description</div>
          <input name="desc"></input>
        </div>
        <div>
          <div> Quantity</div>
          <input name="Quantity"></input>
        </div>
        <div>
          <div> Price</div>
          <input name="Price"></input>
        </div>
        <div>
          <div> name</div>
          <input name="name"></input>
        </div>
        <button onClick={handleCreation}>Submit</button>
      </div>
    );
  }
};

export default withRouter(CreateProduct);
