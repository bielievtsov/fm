import React, { useState } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { Button, Form } from "react-bootstrap";
import styles from "./CreateFarm.module.css";

const CreateFarm = ({ strings }) => {
  const [description, setDescription] = useState("");
  const [name, setName] = useState("");
  const [isRedirect, setIsRedirect] = useState(false);

  const handleChange = (e) => {
    if ((e.target.name = "desc")) {
      setDescription(e.target.value);
    }
    if ((e.target.name = "name")) {
      setName(e.target.value);
    }
  };

  const handleCreation = () => {
    var bodyData = {
      CreationDate: new Date().toJSON(),
      UserId: {
        Id: 1,
      },
      Name: name,
      Description: description,
    };
    fetch("http://localhost:8080/v1/farms/", {
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
      <div onChange={handleChange} className={styles.main}>
        <Form>
          <h2>Farm creating</h2>
          <Form.Group>
            <Form.Label>{strings.farmDesc}</Form.Label>
            <Form.Control name="desc"></Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label>{strings.farmName}</Form.Label>
            <Form.Control name="name"></Form.Control>
          </Form.Group>
          <Button onClick={handleCreation}>{strings.submit}</Button>
        </Form>
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

export default connect(mapStateToProps)(CreateFarm);
