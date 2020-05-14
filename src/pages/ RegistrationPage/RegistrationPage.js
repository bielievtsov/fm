import React, { useState } from "react";
import styles from "./RegistrationForm.module.css";

const RegistrationForm = () => {
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
    return {
      firstName,
      email,
      password,
      confirmPassword,
      phone,
      secondName: sname,
    };
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
      className={styles.main}
      onSubmit={handleSubmit}
      onChange={handleChange}
    >
      <form>
        <div>
          <label>Name</label>
          <input
            type="text"
            name="nickname"
            placeholder="type in name"
            className="form-control form-control"
          ></input>
        </div>
        <div>
          <label>Second name</label>
          <input
            type="text"
            name="sname"
            placeholder="type in second name"
            className="form-control form-control"
          ></input>
        </div>
        <div>
          <label>Phone number</label>
          <input
            type="text"
            name="phone"
            placeholder="type in number"
            className="form-control form-control"
          ></input>
        </div>
        <div>
          <label>Email</label>
          <input
            type="text"
            name="email"
            placeholder="type in email"
            className="form-control form-control"
          ></input>
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            name="password"
            placeholder="type in password"
            className="form-control form-control"
          ></input>
        </div>
        <div>
          <label>Confirm Password</label>
          <input
            type="password"
            name="confirm-password"
            placeholder="type in password one more time"
            className="form-control form-control"
          ></input>
        </div>
        <div>
          <input
            className={styles.but}
            type="submit"
            className="form-control form-control"
          ></input>
        </div>
      </form>
    </div>
  );
};

export default RegistrationForm;
