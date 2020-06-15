import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import styles from "../LogIn/LogIn.module.css";

const RegistrationForm = ({ strings }) => {
  const [firstName, setNickname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [sname, setSName] = useState("");

  const resetStates = () => {
    setPassword("");
    setEmail("");
    setNickname("");
    setConfirmPassword("");
    setPhone("");
  };

  const handleChange = (e) => {
    if (e.target.name === "nickname") {
      setNickname(e.target.value);
    }
    if (e.target.name === "sname") {
      setSName(e.target.value);
    }
    if (e.target.name === "email") {
      setEmail(e.target.value);
    }
    if (e.target.name === "password") {
      setPassword(e.target.value);
    }
    if (e.target.name === "confirm-password") {
      setConfirmPassword(e.target.value);
    }
    if (e.target.name === "phone") {
      setPhone(e.target.value);
    }
  };

  const createPeristeredUser = () => {
    if (password === confirmPassword) {
      return {
        firstName,
        email,
        password,
        confirmPassword,
        phone,
        secondName: sname,
      };
    } else {
      alert("Passwords are not the same");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    e.target.reset();
    fetch("http://localhost:8080/v1/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(createPeristeredUser()),
    });
    resetStates();
  };

  return (
    <div
      onSubmit={handleSubmit}
      onChange={handleChange}
      className={styles.main}
    >
      <h2>{strings.signUpp}</h2>
      <Form style={{ width: 400, marginTop: 0 }} className={styles.main}>
        <Form.Group>
          <Form.Label>{strings.userName}</Form.Label>
          <Form.Control
            type="text"
            name="nickname"
            placeholder="type in name"
          ></Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label>{strings.sname}</Form.Label>
          <Form.Control
            type="text"
            name="sname"
            placeholder="type in second name"
          ></Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label>{strings.userPhone}</Form.Label>
          <Form.Control
            type="text"
            name="phone"
            placeholder="type in number"
          ></Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label>{strings.email}</Form.Label>
          <Form.Control
            type="text"
            name="email"
            placeholder="type in email"
            required
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2, 4}$"
          ></Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label>{strings.Password}</Form.Label>
          <Form.Control
            type="password"
            name="password"
            placeholder="type in password"
            required
            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
          ></Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label>{strings.cPassword}</Form.Label>
          <Form.Control
            type="password"
            name="confirm-password"
            placeholder="type in password one more time"
            required
            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
          ></Form.Control>
        </Form.Group>
        <Form.Group>
          <Button
            type="submit"
            className="promary"
            inverted
            outlined
            primary
            size="medium"
          >
            {strings.signUp}
          </Button>
        </Form.Group>
      </Form>
    </div>
  );
};

export default RegistrationForm;
