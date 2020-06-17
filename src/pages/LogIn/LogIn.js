import React, { useState } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { Button, Form } from "react-bootstrap";
import styles from "./LogIn.module.css";

const LoginForm = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { strings } = props;

  const handleFormChange = (e) => {
    if (e.target.name === "email") {
      setEmail(e.target.value);
    }
    if (e.target.name === "password") {
      setPassword(e.target.value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    var bodyData = {
      Email: email,
      Password: password,
    };
    fetch("http://localhost:8080/v1/login", {
      method: "POST",
      body: JSON.stringify(bodyData),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        localStorage.setItem("user", JSON.stringify(data));
        props.LogIn();
      });
  };

  if (!props.isLoggedIn) {
    return (
      <div className={styles.main}>
        <h2>{strings.LogIn}</h2>
        <Form
          onChange={handleFormChange}
          controlid="formBasicEmail"
          style={{ width: 400, marginTop: 0 }}
          className={styles.main}
        >
          <Form.Group className="col-xs-2">
            <Form.Label>{strings.email}</Form.Label>
            <Form.Control
              type="text"
              name="email"
              placeholder="type in your email"
              required
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2, 4}$"
              className="input-sm"
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>{strings.Password}</Form.Label>
            <Form.Control
              pattern=""
              type="password"
              name="password"
              placeholder="enter your password"
              required
              pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
            />
          </Form.Group>
          <Button type="submit" className="primary" onClick={handleSubmit}>
            {strings.LogIn}
          </Button>
        </Form>
      </div>
    );
  } else {
    return <Redirect to={{ pathname: "/" }}></Redirect>;
  }
};

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.isLoggedIn,
  };
};

const dispatchPropsToState = (dispatch) => {
  return {
    LogIn: () => {
      dispatch({ type: "LOG_IN" });
    },
  };
};

export default connect(mapStateToProps, dispatchPropsToState)(LoginForm);
