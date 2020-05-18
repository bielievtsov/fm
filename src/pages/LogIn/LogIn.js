import React, { useState } from "react";
import { connect } from "react-redux";
import styles from "../ RegistrationPage/RegistrationForm.module.css";
import { Redirect } from "react-router-dom";

const LoginForm = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
        <form onChange={handleFormChange}>
          <div>
            <label>Email</label>
            <input
              type="text"
              name="email"
              placeholder="type in your email"
              className="form-control form-control"
              required
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2, 4}$"
            />
          </div>
          <div>
            <label>Passowrd</label>
            <input
              pattern=""
              type="password"
              name="password"
              placeholder="enter your password"
              className="form-control form-control"
              required
              pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
            />
          </div>
          <div className={styles.but}>
            <input
              type="submit"
              className="form-control form-control"
              onClick={handleSubmit}
            />
          </div>
        </form>
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
