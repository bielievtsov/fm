import React, { useState } from "react";
import queryString from "query-string";
import { withRouter, Redirect } from "react-router-dom";
import { Button, Form } from "react-bootstrap";
import styles from "../CreateGuide/CreateGuide.module.css";

const CreateProduct = (props) => {
  const [description, setDescription] = useState("");
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [price, setPrice] = useState(0);
  const [isRedirect, setIsRedirect] = useState(false);

  const { strings } = props;

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
    return <Redirect to={{ pathname: "/profile/" }}></Redirect>;
  } else {
    return (
      <div onChange={handleChange} className={styles.main}>
        <Form>
          <h2>Product creating</h2>
          <Form.Group>
            <Form.Label> {strings.Description}</Form.Label>
            <Form.Control name="desc"></Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label> {strings.Quantity}</Form.Label>
            <Form.Control name="Quantity"></Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label> {strings.Price}</Form.Label>
            <Form.Control name="Price"></Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label> {strings.Name}</Form.Label>
            <Form.Control name="name"></Form.Control>
          </Form.Group>
          <Button onClick={handleCreation}>{strings.submit}</Button>
        </Form>
      </div>
    );
  }
};

export default withRouter(CreateProduct);
