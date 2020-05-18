import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import styles from "./Header.module.css";
import { Redirect } from "react-router-dom";

const Header = (props) => {
  const [isRedirect, setIsRedirect] = useState(false);

  const handleRedirect = () => {
    localStorage.clear();
    setIsRedirect(!isRedirect);
  };

  if (isRedirect) {
    return <Redirect to={{ pathname: "/login" }}></Redirect>;
  } else {
    return (
      <div className={styles.header}>
        <NavLink to="/">Home Page</NavLink>
        <div
          className={styles["header-right"]}
          style={{ display: !props.isLoggedIn ? "block" : "none" }}
        >
          <NavLink to="/guides">Guides</NavLink>
        </div>
        <div
          className={styles["header-right"]}
          style={{ display: !props.isLoggedIn ? "block" : "none" }}
        >
          <NavLink to="/profile">Profile</NavLink>
        </div>
        <div
          className={styles["header-right"]}
          style={{ display: props.isLoggedIn ? "block" : "none" }}
        >
          <NavLink to="/login">Log In </NavLink>
        </div>
        <div
          className={styles["header-right"]}
          style={{ display: props.isLoggedIn ? "block" : "none" }}
        >
          <NavLink to="/registration">Sign Up </NavLink>
        </div>
        <div
          className={styles["header-right"]}
          style={{ display: !props.isLoggedIn ? "block" : "none" }}
          onClick={handleRedirect}
        >
          <NavLink to="/registration">Log Out </NavLink>
        </div>
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.isLoggedIn,
  };
};

export default connect(mapStateToProps)(Header);
