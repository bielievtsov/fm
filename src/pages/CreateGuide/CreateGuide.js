import React, { useState } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import styles from "./CreateGuide.module.css";
import { Button, Form } from "react-bootstrap";

const CreateGuide = ({ strings }) => {
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

  const userId = localStorage.getItem("user").Id;

  const handleCreation = () => {
    var bodyData = {
      CreationDate: new Date().toJSON(),
      UserId: {
        Id: userId,
      },
      Name: name,
      Description: description,
    };
    fetch("http://localhost:8080/v1/plans/", {
      method: "POST",
      body: JSON.stringify(bodyData),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => setIsRedirect(!isRedirect));
  };

  if (isRedirect) {
    return <Redirect to={{ pathname: "/guides" }}></Redirect>;
  } else {
    return (
      <div onChange={handleChange} className={styles.main}>
        <Form>
          <h2>Guide creating</h2>
          <Form.Group>
            <Form.Label> {strings.Description}</Form.Label>
            <Form.Control name="desc"></Form.Control>
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

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

export default connect(mapStateToProps)(CreateGuide);
