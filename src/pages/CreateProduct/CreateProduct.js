import React, { useState } from "react";

const CreateProduct = () => {
  const [description, setDescription] = useState("");
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [price, setPrice] = useState(0);

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
    const crD = new Date().toString();
    console.log(name, description);
    fetch("http://localhost:8080/v1/products/", {
      method: "POST",
      body: {
        FarmId: {
          Id: 3,
        },
        PlanId: { Id: 1 },
        Name: name,
        Description: description,
        Quantity: quantity,
        Price: price,
        Date: "2020-04-27T05:54:37.341966Z",
      },
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => console.log(res));
  };

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
};

export default CreateProduct;
